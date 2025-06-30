import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue, svelte, etc.
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/FULL-SHOPPING-APP/',
  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My App Name',
        short_name: 'App',
        description: 'Your app description',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});