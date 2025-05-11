export const lengthUnits = [
  'millimeter',
  'centimeter',
  'meter',
  'kilometer',
  'inch',
  'foot',
  'yard',
  'mile',
];

const lengthConversion = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34,
};

export function convertLength(value, fromUnit, toUnit) {
  const valueInMeters = value * lengthConversion[fromUnit];
  const converted = valueInMeters / lengthConversion[toUnit];
  return converted.toFixed(4);
}
