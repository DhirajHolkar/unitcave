export const timeUnits = [
  'millisecond',
  'second',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year',
];

const timeConversion = {
  millisecond: 1,
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 30.44 * 24 * 60 * 60 * 1000, // avg month
  year: 365.25 * 24 * 60 * 60 * 1000, // avg year
};

export function convertTime(value, fromUnit, toUnit) {
  const inMilliseconds = value * timeConversion[fromUnit];
  const converted = inMilliseconds / timeConversion[toUnit];
  return converted.toFixed(4);
}
