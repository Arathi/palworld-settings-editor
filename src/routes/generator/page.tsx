import Tags from '@/components/Tags';
import { Helmet } from '@modern-js/runtime/head';
import MonacoEditor from '@monaco-editor/react';
import {
  Button,
  Divider,
  Flex,
  Input,
  Table,
  type TableProps,
  notification,
} from 'antd';
import { useMemo, useState } from 'react';

import './index.less';

const defaults = `; This configuration file is a sample of the default server settings.
; Changes to this file will NOT be reflected on the server.
; To change the server settings, modify Pal/Saved/Config/LinuxServer/PalWorldSettings.ini.
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,BaseCampMaxNumInGuild=4,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,AutoSaveSpan=30.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="Default Palworld Server",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",RESTAPIEnabled=False,RESTAPIPort=8212,bShowPlayerList=False,ChatPostLimitPerMinute=10,AllowConnectPlatform=Steam,bIsUseBackupSaveData=True,LogFormatType=Text,SupplyDropSpan=180)`;

const TagColors = [
  'blue',
  'purple',
  'cyan',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'volcano',
  'geekblue',
  'lime',
  'gold',
];

type Property = {
  name: string;
  type: string;
  value: string;
};

const Page = () => {
  const [configure] = useState<string>(defaults);
  const [enums, setEnums] = useState<Record<string, string[]>>({
    Difficulty: ['Casual', 'Normal', 'Hard', 'None'],
    DeathPenalty: ['None', 'Item', 'ItemAndEquipment', 'All'],
    AllowConnectPlatform: ['Steam', 'Xbox'],
    LogFormatType: ['Text', 'Json'],
  });

  const columns: TableProps<Property>['columns'] = [
    {
      key: 'name',
      title: '属性',
      width: 240,
      dataIndex: 'name',
    },
    {
      key: 'type',
      title: '类型',
      width: 240,
      dataIndex: 'type',
      render: type => {
        let color = 'red';
        if (
          type === 'float' ||
          type === 'int' ||
          type === 'bool' ||
          type === 'string'
        ) {
          color = 'green';
        }
        if (enums[type] !== undefined) {
          color = 'blue';
        }
        if (type === 'unknown') {
          color = 'red';
        }
        return <span style={{ color }}>{type}</span>;
      },
    },
    {
      key: 'value',
      title: '默认值',
      dataIndex: 'value',
    },
  ];

  const properties = useMemo(() => {
    const list: Property[] = [];
    const lines = configure.split('\n');
    for (const line of lines) {
      if (line.startsWith('OptionSettings=(') && line.endsWith(')')) {
        const optionSettings = line.substring(16, line.length - 1);
        console.debug('optionSettings = ', optionSettings);
        const pairs = optionSettings.split(',');
        console.debug('pairs = ', pairs);
        for (const pair of pairs) {
          const [name, value] = pair.split('=');
          const type = parseType(name, value);
          list.push({
            name,
            type,
            value,
          });
        }
      }
    }
    return list;
  }, [configure]);

  function parseType(name: string, value: string) {
    const num = Number.parseFloat(value);
    if (!Number.isNaN(num)) {
      if (value.indexOf('.') >= 0) {
        return 'float';
      }
      return 'int';
    }
    if (value === 'True' || value === 'False') {
      return 'boolean';
    }
    if (value.startsWith('"') && value.endsWith('"')) {
      return 'string';
    }
    const enumValues = enums[name];
    if (enumValues !== undefined) {
      return name;
    }
    return 'unknown';
  }

  function updateEnum(name: string, values: string[]) {
    setEnums({
      ...enums,
      [name]: values,
    });
  }

  const enumList = useMemo(() => {
    const list: React.ReactNode[] = [];
    const names = Object.keys(enums);
    names.forEach((name, index) => {
      list.push(
        <Tags
          key={name}
          name={name}
          color={TagColors[index % TagColors.length]}
          values={enums[name]}
          onChange={values => {
            // updateEnum(name, values);
          }}
        />,
      );
    });
    return list;
  }, [enums]);

  const EnumsDeclare = useMemo(() => {
    const list: string[] = [];
    const names = Object.keys(enums);
    for (const name of names) {
      list.push(`export enum ${name} {`);
      for (const value of enums[name]) {
        list.push(`  ${value} = '${value}',`);
      }
      list.push('}');
    }
    return list;
  }, [enums]);

  const OptionSettings = useMemo<string[]>(() => {
    const lines: string[] = [];
    properties.forEach((property, index) => {
      lines.push(`${property.name}: ${property.type};`);
    });
    return lines;
  }, [properties]);

  const DefaultValues = useMemo<string[]>(() => {
    const lines: string[] = [];
    properties.forEach((property, index) => {
      let value = property.value;
      if (enums[property.type] !== undefined) {
        value = `${property.type}.${property.value}`;
      }
      lines.push(`${property.name}: ${value},`);
    });
    return lines;
  }, [properties, enums]);

  const schema = useMemo(() => {
    return `// Palworld Settings Schema
type float = number;
type int = number;

// #region Enums
${EnumsDeclare.join('\n')}
// #endregion

// #region OptionSettings
export default interface OptionSettings {
  ${OptionSettings.join('\n  ')}
}
// #endregion

const True = true;
const False = false;

// #region DefaultOptionSettings
export const DefaultOptionSettings: OptionSettings = {
  ${DefaultValues.join('\n  ')}
};
// #endregion
// Generated at ${new Date().toISOString()}`;
  }, [EnumsDeclare, OptionSettings, DefaultValues]);

  function onCopyClick() {
    navigator.clipboard.writeText(schema);
    notification.info({ message: '复制成功' });
  }

  return (
    <>
      <Helmet>
        <title>配置文件数据结构生成器</title>
      </Helmet>
      <Flex
        justify="center"
        className="generator-page"
        style={{ height: '100vh' }}
      >
        <Flex
          vertical
          gap={8}
          style={{ width: 1280, height: '100%', overflowY: 'scroll' }}
        >
          <Flex>
            <Input.TextArea value={configure} disabled />
          </Flex>
          <Flex flex={1} gap={8}>
            <Flex vertical flex={1}>
              <Flex vertical gap={8}>
                {enumList}
              </Flex>
              <Divider />
              <Table
                columns={columns}
                dataSource={properties}
                size="small"
                pagination={false}
                style={{ flex: 1 }}
              />
            </Flex>
            <Flex flex={1} vertical gap={8} style={{ height: '100%' }}>
              <Flex justify="end">
                <Button onClick={onCopyClick}>复制</Button>
              </Flex>
              <Flex flex={1}>
                <MonacoEditor
                  defaultLanguage="typescript"
                  defaultValue={schema}
                  theme="vs-dark"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Page;
