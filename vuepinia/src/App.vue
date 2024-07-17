<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia' //用于在解构时保持响应式
import {defineAsyncComponent} from 'vue' //用于动态加载组件时使用
//const  HelloWorld = defineAsyncComponent (() => import('./components/HelloWorld.vue'));
import { useGretyStore } from '@/stores/index.ts'

const GretyStore = useGretyStore();
const {count,doubleCount} = storeToRefs(GretyStore);

//1、GretyStore.$reset()用于将store重置到初始状态,setup语法糖不能直接调用$reset(),只能自己编写reset()方法来重置。
//2、GretyStore.$patch()用于批量修改store仓库内对象的内容
//GretyStore.$patch({
  //   count: 10,
  //   doubleCount: 20,
  //   arrary:[...array,5],
  // });
//3、GretyStore.$patch((state) =>{
// state.count=10;
// state.doubleCount=40;
// state.arrary.push(5);
// });

console.log(GretyStore);

GretyStore.$subscribe((mutation, state) => {
  console.log('Mutation:', mutation);
  console.log('newValue:', mutation.events.newValue);
  console.log('oldValue:', mutation.events.oldValue);
  console.log('New State:', state);  
});

function restGretyStore(){
  GretyStore.$patch((state) =>{
  state.count=10;
  state.doubleCount=20;  
});
}
 

// function repeatFunction() {
//   GretyStore.increment();
//   setTimeout(repeatFunction, 1000);
// }

// setTimeout(repeatFunction, 1000)
</script>

<template>
  <div>
    <router-link to="/home">Home</router-link>
    <div>{{ GretyStore.count }}</div> 
    <div>{{ GretyStore.doubleCount }}</div>

    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <button @click="GretyStore.increment">Counter++</button>
    <button @click="restGretyStore">重置store</button>


    <router-view></router-view>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
