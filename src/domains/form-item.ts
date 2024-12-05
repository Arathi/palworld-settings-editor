import type { SegmentedOptions } from '@/components/Segmented';
import type { SliderOptions } from '@/components/Slider';
import type { SwitchOptions } from '@/components/Switch';
import type OptionSettings from './option-settings';
import { DeathPenalty } from './option-settings';

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

// #region 表单项
export const DifficutyFormItems: FormItemProps[] = [
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
