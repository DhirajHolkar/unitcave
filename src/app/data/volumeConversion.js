// src/data/volumeConversion.js

const toLiters = {
  milliliter: 1e-3,
  centiliter: 1e-2,
  deciliter: 1e-1,
  liter: 1,
  decaliter: 1e1,
  hectoliter: 1e2,
  kiloliter: 1e3,

  cubiccentimeter: 1e-3,
  cubicmeter: 1e3,

  teaspoon: 0.00492892,
  tablespoon: 0.0147868,
  fluidounce: 0.0295735,
  cup: 0.24,
  pint: 0.473176,
  quart: 0.946353,
  gallon: 3.78541,
};

const units = Object.keys(toLiters);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toLiters[fromUnit] / toLiters[toUnit];
  });
});

export default {
  name: 'Volume',
  units,
  conversionTable,
  isFunctionTable: false,
};
