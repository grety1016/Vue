
<template>
    <div>
        <h2>{{storeValue.state.counter}}</h2>
        <h2>{{storeValue.state.msg}}</h2>
        <button @click ="changeMsg">修改数据</button>

        <h2>{{storeValue.state.kingdeeMsg}}</h2> 

    </div>
</template>

<script setup>
    import {inject,onMounted} from 'vue';
    import axios from 'axios';

    const storeValue = inject('storeVale');

    function changeMsg(){
        storeValue.updateMsg();
    };
    onMounted(()=>{
        // fetch('http://127.0.0.1/temple').then((res)=>{
        //     return res.text()
        // }).then((res)=>{
        //     console.log(res);
        //     storeValue.updateKingdeeMsg(res);
        // });    

        // axios.get('http://127.0.0.1/temple').then((res)=>{
        //   console.log(res);
        // });
        
        axios.get("/path/api/mmdb/movie/v3/list/hot.json?ct=%E5%8E%A6%E9%97%A8&ci=62&channelId=4").then((res)=>{
          console.log(res);
        });
        
    });    
 
</script>

 

<style lang="scss" scoped>

</style>