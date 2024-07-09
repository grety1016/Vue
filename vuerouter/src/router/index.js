// 引入vue-router对象
import {
  createWebHashHistory, //创建webHash历史记录
  createRouter, //创建路由对象
  createWebHistory, //创建web历史记录
} from "vue-router";


//路由懒加载，仅在需要使用时才加载路由

// import About from "../views/About.vue";
// 使用路由懒加载优化About组件的载入
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
import homerouters from "./homerouters.js";

const routers = [
  ...homerouters,
  //动态路由
  { 
    name:'users',
    path: "/users/:id(\\d+)", // /Users/:id(\\d+)
    component: Users,
    props:true, 
    //strict: true,//用于判断是否匹配路由末尾的斜杠
    //sensitive:true, // 用于判断是否区分大小写，true为区分    
  }, //参数可叠加多个
  //{ path: "/Users/:id?", component: Users },//参数只能有一个，不能有多个参数叠加 /Users/*** 是允许的，但/Users/***/**是不允许的
  //嵌套路由，父组件下有不同的组件，根据不同的需求指定不同的子组件显示
  {
    path: "/parent",
    // 路由别名使用
    alias:["/father","/fuqin"],//别名即可用此名称进行访问Path路径对应的组件,并且别名可以支持多个
    component: Parent,
    // 嵌套路由使用，一个路由下有多个子路由
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
    //命名视图的使用，当前组件配置命名后，对应的组件会渲染在对应的router-view,用name属性来匹配组件名称
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

//全局守卫
router.beforeEach((to,from,next) => {
  console.log(to);
  console.log(from);
  next();
});

export default router;
