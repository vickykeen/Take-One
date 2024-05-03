<template>
  <div v-intersection-observer="onIntersectionObserver" :class="{ 'is-inview': isVisible }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
const isVisible = ref(false)

// Define props
const props = defineProps({
  once: {
    type: Boolean,
    default: false
  },
  staggerDelay: {
    type: Number,
    default: 0 // Default delay
  },
  threshold: {
    type: Number,
    default: 0 // Default threshold
  }
})

let hasIntersected = false // Flag to track if intersection has occurred

function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    if (props.once && !hasIntersected) {
      isVisible.value = true; // Set visibility if it's the first intersection and once prop is true
      hasIntersected = true; // Set flag to true after first intersection
    } else if (!props.once) {
      isVisible.value = true; // Set visibility for each intersection when once prop is false
    }
  } else {
    if (!props.once) {
      isVisible.value = false; // Reset visibility when once prop is false and element is not intersecting
    }
  }
}

</script>

<style scoped>
</style>
