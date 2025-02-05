import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws', // WebSocket kullanmak için
      host: 'localhost', // WebSocket için doğru host
      port: 5173, // HMR sunucusunun çalıştığı port
    },
  },
})