// src/data/luminousIntensityConversion.js

const toCandelas = {
  nanocandela: 1e-9,
  microcandela: 1e-6,
  millicandela: 1e-3,
  centicandela: 1e-2,
  decicandela: 1e-1,
  candela: 1,
  decacandela: 1e1,
  hectocandela: 1e2,
  kilocandela: 1e3,
  megacandela: 1e6,
  gigacandela: 1e9,
};

const units = Object.keys(toCandelas);
const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toCandelas[fromUnit] / toCandelas[toUnit];
  });
});

export default {
  name: 'Luminous Intensity',
  units,
  conversionTable,
  isFunctionTable: false
};
