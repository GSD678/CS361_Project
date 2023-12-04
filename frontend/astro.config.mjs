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
  renderers: ['@astrojs/node', 'auth-astro'],
  headers: [
    { key: "Access-Control-Allow-Credentials", value: "true" },
    { key: "Access-Control-Allow-Origin", value: "*" },
    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept,Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  ],
  source:  ":path"
});