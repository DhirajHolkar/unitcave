// src/data/forceConversion.js

const toNewtons = {
  newton: 1,
  kilonewton: 1000,
  dyne: 1e-5,
  poundforce: 4.44822,
  kilopond: 9.80665,
  ounceforce: 0.2780139,
};

const units = Object.keys(toNewtons);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toNewtons[fromUnit] / toNewtons[toUnit];
  });
});

export default {
  name: 'Force',
  units,
  conversionTable,
};
