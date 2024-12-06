import { SettingOutlined } from '@ant-design/icons';
import { Button, ColorPicker, Drawer, Flex, Form, Input, Slider } from 'antd';

export type SettingsData = {
  showDrawer: boolean;
  showMask: boolean;
  backgroundURL: string;
  scanlineColorEven: string;
  scanlineColorOdd: string;
  scanlineHeight: number;
};

const Settings: React.FC<{
  values: SettingsData;
  onChange: (patch: Partial<SettingsData>) => void;
}> = ({ values, onChange }) => {
  return (
    <>
      <Button
        type="primary"
        icon={<SettingOutlined />}
        style={{ position: 'fixed', bottom: 8, right: 8, zIndex: 999 }}
        onClick={() => {
          onChange({ showDrawer: true });
        }}
      />
      <Drawer
        open={values.showDrawer}
        onClose={() => onChange({ showDrawer: false })}
      >
        <Form
          initialValues={values}
          onValuesChange={patch => onChange(patch)}
          labelCol={{ span: 6 }}
        >
          <Form.Item name="backgroundURL" label="背景图片">
            <Input />
          </Form.Item>
          <Form.Item label="扫描线">
            <Flex gap={8}>
              <Form.Item name="scanlineColorEven">
                <ColorPicker />
              </Form.Item>
              <Form.Item name="scanlineColorOdd">
                <ColorPicker />
              </Form.Item>
              <Form.Item name="scanlineHeight" style={{ flex: 1 }}>
                <Slider min={1} max={5} step={1} />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default Settings;
