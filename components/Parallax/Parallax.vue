<template>
  <div ref="parallaxElement" class="parallax">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onUnmounted } from 'vue';

const props = defineProps({

  // Animate background-position instead of translate
  background: {
    type: Boolean,
    default: false
  },
  // Start parallax from very bottom of the page instead of middle
  fromBottom: {
    type: Boolean,
    default: false
  },
  // Just add '--parallax-value' css variable to element for custom animations
  custom: {
    type: Boolean,
    default: false
  },
  // Parallax power
  speed: {
    type: Number,
    default: 0.15
  },
  // 'x' - horizontal parallax, 'y' - vertical
  direction: {
    type: String,
    default: 'y'
  },
  // Limit.min, limit.max offset
  limit: {
    type: Object,
    default: null
  },
  // Mobile max width
  mobileMaxWidth: {
    type: Number,
    default: 768
  },
  // Is parallax disabled
  disabled: {
    type: Boolean,
    default: false
  }
});

const parallaxElement = ref(null);

onMounted(() => {
  initParallax();
});

onUnmounted(() => {});

function initParallax() {
  // Extract modifiers and value from props
  const { modifiers = {}, value = {} } = props;
  const settings = {
    // Use props values or defaults if props are not provided
    isParallaxOnMobile: modifiers.mobile || false,
    background: modifiers.background || false,
    startParallaxFromBottom: value.fromBottom || false,
    justAddParallaxValue: value.custom || false,
    direction: value.direction || 'y',
    limit: value.limit || null,
    mobileMaxWidth: value.mobileMaxWidth || 768,
    isDisabled: value.disabled || false
  };

  if (settings.background) {
    settings.speed = value.speed || 0.02;
    settings.limit = {
      min: 0,
      max: 100
    };
  }

  // Check if parallax should be disabled on mobile
  const isMobile = window.innerWidth < settings.mobileMaxWidth;
  if (isMobile) {
    settings.isDisabled = true;
  }

  if (!settings.isDisabled) {
    const shouldParallax = isMobile ? true : !settings.isParallaxOnMobile;

    if (shouldParallax) {
      init(parallaxElement.value, settings);
    }
  }
}

function init(el, settings) {
  // START PARALLAX FROM MIDDLE OR BOTTOM OF THE SCREEN
  const startingPoint = settings.startParallaxFromBottom
    ? window.innerHeight
    : window.innerHeight / 2;

  const pageYOffset = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  let scrollPosition = pageYOffset - offsetTopFromWindow(el) + startingPoint;

  // PARALLAX ONLY IN VIEWPORT
  if (isInViewport(el)) {
    animate(el, scrollPosition, settings);
  }

  el.__prlxRequestAnimationFrameId = requestAnimationFrame(
    init.bind(null, el, settings)
  );
}

function animate(el, scrollPosition, settings) {
  // Adjust this constant value as needed
  const constantValue = 0; // Example constant value

  let offset = constantValue - (scrollPosition * props.speed);

  // RUN PARALLAX
  let parallaxType;

  if (settings.background) {
    parallaxType = parallaxBackgroundPosition;
  } else if (settings.justAddParallaxValue) {
    parallaxType = addParallaxValueAsCssVariable;
  } else {
    parallaxType = parallaxTransform;
  }
  parallaxType(el, offset, settings.direction);
}


function parallaxBackgroundPosition(el, offset, direction) {
  el.style.transition = `background-position 0.1s ease-out`;

  if (direction === 'y') {
    el.style.backgroundPosition = `50% ${offset}%`;
  } else {
    el.style.backgroundPosition = `${offset}% 50%`;
  }
}

function parallaxTransform(el, offset, direction) {
  el.style.transition = `transform 0.1s ease-out`;
  el.style.transform = `translate${direction.toUpperCase()}(${Math.round(
    offset
  )}px)`;
}

function addParallaxValueAsCssVariable(el, offset) {
  el.style.setProperty('--parallax-value', offset);
}

const isInViewport = (el, { top: t, height: h } = el.getBoundingClientRect()) =>
  t <= window.innerHeight && t + h > 0;

const offsetTopFromWindow = (element) => {
  let top = 0;
  let el = element;

  do {
    top += el.offsetTop || 0;
    el = el.offsetParent;
  } while (el);

  return top;
};
</script>

<style scoped>
.parallax {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
</style>
