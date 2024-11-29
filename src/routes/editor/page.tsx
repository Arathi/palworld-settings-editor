import type OptionSettings from '@/domains/palworld-settings';
import {
  DeathPenalty,
  DefaultOptionSettings,
  Difficulty,
} from '@/domains/palworld-settings';
import { Helmet } from '@modern-js/runtime/head';
import { Flex, Form, Input, Radio, Slider, Switch } from 'antd';
import { useMemo, useState } from 'react';

import PalWorldSegmented from '@/components/Segmented';
import PalWorldSlider from '@/components/Slider';
import PalWorldSwitch from '@/components/Switch';

type FormItemProps<T = OptionSettings> = {
  key: keyof T;
  label: string;
  defaultValue?: T[keyof T];
} & (SliderOptions | SwitchOptions | SegmentedOptions);

type SliderOptions = {
  type: 'slider';
  options: {
    min: number;
    max: number;
    step: number;
  };
};

type SwitchOptions = {
  type: 'switch';
  options: {
    offText?: React.ReactNode;
    onText?: React.ReactNode;
  };
};

type SegmentedOptions = {
  type: 'segmented';
  options: {
    value: string | number;
    label: React.ReactNode;
  }[];
};

const Page = () => {
  const [optionSettings, setOptionSettings] = useState<OptionSettings>(
    DefaultOptionSettings,
  );

  const [items] = useState<FormItemProps[]>([
    {
      key: 'Difficulty',
      label: '难度',
      type: 'segmented',
      options: [
        {
          value: Difficulty.None,
          label: '自定义',
        },
        {
          value: Difficulty.Casual,
          label: '休闲',
        },
        {
          value: Difficulty.Normal,
          label: '普通',
        },
        {
          value: Difficulty.Hard,
          label: '困难',
        },
      ],
    },
    {
      key: 'DayTimeSpeedRate',
      label: '白天流逝速度',
      type: 'slider',
      options: {
        min: 0.1,
        max: 10,
        step: 0.1,
      },
    },
    {
      key: 'DeathPenalty',
      label: '死亡惩罚',
      type: 'segmented',
      options: [
        { value: DeathPenalty.None, label: '无' },
        { value: DeathPenalty.Item, label: '掉落物品' },
        { value: DeathPenalty.ItemAndEquipment, label: '掉落物品和装备' },
        { value: DeathPenalty.All, label: '全部掉落' },
      ],
    },
    {
      key: 'bEnableFastTravel',
      label: '快速旅行',
      type: 'switch',
      options: {
        offText: 'OFF',
        onText: 'ON',
      },
    },
  ]);

  const formItems = useMemo<React.ReactNode[]>(() => {
    const nodes: React.ReactNode[] = items.map(item => {
      let control: React.ReactNode = null;
      const { type, key, label } = item;
      switch (type) {
        case 'slider': {
          const { min, max, step = 0.1 } = item.options;
          control = <PalWorldSlider min={min} max={max} step={step} />;
          break;
        }
        case 'switch': {
          const { offText = 'OFF', onText = 'ON' } = item.options;
          control = <PalWorldSwitch offText={offText} onText={onText} />;
          break;
        }
        case 'segmented': {
          const { options } = item;
          control = <PalWorldSegmented options={options} />;
          break;
        }
      }
      return (
        <Form.Item
          key={key}
          label={<div style={{ color: 'white' }}>{label}</div>}
          name={key}
          style={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          {control}
        </Form.Item>
      );
    });
    return nodes;
  }, [items]);

  return (
    <>
      <Helmet>
        <title>幻兽帕鲁服务端配置文件编辑器</title>
      </Helmet>
      <Flex style={{ padding: 8 }} gap={8}>
        <Flex flex={1} vertical>
          <Form
            colon={false}
            initialValues={optionSettings}
            labelAlign="left"
            labelCol={{ span: 6 }}
          >
            {formItems}
          </Form>
        </Flex>
        <Flex flex={1}>
          <Input.TextArea disabled />
        </Flex>
      </Flex>
    </>
  );
};

export default Page;
