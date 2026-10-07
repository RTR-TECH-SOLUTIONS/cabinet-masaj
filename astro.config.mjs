// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Demo găzduit pe GitHub Pages, într-un subdirector.
// TODO(real): pe domeniul clientului se pune domeniul în `site` și se șterge `base`.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/cabinet-masaj',
  vite: {
    plugins: [tailwindcss()]
  }
});
