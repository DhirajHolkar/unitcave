// src/data/frequencyConversion.js

const toHertz = {
  millihertz: 1e-3,
  hertz: 1,
  kilohertz: 1e3,
  megahertz: 1e6,
  gigahertz: 1e9,
  terahertz: 1e12,
  rpm: 1 / 60, // Revolutions per minute to Hz
};

const units = Object.keys(toHertz);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toHertz[fromUnit] / toHertz[toUnit];
  });
});

export default {
  name: 'Frequency',
  units,
  conversionTable,
};
