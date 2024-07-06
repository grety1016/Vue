<script>
import { toRefs, onUpdated, ref } from 'vue'
export default {
    props: {
        submsg: {
            type: String,
            required: true,
            default: 'Hello Vue!'
        }
    },
    setup(props, context) {
        console.log(props.submsg);
        const { submsg } = toRefs(props);
        console.log(submsg.value);
        onUpdated(() => {
            console.log(submsg.value);
        });
        console.log(context);

        const counter = ref(20);
        function sendCounter() {
            context.emit("transvalue", counter.value);
        };

        return { sendCounter, };

    },



}
</script>


<template>
    <div>
        <h2>我是Content内容</h2>
        <h2>{{ submsg }}</h2>
        <button @click="sendCounter">子组件传送给父组件值</button>
    </div>
</template>