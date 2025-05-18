// src/data/speedConversion.js

const toMetersPerSecond = {
  'meters/second': 1,
  'kilometers/hour': 1 / 3.6,
  'miles/hour': 0.44704,
  'feet/second': 0.3048,
  'knots': 0.514444,
  'mach': 343, // approx speed of sound at sea level
  'centimeters/second': 0.01,
  'inches/second': 0.0254,
};

const units = Object.keys(toMetersPerSecond);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] =
      toMetersPerSecond[fromUnit] / toMetersPerSecond[toUnit];
  });
});

export default {
  name: 'Speed',
  units,
  conversionTable,
  isFunctionTable: false,
};
