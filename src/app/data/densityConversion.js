// src/data/densityConversion.js

const toKgPerCubicMeter = {
  'kilogram per cubic meter': 1,
  'gram per cubic centimeter': 1000,
  'gram per liter': 1,
  'milligram per cubic meter': 1e-6,
  'pound per cubic foot': 16.0185,
  'pound per cubic inch': 27679.9,
  'ounce per gallon (US)': 7.4891517,
  'ton per cubic yard': 1186.55,
};

const units = Object.keys(toKgPerCubicMeter);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] =
      toKgPerCubicMeter[fromUnit] / toKgPerCubicMeter[toUnit];
  });
});

export default {
  name: 'Density',
  units,
  conversionTable,
  isFunctionTable: false,
};
