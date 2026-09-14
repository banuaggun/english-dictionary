import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  server: {
    proxy: {
      '/dictionary-api': {
        target: 'https://api.dictionaryapi.dev',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/dictionary-api/, '')
      }
    }
  }
})
