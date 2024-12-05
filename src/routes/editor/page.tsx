import Button from '@/components/Button';
import Segmented from '@/components/Segmented';
import Slider from '@/components/Slider';
import Switch from '@/components/Switch';
import { DifficutyFormItems } from '@/domains/form-item';
import { DefaultOptionSettings, Difficulty } from '@/domains/option-settings';
import { useWindowSize } from '@/hooks/window-size';
import { Helmet } from '@modern-js/runtime/head';
import { Form } from 'antd';
import { useState } from 'react';

import './index.less';

const Page = () => {
  const windowSize = useWindowSize();
  const [items] = useState(DifficutyFormItems);
  const [optionSettings, setOptionSettings] = useState(DefaultOptionSettings);

  const backgroundSrc =
    'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/library_hero.jpg';

  const headerHeight = 48;
  const footerHeight = 64;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function onOptionSettingsChange(changedValues: any, allValues: any) {
    setOptionSettings({
      ...optionSettings,
      ...changedValues,
    });
  }

  const difficultyItems: React.ReactNode[] = items.map(item => {
    let control: React.ReactNode = null;
    switch (item.type) {
      case 'slider': {
        control = <Slider {...item.options} />;
        break;
      }
      case 'segmented': {
        control = <Segmented options={item.options} />;
        break;
      }
      case 'switch': {
        control = <Switch {...item.options} />;
        break;
      }
    }
    return (
      <Form.Item
        key={item.name}
        name={item.name}
        label={item.label}
        className="pwc-form-item"
      >
        {control}
      </Form.Item>
    );
  });

  return (
    <>
      <Helmet>
        <title>配置文件编辑器</title>
      </Helmet>
      <div className="editor-page">
        <div className="background">
          <img alt="palworld-background" src={backgroundSrc} height={919} />
        </div>
        <div className="scanlines" />
        <div className="frontground">
          <Form
            className="world-setting"
            labelCol={{ span: 12 }}
            labelAlign="left"
            colon={false}
            initialValues={optionSettings}
            onValuesChange={(changedValues, allValues) => {
              console.info('changedValues = ', changedValues);
              console.info('allValues = ', allValues);
              onOptionSettingsChange(changedValues, allValues);
            }}
            style={{ width: 1280, height: windowSize.height }}
          >
            <div className="header" style={{ height: headerHeight }}>
              <Form.Item
                name="Difficulty"
                label="难度"
                className="pwc-form-item difficulty-selector"
              >
                <Segmented
                  options={[
                    { value: Difficulty.Casual, label: '休闲' },
                    { value: Difficulty.Normal, label: '普通' },
                    { value: Difficulty.Hard, label: '困难' },
                    { value: Difficulty.None, label: '自定义' },
                  ]}
                />
              </Form.Item>
            </div>
            <div
              className="content"
              style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                height: windowSize.height - headerHeight - footerHeight,
              }}
            >
              {difficultyItems}
            </div>
            <div className="footer" style={{ height: footerHeight }}>
              <Button>预览</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Page;
