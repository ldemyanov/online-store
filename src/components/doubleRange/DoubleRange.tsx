import React, { useState, useRef, useEffect } from 'react';
import './doubleRange.scss';

type TDoubleRangeProps = {
  min: number;
  max: number;
  left: number;
  right: number;
  onChange: (min: number, max: number) => void;
};

function DoubleRange({ min, max, left, right, onChange }: TDoubleRangeProps) {
  const [minValue, setMin] = useState(left);
  const [maxValue, setMax] = useState(right);
  const filling = useRef(null);

  useEffect(() => {
    setMax(right);
    setMin(left);
  }, [left, right]);

  useEffect(() => {
    onChange(minValue, maxValue);
    setFill();
  }, [minValue, maxValue]);

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
