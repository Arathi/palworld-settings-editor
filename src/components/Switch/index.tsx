import { Flex } from 'antd';
import './index.less';

export type SwitchProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  span?: number;
} & SwitchOptions;

export interface SwitchOptions {
  off?: string;
  on?: string;
}

const Switch: React.FC<SwitchProps> = ({
  value = false,
  onChange,
  span = 48,
  off = 'OFF',
  on = 'ON',
}) => {
  return (
    <Flex className="pwc-switch" gap={2}>
      <div style={{ width: span }} />
      <SwitchButton
        label={off}
        active={!value}
        onClick={() => {
          if (onChange !== undefined) {
            onChange(false);
          }
        }}
      />
      <SwitchButton
        label={on}
        active={value}
        onClick={() => {
          if (onChange !== undefined) {
            onChange(true);
          }
        }}
      />
    </Flex>
  );
};

const SwitchButton: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => {
  const className = active
    ? 'pwc-switch-button-active'
    : 'pwc-switch-button-inactive';
  return (
    <Flex className={className} vertical flex={1} onClick={onClick}>
      <Flex
        className="pwc-switch-label"
        justify="center"
        align="center"
        flex={1}
      >
        {label}
      </Flex>
      <div className="pwc-switch-underline" />
    </Flex>
  );
};

export default Switch;
