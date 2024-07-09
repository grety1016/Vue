// 引入vue-router对象
import {
  createWebHashHistory, //创建webHash历史记录
  createRouter, //创建路由对象
  createWebHistory, //创建web历史记录
} from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Users from "../views/Users.vue";
import NotFound from "../views/NotFound.vue";
import Parent from "../views/Parent.vue";
import SubPageOne from "../views/SubPageOne.vue";
import SubPageTwo from "../views/SubPageTwo.vue";
import Page from "../views/Page.vue";
import Shop from "../views/Shop.vue";
import ShopTop from "../views/ShopTop.vue";
import ShopContent from "../views/ShopContent.vue";
import ShopFoot from "../views/ShopFoot.vue";

const routers = [
  { 
    path: "/",
    redirect: "/home", //重定向 
  },
  { 
    path: "/home", component: Home },
  { path: "/about", component: About },
  //动态路由
  { 
    name:'users',
    path: "/users/:id(\\d+)", // /Users/:id(\\d+)
    component: Users 
  }, //参数可叠加多个
  //{ path: "/Users/:id?", component: Users },//参数只能有一个，不能有多个参数叠加 /Users/*** 是允许的，但/Users/***/**是不允许的
  //嵌套路由，父组件下有不同的组件，根据不同的需求指定不同的子组件显示
  {
    path: "/parent",
    component: Parent,
    children:[
      {
        path: "subpageone",
        component: SubPageOne,
      },
      {
        path: "subpagetwo",
        component: SubPageTwo,
      }

    ],
  },
  {
    path: "/page",
    component: Page,
  },
  {
    path: "/shop",
    components:{
      default:ShopContent,
      shoptop:ShopTop,
      shopsontent:ShopContent,
      shopfoot:ShopFoot,
      // default: ShopTop, //如果没有匹配到子组件，就渲染 ShopTop组件，可以指定一个默认的子组件
    },
  },
  //匹配404页面未找到
  { path: "/:path(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
