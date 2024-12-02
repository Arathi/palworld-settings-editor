import Segmented from '@/components/Segmented';
import Switch from '@/components/Switch';
import { Difficulty } from '@/domains/option-settings';
import { Helmet } from '@modern-js/runtime/head';
import { Flex, Form } from 'antd';
import { useState } from 'react';
import './index.less';
import Slider from '@/components/Slider';

const Page = () => {
  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState<Difficulty>(Difficulty.None);
  const [value, setValue] = useState(0);

  return (
    <>
      <Helmet>
        <title>配置文件编辑器</title>
      </Helmet>
      <Flex vertical>
        <Form colon={false} labelCol={{ span: 12 }} labelAlign="left">
          <Form.Item
            className="pwc-form-item"
            label={
              <span style={{ color: 'white', fontWeight: 'bold' }}>
                测试开关
              </span>
            }
          >
            <Switch
              value={checked}
              onChange={value => {
                console.info('开关状态变化：', value);
                setChecked(value);
              }}
            />
          </Form.Item>
          <Form.Item
            className="pwc-form-item"
            label={
              <span style={{ color: 'white', fontWeight: 'bold' }}>
                测试单选
              </span>
            }
          >
            <Segmented
              value={option}
              options={[
                { label: '无', value: Difficulty.None },
                { label: '休闲', value: Difficulty.Casual },
                { label: '普通', value: Difficulty.Normal },
                { label: '困难', value: Difficulty.Hard },
              ]}
              onChange={value => setOption(value)}
            />
          </Form.Item>
          <Form.Item
            className="pwc-form-item"
            label={
              <span style={{ color: 'white', fontWeight: 'bold' }}>
                测试单选
              </span>
            }
          >
            <Slider
              value={value}
              min={0}
              max={100}
              step={1}
              onChange={value => setValue(value)}
            />
          </Form.Item>
        </Form>
      </Flex>
    </>
  );
};

export default Page;
