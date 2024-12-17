// import type { Props as FormItemProps } from "@/components/palworld-ui/FormItem";

import type { SliderFeature } from "@/components/palworld-ui/Slider";
import {
  AllowConnectPlatform,
  DeathPenalty,
  LogFormatType,
} from "./palworld-schema";

const RATE_05_30: SliderFeature = {
  min: 0.5,
  max: 3,
  step: 0.1,
};

const RATE_01_50: SliderFeature = {
  min: 0.1,
  max: 5,
  step: 0.1,
};

const PORT: SliderFeature = {
  min: 1024,
  max: 65535,
  step: 1,
};

export const server = [
  {
    name: "ServerName",
    label: "服务器名称",
    type: "input.text",
  },
  {
    name: "ServerDescription",
    label: "服务器描述",
    type: "input.text",
  },
  {
    name: "AdminPassword",
    label: "管理员密码",
    type: "input.password",
  },
  {
    name: "ServerPassword",
    label: "服务器密码",
    type: "input.password",
  },
  {
    name: "PublicIP",
    label: "服务器地址",
    type: "input.text",
  },
  {
    name: "PublicPort",
    label: "服务器端口",
    type: "input.number",
    ...PORT,
  },
  {
    name: "ServerPlayerMaxNum",
    label: "服务器人数上限",
    type: "slider",
    options: {
      min: 2,
      max: 32,
      step: 1,
    },
  },
  {
    name: "bIsUseBackupSaveData",
    label: "是否开启自动备份",
    type: "switch",
  },
  {
    name: "AutoSaveSpan",
    label: "自动保存间隔",
    type: "segmented",
    options: [
      {
        value: 30,
        label: "30秒",
      },
      {
        value: 60,
        label: "1分钟",
      },
      {
        value: 300,
        label: "5分钟",
      },
      {
        value: 600,
        label: "10分钟",
      },
      {
        value: 900,
        label: "15分钟",
      },
      {
        value: 1800,
        label: "30分钟",
      },
    ],
  },
  {
    name: "AllowConnectPlatform",
    label: "游戏平台",
    type: "segmented",
    options: [
      {
        value: AllowConnectPlatform.Steam,
        label: "Steam",
      },
      {
        value: AllowConnectPlatform.Xbox,
        label: "Xbox",
      },
    ],
  },
  {
    name: "LogFormatType",
    label: "日志格式",
    type: "segmented",
    options: [
      {
        value: LogFormatType.Text,
        label: "文本",
      },
      {
        value: LogFormatType.Json,
        label: "JSON",
      },
    ],
  },
  {
    name: "RCONEnabled",
    label: "是否启用 RCON",
    type: "switch",
  },
  {
    name: "RCONPort",
    label: "RCON 端口",
    type: "input.number",
    ...PORT,
  },
  {
    name: "Region",
    label: "服务器区域",
    type: "input.text",
  },
  {
    name: "bUseAuth",
    label: "是否启用正版认证",
    type: "switch",
  },
  {
    name: "BanListURL",
    label: "黑名单",
    type: "input.text",
  },
  {
    name: "RESTAPIEnabled",
    label: "是否启用 REST API",
    type: "switch",
  },
  {
    name: "RESTAPIPort",
    label: "REST API 端口",
    type: "input.number",
    ...PORT,
  },
  {
    name: "bShowPlayerList",
    label: "是否显示玩家列表",
    type: "switch",
  },
  {
    name: "ChatPostLimitPerMinute",
    label: "聊天频次限制（每分钟条数）",
    type: "slider",
    min: 1,
    max: 10,
    step: 1,
  },
];

