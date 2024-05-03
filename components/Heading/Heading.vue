<template>
    <component class="heading" :is="el" :class="{[`-${size}`]: size, [`-${option}`]: option }">
        <slot></slot>
    </component>
</template>

<script setup>
    
        const props = {
            el: {
                type: String,
                default: 'p'
            },
            size: {
                type: String
            },
            option: {
                type: String
            }
        }
    
</script>

<style src="" lang="scss" scoped>

</style>