<script setup>
  const props = defineProps(['to']);
</script>
<template>
   <nuxt-link :to="to" target="_blank" class="btn-main relative overflow-hidden">
    <slot />
  </nuxt-link>   
</template>
<style lang="scss">
 .btn-main{
  font-family: 'Over Med', sans-serif;
   font-size: 16px;
   background-color: #5F41FF;
   color: #ECECEC;
   padding-left: 3rem;
   padding-right: 3rem;
   padding-top: 1rem;
   padding-bottom: 1rem;
   border-radius: .4rem;
   display: inline-flex;
   pointer-events:auto;
    span{
      display: block;
    position: relative;

   }
 }


</style>