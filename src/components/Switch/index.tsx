import { Flex, type FlexProps } from 'antd';
import { type CSSProperties, useMemo, useState } from 'react';

type Props = Omit<FlexProps, 'children'> & {
  offText?: React.ReactNode;
  onText?: React.ReactNode;
};

const Switch: React.FC<Props> = props => {
  const [checked, setChecked] = useState(false);
  const { offText = 'OFF', onText = 'ON' } = props;

  const offStyle = useMemo<CSSProperties>(() => {
    return {
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: !checked ? '#00c4ff' : '#8a8d90',
      backgroundColor: !checked ? '#116f9d' : undefined,
      color: !checked ? 'white' : '#8a8d90',
    };
  }, [checked]);

  const onStyle = useMemo<CSSProperties>(() => {
    return {
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: checked ? '#00c4ff' : '#8a8d90',
      backgroundColor: checked ? '#116f9d' : undefined,
      color: checked ? 'white' : '#8a8d90',
    };
  }, [checked]);

  return (
    <Flex
      {...props}
      className="pwc-switch"
      gap={4}
      style={{ paddingLeft: 12, paddingRight: 12 }}
    >
      <Flex style={{ width: 48 }}>
        <div />
      </Flex>
      <Flex
        flex={1}
        justify="center"
        style={offStyle}
        onClick={() => {
          setChecked(false);
        }}
      >
        {offText}
      </Flex>
      <Flex
        flex={1}
        justify="center"
        style={onStyle}
        onClick={() => {
          setChecked(true);
        }}
      >
        {onText}
      </Flex>
    </Flex>
  );
};

export default Switch;
