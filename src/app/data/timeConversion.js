// src/data/timeConversion.js
const toSeconds = {
  nanosecond: 1e-9,
  microsecond: 1e-6,
  millisecond: 1e-3,
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800,
  month: 2.63e6, // Average month
  year: 3.154e7, // Average year
};

const units = Object.keys(toSeconds);
const conversionTable = {};

units.forEach(fromUnit => {
  conversionTable[fromUnit] = {};
  units.forEach(toUnit => {
    conversionTable[fromUnit][toUnit] = toSeconds[fromUnit] / toSeconds[toUnit];
  });
});

export default {
  name: 'Time',
  units,
  conversionTable,
};
