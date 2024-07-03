<script>
export default {
  props: {
    subContents: {
      type: Object,
      required: true,
    },
  },
    
}
</script>

<template>
  
     <div>
      <p>SubContent</p>
      <p>{{subContents}}</p>
      
    <!-- Slots插槽的使用 -->
    <h2>我是Content组件内容</h2>
     </div>
    
</template>

<style>
    
</style>