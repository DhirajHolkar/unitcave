export const electricCurrentUnits = [
  'ampere',
  'milliampere',
  'kiloampere',
  'microampere',
  'nanoampere',
];

const electricCurrentConversion = {
  ampere: 1,
  milliampere: 1e-3,
  kiloampere: 1e3,
  microampere: 1e-6,
  nanoampere: 1e-9,
};

export function convertElectricCurrent(value, fromUnit, toUnit) {
  const inAmps = value * electricCurrentConversion[fromUnit];
  const converted = inAmps / electricCurrentConversion[toUnit];
  return converted.toFixed(6);
}
