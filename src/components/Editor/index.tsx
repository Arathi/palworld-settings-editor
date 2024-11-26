import { Form, type FormProps, Segmented, Slider, Switch } from 'antd';
import { useMemo } from 'react';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ValueType = Record<string, any>;

export type Props<VT extends ValueType = ValueType> = FormProps<VT> & {
  items: FormItem<VT>[];
};

type FormItem<VT extends ValueType = ValueType> = {
  label: React.ReactNode;
  dataIndex: keyof VT;
} & (SliderProps | SegmentedProps | SwitchProps);

type SliderProps = {
  type: 'slider';
  options: SliderOptions;
};
type SliderOptions = {
  min: number;
  max: number;
  step?: number;
};

type SegmentedProps = {
  type: 'segmented';
  options: SegmentedOptions;
};
type SegmentedOptions = {
  label: React.ReactNode;
  value: string | number;
}[];

type SwitchProps = {
  type: 'switch';
  options: SwitchOptions;
};
type SwitchOptions = {
  offText: string;
  onText: string;
};

function Editor<VT extends ValueType = ValueType>(props: Props<VT>) {
  const items = useMemo(() => {
    return props.items.map(item => {
      const { label, dataIndex, type } = item;
      let control: React.ReactNode = null;
      switch (type) {
        case 'slider':
          {
            const { min, max, step } = item.options;
            control = <Slider min={min} max={max} step={step} />;
          }
          break;
        case 'segmented':
          {
            control = <Segmented options={item.options} />;
          }
          break;
        case 'switch':
          {
            const { offText = 'OFF', onText = 'ON' } = item.options;
            control = (
              <Switch unCheckedChildren={offText} checkedChildren={onText} />
            );
          }
          break;
      }

      return (
        <Form.Item key={`form-item-${dataIndex}`} label={label}>
          {control}
        </Form.Item>
      );
    });
  }, [props.items]);

  return (
    <Form {...props} labelCol={{ span: 12 }}>
      {items}
    </Form>
  );
}

export default Editor;
