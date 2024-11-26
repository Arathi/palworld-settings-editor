import { Flex } from 'antd';

type Props = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
};

const Slider: React.FC<Props> = props => {
  const { min = 0, max = 100, step = 1, value = 0 } = props;
  return (
    <Flex>
      <span>{value}</span>
      <input type="range" min={min} max={max} step={step} value={value} />
    </Flex>
  );
};

export default Slider;
