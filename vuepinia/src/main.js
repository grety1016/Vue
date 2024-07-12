import './assets/main.css'

import { createApp } from 'vue'
import {pinia} from './stores/index.ts'

import App from './App.vue'
import router from './router'

const app = createApp(App)
.use(pinia) 
.use(router)
.mount('#app')
