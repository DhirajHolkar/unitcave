// data/massConversion.js

const toKilograms = {
  milligram: 1e-6,
  gram: 1e-3,
  centigram: 1e-5,
  decigram: 1e-4,
  decagram: 1e-2,
  hectogram: 1e-1,
  kilogram: 1,
  metricton: 1000,
  microgram: 1e-9,
  nanogram: 1e-12,

  ounce: 0.0283495,
  pound: 0.453592,
  stone: 6.35029,
  ton: 907.18474, // US ton
};

const units = Object.keys(toKilograms);

const conversionTable = {};

units.forEach((fromUnit) => {
  conversionTable[fromUnit] = {};
  units.forEach((toUnit) => {
    conversionTable[fromUnit][toUnit] =
      toKilograms[fromUnit] / toKilograms[toUnit];
  });
});

export default {
  name: 'Mass',
  conversionTable,
  units,
};
