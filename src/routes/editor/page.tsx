import Button from '@/components/Button';
import Segmented from '@/components/Segmented';
import Slider from '@/components/Slider';
import Switch from '@/components/Switch';
import type FormItemProps from '@/domains/form-item';
import {
  DeathPenalty,
  DefaultOptionSettings,
  Difficulty,
} from '@/domains/option-settings';
import { useWindowSize } from '@/hooks/window-size';
import { Helmet } from '@modern-js/runtime/head';
import { Flex, Form } from 'antd';
import { useState } from 'react';

import './index.less';

const Page = () => {
  const windowSize = useWindowSize();
  const [optionSettings, setOptionSettings] = useState(DefaultOptionSettings);

  const backgroundSrc =
    'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/library_hero.jpg';

  const headerHeight = 64;
  const footerHeight = 64;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function onOptionSettingsChange(changedValues: any, allValues: any) {
    setOptionSettings({
      ...optionSettings,
      ...changedValues,
    });
  }

  // #region 表单项
  const items: FormItemProps[] = [
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
    {
      name: 'NightTimeSpeedRate',
      label: '夜晚流逝速度',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    // TODO 自动保存间隔
    {
      name: 'ExpRate',
      label: '经验值倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 20,
        step: 0.1,
      },
    },
    {
      name: 'PalCaptureRate',
      label: '捕获概率倍率',
      type: 'slider',
      options: {
        min: 0.5,
        max: 2,
        step: 0.1,
      },
    },
    {
      name: 'PalSpawnNumRate',
      label: '帕鲁刷新数量倍率',
      type: 'slider',
      options: {
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
    {
      name: 'PalDamageRateAttack',
      label: '帕鲁攻击伤害倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PalDamageRateDefense',
      label: '帕鲁承受伤害倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PalStomachDecreaceRate',
      label: '帕鲁饱食度降低倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PalStaminaDecreaceRate',
      label: '帕鲁耐力降低倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PalAutoHPRegeneRate',
      label: '帕鲁生命值自然回复倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PalAutoHpRegeneRateInSleep',
      label: '帕鲁睡眠时生命值回复倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PlayerDamageRateAttack',
      label: '帕鲁攻击伤害倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PlayerDamageRateDefense',
      label: '帕鲁承受伤害倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PlayerStomachDecreaceRate',
      label: '帕鲁饱食度降低倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PlayerStaminaDecreaceRate',
      label: '帕鲁耐力降低倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PlayerAutoHPRegeneRate',
      label: '帕鲁生命值自然回复倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    {
      name: 'PlayerAutoHpRegeneRateInSleep',
      label: '帕鲁睡眠时生命值回复倍率',
      type: 'slider',
      options: {
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    },
    // ----
    {
      name: 'BuildObjectDamageRate',
      label: '对建筑伤害倍率',
      type: 'slider',
      options: {
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
    {
      name: 'BuildObjectDeteriorationDamageRate',
      label: '建筑物的劣化速度倍率',
      type: 'slider',
      options: {
        min: 0,
        max: 10,
        step: 0.1,
      },
    },
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
    {
      name: 'CollectionDropRate',
      label: '道具采集量倍率',
      type: 'slider',
      options: {
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
    {
      name: 'CollectionObjectHpRate',
      label: '可采集物品生命值倍率',
      type: 'slider',
      options: {
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
    {
      name: 'CollectionObjectRespawnSpeedRate',
      label: '可采集物品刷新间隔',
      type: 'slider',
      options: {
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
    {
      name: 'EnemyDropItemRate',
      label: '道具掉落量倍率',
      type: 'slider',
      options: {
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
    {
      name: 'PalEggDefaultHatchingTime',
      label: '巨大蛋孵化所需时间（小时）',
      type: 'slider',
      options: {
        min: 0,
        max: 240,
        step: 1,
      },
    },
    {
      name: 'bEnableInvaderEnemy',
      label: '是否会发生袭击事件？',
      type: 'switch',
      options: {
        off: '否',
        on: '是',
      },
    },
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
    {
      name: 'GuildPlayerMaxNum',
      label: '公会人数上限',
      type: 'slider',
      options: {
        min: 1,
        max: 100,
        step: 1,
      },
    },
    {
      name: 'BaseCampMaxNumInGuild',
      label: '各公会的最大据点数',
      type: 'slider',
      options: {
        min: 3,
        max: 10,
        step: 1,
      },
    },
    {
      name: 'BaseCampWorkerMaxNum',
      label: '据点工作帕鲁最大数',
      type: 'slider',
      options: {
        min: 1,
        max: 50,
        step: 1,
      },
    },
  ];
  // #endregion

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
        control = <Switch {...item.options} />;
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
            initialValues={optionSettings}
            onValuesChange={(changedValues, allValues) => {
              console.info('changedValues = ', changedValues);
              console.info('allValues = ', allValues);
              onOptionSettingsChange(changedValues, allValues);
            }}
            style={{ width: 1280, height: windowSize.height }}
          >
            <div className="header">
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
            </div>
            <div
              className="difficulty-settings"
              style={{
                // width: 1200,
                overflowX: 'hidden',
                overflowY: 'auto',
                height: windowSize.height - headerHeight - footerHeight,
              }}
            >
              {difficultyItems}
            </div>
            <div className="footer">
              <Flex>
                <Button>预览</Button>
              </Flex>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Page;
