<script setup>
        const { $lenis } = useNuxtApp()
        const { $ScrollTrigger } = useNuxtApp()
        const { $gsap } = useNuxtApp()


        // Disable scroll when the preloader is active
        const disableScrolls = () => {
            $lenis.stop()
        };
        // Enable scroll when the preloader is hidden
        const enableScroll = () => {
            $lenis.start()
        };

        onBeforeMount(() =>{
            disableScrolls();
        })
        onMounted(() => {
    
        });

        onUnmounted(() => {
        //   enableScroll();
        });

</script>

<template>
    <div class="preloader">
 
    </div>
</template>

<style lang="scss" scoped>
 .preloader{
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a1a;
    color:#1A1A1A;
    z-index:9999;
    overflow: hidden;
 }

</style>
