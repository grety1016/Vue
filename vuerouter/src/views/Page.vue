<script setup>
    // export default {
    //     methods: {
    //     goToPage(){
    //         console.log(this.$router);
    //         // this.$router.push('/');
    //         // this.$router.push({ path: '/' }); //通过对象传入， 跳转到首页
    //         //this.$router.push(path:'/users/123'); //通过传递参数访问跳转
    //         this.$router.push({ name: 'users', params: { id:123 } });


    //     }

    // },
    //}

    import { reactive,ref } from 'vue';
    import { useRoute,useRouter } from 'vue-router';

    const id = ref('123');

    const route = useRoute();
    const router = useRouter(); 

     

    function goToPage(){       
        //console.log(route);
        //console.log(router);
        // router.push({ name: 'users', params: { id:123 } });
        router.push({name:'users',params:{id:id.value},query:{id:id.value}});
        console.log(route);
    }

    function replacePage() {
        router.push({ name: 'users', params: { id:id.value },query: { id:id.value },replace:true });
        //router.replace({ name: 'users', params: { id:123},query: { id:456} });

    }

    function goForward() {
        router.forward();
    }
    
    function goBack() {
        router.back();
    }
     
</script>


<template>
    <div>
        <h2>PageContent</h2>
        <button @click="goToPage">页面跳转</button>
        <button @click="replacePage">页面替换</button>
        <button @click="goForward">前进</button>
        <button @click="goBack">回退</button>

    </div>
</template>