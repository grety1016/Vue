import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';//index.js可写可不写，默认不写会在./router下找名称为index.js.

const app = createApp(App)
.use(router)
.mount('#app');
