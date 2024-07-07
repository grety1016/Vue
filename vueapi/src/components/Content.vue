<script>
import { toRefs, onUpdated, ref,h,inject, } from 'vue'
export default {
    props: {
        submsg: {
            type: String,
            required: true,
            default: 'Hello Vue!'
        }
    },
    setup(props, context) {
        const gretyAge = inject('grety');
        console.log(gretyAge);

        console.log(props.submsg);
        const { submsg } = toRefs(props);
        console.log(submsg.value);
        onUpdated(() => {
            console.log(submsg.value);
        });
        console.log(context.attrs);
        console.log(context.emit);
        console.log(context.slots);
        console.log(context.expose);

        const counter = ref(20);
        function sendCounter() {
            context.emit("sendCounter", counter.value);
        };

        context.expose({
            counter,sendCounter,
        });

        return { sendCounter, gretyAge};
        // return ()=> h('div', counter.value);

    },



}
</script>


<template>
    <div>
        <h2>我是Content内容</h2>
        <h2>{{ submsg }}</h2>
        <button @click="sendCounter">子组件传送给父组件值</button>

        <h2>gretyAge is :{{ gretyAge }}</h2>
    </div>
</template>