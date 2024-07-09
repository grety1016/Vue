<script setup>
    
</script>
<template>
    <div>
        <h2>ParentComponent-ParentPage</h2>
        <router-link to="/parent/subpageone" class="tag">PageOne</router-link>
        <router-link to="/parent/subpagetwo">PageTwo</router-link>

        <router-view></router-view>
    </div>
 
</template>

<style scoped>
.tag{
    margin-right: 30px;
}
</style>