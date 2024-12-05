import { DifficultyFormItems } from './form-item';
import type OptionSettings from './option-settings';
import { DefaultOptionSettings } from './option-settings';
import { DeathPenalty } from './option-settings';

let Default: Partial<OptionSettings> = {};
DifficultyFormItems.forEach((item, index) => {
  const { name } = item;
  Default = {
    ...Default,
    [name]: DefaultOptionSettings[name],
  };
});

export const Casual: Partial<OptionSettings> = {
  ...Default,
  ExpRate: 1.3,
  PlayerDamageRateAttack: 1.5,
  PlayerDamageRateDefense: 0.7,
  CollectionDropRate: 2,
  EnemyDropItemRate: 2,
  PalEggDefaultHatchingTime: 0,
  DeathPenalty: DeathPenalty.None,
};

export const Normal: Partial<OptionSettings> = {
  ...Default,
  PalEggDefaultHatchingTime: 2,
  DeathPenalty: DeathPenalty.ItemAndEquipment,
};

export const Hard: Partial<OptionSettings> = {
  ...Default,
  ExpRate: 0.8,
  PalCaptureRate: 0.8,
  PlayerDamageRateAttack: 0.5,
  PlayerDamageRateDefense: 4,
  CollectionDropRate: 0.5,
  EnemyDropItemRate: 0.5,
  PalEggDefaultHatchingTime: 4,
  DeathPenalty: DeathPenalty.All,
};
