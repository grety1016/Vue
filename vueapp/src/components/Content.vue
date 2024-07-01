<script>
export default {
  props: {
    subContents: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      subMsg: {
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
};
</script>

<template>
  <div>
    <div v-for="(item, index) in subContents" :key="index">
      {{ item }}
    </div>
    <button @click="sendMsg">子组件按钮</button>
  </div>
</template>

<style></style>
