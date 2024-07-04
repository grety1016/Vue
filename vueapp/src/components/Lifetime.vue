<script>
export default {
    data() { 
        return{
            counter:0,

        }
    },
    beforeCreate(){
        console.log('Component beforecreate');
    },
    created(){
        console.log('Component created');
    },
    beforeMount(){
        console.log('Component beforeMount');
    },
    mounted(){
        console.log('Component mounted');
    },
    beforeUpdate() {
        console.log('Component beforeUpdate');
    },
    updated() {
        console.log('Component updated');
    },
    beforeUnmount(){
        console.log('Component beforeUnmount');
    },
    unmounted() {
    console.log('Component unmounted');
    }

    
    
}
</script>
<template>
    <div>
        <div>LiftTime</div>
        <h2>{{ counter }}</h2>
        <button @click="counter++">改变counter值</button>
    </div>
    
</template>
<style>
 
    
</style>