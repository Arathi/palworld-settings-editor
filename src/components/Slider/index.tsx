import { Flex } from 'antd';

export type SliderOptions = {
  min: number;
  max: number;
  step: number;
};

export type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  span?: number;
} & SliderOptions;

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  span = 64,
  min,
  max,
  step,
}) => {
  return (
    <Flex className="pwc-slider">
      <Flex style={{ width: span }}>{value}</Flex>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => {
          const value = e.currentTarget.value;
          console.info('更新为', value);
          const numeric = Number.parseFloat(value);
          onChange(numeric);
        }}
      />
    </Flex>
  );
};

export default Slider;
