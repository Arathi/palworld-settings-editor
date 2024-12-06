import Button from '@/components/palworld/Button';
import { useWindowSize } from '@/hooks/window-size';
import { Helmet } from '@modern-js/runtime/head';
import CodeEditor from '@monaco-editor/react';
import { Flex, Form } from 'antd';
import './index.less';
import FormItem from '@/components/palworld/FormItem';
import Segmented from '@/components/palworld/Segmented';
import {
  DifficultyFormItems,
  OtherFormItems,
  ServerFormItems,
} from '@/domains/form-item';
import { DefaultOptionSettings } from '@/domains/option-settings';
import { useState } from 'react';
import FormItemGroup from './form-item-group';

const Page = () => {
  const windowSize = useWindowSize();
  const [group, setGroup] = useState('difficulty');

  return (
    <>
      <Helmet>
        <title>服务端配置文件编辑器（在建）</title>
      </Helmet>
      <Flex className="editor-layout" justify="center">
        <Flex className="editor" vertical style={{ height: windowSize.height }}>
          <Flex className="group-selector" justify="center" align="center">
            <Flex style={{ width: 128 }}>配置分组</Flex>
            <Segmented
              value={group}
              onChange={value => setGroup(value)}
              options={[
                { value: 'server', label: '服务端配置' },
                { value: 'diff', label: '难度' },
                { value: 'other', label: '其他' },
              ]}
              style={{ flex: 1 }}
            />
          </Flex>
          <Flex
            vertical
            className="editor-container"
            flex={1}
            style={{ height: windowSize.height - 128 }}
          >
            <Form
              initialValues={DefaultOptionSettings}
              labelCol={{ span: 12 }}
              labelAlign="left"
              colon={false}
            >
              <FormItemGroup
                items={ServerFormItems}
                style={{ display: group === 'server' ? undefined : 'none' }}
              />
              <FormItemGroup
                items={DifficultyFormItems}
                style={{ display: group === 'difficulty' ? undefined : 'none' }}
              />
              <FormItemGroup
                items={OtherFormItems}
                style={{ display: group === 'other' ? undefined : 'none' }}
              />
            </Form>
          </Flex>
          <Flex className="buttons" justify="center" align="center" gap={32}>
            <Button>打开</Button>
            <Button>预览</Button>
            <Button>保存</Button>
          </Flex>
        </Flex>
        <Flex className="preview" style={{ display: 'none' }}>
          <CodeEditor />
        </Flex>
      </Flex>
    </>
  );
};

export default Page;
