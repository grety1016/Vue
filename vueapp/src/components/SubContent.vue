<script>
export default {
  data() {
    return { 

    }
  },
  computed:{
    newmsg(){
      return this.message();
    }
  },
   inject: ['transvalue','subobject','message'],
  

}
</script>

<template>

    <div>
        <!-- Slots插槽的使用 -->
        <h2>我是SubContent组件内容</h2>
        <h2>我是SubContent组件内容:{{ transvalue }}</h2> <!--//这种方式是非响应式的形式，即在父组件中改变数据，子组件中不会改变-->
        <h2>我是SubContent组件内容:{{ subobject.transvalue }}</h2> <!--采用对象的形式实现响应式，即在父组件中改变数据，子组件也会改变-->
        <h2>我是SubContent组件内容:{{ newmsg }}</h2><!--采用函数返回响应式数据 -->


    </div>

</template>

<style></style>