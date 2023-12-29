import { Ranger, useRanger } from '@tanstack/react-ranger';
import { Dispatch, SetStateAction, useRef } from 'react';
import { Range } from './RangeSlider.styled';

interface RangeSliderProps {
  min: number;
  max: number;
  stepSize: number;
  values: number[];
  setValues: Dispatch<SetStateAction<number[]>>;
}

const RangeSlider = ({
  min,
  max,
  stepSize,
  values,
  setValues,
}: RangeSliderProps) => {
  const rangerRef = useRef<HTMLDivElement>(null);

  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min,
    max,
    stepSize,
    onChange: (instance: Ranger<HTMLDivElement>) =>
      setValues([...instance.sortedValues]),
  });

  return (
    <Range>
      <div ref={rangerRef}>
        {rangerInstance
          .handles()
          .map(
            (
              {
                value,
                onKeyDownHandler,
                onMouseDownHandler,
                onTouchStart,
                isActive,
              },
              i
            ) => (
              <button
                key={i}
                onKeyDown={onKeyDownHandler}
                onMouseDown={onMouseDownHandler}
                onTouchStart={onTouchStart}
                role="slider"
                aria-valuemin={rangerInstance.options.min}
                aria-valuemax={rangerInstance.options.max}
                aria-valuenow={value}
                style={{
                  left: `${rangerInstance.getPercentageForValue(value)}%`,
                  zIndex: isActive ? '1' : '0',
                }}
              />
            )
          )}
      </div>
    </Range>
  );
};

export default RangeSlider;
