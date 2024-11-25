// PalWorldSettings Schema

// #region Types
type integer = number;
type float = number;
// #endregion

// #region Enums
export enum Difficulty {
  None = 'None',
}
export enum DeathPenalty {
  None = 'None',
  Item = 'Item',
  ItemAndEquipment = 'ItemAndEquipment',
  All = 'All',
}
export enum AllowConnectPlatform {
  Steam = 'Steam',
  Xbox = 'Xbox',
}
export enum LogFormatType {
  Text = 'Text',
  Json = 'Json',
}
// #endregion

// #region OptionSettings
export default interface OptionSettings {
  Difficulty: Difficulty;
  DayTimeSpeedRate: float;
  NightTimeSpeedRate: float;
  ExpRate: float;
  PalCaptureRate: float;
  PalSpawnNumRate: float;
  PalDamageRateAttack: float;
  PalDamageRateDefense: float;
  PlayerDamageRateAttack: float;
  PlayerDamageRateDefense: float;
  PlayerStomachDecreaceRate: float;
  PlayerStaminaDecreaceRate: float;
  PlayerAutoHPRegeneRate: float;
  PlayerAutoHpRegeneRateInSleep: float;
  PalStomachDecreaceRate: float;
  PalStaminaDecreaceRate: float;
  PalAutoHPRegeneRate: float;
  PalAutoHpRegeneRateInSleep: float;
  BuildObjectDamageRate: float;
  BuildObjectDeteriorationDamageRate: float;
  CollectionDropRate: float;
  CollectionObjectHpRate: float;
  CollectionObjectRespawnSpeedRate: float;
  EnemyDropItemRate: float;
  DeathPenalty: DeathPenalty;
  bEnablePlayerToPlayerDamage: boolean;
  bEnableFriendlyFire: boolean;
  bEnableInvaderEnemy: boolean;
  bActiveUNKO: boolean;
  bEnableAimAssistPad: boolean;
  bEnableAimAssistKeyboard: boolean;
  DropItemMaxNum: integer;
  DropItemMaxNum_UNKO: integer;
  BaseCampMaxNum: integer;
  BaseCampWorkerMaxNum: integer;
  DropItemAliveMaxHours: float;
  bAutoResetGuildNoOnlinePlayers: boolean;
  AutoResetGuildTimeNoOnlinePlayers: float;
  GuildPlayerMaxNum: integer;
  BaseCampMaxNumInGuild: integer;
  PalEggDefaultHatchingTime: float;
  WorkSpeedRate: float;
  AutoSaveSpan: float;
  bIsMultiplay: boolean;
  bIsPvP: boolean;
  bCanPickupOtherGuildDeathPenaltyDrop: boolean;
  bEnableNonLoginPenalty: boolean;
  bEnableFastTravel: boolean;
  bIsStartLocationSelectByMap: boolean;
  bExistPlayerAfterLogout: boolean;
  bEnableDefenseOtherGuildPlayer: boolean;
  bInvisibleOtherGuildBaseCampAreaFX: boolean;
  CoopPlayerMaxNum: integer;
  ServerPlayerMaxNum: integer;
  ServerName: string;
  ServerDescription: string;
  AdminPassword: string;
  ServerPassword: string;
  PublicPort: integer;
  PublicIP: string;
  RCONEnabled: boolean;
  RCONPort: integer;
  Region: string;
  bUseAuth: boolean;
  BanListURL: string;
  RESTAPIEnabled: boolean;
  RESTAPIPort: integer;
  bShowPlayerList: boolean;
  ChatPostLimitPerMinute: integer;
  AllowConnectPlatform: AllowConnectPlatform;
  bIsUseBackupSaveData: boolean;
  LogFormatType: LogFormatType;
  SupplyDropSpan: integer;
}
// #endregion

// #region Constants
const True = true;
const False = false;
export const DefaultOptionSettings: OptionSettings = {
  Difficulty: Difficulty.None,
  DayTimeSpeedRate: 1.0,
  NightTimeSpeedRate: 1.0,
  ExpRate: 1.0,
  PalCaptureRate: 1.0,
  PalSpawnNumRate: 1.0,
  PalDamageRateAttack: 1.0,
  PalDamageRateDefense: 1.0,
  PlayerDamageRateAttack: 1.0,
  PlayerDamageRateDefense: 1.0,
  PlayerStomachDecreaceRate: 1.0,
  PlayerStaminaDecreaceRate: 1.0,
  PlayerAutoHPRegeneRate: 1.0,
  PlayerAutoHpRegeneRateInSleep: 1.0,
  PalStomachDecreaceRate: 1.0,
  PalStaminaDecreaceRate: 1.0,
  PalAutoHPRegeneRate: 1.0,
  PalAutoHpRegeneRateInSleep: 1.0,
  BuildObjectDamageRate: 1.0,
  BuildObjectDeteriorationDamageRate: 1.0,
  CollectionDropRate: 1.0,
  CollectionObjectHpRate: 1.0,
  CollectionObjectRespawnSpeedRate: 1.0,
  EnemyDropItemRate: 1.0,
  DeathPenalty: DeathPenalty.All,
  bEnablePlayerToPlayerDamage: False,
  bEnableFriendlyFire: False,
  bEnableInvaderEnemy: True,
  bActiveUNKO: False,
  bEnableAimAssistPad: True,
  bEnableAimAssistKeyboard: False,
  DropItemMaxNum: 3000,
  DropItemMaxNum_UNKO: 100,
  BaseCampMaxNum: 128,
  BaseCampWorkerMaxNum: 15,
  DropItemAliveMaxHours: 1.0,
  bAutoResetGuildNoOnlinePlayers: False,
  AutoResetGuildTimeNoOnlinePlayers: 72.0,
  GuildPlayerMaxNum: 20,
  BaseCampMaxNumInGuild: 4,
  PalEggDefaultHatchingTime: 72.0,
  WorkSpeedRate: 1.0,
  AutoSaveSpan: 30.0,
  bIsMultiplay: False,
  bIsPvP: False,
  bCanPickupOtherGuildDeathPenaltyDrop: False,
  bEnableNonLoginPenalty: True,
  bEnableFastTravel: True,
  bIsStartLocationSelectByMap: True,
  bExistPlayerAfterLogout: False,
  bEnableDefenseOtherGuildPlayer: False,
  bInvisibleOtherGuildBaseCampAreaFX: False,
  CoopPlayerMaxNum: 4,
  ServerPlayerMaxNum: 32,
  ServerName: 'Default Palworld Server',
  ServerDescription: '',
  AdminPassword: '',
  ServerPassword: '',
  PublicPort: 8211,
  PublicIP: '',
  RCONEnabled: False,
  RCONPort: 25575,
  Region: '',
  bUseAuth: True,
  BanListURL: 'https://api.palworldgame.com/api/banlist.txt',
  RESTAPIEnabled: False,
  RESTAPIPort: 8212,
  bShowPlayerList: False,
  ChatPostLimitPerMinute: 10,
  AllowConnectPlatform: AllowConnectPlatform.Steam,
  bIsUseBackupSaveData: True,
  LogFormatType: LogFormatType.Text,
  SupplyDropSpan: 180,
};
// #endregion

// generated at 2024-11-25T15:29:46.947Z
