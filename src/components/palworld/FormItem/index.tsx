import { Form, Input, InputNumber } from 'antd';
import Segmented from '../Segmented';
import Slider from '../Slider';
import Switch from '../Switch';
import './index.less';

type FormItemProps<V> = {
  name: string;
  label: string;
} & (
  | {
      type: 'segmented';
      options: {
        value: V;
        label: string;
      }[];
    }
  | {
      type: 'slider';
      options: {
        min: number;
        max: number;
        step: number;
      };
    }
  | {
      type: 'switch';
      options: {
        off: string;
        on: string;
      };
    }
  | {
      type: 'input.text';
      options: unknown;
    }
  | {
      type: 'input.password';
      options: unknown;
    }
  | {
      type: 'input.number';
      options: {
        min: number;
        max: number;
        step: number;
      };
    }
);

function FormItem<V>({ name, label, type, options }: FormItemProps<V>) {
  let control: React.ReactNode = null;
  switch (type) {
    case 'segmented': {
      control = <Segmented options={options} />;
      break;
    }
    case 'slider': {
      control = <Slider {...options} />;
      break;
    }
    case 'switch': {
      control = <Switch {...options} />;
      break;
    }
    case 'input.text': {
      control = <Input />;
      break;
    }
    case 'input.password': {
      control = <Input.Password />;
      break;
    }
    case 'input.number': {
      control = <InputNumber />;
      break;
    }
  }

  return (
    <Form.Item
      className="pwc-form-item"
      name={name}
      label={<span style={{ color: 'white' }}>{label}</span>}
    >
      {control}
    </Form.Item>
  );
}

export default FormItem;
