import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import node from '@astrojs/node';
import autoImport from "astro-auto-import";


// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "middleware"
  }),
  output: 'hybrid',
  integrations: [tailwind(), svelte(), react(), autoImport()],
  renderers: ['@astrojs/node', 'auth-astro']
});