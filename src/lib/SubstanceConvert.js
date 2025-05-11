export const substanceUnits = ['mol', 'mmol', 'μmol'];

export function convertSubstance(value, fromUnit, toUnit) {
  value = parseFloat(value);
  let inMol = value;

  // Convert to base unit (mol)
  if (fromUnit === 'mmol') inMol = value / 1000;
  else if (fromUnit === 'μmol') inMol = value / 1e6;

  // Convert from base to target
  if (toUnit === 'mmol') return (inMol * 1000).toFixed(6);
  else if (toUnit === 'μmol') return (inMol * 1e6).toFixed(6);

  return inMol.toFixed(6); // if toUnit is mol
}
