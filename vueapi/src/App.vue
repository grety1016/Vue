<script>
    import { ref,reactive,toRefs,watch,watchEffect,computed,
        onBeforeMount,onMounted,onBeforeUpdate,onUpdated,provide,
    } from 'vue'
import Content from '../../vueapi/src/components/Content.vue';
    export default {
        components: { Content },
        setup(){
            const name = ref('grety');
            const grety = ref({name:'grety', age:33,sex:'男'});
            provide(name.value,grety.value);
            function changeName(){
                grety.value.name = 'suning'
            }

            onBeforeMount(()=>{
                console.log("onBeforeUpdate");
            });

            onMounted(()=>{
                console.log("onMounted");                
            });

            // 使用ref定义响应式变量
            const msg = ref("Welcome to XiaMen");
            const country = ref("China");

            function changeMsg() {
                msg.value = `Welcome to ${country.value}`;
                console.log( msg.value);
            };

            const reverseMsg = computed(()=>{
                return msg.value.split(" ").reverse().join(" ");
            });

            console.log( "翻转后的msg:",reverseMsg.value);

            const counter = ref(0);

            function incrementCounter() {
                counter.value++;
            };
            watch(counter,(newVal,oldVal) =>{
                console.log(`counter is ${counter.value}`);
                console.log(`newVal is ${newVal}`);
                console.log(`oldVal is ${oldVal}`);
            });

            // 通过reactive定义响应式变量
            const obj = reactive({ name: "FuZhou", age: 20, children: {name:"TongAn"}});
            function chageObjName(){
                obj.name = "XiaMen";
            }

           //无需指定监听的对象，会自动收集依赖，会自动监听响应式属性 
            watchEffect(() =>{
                console.log(`监听obj.name:${obj.name}`);
                console.log(`监听children.name:${obj.children.name}`);
            }); 

            function changeChildrenName(){
                obj.children.name = "XiangAn";
                console.log(obj.children.name);
            }

            const submsg = ref("来自父组件属性");
            function chageSubmsg(){
                submsg.value = "改变了值";
            }

            function printCounter(value){
                console.log(`子组件传来的value：${value}`);
            }
          
 
            // 解构对象时用“...对象名”---> ...obj 即解构 obj对象，解构后可以单独使用obj对象内部的属性或嵌套对象
            //解构对象后，对象的属性或嵌套对象会失去响应式，如果想重新获取响应式可以使用toRefs()来重新获取：...toRefs(obj)既解构了对象又能获得响应式
            return {
                msg,country,changeMsg,counter,incrementCounter,obj,chageObjName,...toRefs(obj),changeChildrenName,
                reverseMsg,submsg,chageSubmsg,printCounter,changeName,        //...rest of your setup code...
            };       
        },
        methods: {
            
        },
        mounted() {
                console.log(this.$refs.Content);
                console.log(this.$refs.Content.counter);
                this.$refs.Content.sendCounter();
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

        <div>{{ obj.name }}</div>
        <button @click="chageObjName">改变obj.name</button>

        <div>{{ children.name }}</div>
        <button @click="changeChildrenName">改变obj.children.name</button>

        <h2>-------------Content------------------</h2>
        <!-- <Content class="class1" id="id2" :submsg = "submsg"  @sendCounter="sendCounter"/> -->
        <Content class="class1" id="id2" :submsg = "submsg" ref="Content" @sendCounter="printCounter"/>
        <button @click="chageSubmsg">改变Submsg值</button>
        <button @click="changeName">改变grety的name</button>

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
