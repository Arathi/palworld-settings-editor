import Button from '@/components/Button';
import Segmented from '@/components/Segmented';
import type FormItemProps from '@/domains/form-item';
import {
  DeathPenalty,
  DefaultOptionSettings,
  Difficulty,
} from '@/domains/option-settings';
import { Helmet } from '@modern-js/runtime/head';
import { Flex, Form, Input } from 'antd';
import { useState } from 'react';
import './index.less';
import Slider from '@/components/Slider';
import Switch from '@/components/Switch';

const Page = () => {
  const [optionSettings, setOptionSettings] = useState(DefaultOptionSettings);

  const backgroundSrc =
    'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/library_hero.jpg?t=1728458550';

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function onOptionSettingsChange(changedValues: any, allValues: any) {
    setOptionSettings({
      ...optionSettings,
      ...changedValues,
    });
  }

  const items: FormItemProps[] = [
    // 小数
    {
      name: 'DayTimeSpeedRate',
      label: '白天流逝速度',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    // 整数
    {
      name: 'DropItemMaxNum',
      label: '世界内的掉落物上限',
      type: 'slider',
      options: {
        min: 0,
        max: 5000,
        step: 10,
      },
    },
    // 开关
    {
      name: 'bEnableInvaderEnemy',
      label: '是否会发生袭击事件？',
      type: 'switch',
      options: {
        off: 'OFF',
        on: 'ON',
      },
    },
    // 选择
    {
      name: 'DeathPenalty',
      label: '死亡惩罚',
      type: 'segmented',
      options: [
        {
          value: DeathPenalty.None,
          label: '不掉落任何东西',
        },
        {
          value: DeathPenalty.Item,
          label: '掉落装备以外的道具',
        },
        {
          value: DeathPenalty.ItemAndEquipment,
          label: '掉落所有道具',
        },
        {
          value: DeathPenalty.All,
          label: '掉落所有道具及队伍内帕鲁',
        },
      ],
    },
  ];

  const difficultyItems: React.ReactNode[] = items.map(item => {
    let control: React.ReactNode = null;
    switch (item.type) {
      case 'slider': {
        control = <Slider {...item.options} />;
        break;
      }
      case 'segmented': {
        control = <Segmented options={item.options} />;
        break;
      }
      case 'switch': {
        control = <Switch />;
        break;
      }
    }
    return (
      <Form.Item
        key={item.name}
        name={item.name}
        label={item.label}
        className="pwc-form-item"
      >
        {control}
      </Form.Item>
    );
  });

  return (
    <>
      <Helmet>
        <title>配置文件编辑器</title>
      </Helmet>
      <div className="editor-page">
        <div className="background">
          <img alt="palworld-background" src={backgroundSrc} height={919} />
        </div>
        <div className="scanlines" />
        <div className="frontground">
          <Form
            className="world-setting"
            labelCol={{ span: 12 }}
            labelAlign="left"
            colon={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            initialValues={optionSettings}
            onValuesChange={(changedValues, allValues) => {
              console.info('changedValues = ', changedValues);
              console.info('allValues = ', allValues);
              onOptionSettingsChange(changedValues, allValues);
            }}
          >
            <Form.Item
              name="Difficulty"
              label="难度"
              className="pwc-form-item difficulty-selector"
            >
              <Segmented
                options={[
                  { value: Difficulty.Casual, label: '休闲' },
                  { value: Difficulty.Normal, label: '普通' },
                  { value: Difficulty.Hard, label: '困难' },
                  { value: Difficulty.None, label: '自定义' },
                ]}
              />
            </Form.Item>
            <div className="difficulty-settings">{difficultyItems}</div>
            <div className="divider" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button>预览</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Page;
