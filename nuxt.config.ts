// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     devtools: { enabled: true },
     modules: [
          '@vueuse/nuxt',
          '@nuxt/content',
          'nuxt-swiper',
          '@hypernym/nuxt-gsap',
          '@hypernym/nuxt-font',
          "nuxt-split-type",
          "@nuxt/image",
          "@nuxtjs/tailwindcss",  
     ],
     
     pages: true,
     css: [
          '~/assets/styles/main.scss',
          '~/assets/css/fonts.css'
     ],

     gsap: {
          extraPlugins: {
            scrollTrigger: true,
            draggable: true,
            flip: true,
            observer:true,
          }
     },
     font: {
          autoImport: true,
     },
     
     build: {
          transpile: ['swiper']
     }
})