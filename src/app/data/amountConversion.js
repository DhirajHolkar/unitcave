// src/data/amountConversion.js

const toMoles = {
  molecule: 1 / 6.022e23, // 1 molecule = 1 / Avogadro's number moles
  nanomole: 1e-9,
  micromole: 1e-6,
  millimole: 1e-3,
  centimole: 1e-2,
  decimole: 1e-1,
  mole: 1,
  decamole: 1e1,
  hectomole: 1e2,
  kilomole: 1e3,
};

const units = Object.keys(toMoles);
const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toMoles[fromUnit] / toMoles[toUnit];
  });
});

export default {
  name: 'Amount of Substance',
  units,
  conversionTable,
  isFunctionTable: false // not needed but included for clarity
};
