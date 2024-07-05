<script>
    import { ref } from "vue"
    export default {
        setup(){
            // 使用ref定义响应式变量
            const msg = ref("Welcome to XiaMen");
            const country = ref("China");

            function changeMsg() {
                msg.value = `Welcome to ${country.value}`;
                console.log( msg.value);
            };

            const counter = ref(0);

            function incrementCounter() {
                counter.value++;
            };

            // 通过reactive定义响应式变量
            //const obj = reactive({ name: "XiaMen", age: 20 });
 

            return {
                msg,country,changeMsg,counter,incrementCounter,               //...rest of your setup code...
            };         
        },
        

    };

</script>

<template>
    <div>
        <div>use vueapi</div>
        <div>{{ msg }}</div>
        <button @click="changeMsg">改变msg</button>

        <div>{{ counter }}</div>
        <button @click="incrementCounter">counter++ </button>

    </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
