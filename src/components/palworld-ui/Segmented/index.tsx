import { useMemo } from "react";
import type { DataEntryProps, CommonProps } from "..";

import "./index.less";

type SegmentedOption<T> = {
  value: T;
  label: React.ReactNode;
};

export type SegmentedFeature<T> = {
  options?: SegmentedOption<T>[];
};

type Props<T> = DataEntryProps<T> & CommonProps & SegmentedFeature<T>;

function Segmented<T>({
  value = undefined,
  onChange = (value) => {
    console.info("分段选择器发生变化：", value);
  },
  options = [],
}: Props<T>) {
  const selectedIndex = useMemo(() => {
    const index = options.findIndex((opt) => opt.value === value);
    return index;
  }, [value, options]);

  const selectedLabel = useMemo(() => {
    return options[selectedIndex].label;
  }, [selectedIndex, options]);

  const blocks = useMemo(() => {
    const nodes: React.ReactNode[] = [];
    options.forEach((opt, index) => {
      const active = index === selectedIndex ? "active" : "";
      const node = (
        <button
          key={`option-${opt.value}`}
          type="button"
          className={`block ${active}`}
          onClick={() => {
            onChange(opt.value);
          }}
        />
      );
      nodes.push(node);
    });
    return nodes;
  }, [selectedIndex, onChange, options]);

  function onPreviousClick() {
    const index = selectedIndex - 1;
    if (index >= 0 && index < options.length) {
      const selected = options[index];
      onChange(selected.value);
    }
  }

  function onNextClick() {
    const index = selectedIndex + 1;
    if (index >= 0 && index < options.length) {
      const selected = options[index];
      onChange(selected.value);
    }
  }

  return (
    <div className="pwc-segmented">
      <button
        type="button"
        className="pwc-segmented-button"
        onClick={onPreviousClick}
      >
        <div className="arrow left" />
      </button>
      <div className="pwc-segmented-middle">
        <div className="selected-layer">{selectedLabel}</div>
        <div className="blocks-layer">{blocks}</div>
      </div>
      <button
        type="button"
        className="pwc-segmented-button"
        onClick={onNextClick}
      >
        <div className="arrow right" />
      </button>
    </div>
  );
}

export default Segmented;
