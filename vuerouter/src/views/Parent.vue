<template>
    <div>
        <h2>ParentComponent-ParentPage</h2>
        <router-link to="/Parent/SubPageONe" class="tag">PageOne</router-link>
        <router-link to="/Parent/SubPageTwo">PageTwo</router-link>

        <router-view></router-view>
    </div>
 
</template>

<style scoped>
.tag{
    margin-right: 30px;
}
</style>