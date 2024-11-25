import { Outlet } from '@modern-js/runtime/router';
import './index.less';
import { ConfigProvider } from 'antd';

export default function Layout() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            itemMarginBottom: 8,
          },
        },
      }}
    >
      <Outlet />
    </ConfigProvider>
  );
}
