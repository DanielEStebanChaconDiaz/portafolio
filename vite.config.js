//react

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    base: './',
    server: {
      host: env.VITE_HOST, 
      port: env.VITE_PORT, 
    },
  }
});