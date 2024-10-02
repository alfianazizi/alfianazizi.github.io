// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	output: 'hybrid',
	site: "https://alfianazizi.github.io",
	integrations: [mdx(), sitemap()],
	vite: {
	  ssr: {
		noExternal: ['@astrojs/prism'],
	  },
	},
  });
