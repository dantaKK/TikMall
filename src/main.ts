import { createApp } from 'vue'
import {createPinia} from 'pinia'
import router from './router/index.ts'
import './assets/tailwind.css'
import './assets/main.css'
import App from './App.vue'
import 'wc-waterfall'
import { Lazyload } from 'vant'
import { Image as VanImage } from 'vant';

const app = createApp(App)

app.use(createPinia()) // pinia 启用
app.use(router)
app.use(Lazyload, {
    lazyComponent: true,
  });

app.use(VanImage)
app.mount('#app')