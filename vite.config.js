import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nonBlockingCss } from './vite-plugin-non-blocking-css.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), nonBlockingCss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/react-icons')) {
            return 'icons'
          }
        },
      },
    },
    cssMinify: true,
    chunkSizeWarningLimit: 600,
  },
})
