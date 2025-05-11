'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import '../../../styles/onepage.css';
import conversionTable from '@/app/table/ConversionTable';


export default function DynamicConverterPage() {
  const params = useParams();
  const slug = params?.['from-to'] || ''; // e.g., "kilometer-to-meter"

  const [fromUnit, toUnit] = slug.split('-to-');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const convert = () => {
    const factor = conversionTable?.[fromUnit]?.[toUnit];
    if (!factor || isNaN(inputValue)) {
      setOutputValue('Invalid input or units');
      return;
    }
    setOutputValue(parseFloat(inputValue) * factor);
  };

  useEffect(() => {
    if (inputValue !== '') {
      convert();
    }
  }, [inputValue, fromUnit, toUnit]);

  const clearFields = () => {
    setInputValue('');
    setOutputValue('');
  };

  return (
    <div className="container">
      <h2>
        {fromUnit} to {toUnit} Converter
      </h2>

      <label htmlFor="fromInput">From:</label>
      <input
        id="fromInput"
        type="text"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
        placeholder={`Enter value in ${fromUnit}`}
      />

      <label htmlFor="toInput">To:</label>
      <input
        id="toInput"
        type="text"
        value={outputValue}
        readOnly
        placeholder={`Converted value in ${toUnit}`}
      />

      <div className="button-group">
        <button onClick={clearFields}>Clear</button>
        <button onClick={convert}>Convert</button>
      </div>
    </div>
  );
}
