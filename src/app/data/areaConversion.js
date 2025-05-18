// src/data/areaConversion.js

const toSquareMeters = {
  squaremillimeter: 1e-6,
  squarecentimeter: 1e-4,
  squaredecimeter: 0.01,
  squaremeter: 1,
  squarekilometer: 1e6,

  hectare: 1e4,
  acre: 4046.8564224,

  squareinch: 0.00064516,
  squarefoot: 0.092903,
  squareyard: 0.836127,
  squaremile: 2.59e6,
};

const units = Object.keys(toSquareMeters);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toSquareMeters[fromUnit] / toSquareMeters[toUnit];
  });
});

export default {
  name: 'Area',
  units,
  conversionTable,
  isFunctionTable: false,
};
