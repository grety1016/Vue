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
},{persist: true});