export const difficulty = [
  {
    name: "DayTimeSpeedRate",
    label: "白天流逝速度",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "NightTimeSpeedRate",
    label: "夜晚流逝速度",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "ExpRate",
    label: "经验值倍率",
    type: "slider",
    min: 0.1,
    max: 20,
    step: 0.1,
  },
  {
    name: "PalCaptureRate",
    label: "捕获概率倍率",
    type: "slider",
    min: 0.5,
    max: 2,
    step: 0.1,
  },
  {
    name: "PalSpawnNumRate",
    label: "帕鲁刷新数量倍率",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "PalDamageRateAttack",
    label: "帕鲁攻击伤害倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PalDamageRateDefense",
    label: "帕鲁承受伤害倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PalStomachDecreaceRate",
    label: "帕鲁饱食度降低倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PalStaminaDecreaceRate",
    label: "帕鲁耐力降低倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PalAutoHPRegeneRate",
    label: "帕鲁生命值自然回复倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PalAutoHpRegeneRateInSleep",
    label: "帕鲁睡眠时生命值回复倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PlayerDamageRateAttack",
    label: "玩家攻击伤害倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PlayerDamageRateDefense",
    label: "玩家承受伤害倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PlayerStomachDecreaceRate",
    label: "玩家饱食度降低倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PlayerStaminaDecreaceRate",
    label: "玩家耐力降低倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PlayerAutoHPRegeneRate",
    label: "玩家生命值自然回复倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "PlayerAutoHpRegeneRateInSleep",
    label: "玩家睡眠时生命值回复倍率",
    type: "slider",
    ...RATE_01_50,
  },
  {
    name: "BuildObjectDamageRate",
    label: "对建筑伤害倍率",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "BuildObjectDeteriorationDamageRate",
    label: "建筑物的劣化速度倍率",
    type: "slider",
    min: 0,
    max: 10,
    step: 0.1,
  },
  {
    name: "DropItemMaxNum",
    label: "世界内的掉落物上限",
    type: "slider",
    min: 0,
    max: 5000,
    step: 1,
  },
  {
    name: "CollectionDropRate",
    label: "道具采集量倍率",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "CollectionObjectHpRate",
    label: "可采集物品生命值倍率",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "CollectionObjectRespawnSpeedRate",
    label: "可采集物品刷新间隔",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "EnemyDropItemRate",
    label: "道具掉落量倍率",
    type: "slider",
    ...RATE_05_30,
  },
  {
    name: "SupplyDropSpan",
    label: "陨石·补给物资的空投间隔（分）",
    type: "slider",
    min: 1,
    max: 999,
    step: 1,
  },
  {
    name: "PalEggDefaultHatchingTime",
    label: "巨大蛋孵化所需时间（小时）",
    type: "slider",
    min: 0,
    max: 240,
    step: 1,
  },
  {
    name: "bEnableInvaderEnemy",
    label: "是否会发生袭击事件？",
    type: "switch",
  },
  {
    name: "DeathPenalty",
    label: "死亡惩罚",
    type: "segmented",
    options: [
      {
        value: DeathPenalty.None,
        label: "不掉落任何东西",
      },
      {
        value: DeathPenalty.Item,
        label: "掉落装备以外的道具",
      },
      {
        value: DeathPenalty.ItemAndEquipment,
        label: "掉落所有道具",
      },
      {
        value: DeathPenalty.All,
        label: "掉落所有道具及队伍内帕鲁",
      },
    ],
  },
  {
    name: "GuildPlayerMaxNum",
    label: "公会人数上限",
    type: "slider",
    min: 1,
    max: 100,
    step: 1,
  },
  {
    name: "BaseCampMaxNumInGuild",
    label: "各公会的最大据点数",
    type: "slider",
    min: 3,
    max: 10,
    step: 1,
  },
  {
    name: "BaseCampWorkerMaxNum",
    label: "据点工作帕鲁最大数",
    type: "slider",
    min: 1,
    max: 50,
    step: 1,
  },
];

export const other = [
  {
    name: "bEnablePlayerToPlayerDamage",
    label: "允许玩家相互攻击",
    type: "switch",
  },
  {
    name: "bEnableFriendlyFire",
    label: "允许友军伤害",
    type: "switch",
  },
  {
    name: "bActiveUNKO",
    label: "允许生成大便",
    type: "switch",
  },
  {
    name: "bEnableAimAssistPad",
    label: "启用辅助瞄准（手柄）",
    type: "switch",
  },
  {
    name: "bEnableAimAssistKeyboard",
    label: "启用辅助瞄准（键鼠）",
    type: "switch",
  },
  {
    name: "DropItemMaxNum_UNKO",
    label: "世界内大便上限",
    type: "slider",
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: "BaseCampMaxNum",
    label: "营地数量上限",
    type: "slider",
    min: 1,
    max: 128,
    step: 1,
  },
  {
    name: "DropItemAliveMaxHours",
    label: "掉落物保留时间（小时）",
    type: "slider",
    min: 1,
    max: 2,
    step: 0.1,
  },
  {
    name: "bAutoResetGuildNoOnlinePlayers",
    label: "自动解散不活跃公会",
    type: "switch",
  },
  {
    name: "AutoResetGuildTimeNoOnlinePlayers",
    label: "无在线玩家公会自动解散时间（小时）",
    type: "slider",
    min: 24,
    max: 72,
    step: 0.1,
  },
  {
    name: "WorkSpeedRate",
    label: "工作速度倍率",
    type: "slider",
    min: 1,
    max: 2,
    step: 0.1,
  },
  {
    name: "bIsMultiplay",
    label: "是否为多人游戏模式",
    type: "switch",
  },
  {
    name: "bIsPvP",
    label: "是否允许PVP",
    type: "switch",
  },
  {
    name: "bCanPickupOtherGuildDeathPenaltyDrop",
    label: "是否允许拾取其他公会玩家死亡惩罚掉落物",
    type: "switch",
  },
  {
    name: "bEnableNonLoginPenalty",
    label: "是否开启未登录惩罚",
    type: "switch",
  },
  {
    name: "bEnableFastTravel",
    label: "是否开启快速旅行",
    type: "switch",
  },
  {
    name: "bIsStartLocationSelectByMap",
    label: "是否允许选择出生点",
    type: "switch",
  },
  {
    name: "bExistPlayerAfterLogout",
    label: "玩家登出后角色是否留在原地",
    type: "switch",
  },
  {
    name: "bEnableDefenseOtherGuildPlayer",
    label: "是否允许攻击其他公会玩家",
    type: "switch",
  },
  {
    name: "bInvisibleOtherGuildBaseCampAreaFX",
    label: "是否隐藏其他公会的营地范围",
    type: "switch",
  },
  {
    name: "CoopPlayerMaxNum",
    label: "玩家小队人数上限",
    type: "slider",
    min: 2,
    max: 4,
    step: 1,
  },
];
