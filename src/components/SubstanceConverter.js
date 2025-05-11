'use client';

import { useState, useEffect } from 'react';
import {
  convertSubstance,
  substanceUnits,
} from '../lib/SubstanceConvert';
import '../styles/Converter.css';

export default function SubstanceConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('mol');
  const [toUnit, setToUnit] = useState('mmol');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputValue !== '' && fromUnit && toUnit) {
      const converted = convertSubstance(inputValue, fromUnit, toUnit);
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
            {substanceUnits.map((unit) => (
              <label key={`from-${unit}`}>
                <input
                  type="radio"
                  name="substanceFrom"
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
                ? convertSubstance(inputValue, fromUnit, toUnit)
                : ''
            }
            readOnly
          />
          <div className="unit-options">
            {substanceUnits.map((unit) => (
              <label key={`to-${unit}`}>
                <input
                  type="radio"
                  name="substanceTo"
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
