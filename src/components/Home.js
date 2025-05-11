'use client';

import { useState } from 'react';
import UnitSelector from '../components/UnitSelector';
import LengthConverter from '../components/LengthConverter';
import MassConverter from '../components/MassConverter';
import TimeConverter from '../components/TimeConverter';
import ElectricCurrentConverter from '../components/ElectricCurrentConverter';
import TemperatureConverter from '../components/TemperatureConverter';
import SubstanceConverter from '../components/SubstanceConverter';
import LuminousConverter from '../components/LuminousConverter';

import '../app/globals.css';

export default function Home() {
  const [selectedUnit, setSelectedUnit] = useState('length');

  return (
    <main className="container">
      <h1>Unit Converter</h1>
      <UnitSelector selected={selectedUnit} onSelect={setSelectedUnit} />
      {selectedUnit === 'length' && <LengthConverter />}
      {selectedUnit === 'mass' && <MassConverter />}
      {selectedUnit === 'time' && <TimeConverter />}
      {selectedUnit === 'electric' && <ElectricCurrentConverter />}
      {selectedUnit === 'temperature' && <TemperatureConverter />}
      {selectedUnit === 'substance' && <SubstanceConverter />}
      {selectedUnit === 'luminous' && <LuminousConverter />}


      
    </main>
  );
}





