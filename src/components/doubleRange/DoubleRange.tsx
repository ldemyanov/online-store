import React, { useState, useRef, useEffect } from 'react';
import './doubleRange.scss';

type TDoubleRangeProps = {
  min: number;
  max: number;
  newMin?: number;
  newMax?: number;
  onChange: (min: number, max: number) => void;
};

function DoubleRange({
  min,
  max,
  newMin = min,
  newMax = max,
  onChange,
}: TDoubleRangeProps) {
  const [minValue, setMin] = useState(newMin);
  const [maxValue, setMax] = useState(newMax);
  const filling = useRef(null);

  useEffect(() => {
    onChange(minValue, maxValue);
    setFill();
  }, [minValue, maxValue, onChange]);

  const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(Number(e.target.value), minValue + 1);
    setMax(newValue);
  };

  const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(Number(e.target.value), maxValue - 1);
    setMin(newValue);
  };

  const setFill = () => {
    if (filling.current) {
      const el: HTMLElement = filling.current;
      el.style.left = (minValue / max) * 100 - 1 + '%';
      el.style.right = 100 - (maxValue / max) * 100 - 1 + '%';
    }
  };

  return (
    <div className="doubleRange">
      <div className="doubleRange__border">
        <div className="doubleRange__filling" ref={filling}></div>
        <input
          className="doubleRange__input doubleRange__input_min"
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={onChangeMin}
        />
        <input
          className="doubleRange__input doubleRange__input_max"
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={onChangeMax}
        />
      </div>
      <span className="doubleRange__output-min">{minValue}</span>
      <span className="doubleRange__output-max">{maxValue}</span>
    </div>
  );
}

export default DoubleRange;
