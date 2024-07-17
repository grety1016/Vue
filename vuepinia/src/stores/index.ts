import { ref, computed,reactive,toRefs,watch} from 'vue'
import { defineStore,createPinia} from 'pinia' 
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);


export const useGretyStore = defineStore('grety', () => {
  const  count = ref<number>(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  

  return { count, doubleCount, increment,  }
},
{
  persist:{key: 'grety',
  storage:window.localStorage,
  paths:['count']}
});

// persist: {
//   key: 'my_custom_key',//指定存储持久化状态的键名
//   storage: window.sessionStorage,//指定存储状态的存储引擎，可以是 localStorage(长期)、sessionStorage（浏览器关闭后失效） 或自定义的存储对象。
//   paths: ['settings.fontSize', 'settings.tabSize'],//指定要部分持久化的状态路径数组。如果没有提供路径，则持久化整个状态。
// },
