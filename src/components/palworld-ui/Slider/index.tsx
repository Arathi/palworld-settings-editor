import { useMemo } from "react";
import type { CommonProps, DataEntryProps } from "..";

import "./index.less";

export type SliderFeature = {
  min?: number;
  max?: number;
  step?: number;
};

type SliderProps = CommonProps & DataEntryProps<number> & SliderFeature;

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_STEP = 1;

const Slider: React.FC<SliderProps> = ({
  className = "",
  style = {},
  value = 0,
  onChange = (value) => {
    console.debug("slider value changed.", value);
  },
  min = DEFAULT_MIN,
  max = DEFAULT_MAX,
  step = DEFAULT_STEP,
}) => {
  const formattedValue = useMemo(() => {
    return value.toLocaleString();
  }, [value]);

  const progress = useMemo(() => {
    const percent = ((value - min) * 100) / (max - min);
    return `${percent}%`;
  }, [value, min, max]);

  return (
    <div className={`pwc-slider ${className}`} style={style}>
      <div className="pwc-slider-value">{formattedValue}</div>
      <input
        className="pwc-slider-range"
        type="range"
        value={value}
        onChange={(e) => {
          const value = Number.parseFloat(e.currentTarget.value);
          onChange(value);
        }}
        min={min}
        max={max}
        step={step}
        style={{
          backgroundSize: progress,
        }}
      />
    </div>
  );
};

export default Slider;
