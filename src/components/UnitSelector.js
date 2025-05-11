import '../styles/Converter.css';

export default function UnitSelector({ selected, onSelect }) {
  return (
    <div className="unit-selector">

      <button
        className={selected === 'length' ? 'selected' : ''}
        onClick={() => onSelect('length')}
      >
        Length
      </button>


      <button
        className={selected === 'mass' ? 'selected' : ''}
        onClick={() => onSelect('mass')}
      >
        Mass
      </button>




      <button
        className={selected === 'time' ? 'selected' : ''}
        onClick={() => onSelect('time')}
      >
        Time
      </button>


      <button
  className={selected === 'electric' ? 'selected' : ''}
  onClick={() => onSelect('electric')}
>
  Electric Current
</button>



<button
  className={selected === 'temperature' ? 'selected' : ''}
  onClick={() => onSelect('temperature')}
>
  Temperature
</button>





<button
  className={selected === 'substance' ? 'selected' : ''}
  onClick={() => onSelect('substance')}
>
  Substance
</button>





<button
  className={selected === 'luminous' ? 'selected' : ''}
  onClick={() => onSelect('luminous')}
>
  Luminous Intensity
</button>

    </div>
  );
}
