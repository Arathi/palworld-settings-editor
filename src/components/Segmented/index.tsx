import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useMemo } from 'react';

type ValueType = string | number | boolean;
const colorActive = '#00BCFF';
const colorInactive = '#8E9395';

export interface SegmentedProps<V = ValueType> {
  value: V;
  options: SegmentedOptions<V>[];
  onChange: (value: V) => void;
  span?: number;
}

export interface SegmentedOptions<V = ValueType> {
  label: string;
  value: V;
}

function Segmented<V = ValueType>({
  value,
  options,
  onChange,
  span = 64,
}: SegmentedProps<V>) {
  const label = useMemo(() => {
    const option = options.find(option => option.value === value);
    let color: string | undefined = 'red';
    let text = '未知的选项';
    if (option !== undefined) {
      color = undefined;
      text = option.label;
    }
    return <span style={{ color }}>{text}</span>;
  }, [value, options]);

  const blocks = useMemo(() => {
    const nodes = options.map((option, index) => {
      const color = option.value === value ? colorActive : colorInactive;
      return (
        <div
          key={`option-${index}-${option.value}`}
          style={{ flex: 1, height: 2, backgroundColor: color }}
        />
      );
    });
    return nodes;
  }, [value, options]);

  function onPreviousClick() {
    const currentIndex = options.findIndex(option => option.value === value);
    let index = currentIndex - 1;
    if (index < 0) index = 0;
    const option = options[index];
    onChange(option.value);
  }

  function onNextClick() {
    const currentIndex = options.findIndex(option => option.value === value);
    let index = currentIndex + 1;
    if (index >= options.length) index = options.length - 1;
    const option = options[index];
    onChange(option.value);
  }

  return (
    <Flex className="pwc-segmented">
      <div style={{ width: span }} />
      <Button
        type="text"
        icon={<LeftOutlined />}
        onClick={onPreviousClick}
        style={{ color: 'white', marginLeft: -12 }}
      />
      <Flex justify="center" flex={1} vertical>
        <Flex justify="center" align="center">
          {label}
        </Flex>
        <Flex gap={3}>{blocks}</Flex>
      </Flex>
      <Button
        type="text"
        icon={<RightOutlined />}
        onClick={onNextClick}
        style={{ color: 'white', marginRight: -12 }}
      />
    </Flex>
  );
}

export default Segmented;
