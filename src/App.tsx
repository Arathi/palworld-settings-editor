import { ConfigProvider, type ConfigProviderProps } from "antd";
import Background from "./components/palworld-ui/Background";
import Editor from "./components/Editor";
import { useState } from "react";

import "./App.less";

const App = () => {
  const [theme, setTheme] = useState<ConfigProviderProps["theme"]>({
    components: {},
  });

  return (
    <ConfigProvider theme={theme}>
      <div className="app">
        <Background />
        <Editor />
      </div>
    </ConfigProvider>
  );
};

export default App;
