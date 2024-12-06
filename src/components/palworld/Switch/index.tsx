import { type CSSProperties, useMemo } from 'react';
import './index.less';

type SwitchProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
  style?: CSSProperties;
  off?: string;
  on?: string;
};

const Switch: React.FC<SwitchProps> = ({
  value = false,
  onChange,
  className,
  style,
  off = 'OFF',
  on = 'ON',
}) => {
  const offStatus = useMemo(() => (value ? 'inactive' : 'active'), [value]);
  const onStatus = useMemo(() => (value ? 'active' : 'inactive'), [value]);

  function update(value: boolean) {
    if (onChange !== undefined) {
      onChange(value);
    }
  }

  return (
    <div className={`pwc-switch ${className}`} style={style}>
      <button
        type="button"
        className={`switch-button ${offStatus}`}
        onClick={() => update(false)}
      >
        {off}
      </button>
      <button
        type="button"
        className={`switch-button ${onStatus}`}
        onClick={() => update(true)}
      >
        {on}
      </button>
    </div>
  );
};

export default Switch;
