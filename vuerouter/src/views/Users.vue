<script setup>
    import {useRoute} from 'vue-router'
    console.log(useRoute().params.id);
</script>

<template>
    <div>
        <h2>UsersPage</h2>
    </div>
</template>