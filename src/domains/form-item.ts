import type { SegmentedOptions } from '@/components/Segmented';
import type { SliderOptions } from '@/components/Slider';
import type { SwitchOptions } from '@/components/Switch';
import type OptionSettings from './option-settings';

type FormItemProps<T = OptionSettings> = {
  name: keyof T;
  label: string;
} & (SliderItemProps | SegmentedItemProps | SwitchItemProps);

interface SliderItemProps {
  type: 'slider';
  options: SliderOptions;
}

interface SegmentedItemProps {
  type: 'segmented';
  options: SegmentedOptions[];
}

interface SwitchItemProps {
  type: 'switch';
  options: SwitchOptions;
}

export default FormItemProps;
