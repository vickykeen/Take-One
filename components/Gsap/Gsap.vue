<script setup>
    import gsap from "gsap";
    import { ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/all";
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 
</script>

<template>
    <div class="animate__components">
        <slot></slot>
    </div>
</template>
