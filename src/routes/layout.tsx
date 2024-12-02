import { Outlet } from '@modern-js/runtime/router';
import { ConfigProvider, Flex } from 'antd';

import './index.less';

export default function RootLayout() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            verticalMarginInline: 0,
          },
          Form: {
            itemMarginBottom: 4,
          },
        },
      }}
    >
      <Flex className="root-layout" vertical>
        <Outlet />
      </Flex>
    </ConfigProvider>
  );
}
