<script>
export default {
    data() { 
        return{
            lists:[1,2,3,4,5,6],
            message:"Hello",

        }
    },
    
    
}
</script>
<template>
    <div>
        <!-- <h2>我是来自Slots组件内容</h2> -->
        <div>
            <!-- <slot name="head"></slot>
            <slot name="body"></slot>
            <slot name="foot"></slot> -->
            <slot :lists="lists" :message="message"></slot>
            <slot :lists="lists" :message="message" name="list_slot"></slot>

        </div>
    </div>
    
</template>
<style>
 
    
</style>