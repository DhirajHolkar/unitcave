export const luminousUnits = ['cd', 'mcd', 'kcd'];

export function convertLuminous(value, fromUnit, toUnit) {
  value = parseFloat(value);
  let inCd = value;

  // Convert to base unit (cd)
  if (fromUnit === 'mcd') inCd = value / 1000;
  else if (fromUnit === 'kcd') inCd = value * 1000;

  // Convert from cd to target
  if (toUnit === 'mcd') return (inCd * 1000).toFixed(6);
  else if (toUnit === 'kcd') return (inCd / 1000).toFixed(6);

  return inCd.toFixed(6); // if toUnit is cd
}
