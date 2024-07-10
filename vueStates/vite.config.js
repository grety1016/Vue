import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
      proxy:{
        //https://i.maoyan.com/
        '/path':{
          target:'https://i.maoyan.com',
          changeOrigin:true,
          rewrite:path => path.replace(/^\/path/,''),
           
        },
      },
  },
})
