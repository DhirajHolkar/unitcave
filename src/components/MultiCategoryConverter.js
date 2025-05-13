'use client';

import React, { useState } from 'react';
import lengthData from '@/app/data/lengthConversion';
import timeData from '@/app/data/timeConversion';
import massData from '@/app/data/massConversion';
import temperatureData from '@/app/data/temperatureConversion';
import amountData from '@/app/data/amountConversion';
import electricCurrentData from '@/app/data/electricCurrentConversion';
import luminousIntensityData from '@/app/data/luminousIntensityConversion';
import '../styles/multi-converter.css'

const categories = {
  length: lengthData,
  time: timeData,
  mass: massData,
  temperature: temperatureData,
  amount:amountData,
  electricCurrent:electricCurrentData,
  luminousIntensity:luminousIntensityData,
};

function MultiCategoryConverter() {
  const [selectedCategory, setSelectedCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState(categories[selectedCategory].units[0]);
  const [toUnit, setToUnit] = useState(categories[selectedCategory].units[1]);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFromUnit(categories[category].units[0]);
    setToUnit(categories[category].units[1]);
    setInputValue('');
    setOutputValue('');
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    convert(value);
  };

  const convert = (rawValue) => {
    const categoryData = categories[selectedCategory];
    const table = categoryData.conversionTable;

    if (!rawValue || isNaN(rawValue)) {
      setOutputValue('');
      return;
    }

    if (categoryData.isFunctionTable) {
      const fn = table?.[fromUnit]?.[toUnit];
      setOutputValue(fn ? fn(parseFloat(rawValue)).toFixed(4) : 'Invalid conversion');
    } else {
      const factor = table?.[fromUnit]?.[toUnit];
      setOutputValue(factor ? (parseFloat(rawValue) * factor).toFixed(4) : 'Invalid conversion');
    }
  };

  const categoryData = categories[selectedCategory];

  return (
    <div className="converter-container">
      <div className="category-row category-buttons">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={selectedCategory === cat ? 'selected' : ''}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="input-row">
        <div className="input-group">
          <label>From:</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>To:</label>
          <input type="text" value={outputValue} readOnly />
        </div>
      </div>

      <div className="unit-selection">
        <div className="unit-list">
          <h4>From Unit</h4>
          {categoryData.units.map((unit) => (
            <button
              key={unit}
              className={unit === fromUnit ? 'selected' : ''}
              onClick={() => {
                setFromUnit(unit);
                convert(inputValue);
              }}
            >
              {unit}
            </button>
          ))}
        </div>
        <div className="unit-list">
          <h4>To Unit</h4>
          {categoryData.units.map((unit) => (
            <button
              key={unit}
              className={unit === toUnit ? 'selected' : ''}
              onClick={() => {
                setToUnit(unit);
                convert(inputValue);
              }}
            >
              {unit}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MultiCategoryConverter;
