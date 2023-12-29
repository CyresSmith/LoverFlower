import { useState } from 'react';
import { HiddenElement, RangeBox, Thumb, Track } from './Range.styled';

interface IRangeValue {
  min: number;
  max: number;
}

export interface IRangeProps {
  min: number;
  max: number;
  step: number;
  values?: IRangeValue;
  setValues: (values: IRangeValue) => void;
}

const Range = ({ min, max, step, values = { min, max } }: IRangeProps) => {
  const [rangeValues, setRangeValues] = useState<IRangeValue>({
    min,
    max,
  });
  const [currentValues, setCurrentValues] = useState<IRangeValue>(values);
  const [currentPosition, setCurrentPosition] = useState<IRangeValue>({
    min: 0,
    max: 100,
  });
  const [activeThumb, setActiveThumb] = useState<string>('');

  const handleThumbMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (activeThumb === 'min' || activeThumb === 'max') {
      const rect = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percent =
        (offsetX / rect.width) * 100 > 100 ? 100 : (offsetX / rect.width) * 100;

      const newValue = Math.round(
        (rangeValues.max - rangeValues.min) * (percent / 100) + rangeValues.min
      );

      if (activeThumb === 'min') {
        setCurrentPosition({ ...currentPosition, min: percent });
        setCurrentValues({ ...currentValues, min: newValue });
      } else {
        setCurrentPosition({ ...currentPosition, max: percent });
        setCurrentValues({ ...currentValues, max: newValue });
      }
    }
  };

  return (
    <RangeBox>
      <HiddenElement>
        <input
          type="range"
          min={rangeValues.min}
          max={rangeValues.max}
          step={step}
          value={values.min}
          onChange={() => {}}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={values.max}
          step={step}
          onChange={() => {}}
        />
      </HiddenElement>

      <Track id="track" onMouseMove={handleThumbMove}>
        <Thumb
          id="min"
          position={
            currentPosition.min < currentPosition.max
              ? currentPosition.min
              : currentPosition.max
          }
          isActive={'min' === activeThumb}
          onMouseDown={() => setActiveThumb('min')}
          onMouseUp={() => setActiveThumb('')}
        />
        <Thumb
          id="max"
          position={
            currentPosition.max > currentPosition.min
              ? currentPosition.max
              : currentPosition.min
          }
          isActive={'max' === activeThumb}
          onMouseDown={() => setActiveThumb('max')}
          onMouseUp={() => setActiveThumb('')}
        />
      </Track>
    </RangeBox>
  );
};

export default Range;
