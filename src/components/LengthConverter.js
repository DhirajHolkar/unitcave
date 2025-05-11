'use client';

import { useState, useEffect } from 'react';
import { convertLength, lengthUnits, } from '../lib/LengthConvert';
import '../styles/Converter.css';

export default function LengthConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputValue !== '' && fromUnit && toUnit) {
      const converted = convertLength(parseFloat(inputValue), fromUnit, toUnit);
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
            {lengthUnits.map((unit) => (
              <label key={`from-${unit}`}>
                <input
                  type="radio"
                  name="fromUnit"
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
                ? convertLength(parseFloat(inputValue), fromUnit, toUnit)
                : ''
            }
            readOnly
          />
          <div className="unit-options">
            {lengthUnits.map((unit) => (
              <label key={`to-${unit}`}>
                <input
                  type="radio"
                  name="toUnit"
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
