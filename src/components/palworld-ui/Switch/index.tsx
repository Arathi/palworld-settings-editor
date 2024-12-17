import { useMemo } from "react";
import type { DataEntryProps, CommonProps } from "..";

import "./index.less";

export type SwitchFeature = {
  off?: React.ReactNode;
  on?: React.ReactNode;
};

type Props = CommonProps & DataEntryProps<boolean> & SwitchFeature;

const Switch: React.FC<Props> = ({
  className = "",
  style = {},
  value = false,
  onChange = (value) => {
    console.debug("开关：", value);
  },
  off = "OFF",
  on = "ON",
}) => {
  const offActive = useMemo(() => {
    return value ? "inactive" : "active";
  }, [value]);

  const onActive = useMemo(() => {
    return value ? "active" : "inactive";
  }, [value]);

  function toggle(value: boolean) {
    onChange(value);
  }

  return (
    <div className={`pwc-switch ${className}`}>
      <button
        type="button"
        className={`pwc-switch-button ${offActive}`}
        onClick={() => toggle(false)}
      >
        {off}
      </button>
      <button
        type="button"
        className={`pwc-switch-button ${onActive}`}
        onClick={() => toggle(true)}
      >
        {on}
      </button>
    </div>
  );
};

export default Switch;
