import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    })
  ],
  server:{
    proxy:{
      '/api': 'http://192.168.3.103:8080/hx_web_admin'
    }
  }
})
