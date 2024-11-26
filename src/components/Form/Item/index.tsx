import { Flex, Segmented, Slider, Switch } from 'antd';
import { useMemo } from 'react';

export type Props<T> = {
  label: React.ReactNode;
  dataIndex: keyof T;
} & (SliderProps | SegmentedProps | SwitchProps);

type SliderProps = {
  type: 'slider';
  min?: number;
  max?: number;
  step?: number;
};

type SegmentedProps = {
  type: 'segmented';
  options?: {
    value: string | number;
    label: React.ReactNode;
  }[];
};

type SwitchProps = {
  type: 'switch';
  offText?: React.ReactNode;
  onText?: React.ReactNode;
};

function Item<T>(props: Props<T>) {
  const { label } = props;

  const control = useMemo<React.ReactNode>(() => {
    const { type, dataIndex } = props;
    switch (type) {
      case 'slider': {
        const { min = 0, max = 1, step = 0.1 } = props;
        return <Slider min={min} max={max} step={step} />;
      }
      case 'segmented': {
        const { options = [] } = props;
        return <Segmented options={options} />;
      }
      case 'switch': {
        const { offText = 'OFF', onText = 'ON' } = props;
        return <Switch unCheckedChildren={offText} checkedChildren={onText} />;
      }
    }
  }, [props]);

  function buildSlider(props: SliderProps) {
    const { min = 0, max = 1, step = 0.1 } = props;
    return <Slider min={min} max={max} step={step} />;
  }

  function buildSegmented(props: SegmentedProps) {
    const { options = [] } = props;
    return <Segmented options={options} />;
  }

  function buildSwitch(props: SwitchProps) {
    return <Switch />;
  }

  return (
    <Flex className="form-item">
      <Flex flex={1}>{label}</Flex>
      <Flex flex={1}>{control}</Flex>
    </Flex>
  );
}

export default Item;
