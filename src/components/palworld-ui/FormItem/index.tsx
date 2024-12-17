import { Form, Input, InputNumber, type FormItemProps } from "antd";
import type { CSSProperties } from "react";
import type { SliderFeature } from "../Slider";
import type { SwitchFeature } from "../Switch";
import type { SegmentedFeature } from "../Segmented";
import Slider from "../Slider";
import Switch from "../Switch";
import Segmented from "../Segmented";
import type OptionSettings from "@/domains/palworld-schema";

import "./index.less";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Values = Record<string, any>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type CSSVariables = Record<string, any>;

type FormItemType =
  | "slider"
  | "switch"
  | "segmented"
  | "input.text"
  | "input.password"
  | "input.number";

type SliderFormItemProps = {
  type?: "slider";
} & SliderFeature;

type SwitchFormItemProps = {
  type?: "switch";
} & SwitchFeature;

type SegmentedFormItemProps<V> = {
  type?: "segmented";
} & SegmentedFeature<V>;

type InputTextFormItemProps = {
  type?: "input.text";
} & {
  placeholder?: string;
};

type InputPasswordFormItemProps = {
  type?: "input.password";
} & {
  placeholder?: string;
  visibilityToggle?: boolean;
};

type InputNumberFormItemProps = {
  type?: "input.number";
} & SliderFeature;

export type Props<T = OptionSettings> = FormItemProps<T> & {
  style?: CSSProperties & CSSVariables;
  type?: FormItemType;
} & (
    | SliderFormItemProps
    | SwitchFormItemProps
    | SegmentedFormItemProps<string | number | boolean>
    | InputTextFormItemProps
    | InputPasswordFormItemProps
    | InputNumberFormItemProps
  );

function FormItem<T = Values>(props: Props<T>) {
  let entry = props.children;
  const { type } = props;

  if (entry === undefined) {
    switch (type) {
      case "slider": {
        const { min = 0, max = 100, step = 1 } = props;
        entry = <Slider min={min} max={max} step={step} />;
        break;
      }
      case "switch": {
        const { off = "OFF", on = "ON" } = props;
        entry = <Switch off={off} on={on} />;
        break;
      }
      case "segmented": {
        const { options = [] } = props;
        entry = <Segmented options={options} />;
        break;
      }
      case "input.text": {
        const { placeholder } = props;
        entry = <Input placeholder={placeholder} style={{}} />;
        break;
      }
      case "input.password": {
        const { placeholder, visibilityToggle } = props;
        entry = (
          <Input.Password
            placeholder={placeholder}
            visibilityToggle={visibilityToggle}
            style={{}}
          />
        );
        break;
      }
      case "input.number": {
        const { min = 0, max = 100, step = 1 } = props;
        entry = (
          <InputNumber
            min={min}
            max={max}
            step={step}
            style={{
              width: "100%",
            }}
          />
        );
        break;
      }
    }
  }

  return (
    <Form.Item {...props} className={`pwc-form-item ${props.className}`}>
      {entry}
    </Form.Item>
  );
}

export default FormItem;
