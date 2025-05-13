// data/temperatureConversion.js

const units = ['celsius', 'fahrenheit', 'kelvin'];

const conversionTable = {
  celsius: {
    fahrenheit: (val) => (val * 9) / 5 + 32,
    kelvin: (val) => val + 273.15,
    celsius: (val) => val,
  },
  fahrenheit: {
    celsius: (val) => ((val - 32) * 5) / 9,
    kelvin: (val) => ((val - 32) * 5) / 9 + 273.15,
    fahrenheit: (val) => val,
  },
  kelvin: {
    celsius: (val) => val - 273.15,
    fahrenheit: (val) => ((val - 273.15) * 9) / 5 + 32,
    kelvin: (val) => val,
  },
};

export default {
  name: 'Temperature',
  conversionTable,
  units,
  isFunctionTable: true, // ✅ We'll use this to handle function-based conversion differently
};
