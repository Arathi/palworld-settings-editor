import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  server: {
    // PalWorld Settings Editor
    port: 9353,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack',
    }),
  ],
});
