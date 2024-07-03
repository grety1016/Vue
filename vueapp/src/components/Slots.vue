<script>
export default {
    
}
</script>
<template>
    <div>
        <h2>我是来自Slots组件内容</h2>
        <div>
            <slot name="head"></slot>
            <slot name="body"></slot>
            <slot name="foot"></slot>
        </div>
    </div>
    
</template>
<style>
    
</style>