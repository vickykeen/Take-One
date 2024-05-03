import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger, Draggable, Flip, MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'both',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

const raf = (time) => {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

// Stop and start methods for Lenis
const stopLenis = () => {
  lenis.stop();
};

const startLenis = () => {
  lenis.start();
};

const destroyLenis = () => {
  lenis.destroy();
};

export default defineNuxtPlugin((nuxtApp) => {
  
  nuxtApp.provide('lenis', lenis);
  nuxtApp.provide('stopLenis', stopLenis);
  nuxtApp.provide('startLenis', startLenis);
  nuxtApp.provide('destroyLenis', destroyLenis);

});
