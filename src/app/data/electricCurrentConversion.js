// src/data/electricCurrentConversion.js

const toAmperes = {
  nanoampere: 1e-9,
  microampere: 1e-6,
  milliampere: 1e-3,
  centiampere: 1e-2,
  deciampere: 1e-1,
  ampere: 1,
  decaampere: 1e1,
  hectoampere: 1e2,
  kiloampere: 1e3,
  megaampere: 1e6,
  gigaampere: 1e9,
};

const units = Object.keys(toAmperes);
const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toAmperes[fromUnit] / toAmperes[toUnit];
  });
});

export default {
  name: 'Electric Current',
  units,
  conversionTable,
  isFunctionTable: false // consistent with other numeric unit types
};
