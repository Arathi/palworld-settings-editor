import SettingsDrawer, { type SettingsData } from '@/components/Settings';
import { Outlet } from '@modern-js/runtime/router';
import { ConfigProvider, Flex } from 'antd';
import { type CSSProperties, useMemo, useState } from 'react';

import './layout.less';

export default function RootLayout() {
  const [settings, setSettings] = useState<SettingsData>({
    showDrawer: false,
    showMask: false,
    backgroundURL:
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/library_hero.jpg',
    scanlineColorEven: 'rgba(0, 0, 0, 0.5)',
    scanlineColorOdd: 'rgba(0, 0, 0, 0.25)',
    scanlineHeight: 2,
  });

  const maskStyle = useMemo<CSSProperties>(() => {
    return {
      display: settings.showDrawer || settings.showMask ? 'unset' : 'none',
      backgroundImage: `linear-gradient(
        to bottom,
        ${settings.scanlineColorEven} 0%,
        ${settings.scanlineColorOdd} 50%,
        ${settings.scanlineColorEven} 100%
      )`,
      backgroundSize: `100% ${settings.scanlineHeight * 2}px`,
    };
  }, [settings]);

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
        <div className="background">
          <img alt="background" src={settings.backgroundURL} />
        </div>
        <div className="mask" style={maskStyle} />
        <div className="container">
          <Outlet />
        </div>
      </Flex>
      <SettingsDrawer
        values={settings}
        onChange={patch => {
          setSettings({
            ...settings,
            ...patch,
          });
        }}
      />
    </ConfigProvider>
  );
}
