<script setup> 
  
</script>

 
 <template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/" class="tag">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
  </div>
  <router-view></router-view>
  
 
</template>
 

<style scoped>
.tag{
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
