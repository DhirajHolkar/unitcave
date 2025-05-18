// src/data/accelerationConversion.js

const toMetersPerSecondSquared = {
  'm/s²': 1,
  'cm/s²': 0.01,
  'mm/s²': 0.001,
  'km/h²': 1 / 12960,           // 1 km/h² = (1000 / 3600²) m/s²
  'ft/s²': 0.3048,
  'inch/s²': 0.0254,
  'gal': 0.01,                  // 1 galileo = 0.01 m/s²
  'standard gravity': 9.80665, // g = 9.80665 m/s²
};

const units = Object.keys(toMetersPerSecondSquared);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] =
      toMetersPerSecondSquared[fromUnit] / toMetersPerSecondSquared[toUnit];
  });
});

export default {
  name: 'Acceleration',
  units,
  conversionTable,
};
