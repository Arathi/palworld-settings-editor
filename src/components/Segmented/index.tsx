import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useMemo } from 'react';

import './index.less';

type ValueType = string | number | boolean;

export interface SegmentedProps<V = ValueType> {
  value?: V;
  onChange?: (value: V) => void;
  options?: SegmentedOptions<V>[];
  span?: number;
}

export interface SegmentedOptions<V = ValueType> {
  label: string;
  value: V;
}

function Segmented<V = ValueType>({
  value,
  onChange,
  options = [],
  span = 48,
}: SegmentedProps<V>) {
  const label = useMemo(() => {
    const option = options.find(option => option.value === value);
    let color: string | undefined = 'red';
    let text = '未知的选项';
    if (option !== undefined) {
      color = 'white';
      text = option.label;
    }
    return <span style={{ color }}>{text}</span>;
  }, [value, options]);

  const blocks = useMemo(() => {
    const nodes = options.map((option, index) => {
      const active = option.value === value ? 'active' : '';
      return (
        <div
          key={`option-${index}-${option.value}`}
          className={`pwc-segmented-block ${active}`}
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
    if (onChange !== undefined) {
      onChange(option.value);
    }
  }

  function onNextClick() {
    const currentIndex = options.findIndex(option => option.value === value);
    let index = currentIndex + 1;
    if (index >= options.length) index = options.length - 1;
    const option = options[index];
    if (onChange !== undefined) {
      onChange(option.value);
    }
  }

  return (
    <div className="pwc-segmented">
      <div style={{ width: span }} />
      <Button
        type="text"
        icon={
          <LeftOutlined
            className="pwc-segmented-button"
            style={{ fontSize: 20 }}
          />
        }
        onClick={onPreviousClick}
      />
      <div className="pwc-segmented-middle">
        <div className="pwc-segmented-label">{label}</div>
        <div className="pwc-segmented-blocks">{blocks}</div>
      </div>
      <Button
        type="text"
        icon={
          <RightOutlined
            className="pwc-segmented-button"
            style={{ fontSize: 20 }}
          />
        }
        onClick={onNextClick}
      />
    </div>
  );
}

export default Segmented;
