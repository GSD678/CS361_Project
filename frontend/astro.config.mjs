import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import node from '@astrojs/node';

import autoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind(), svelte(), react(), autoImport()]
});


