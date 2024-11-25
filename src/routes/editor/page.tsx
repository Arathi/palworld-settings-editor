import type OptionSettings from '@/domains/palworld-settings';
import {
  DeathPenalty,
  DefaultOptionSettings,
  Difficulty,
} from '@/domains/palworld-settings';
import { Helmet } from '@modern-js/runtime/head';
import { Flex, Form, Input, Radio, Slider, Switch } from 'antd';
import { useMemo, useState } from 'react';

type FormItemProps<T = OptionSettings> = {
  key: keyof T;
  label: string;
  defaultValue?: T[keyof T];
} & (SliderProps | SwitchProps | RadiosProps);

type SliderProps = {
  type: 'slider';
  min: number;
  max: number;
  step: number | null;
};

type SwitchProps = {
  type: 'switch';
  offText?: string;
  onText?: string;
};

type RadiosProps = {
  type: 'radios';
  options: {
    value: string;
    label?: React.ReactNode;
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
      type: 'radios',
      options: [
        {
          value: Difficulty.None,
          label: '自定义',
        },
      ],
    },
    {
      key: 'DayTimeSpeedRate',
      label: '白天速度',
      type: 'slider',
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    {
      key: 'DeathPenalty',
      label: '死亡惩罚',
      type: 'radios',
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
      offText: 'OFF',
      onText: 'ON',
    },
  ]);

  const formItems = useMemo<React.ReactNode[]>(() => {
    const nodes: React.ReactNode[] = items.map(item => {
      let input: React.ReactNode = null;
      const { type, key, label } = item;
      switch (type) {
        case 'slider':
          // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
          const { min, max, step } = item;
          input = <Slider min={min} max={max} step={step} />;
          break;
        case 'switch':
          // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
          const { offText = 'OFF', onText = 'ON' } = item;
          input = <Switch />;
          break;
        case 'radios':
          // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
          const { options } = item;
          input = <Radio.Group optionType="button" options={options} />;
          break;
      }
      return (
        <Form.Item key={key} label={label} name={key}>
          {input}
        </Form.Item>
      );
    });
    return nodes;
    // return [];
  }, [items]);

  return (
    <>
      <Helmet>
        <title>幻兽帕鲁服务端配置文件编辑器</title>
      </Helmet>
      <Flex>
        <Flex flex={1} vertical>
          <Form initialValues={optionSettings} labelCol={{ span: 6 }}>
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
