import { Flex } from 'antd';
import './index.less';
import { useMemo, useRef } from 'react';

export type SliderOptions = {
  min: number;
  max: number;
  step: number;
};

export type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
  span?: number;
} & SliderOptions;

const Slider: React.FC<SliderProps> = ({
  value = 0,
  onChange,
  span = 48,
  min,
  max,
  step,
}) => {
  const rangeRef = useRef<HTMLInputElement>(null);

  const backgroundSize = useMemo(() => {
    const delta = max - min;
    const percent = ((value - min) * 100) / delta;
    const size = percent.toFixed(2);
    return `${size}%`;
  }, [value, min, max]);

  return (
    <Flex className="pwc-slider" align="center" gap={8}>
      <Flex className="pwc-slider-value" style={{ width: span }}>
        {value.toLocaleString()}
      </Flex>
      <input
        className="pwc-slider-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        ref={rangeRef}
        onChange={e => {
          const value = e.currentTarget.value;
          const numeric = Number.parseFloat(value);
          if (onChange !== undefined && !Number.isNaN(numeric)) {
            onChange(numeric);
          }
        }}
        style={{
          backgroundSize,
        }}
      />
    </Flex>
  );
};

export default Slider;
