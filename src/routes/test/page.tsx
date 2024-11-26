import Editor, { type Props as EditorProps } from '@/components/Editor';
import PalWorldSegmented from '@/components/Segmented';
import PalWorldSwitch from '@/components/Switch';
import type OptionSettings from '@/domains/palworld-settings';
import {
  DeathPenalty,
  DefaultOptionSettings,
  Difficulty,
} from '@/domains/palworld-settings';
import { Helmet } from '@modern-js/runtime/head';
import { Flex, Form } from 'antd';
import { useMemo } from 'react';

const Page = () => {
  const formItems = useMemo(() => {
    const list: React.ReactNode[] = [];
    return list;
  }, []);

  const editorItems: EditorProps<OptionSettings>['items'] = [
    {
      label: '难度',
      dataIndex: 'Difficulty',
      type: 'segmented',
      options: [
        {
          label: '自定义',
          value: Difficulty.None,
        },
        {
          label: '休闲',
          value: Difficulty.None,
        },
        {
          label: '简单',
          value: Difficulty.None,
        },
        {
          label: '困难',
          value: Difficulty.None,
        },
      ],
    },
    {
      label: '白天流逝速度',
      dataIndex: 'DayTimeSpeedRate',
      type: 'slider',
      options: {
        min: 0.1,
        max: 3,
        step: 0.1,
      },
    },
    {
      label: '是否发生袭击事件？',
      dataIndex: 'bEnableInvaderEnemy',
      type: 'switch',
      options: {
        offText: 'OFF',
        onText: 'ON',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>组件测试</title>
      </Helmet>
      <Flex vertical>
        <PalWorldSegmented
          options={[
            { label: '不掉落任何东西', value: DeathPenalty.None },
            { label: '掉落装备以外的道具', value: DeathPenalty.Item },
            { label: '掉落所有道具', value: DeathPenalty.ItemAndEquipment },
            { label: '掉落所有道具及队伍内帕鲁', value: DeathPenalty.All },
          ]}
        />
        <PalWorldSwitch />
        <Editor initialValues={DefaultOptionSettings} items={editorItems} />
      </Flex>
    </>
  );
};

export default Page;
