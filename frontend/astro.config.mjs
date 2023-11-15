import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import node from '@astrojs/node';
import autoImport from "astro-auto-import";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: 'server',
  integrations: [tailwind(), svelte(), react(), autoImport()],
  renderers: ['@astrojs/node', 'auth-astro']
});