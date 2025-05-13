


// src/data/lengthConversion.js
const toMeters = {
  nanometer: 1e-9,
  micrometer: 1e-6,
  millimeter: 1e-3,
  centimeter: 1e-2,
  decimeter: 1e-1,
  meter: 1,
  decameter: 1e1,
  hectometer: 1e2,
  kilometer: 1e3,
  megameter: 1e6,
  gigameter: 1e9,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.344,
  nauticalmile: 1852,
};

const units = Object.keys(toMeters);
const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toMeters[fromUnit] / toMeters[toUnit];
  });
});

export default {
  name: 'Length',
  units,
  conversionTable,
};
