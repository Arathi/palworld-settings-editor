import { type CSSProperties, useMemo } from 'react';
import './index.less';

export type SegmentedProps<V> = {
  value?: V;
  onChange?: (value: V) => void;
  options?: {
    value: V;
    label: string;
  }[];
  className?: string;
  style?: CSSProperties;
};

function Segmented<V>(props: SegmentedProps<V>) {
  const { value, onChange, options = [], className = '', style = {} } = props;

  function update(value: V) {
    if (onChange !== undefined) {
      onChange(value);
    }
  }

  const selectedIndex = useMemo(() => {
    return options.findIndex(opt => opt.value === value);
  }, [value, options]);

  const selected = useMemo(() => {
    return options[selectedIndex];
  }, [selectedIndex, options]);

  const blocks = useMemo(() => {
    return options.map(opt => {
      const selected = opt.value === value;
      const active = selected ? 'active' : '';
      return <div key={`block-${opt.value}`} className={`block ${active}`} />;
    });
  }, [value, options]);

  function onPrevClick() {
    const index = selectedIndex - 1;
    if (index >= 0 && index < options.length) {
      update(options[index].value);
    }
  }

  function onNextClick() {
    const index = selectedIndex + 1;
    if (index >= 0 && index < options.length) {
      update(options[index].value);
    }
  }

  return (
    <div className={`pwc-segmented ${className}`} style={style}>
      <button type="button" className="move" onClick={onPrevClick}>
        <div className="arrows left" />
      </button>
      <div className="middle">
        <div className="selected-label">{selected?.label ?? '无效选项'}</div>
        <div className="blocks">{blocks}</div>
      </div>
      <button type="button" className="move" onClick={onNextClick}>
        <div className="arrows right" />
      </button>
    </div>
  );
}

export default Segmented;
