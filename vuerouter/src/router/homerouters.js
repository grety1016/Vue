const Home = ()=> import("../views/Home.vue");
const About = ()=> import("../views/About.vue");

const homerouters = [
    { 
        path: "/",
        // redirect: "/home", //重定向 
        redirect:(to)=> {
          //console.log(to);
          return {path: "/home"}
        }
      },
      { 
        path: "/home", 
        component: Home 
      },
      { 
        path: "/about", 
        component: About,
        //路由守卫
        beforeEnter: (to, from, next) => {  //beforeEnter: [removeQueryParams, removeHash],数组中为函数名，函数用于路由守卫的复用
          console.log(to);
          console.log(from);
          next();
        },
      },
];

export default homerouters;