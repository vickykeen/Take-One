<script lang="ts" setup>
  const nuxtApp = useNuxtApp();
  const { $gsap } = useNuxtApp()
  const locale = useState<string>('locale.setting')
  const router = useRouter();
  const isLoading = ref(true);



  useHead({
    title: 'Boilerplate',
    meta: [
    { name: 'description', content: 'This is a boilerplate' }
  ],
  })

  useFont([
    {
      src: '/fonts/LibreCaslonCondensed-Medium.woff2',
      family: 'Libre Med',
      weight: '600',
      variable: 'font_libre_med',
      display: 'swap',
      preload: true, 
    },
    {
      src: '/fonts/LibreCaslonCondensed-Regular.woff2',
      family: 'Libre',
      weight: '300',
      variable: 'font_libre',
      display: 'swap',
      preload: true,
    },
    {
      src: '/fonts/OverusedGrotesk-Bold.woff2',
      family: 'Over Bold',
      weight: '100 900',
      display: 'swap',
      preload: true, 
    },
    {
      src: '/fonts/OverusedGrotesk-Medium.woff2',
      family: 'Over Med',
      weight: '100 900',
      display: 'swap',
      preload: true, 
    },
  ])

  onMounted(() => {
    const fontLoad = document.fonts.ready.then(() => {
            const fontsLoadedEvent = new CustomEvent(CUSTOM_EVENTS.FONTS_LOADED)
            window.dispatchEvent(fontsLoadedEvent)
    })

    Promise.all([fontLoad]).then(() => {
         isLoading.value = true
    })

  });
  


// Scroll to top when route changes

</script>
<template>
  <Html lang="en"> 
      <main class="app">
        <!-- <Preloader   /> -->
        <NuxtLayout ref="main"  >
           <NuxtPage  />
        </NuxtLayout>
      </main>
  </Html>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  margin: 0 auto;
}

</style>
