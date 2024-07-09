<script>
    export default {        
        beforeRouteEnter(to, from, next) {
            console.log('进入路由')
            next((vm)=>{
                console.log(vm);
            })
        },
        data() {
        return {
            vueValue: 123,
        };
    }
    };
    

</script>

<script setup>
    import { onBeforeRouteUpdate, onBeforeRouteLeave,useRoute} from 'vue-router'
    //console.log(useRoute().params.id);
    import { defineProps,defineEmits,inject } from 'vue';
    const message = inject('message','unTranslatedMessage');
    console.log(message);

    const props = defineProps({
        id: {
            type: String,
            required: true,
        }
    });


// 在当前路由改变，但是该组件被复用时调用
onBeforeRouteUpdate((to, from, next) => {
  // 这里的 `this` 可以访问组件实例
  console.log('更新路由')
  next()
})

// 在导航离开渲染该组件的对应路由时调用
onBeforeRouteLeave((to, from, next) => {
  // 这里的 `this` 可以访问组件实例
  console.log('离开路由')
  next()
})    //console.log(props.id);
</script>

<template>
    <div>
        <h2>UsersPage</h2>
    </div>
</template>