import { Slider as AntDesignSlider, Flex } from 'antd';

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
      <Flex justify="start" align="center" style={{ width: 48 }}>
        {value}
      </Flex>
      <AntDesignSlider
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ flex: 1 }}
      />
    </Flex>
  );
};

export default Slider;
