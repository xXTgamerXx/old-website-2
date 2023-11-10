import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/old-website-2/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gh: resolve(__dirname, 'gh/index.html'),
        yt: resolve(__dirname, 'yt/index.html'),
        ig: resolve(__dirname, 'ig/index.html'),
      },
    },
  },
})
