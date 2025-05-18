// src/data/energyConversion.js

const toJoules = {
  joule: 1,
  kilojoule: 1e3,
  megajoule: 1e6,
  gigajoule: 1e9,
  calorie: 4.184,
  kilocalorie: 4184,
  wattHour: 3600,
  kilowattHour: 3.6e6,
  electronvolt: 1.60218e-19,
  britishThermalUnit: 1055.06,
  footPound: 1.35582,
};

const units = Object.keys(toJoules);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toJoules[fromUnit] / toJoules[toUnit];
  });
});

export default {
  name: 'Energy',
  units,
  conversionTable,
  isFunctionTable: false,
};
