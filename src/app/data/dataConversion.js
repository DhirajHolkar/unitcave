// src/data/dataConversion.js

const toBytes = {
  bit: 1 / 8,
  byte: 1,
  kilobyte: 1024,
  megabyte: 1024 ** 2,
  gigabyte: 1024 ** 3,
  terabyte: 1024 ** 4,
  petabyte: 1024 ** 5,
};

const units = Object.keys(toBytes);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toBytes[fromUnit] / toBytes[toUnit];
  });
});

export default {
  name: 'Data',
  units,
  conversionTable,
  isFunctionTable: false,
};
