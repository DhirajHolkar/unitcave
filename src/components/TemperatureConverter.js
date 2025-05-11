'use client';

import { useState, useEffect } from 'react';
import {
  convertTemperature,
  temperatureUnits,
} from '../lib/TemperatureConvert';
import '../styles/Converter.css';

export default function TemperatureConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('fahrenheit');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputValue !== '' && fromUnit && toUnit) {
      const converted = convertTemperature(inputValue, fromUnit, toUnit);
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
            {temperatureUnits.map((unit) => (
              <label key={`from-${unit}`}>
                <input
                  type="radio"
                  name="tempFromUnit"
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
                ? convertTemperature(inputValue, fromUnit, toUnit)
                : ''
            }
            readOnly
          />
          <div className="unit-options">
            {temperatureUnits.map((unit) => (
              <label key={`to-${unit}`}>
                <input
                  type="radio"
                  name="tempToUnit"
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
