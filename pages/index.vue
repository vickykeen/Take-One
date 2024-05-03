<script setup>
    import { Check } from 'lucide-vue-next';
    const { $lenis } = useNuxtApp()
    const { $gsap, $ScrollTrigger } = useNuxtApp();

    // Define the page transition
    definePageMeta({
      pageTransition: {
        name: 'custom-transition',
        mode: 'out-in',
        onEnter: (el, done) => {
          // page transition on enter goes here
            done()
        },

        onLeave:(el, done)=>{
          // page transition on leave goes here
        }
      }
    })

    useHead({
      title: 'Boilerplate',
      meta: [
         { name: 'description', content: 'Animated boilerplate' }
      ],
    })


    onMounted(() => {
    })
    onBeforeMount(() => {
      $lenis.start(); // Start Lenis when the component is mounted
      window.scrollTo(0, 0); 
    });

    onBeforeUnmount(() => {
      $lenis.stop(); // Stop Lenis when the component is unmounted
    });
</script>

<template>
    <div class="pt-10 ">
        <section class="mt-24 px-4 content mx-auto">
          <h1 class="lg:text-9xl md:text-6xl text-4xl font-bold sans-serif-bold uppercase text-center flex flex-col title txt-light">
                <span>Boilerplate</span>
                <span>for creative</span>
                <span> Designers and</span>
                <span>developers</span>
          </h1>
          <div class=" text-center flex justify-center items-center my-10">
              <p class="uppercase txt-light sans-serif-bold sm:w-96 md:text-xl text-sm">
                  This is <span class="text-yellow-400">Nuxt 3</span> boilerplate with <span class="txt-pink text-pink-500">pre-made components</span> which helps you to create interactive websites faster.
              </p>
          </div>
        </section>
      
        <section class="mt-10">           
            <div>
                <SvgCloudsBg class="w-full h-full cloud-bg" />
                 <div class=" bg-white pt-10 pb-20">
                  <Parallax :speed="0.1" :mobile="false" ><SvgClouds1 class="mx-auto w-full first-cloud"  /></Parallax>
                  <Parallax :speed="0.2" :mobile="false" ><SvgClouds2 class="mx-auto w-full second-cloud" /></Parallax>
                   <article class="content mx-auto px-4 pt-10">
                      <h1 class="lg:text-9xl md:text-6xl text-4xl font-bold sans-serif-bold uppercase text-center flex flex-col title txt-dark">
                          <span>Now Everyone</span>
                          <span>can build</span>
                          <span>award winning</span>
                          <span>websites</span>
                      </h1> 
                      <div class="md:mt-36 my-10 md:flex ">
                         <div class="card bg-pink-100 md:w-96 rounded p-6 flex flex-col justify-between md:rotate-6 ">
                            <span class="lg:text-6xl text-4xl sans-serif-bold uppercase text-pink-500">Save more time</span>
                            <span class="lg:text-6xl text-4xl sans-serif-bold uppercase text-pink-500 ">01</span>
                         </div>
                         <div class="card bg-yellow-100 md:w-96  rounded p-6 flex flex-col justify-between md:-rotate-3 md:mt-24 mt-5">
                            <span class="lg:text-6xl text-4xl sans-serif-bold uppercase text-yellow-500">Create amazing website faster</span>
                            <span class="lg:text-6xl text-4xl sans-serif-bold uppercase text-yellow-500 ">02</span>
                         </div>
                         <div class="card bg-fuchsia-100 md:w-96  rounded p-6 flex flex-col justify-between md:rotate-3 md:mt-60 mt-5">
                            <span class="lg:text-6xl text-4xl sans-serif-bold uppercase text-fuchsia-500">Creative Freedom</span>
                            <span class="lg:text-6xl text-4xl sans-serif-bold uppercase text-fuchsia-500 ">03</span>
                         </div>
                      </div>                      
                   </article>
                 </div>
            </div>
        </section>
        <section class="bg-white">
           <div class="bg-pink-500 section-border content px-4">
              <h1 class="lg:text-9xl md:text-6xl text-4xl font-bold sans-serif-bold uppercase text-left flex flex-col title txt-dark pt-10">
                <span>Create your</span>
                <span> Interactive</span>
                <span>website Faster</span>
              </h1>
              <div class="text-3xl txt-light my-5 leading-6">
                  <span>through premade components.</span>
              </div>
              <article>
                  <div class="flex flex-col sans-serif-bold uppercase mt-24 md:text-7xl text-3xl leading-6 txt-dark sub-title">
                    <span>Smooth </span>
                    <span>scrolling and </span>
                    <span>parallax</span>
                  </div>
                  <p class="sm:w-96 mt-5">
                    The integrated with Lenis smooth 
                    scroll and parallax feature to  
                    enhances the visual appeal of the 
                    section by allowing moving text or 
                    images.
                  </p>
              </article>
              <article class="py-20">
                 <div class="grid grid-cols-3 gap-10 ">
                   <figure >
                      <Parallax :speed="0.1" >
                          <NuxtImg src="/img/img-1.jpg" alt="parallax img"   />
                      </Parallax>
                   </figure>
                   <figure class="mt-24">
                      <Parallax :speed="0.3">
                          <NuxtImg src="/img/img-2.jpg" alt="parallax img" class="" />
                      </Parallax>
                   </figure>
                   <figure class="mt-60">
                      <Parallax :speed="0.2" >
                          <NuxtImg src="/img/img-3.jpg" alt="parallax img"/>
                      </Parallax>
                   </figure>
                 </div>
              </article>
           </div>
        </section>
        <section class="bg-pink-500 ">
            <div class=" bg-yellow-500 section-border content px-4 pb-10">
              <article>
                  <div class="flex flex-col sans-serif-bold uppercase pt-10 md:text-7xl text-3xl leading-6 txt-dark sub-title">
                    <span>Revealing </span>
                    <span>components that </span>
                    <span>enter or exit the </span>
                    <span>field of view</span>
                  </div>
                  <p class="sm:w-96 mt-5">
                    Create visually interactive image and text appear on view. 
                    It is useful for lazy loading images, infinite scrolling, 
                    and other dynamic content loading techniques.
                  </p>
              </article>
              <article class="md:my-24 my-16">
                  <Intersect class="flex justify-center img-intersect">
                      <figure class=" sm:w-96 w-full img-wrapper ">
                          <NuxtImg src="/img/img-4.jpg" alt="in view image" class=" absolute top-0 left-0 h-full w-full " />
                      </figure>
                  </Intersect>
              </article>            
            </div>
        </section>
        <section class="bg-yellow-500 pb-20">
              <article class="">
                  <Marquee :clone="true" :duration="10" :loop="0">
                    <h1 class="text-7xl sans-serif-bold text-yellow-600 mx-2">This is a marquee .</h1>
                  </Marquee>  
              </article >
              <article class="content px-4">
                  <div class="flex flex-col justify-center items-center sans-serif-bold uppercase pt-10 md:text-7xl text-3xl leading-6 txt-dark sub-title">
                    <span>Marquee</span>
                  </div>
                  <p class="sm:w-96 mt-5 mx-auto text-center">
                      A moving text or image 
                  </p>
              </article>
              <article class="">
                  <Marquee :clone="true" :duration="10" :loop="0" direction="reverse">
                    <h1 class="text-7xl sans-serif-bold text-yellow-600 mx-2">This is a marquee .</h1>
                  </Marquee>  
              </article >
        </section> 
        <section class="bg-yellow-500">
            <div class=" bg-white section-border content px-4 pb-10">
              <article>
                  <h1 class="lg:text-9xl md:text-6xl text-4xl font-bold sans-serif-bold uppercase text-center flex flex-col title txt-dark pt-10">
                      <span>Save time </span>
                      <span>build Amazing</span>
                      <span>websites now</span>
                  </h1>
              </article>    
            </div>
        </section>      
        <Footer />
      </div>   
</template>

<style lang="scss" scoped>
.title,.sub-title{
  line-height: .8;
}
.cloud-bg{
  margin-bottom: -10px;
}
.card{
  @media (min-width: 64rem){
    height: 30rem;
    }
    height: 25rem;
  border-radius: 50px;
}
.first-cloud, .second-cloud{
  @media (max-width: 64rem){
    height: 100%;
  }
}
.img-wrapper{
  position: relative;
  aspect-ratio: 3/4;
  clip-path: inset(50% round 50%);
  transform: scale(0);
  transition-property: transform;
  transition-duration: 1s; /* Transition duration */
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.5);
  
}
.is-inview{
  .img-wrapper{
    clip-path: inset(0 round 0);
    transform: scale(1);
  }
}
</style>
