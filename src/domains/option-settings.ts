// Palworld Settings Schema
type float = number;
type int = number;

// #region Enums
export enum Difficulty {
  Casual = 'Casual',
  Normal = 'Normal',
  Hard = 'Hard',
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
  DropItemMaxNum: int;
  DropItemMaxNum_UNKO: int;
  BaseCampMaxNum: int;
  BaseCampWorkerMaxNum: int;
  DropItemAliveMaxHours: float;
  bAutoResetGuildNoOnlinePlayers: boolean;
  AutoResetGuildTimeNoOnlinePlayers: float;
  GuildPlayerMaxNum: int;
  BaseCampMaxNumInGuild: int;
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
  CoopPlayerMaxNum: int;
  ServerPlayerMaxNum: int;
  ServerName: string;
  ServerDescription: string;
  AdminPassword: string;
  ServerPassword: string;
  PublicPort: int;
  PublicIP: string;
  RCONEnabled: boolean;
  RCONPort: int;
  Region: string;
  bUseAuth: boolean;
  BanListURL: string;
  RESTAPIEnabled: boolean;
  RESTAPIPort: int;
  bShowPlayerList: boolean;
  ChatPostLimitPerMinute: int;
  AllowConnectPlatform: AllowConnectPlatform;
  bIsUseBackupSaveData: boolean;
  LogFormatType: LogFormatType;
  SupplyDropSpan: int;
}
// #endregion

const True = true;
const False = false;

// #region DefaultOptionSettings
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
// Generated at 2024-12-02T06:53:42.217Z
