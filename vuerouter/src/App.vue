<script setup>
    import { computed, onMounted,ref,provide } from "vue";
    import { useRoute,useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter(); 

    const fullPath =  computed(() =>{
        return route.fullPath;
    });

    onMounted(() => {
    console.log("");
    });
    const id = ref('10086');
    const id2 = ref('10087');

    const currentPage = ref(100);

    const message = provide('message',id.value);

</script>



<template>
    <div>
        <h1>Hello App!</h1>
        <p><strong>Current route path:</strong> {{ fullPath }}</p>
        <nav>
            <RouterLink to="/" class="tag">Go to Home</RouterLink>
            <RouterLink to="/about" class="tag">Go to About</RouterLink>
            <!-- <RouterLink to="/Users/10086" class="tag">Go to Users</RouterLink> -->
            <RouterLink :to="{name:'users',params:{id:id}}" class="tag">Go to Users10086</RouterLink>
            <RouterLink :to="{name:'users',params:{id:id2}}" class="tag">Go to Users10087</RouterLink>
            <RouterLink to="/parent" class="tag" >Go to Parent</RouterLink>
            <RouterLink to="/page" class="tag">Go to Page</RouterLink>  
            <RouterLink to="/shop">Go to Shop</RouterLink>    
        </nav>
        
        <!-- //命名视图  -->
        <router-view name="shoptop"></router-view>
        <router-view></router-view>
        <router-view name="shopfoot"></router-view>
    </div>
</template>

<style scoped>
.tag {
    margin-right: 30px;
}

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
