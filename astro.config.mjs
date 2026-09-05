import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isLocalDevelopment = process.argv.includes('dev');

export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    // Keep Netlify for production builds, but avoid its local runtime when
    // editing the site with `npm.cmd run dev`.
    adapter: isLocalDevelopment ? undefined : netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
