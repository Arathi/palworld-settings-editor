import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Flex, type FlexProps } from 'antd';
import { useMemo, useState } from 'react';

type Props<VT extends string | number = string | number> = Omit<
  FlexProps,
  'children'
> & {
  options: {
    label: React.ReactNode;
    value: VT;
  }[];
};

function Segmented<VT extends string | number = string | number>(
  props: Props<VT>,
) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const label = useMemo(() => {
    return props.options[selectedIndex].label;
  }, [props.options, selectedIndex]);

  function onDecrementClick() {
    const index = selectedIndex - 1;
    if (index >= 0 && index < props.options.length) {
      setSelectedIndex(index);
    }
  }

  function onIncrementClick() {
    const index = selectedIndex + 1;
    if (index >= 0 && index < props.options.length) {
      setSelectedIndex(index);
    }
  }

  return (
    <>
      <Flex className="pwc-segmented" align="center">
        <Flex style={{ width: 48 }}>
          <div />
        </Flex>
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={onDecrementClick}
        />
        <Flex vertical flex={1}>
          <Flex flex={1} justify="center" align="center">
            {label}
          </Flex>
          <Flex gap={4}>
            {props.options.map((_, index) => {
              const color = index === selectedIndex ? '#00bcff' : '#8d9295';
              return (
                <Flex
                  key={`block-${index + 1}`}
                  flex={1}
                  style={{ backgroundColor: color, height: 2 }}
                >
                  <span />
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={onIncrementClick}
        />
      </Flex>
    </>
  );
}

export default Segmented;
