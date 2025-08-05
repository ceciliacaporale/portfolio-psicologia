import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import image from '@astrojs/image';

export default defineConfig({
  integrations: [react(), image()],
});