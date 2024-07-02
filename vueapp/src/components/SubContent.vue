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
     </div>
    
</template>

<style>
    
</style>