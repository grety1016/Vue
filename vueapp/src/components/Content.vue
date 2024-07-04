
<script>
import SubContent from './SubContent.vue';
export default {
  props: {
    subContents: {
      type: Object,
      required: true,
    },
  },
  components: {SubContent},
  data() {
    return {
      subMsg: {
        name: "grety",
        age: 20,
        sex: "male",
      },
      subData:{
        name: "grety",
        age: 20,
        sex: "male",
      },
    };
  },
  methods: {
    sendMsg() {
      this.$emit("sendMsg", this.subMsg);
    },
  },
  mounted() {
    console.log("子组件访问父组件数据");
    console.log(this.$parent);
    console.log(this.$root);

  },
};
</script>

<template>
  <div>
    <div v-for="(item, index) in subContents" :key="index">
      信息来自父组件传递的subContents:{{ item }}
    </div>     
    <button @click="sendMsg">子组件按钮</button>
    <SubContent></SubContent>
  </div>
</template>

<style></style>
