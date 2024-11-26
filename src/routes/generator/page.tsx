import { Helmet } from '@modern-js/runtime/head';
import { Button, Flex, Input, Table, type TableProps, Upload } from 'antd';
import { useMemo, useState } from 'react';

const DefaultOptionSettingsText =
  'Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,BaseCampMaxNumInGuild=4,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,AutoSaveSpan=30.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="Default Palworld Server",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",RESTAPIEnabled=False,RESTAPIPort=8212,bShowPlayerList=False,ChatPostLimitPerMinute=10,AllowConnectPlatform=Steam,bIsUseBackupSaveData=True,LogFormatType=Text,SupplyDropSpan=180';

type Property = {
  key: string;
  type: ValueType;
  value: string;
} & (NumberOptions | BooleanOptions);

interface NumberOptions {
  type: 'integer' | 'float';
  min: number;
  max: number;
  step?: number;
}

interface BooleanOptions {
  type: 'boolean';
  offText?: string;
  onText?: string;
}

type ValueType =
  | 'integer'
  | 'float'
  | 'string'
  | 'boolean'
  | 'unknown'
  | string;

function declareEnum(name: string, values: string[]) {
  return `export enum ${name} {
${values
  .map(value => {
    return `  ${value} = '${value}',`;
  })
  .join('\n')}
}`;
}

const Page = () => {
  const [optionSettingsText, setOptionSettingsText] = useState(
    DefaultOptionSettingsText,
  );

  const [enums] = useState<Record<string, string[]>>({
    Difficulty: ['None', 'Casual', 'Normal', 'Hard', 'Custom'],
    DeathPenalty: ['None', 'Item', 'ItemAndEquipment', 'All'],
    AllowConnectPlatform: ['Steam', 'Xbox'],
    LogFormatType: ['Text', 'Json'],
  });

  const optionSettingArray = useMemo<Property[]>(() => {
    const pairs = optionSettingsText.split(',');
    const properties: Property[] = [];
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      const numberType = isNumber(value);
      if (numberType !== null) {
        properties.push({
          key,
          type: numberType,
          value,
        });
        continue;
      }

      if (isBoolean(value)) {
        properties.push({
          key,
          type: 'boolean',
          value,
        });
        continue;
      }

      if (isString(value)) {
        properties.push({
          key,
          type: 'string',
          value,
        });
        continue;
      }

      if (isEnum(key, value)) {
        properties.push({
          key,
          type: key,
          value,
        });
        continue;
      }

      console.warn('无效的配置项：', pair);
      properties.push({
        key,
        type: 'unknown',
        value,
      });
    }

    return properties;
  }, [optionSettingsText]);

  const columns: TableProps<Property>['columns'] = [
    {
      key: 'key',
      title: '属性',
      dataIndex: 'key',
    },
    {
      key: 'type',
      title: '类型',
      dataIndex: 'type',
      render: type => {
        let color = 'green';
        switch (type) {
          case 'integer':
          case 'float':
          case 'string':
          case 'boolean':
            color = 'green';
            break;
          case 'unknown':
            color = 'red';
            break;
          default:
            color = 'blue';
            break;
        }
        return (
          <span
            style={{
              color,
            }}
          >
            {type}
          </span>
        );
      },
    },
    {
      key: 'value',
      title: '默认值',
      dataIndex: 'value',
    },
  ];

  const schemas = useMemo(() => {
    const Enums: string[] = [];
    for (const key in enums) {
      const values = enums[key];
      Enums.push(`${declareEnum(key, values)}`);
    }

    const OptionSettings = `export default interface OptionSettings {
${optionSettingArray
  .map(({ key, type }) => {
    return `  ${key}: ${type};`;
  })
  .join('\n')}
}`;

    const DefaultOptionSettings = `export const DefaultOptionSettings: OptionSettings = {
${optionSettingArray
  .map(({ key, type, value }) => {
    let defaultValue = value;
    if (type in enums) {
      defaultValue = `${type}.${value}`;
    }
    return `  ${key}: ${defaultValue},`;
  })
  .join('\n')}
}`;

    return `// PalWorldSettings Schema

// #region Types
type integer = number;
type float = number;
// #endregion

// #region Enums
${Enums.join('\n')}
// #endregion

// #region OptionSettings
${OptionSettings}
// #endregion

// #region Constants
const True = true;
const False = false;
${DefaultOptionSettings}
// #endregion

// generated at ${new Date().toISOString()}`;
  }, [optionSettingArray, enums]);

  function isNumber(input: string): 'integer' | 'float' | null {
    const numeric = Number.parseFloat(input);
    if (Number.isNaN(numeric)) {
      return null;
    }
    const dotIndex = input.indexOf('.');
    if (dotIndex === -1) {
      return 'integer';
    }
    return 'float';
  }

  function isBoolean(input: string) {
    return input === 'True' || input === 'False';
  }

  function isString(input: string) {
    return input.startsWith('"') && input.endsWith('"');
  }

  function isEnum(key: string, value: string) {
    const values = enums[key];
    if (values === undefined) {
      console.info('未找到枚举：', key);
      return false;
    }

    const index = values.indexOf(value);
    if (index === -1) {
      console.info('未找到枚举值：', `${key}.${value}`);
      return false;
    }

    return true;
  }

  return (
    <>
      <Helmet>
        <title>配置文件数据结构生成器</title>
      </Helmet>
      <Flex vertical gap={8} style={{ padding: 8 }}>
        <Flex gap={8} align="center">
          <Input.TextArea
            value={optionSettingsText}
            onChange={e => setOptionSettingsText(e.currentTarget.value)}
          />
          <Upload>
            <Button>打开</Button>
          </Upload>
        </Flex>
        <Flex flex={1} gap={8}>
          <Flex vertical flex={3}>
            <Table
              columns={columns}
              dataSource={optionSettingArray}
              size="small"
              pagination={false}
            />
          </Flex>
          <Flex flex={1}>
            <Input.TextArea value={schemas} disabled />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Page;
