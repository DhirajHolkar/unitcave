'use client';

import React, { useState, useEffect} from 'react';
import lengthData from '@/app/data/lengthConversion';
import timeData from '@/app/data/timeConversion';
import massData from '@/app/data/massConversion';
import temperatureData from '@/app/data/temperatureConversion';
import amountData from '@/app/data/amountConversion';
import electricCurrentData from '@/app/data/electricCurrentConversion';
import luminousIntensityData from '@/app/data/luminousIntensityConversion';
import volumeData from '@/app/data/volumeConversion';
import areaData from '@/app/data/areaConversion';
import pressureData from '@/app/data/pressureConversion';
import speedData from '@/app/data/speedConversion';
import dataData from '@/app/data/dataConversion';
import energyData from '@/app/data/energyConversion';
import densityData from '@/app/data/densityConversion';
import forceData from '@/app/data/forceConversion';
import powerData from '@/app/data/powerConversion';
import frequencyData from '@/app/data/frequencyConversion';
import accelerationData from '@/app/data/accelerationConversion';
// import axios from 'axios';
// import currencyData from '@/app/data/currencyConversion';


import '../styles/multi-converter.css'




const categories = {
  length: lengthData,
  time: timeData,
  mass: massData,
  temperature: temperatureData,
  amount:amountData,
  electricCurrent:electricCurrentData,
  luminousIntensity:luminousIntensityData,
  volume:volumeData,
  area:areaData,
  pressure:pressureData,
  speed:speedData,
  data:dataData,
  energy:energyData,
  density:densityData,
  force:forceData,
  power:powerData,
  frequency:frequencyData,
  acceleration:accelerationData,
  // currency:currencyData,
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

    if(selectedCategory === 'currency') return;

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





//   useEffect(() => {
//   if (selectedCategory === 'currency' && fromUnit && toUnit && inputValue) {
    
    
//     const fetchConversion = async () => {

//       try {
//         const response = await axios.get(
//           `https://api.exchangerate.host/convert?from=${fromUnit}&to=${toUnit}&amount=${inputValue}`
//         );

//         setOutputValue(response.data.result.toFixed(4));
//       } catch (error) {
//         console.error('Currency conversion error:', error);
//         setOutputValue('Error');
//       }
//     };
//     fetchConversion();
//   }
// }, [inputValue, fromUnit, toUnit, selectedCategory]);











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
