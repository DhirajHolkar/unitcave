export const massUnits = [
  'milligram',
  'gram',
  'kilogram',
  'tonne',
  'ounce',
  'pound',
];

const massConversion = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  tonne: 1_000_000,
  ounce: 28.3495,
  pound: 453.592,
};

export function convertMass(value, fromUnit, toUnit) {
  const valueInGrams = value * massConversion[fromUnit];
  const converted = valueInGrams / massConversion[toUnit];
  return converted.toFixed(4);
}
