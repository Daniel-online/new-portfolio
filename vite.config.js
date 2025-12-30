import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
// https://vite.dev/config/
export default defineConfig({
  server: {
    // Allow the specific ngrok host
    // allowedHosts: ['https://02cb-179-100-35-100.ngrok-free.app'],
    // Optionally, if you want to listen on all network interfaces:
    host: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  base: './', // This is important for relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  publicDir: 'public',
})
