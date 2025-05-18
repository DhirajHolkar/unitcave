// src/app/components/ConversionLinks.js

import Link from 'next/link';
import '../styles/links.css';

const units = [
  'kilometer',
  'meter',
  'centimeter',
  'millimeter',
  'yard',
  'foot',
  'inch',
  'mile',
  'nautical-mile',
  'decimeter',
  'hectometer',
  'decameter',
  'light-year',
  'parsec',
  'angstrom',
  'furlong'
];

const importantConversions = [
  ['kilometer', 'meter'],
  ['kilometer', 'centimeter'],
  ['kilometer', 'millimeter'],
  ['meter', 'centimeter'],
  ['meter', 'millimeter'],
  ['centimeter', 'millimeter'],
  ['kilometer', 'yard'],
  ['meter', 'yard'],
  ['centimeter', 'inch'],
  // You can add more here later.
];

const Links = () => {
  return (
    <div className="conversion-links-container">
      <div className='conversion-links-title'>Choose a Conversion</div>
      <div className="conversion-links">
        {importantConversions.map(([fromUnit, toUnit]) => (
          <Link
            key={`${fromUnit}-to-${toUnit}`}
            href={`/length/${fromUnit}-to-${toUnit}`}
          >
            {fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} to{' '}
            {toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
