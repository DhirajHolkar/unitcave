// src/data/pressureConversion.js

const toPascals = {
  pascal: 1,
  kilopascal: 1e3,
  megapascal: 1e6,
  bar: 1e5,
  millibar: 100,
  atmosphere: 101325,
  torr: 133.322368,
  psi: 6894.757, // pounds per square inch
  mmHg: 133.322, // approximate
  inHg: 3386.39, // inches of mercury
};

const units = Object.keys(toPascals);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toPascals[fromUnit] / toPascals[toUnit];
  });
});

export default {
  name: 'Pressure',
  units,
  conversionTable,
  isFunctionTable: false,
};
