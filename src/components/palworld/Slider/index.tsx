import { type CSSProperties, useMemo, useRef } from 'react';
import './index.less';

type SliderProps = {
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

const Slider: React.FC<SliderProps> = ({
  className = '',
  style,
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  function update(value: string) {
    const numeric = Number.parseFloat(value);
    if (onChange !== undefined && !Number.isNaN(numeric)) {
      onChange(numeric);
    }
  }

  const progress = useMemo(() => {
    const delta = max - min;
    const actual = value - min;
    return (actual / delta) * 100;
  }, [value, min, max]);

  const percent = useMemo(() => {
    return `${progress.toFixed(2)}%`;
  }, [progress]);

  return (
    <div className={`pwc-slider ${className}`} style={style}>
      <div className="value">{value.toLocaleString()}</div>
      <div className="slider-container">
        <input
          className="slider"
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={e => update(e.currentTarget.value)}
          style={{ backgroundSize: percent }}
        />
      </div>
    </div>
  );
};

export default Slider;
