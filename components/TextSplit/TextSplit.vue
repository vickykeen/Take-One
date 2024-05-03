<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div :id="'target' + index">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SplitType from 'split-type'

const items = [''] // Empty array or whatever your array is

onMounted(() => {
  const targets = document.querySelectorAll('[id^="target"]')
  targets.forEach((target, index) => {
    new SplitType(target, { types: 'words, chars' })
  })
})
</script>
