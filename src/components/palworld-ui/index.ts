import type { CSSProperties } from "react";

export type CommonProps = {
  className?: string;
  style?: CSSProperties & Record<string, unknown>;
};

export type DataEntryProps<V> = {
  value?: V;
  onChange?: (value: V) => void;
};
