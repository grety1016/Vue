<script setup>
import { onMounted } from "vue";
onMounted(() => {
  console.log("");
});
</script>

<template>
    <div>
        <h1>Hello App!</h1>
        <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
        <nav>
            <RouterLink to="/" class="tag">Go to Home</RouterLink>
            <RouterLink to="/about" class="tag">Go to About</RouterLink>
            <RouterLink to="/Users/10086" class="tag">Go to Users</RouterLink>
            <RouterLink to="/Parent">Go to Parent</RouterLink>    
        </nav>
    
        <router-view></router-view>
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
