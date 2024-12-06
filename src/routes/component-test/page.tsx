import Button from '@/components/palworld/Button';
import FormItem from '@/components/palworld/FormItem';
import Segmented from '@/components/palworld/Segmented';
import Slider from '@/components/palworld/Slider';
import Switch from '@/components/palworld/Switch';
import { Helmet } from '@modern-js/runtime/head';
import { Divider, Flex, Form } from 'antd';
import { useState } from 'react';

const Page = () => {
  const [timeSpan, setTimeSpan] = useState(30);
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(60);

  return (
    <>
      <Helmet>
        <title>组件测试</title>
      </Helmet>
      <Flex
        vertical
        style={{
          width: 640,
          height: 800,
          backgroundColor: '#2A4249',
          padding: 16,
        }}
        gap={8}
      >
        <Form initialValues={{ timeSpan, checked, progress }}>
          <FormItem
            name="slider"
            label="测试滑动"
            type="slider"
            options={{ min: 0, max: 100, step: 1 }}
          />
          <FormItem
            name="segmented"
            label="测试分段"
            type="segmented"
            options={[
              { value: 30, label: '30秒' },
              { value: 300, label: '5分钟' },
              { value: 3600, label: '1小时' },
            ]}
          />
          <FormItem
            name="switch"
            label="测试开关"
            type="switch"
            options={{ off: '关', on: '开' }}
          />
        </Form>
        <Divider />
        <Button>确定</Button>
        <Button>取消</Button>
        <Segmented
          value={timeSpan}
          onChange={value => setTimeSpan(value)}
          options={[
            { value: 30, label: '30秒' },
            { value: 300, label: '5分钟' },
            { value: 3600, label: '1小时' },
          ]}
        />
        <Switch value={checked} onChange={value => setChecked(value)} />
        <Slider value={progress} onChange={value => setProgress(value)} />
      </Flex>
    </>
  );
};

export default Page;
