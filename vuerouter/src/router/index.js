import{createWebHashHistory,createRouter} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routers = [
    {path: '/',component: Home},
    {path: '/About',component: About}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
});

export default router;