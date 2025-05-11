'use client';

import { useState, useEffect } from 'react';
import {
  convertLuminous,
  luminousUnits,
} from '../lib/LuminousConvert';
import '../styles/Converter.css';

export default function LuminousConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('cd');
  const [toUnit, setToUnit] = useState('mcd');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputValue !== '' && fromUnit && toUnit) {
      const converted = convertLuminous(inputValue, fromUnit, toUnit);
      setResult(`${inputValue} ${fromUnit} = ${converted} ${toUnit}`);
    } else {
      setResult('');
    }
  }, [inputValue, fromUnit, toUnit]);

  return (
    <div className="converter">
      <div className="row">
        <div className="column">
          <label>From:</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value"
          />
          <div className="unit-options">
            {luminousUnits.map((unit) => (
              <label key={`from-${unit}`}>
                <input
                  type="radio"
                  name="luminousFrom"
                  value={unit}
                  checked={fromUnit === unit}
                  onChange={() => setFromUnit(unit)}
                />
                {unit}
              </label>
            ))}
          </div>
        </div>

        <div className="column">
          <label>To:</label>
          <input
            type="text"
            value={
              inputValue && fromUnit && toUnit
                ? convertLuminous(inputValue, fromUnit, toUnit)
                : ''
            }
            readOnly
          />
          <div className="unit-options">
            {luminousUnits.map((unit) => (
              <label key={`to-${unit}`}>
                <input
                  type="radio"
                  name="luminousTo"
                  value={unit}
                  checked={toUnit === unit}
                  onChange={() => setToUnit(unit)}
                />
                {unit}
              </label>
            ))}
          </div>
        </div>
      </div>

      {result && <p className="result">{result}</p>}
    </div>
  );
}
