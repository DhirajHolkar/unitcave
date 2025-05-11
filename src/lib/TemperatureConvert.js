export const temperatureUnits = ['celsius', 'fahrenheit', 'kelvin'];

export function convertTemperature(value, fromUnit, toUnit) {
  value = parseFloat(value);
  let result = value;

  if (fromUnit === toUnit) return result.toFixed(2);

  // Convert from source to Celsius
  if (fromUnit === 'fahrenheit') {
    result = (value - 32) * (5 / 9);
  } else if (fromUnit === 'kelvin') {
    result = value - 273.15;
  }

  // Convert from Celsius to target
  if (toUnit === 'fahrenheit') {
    result = result * (9 / 5) + 32;
  } else if (toUnit === 'kelvin') {
    result = result + 273.15;
  }

  return result.toFixed(2);
}
