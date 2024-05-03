<script setup>
const { $gsap } = useNuxtApp()
const menuOpen = ref(false);
const menuItems = ref(null);
const { $lenis } = useNuxtApp()
const menuButton = ref(null); // Reference to the menu button element

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  animateMenu();
};


// Close menu if menu open
const closeMenu = () => {
  if (menuOpen.value) {
    toggleMenu()
  }
};

const animateMenu = () => {
  const menuItem = document.querySelectorAll('.menu-item')
  const tl =  $gsap.timeline();
  
  // Disable menu button during animation
  menuButton.value.disabled = true;

  if (menuOpen.value) {
    document.body.classList.add('menu-open');
    tl.set(menuItem,{y:50, })
    tl.to(menuItems.value, { clipPath:"inset(0 0 0% 0)", duration: 0.5, stagger: 0.1,  display:"block",
    ease: "expo.inOut",
      onComplete:()=>{
        $lenis.stop()
        menuButton.value.disabled = false; // Enable menu button on animation completion
      }
    });
    tl.to(menuItem,{
      duration:.5,
       y:0,
       stagger:0.1,
       ease: "expo.inOut"
    },+0.1)
  } else {
    tl.to(menuItems.value, { clipPath:"inset(0 0 100% 0)",  duration: 0.3, stagger: -0.1,
     onComplete : () =>{
      $gsap.set(menuItems.value, {
          display:"none"
      })
      document.body.classList.remove('menu-open');
      $lenis.start()
      menuButton.value.disabled = false; // Enable menu button on animation completion
     }
    });
  }
};

onMounted(() => {
// Initially set the opacity to 0 for the entire menu
  $gsap.set(menuItems.value, { clipPath:"inset(0 0 100% 0)", display:"none" });
});

</script>

<template>
  <nav class="menu fixed left-0 top-0 z-10	w-full nav-bg" >
    <div class="flex justify-between px-4 items-center menu-wrapper content">
      <div class="logo z-50"> <NuxtLink to="/" @click="closeMenu" class="md:text-xl txt-purple text-indigo-500"><span class="sans-serif-bold">Take One</span></NuxtLink> </div>  
      <div class="flex items-center gap-4">
          <!-- <ul class=" md:flex hidden items-center gap-3 txt-light">
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul> -->
          <div class="mobile-menu z-10 ml-10 txt-light">
            <button ref="menuButton" class="toggle-menu" @click="toggleMenu">{{ menuOpen ? 'Close' : 'Menu' }}</button>
            <div ref="menuItems" class="menu-items">
                <ul class="flex md:flex-row md:justify-between flex-col justify-center md:items-end items-center h-full px-4 py-5  uppercase ">
                    <li class="menu-item ">
                      <NuxtLink to="/" @click="toggleMenu" >
                        <span class="lg:text-8xl text-4xl sans-serif-bold">this is navigation</span>  
                      </NuxtLink>
                    </li>
                </ul>
            </div>
          </div>
      
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
 .nav-bg{
  -webkit-backdrop-filter: saturate(180%) blur(10px);
    backdrop-filter: saturate(180%) blur(10px);
    background: linear-gradient(to bottom, rgba(14, 14, 14, 0.6), rgba(14, 14, 14, 0));
 }

 .logo{
  color: #131313;
 }
 .menu-wrapper{
  z-index: 999;
  position: relative;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
 }
.menu{
  &::after{
    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, .8);
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    transition: opacity .5s cubic-bezier(.3,.86,.36,.95);
    z-index: 30;
  }
}
.menu-open{
  .menu{
  &::after{
    content: "";
    opacity: 1;

  }
}
}

.mobile-menu {
  /* Your menu styles */
  .toggle-menu{
    z-index: 88;
    position: relative;
  }
}

.menu-items{
    position: fixed;
    background-color: #0E0E0E;
    width: 100%;
    height: 25rem;
    top: 0;
    left:0;
    clip-path: inset(0 0 100% 0);
    will-change: clip-path;
    display: none;
}

</style>