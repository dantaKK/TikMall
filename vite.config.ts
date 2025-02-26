import { defineConfig } from 'vite'
import path from 'path'

import vue from '@vitejs/plugin-vue'
// 预先加载UI 组件库
import Components from 'unplugin-vue-components/vite'
// 引入vant组件 编译阶段 自动引入 快 
import { VantResolver} from '@vant/auto-import-resolver'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template:{
      compilerOptions:{isCustomElement:(tag) => tag.startsWith('wc-') }
  }}),
    Components({
      resolvers: [
        VantResolver()
      ]
    })
  ],
  resolve: {
    alias: {
    
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, 'src')
    }
  }
})