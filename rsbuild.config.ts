import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginLess } from "@rsbuild/plugin-less";

export default defineConfig({
  server: {
    port: 9593,
  },
  plugins: [pluginReact(), pluginLess()],
});
