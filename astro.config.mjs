// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zesty-jalebi-c33ecc.netlify.app',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
