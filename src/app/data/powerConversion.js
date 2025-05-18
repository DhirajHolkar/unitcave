// src/data/powerConversion.js

const toWatts = {
  watt: 1,
  kilowatt: 1e3,
  megawatt: 1e6,
  gigawatt: 1e9,
  horsepower: 745.699872,
  metricHorsepower: 735.49875,
  btuPerHour: 0.29307107,
  caloriePerSecond: 4.1868,
  ergPerSecond: 1e-7,
};

const units = Object.keys(toWatts);

const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toWatts[fromUnit] / toWatts[toUnit];
  });
});

export default {
  name: 'Power',
  units,
  conversionTable,
};
