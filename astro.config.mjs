import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://laozdao.github.io',
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
