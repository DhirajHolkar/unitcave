'use client';

import { useState, useEffect } from 'react';
import { convertTime, timeUnits } from '../lib/TimeConvert';
import '../styles/Converter.css';

export default function TimeConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('second');
  const [toUnit, setToUnit] = useState('minute');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputValue !== '' && fromUnit && toUnit) {
      const converted = convertTime(parseFloat(inputValue), fromUnit, toUnit);
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
            {timeUnits.map((unit) => (
              <label key={`from-${unit}`}>
                <input
                  type="radio"
                  name="timeFromUnit"
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
                ? convertTime(parseFloat(inputValue), fromUnit, toUnit)
                : ''
            }
            readOnly
          />
          <div className="unit-options">
            {timeUnits.map((unit) => (
              <label key={`to-${unit}`}>
                <input
                  type="radio"
                  name="timeToUnit"
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
