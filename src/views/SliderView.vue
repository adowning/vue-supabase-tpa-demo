<template>
  <Header />
  <!-- <Carousel
    id="galleryx"
    :items-to-show="1"
    :wrap-around="false"
    v-model="currentSlide"
  >
    <Slide v-for="slide of slides" :key="slide">
      <div
        class="carousel__item"
        :style="`background-image: url(/images/${slide.name}.webp)`"
      ></div>
    </Slide>
  </Carousel> -->
  <!-- <div class="base"> -->

  <!-- <div
    :style="`position: absolute; left: 0px; top: 0px;height: 100vh; width: 100vw; background-image: url(/images/background.jpg); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;`"
  > -->
  <!-- <div class="center h-screen w-screen"> -->

  <!-- </div> -->
  <div
    :style="`color: white; text-align: center;  height: 100vh; width: 100%;  position: absolute; z-index: 1; top: 80px;  `"
  >
    <Transition>
      <div
        v-if="currentSlide"
        :style="`z-index: 5; display: flex; min-height: 40vh; text-align: center;z-index: 1; margin-left: 20px; margin-right: 20px; border-radius: 12px; border-width: 2px; border-color: white; border-style: solid;  min-width: 55%; min-height: 40vh; background-position: center; background-size: cover; background-repeat: no-repeat; background-image: url(/images/${currentSlide.name}back.jpg); `"
      >
        <div class="center h-screen w-screen">
          <svg
            style="
              position: absolute;
              left: 0px;
              top: 0px;
              height: 32vh;
              width: 100vw;
              z-index: 3;
            "
            xmlns="http://www.w3.org/2000/svg"
            xml:lang="en"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="100 0 620 450"
          >
            <title>Circular Text Path</title>
            <defs>
              <path
                id="textcircle"
                d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                transform="rotate(12,250,250)"
              />
            </defs>

            <g class="textcircle">
              <text textLength="940">
                <textPath
                  xlink:href="#textcircle"
                  aria-label="CSS & SVG are awesome"
                  textLength="940"
                >
                  Press spin to play &nbsp; {{ currentSlide.name }} &nbsp;
                </textPath>
              </text>
            </g>
          </svg>
          <div
            class="logo"
            :style="`background-image: url(/images/${currentSlide.name}logo.png)`"
          ></div>
        </div>
      </div>
      <!-- </div> -->
    </Transition>
    <div
      style="
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 45%;
        left: 0px;
      "
    >
      <Carousel
        :itemsToShow="1.95"
        :wrapAround="true"
        :transition="500"
        @slide-end="handleSlideEnd($event)"
        ref="carousel"
      >
        <Slide v-for="slide of slides" :key="slide">
          <div
            class="carousel__item"
            :style="`background-image: url(/images/${slide.name}.webp)`"
          ></div>
          <!-- <img :src="`/images/${slide}.webp`" alt="slide" /> -->
        </Slide>
      </Carousel>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import { onKeyStroke, useTitle } from '@vueuse/core';
import Header from '@/components/Header.vue';
import zim from 'zimjs';
import 'vue3-carousel/dist/carousel.css';
import { transitionHelper } from '../utils.js';
const currentSlide = ref<null | any>(null);
const carousel = ref(null);

zim.zimplify();

const count = ref(0);
var scaling = 'fit'; // this will resize to fit inside the screen dimensions
var width = 1224;
var height = 2000;
var color = black;
var outerColor = darker;
const colors = [
  '#02befd',
  '#16042a',
  '#f743e0',
  '#69ff48',
  '#ece427',
  '#722079'
];
function incrementClick(val: any) {
  transitionHelper({
    async updateDOM() {
      currentSlide.value = slides.value[val.currentSlideIndex];
      await nextTick();
    }
  });
}
const setTitle = (data: any) => {
  const title = useTitle();
  title.value = data;
};
setTitle('Animation Twelve');
const slides = ref([
  { name: 'crazyscientist', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'cleosheart', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'africanking', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'bananas', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'charming', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'discofruits', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'frostyfruits', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'hitinvegas', vip: 0, new: 0, hot: 0, jackpot: 0 }
]);
currentSlide.value = slides.value[0];
function handleSlideEnd(val: any) {
  // currentSlide.value = slides.value[val.currentSlideIndex];
  incrementClick(val);
}
let frame;
const assets = [];
var path = 'images/';

onKeyStroke('ArrowRight', (e) => {
  carousel.value.next();
  e.preventDefault();
});
onKeyStroke('ArrowLeft', (e) => {
  carousel.value.prev();

  e.preventDefault();
});
onMounted(() => {
  setTitle('Animation Twelve');

  frame = new Frame(
    scaling,
    width,
    height,
    color,
    outerColor,
    null,
    assets,
    path,
    new ProgressBar({
      barType: 'rectangle',
      foregroundColor: green,
      backgroundColor: dark,
      corner: 5
    })
  );
  frame.on('ready', function () {
    zog('ready from ZIM Frame'); // logs in console (F12 - choose console)
    const maxW = 1200;
    const maxH = 3000;
    var stage = frame.stage;
    var stageW = frame.width;
    var stageH = frame.height;
    // new Page(W, H, colors[0], colors[1]).addTo();
    const glows = new Page(stageW, stageH, colors[1], colors[0]).addTo().bot();
    // let x = rand(W);
    // let rMin = 5;
    // let rMax = 25;
    // let r = rand(rMin, rMax);
    //
    // .animate({
    //   props: {
    //     x: x + rand(-200, 100),
    //     y: H - 100
    //   },
    //   time: 30 - r,
    //   ease: 'bounceOut',
    //   loop: true
    // });
    loop(200, () => {
      let r = rand(5, 25);
      let glow = new Poly(r, 5, 0.6, clear, colors[rand(0, 5)], 1)
        .loc(rand(maxW), rand(maxH), glows)
        // .outline(colors[rand(0, 4)])
        .alp(0.8)
        .cache();
      // let glowx = new Circle(
      //   r,
      //   new RadialColor([white, clear], [0, 1], 0, 0, 0, 0, 0, r)
      // )
      //   .alp(0.5)
      //   .loc(rand(maxW), rand(maxH), glows)
      //   .cache();
      glow.vx = rand(0.5, 1);
      glow.vy = rand(-0.5, -1);
    });

    // Animate glows
    Ticker.add(() => {
      glows.loop((glow) => {
        glow.x += glow.vx;
        glow.y += glow.vy;
        if (glow.x > maxW + 20) glow.loc(rand(-100), rand(maxH));
        if (glow.y < -20) glow.loc(rand(maxW), maxH + rand(50));
      });
    });
  });

  handleSlideEnd({ currentSlideIndex: 0 });
  console.log('loaded');
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.base {
  background-color: #003;
  display: grid;
  min-height: 100vh;
  overflow: hidden;
}

text {
  fill: white;
  font-family: 'Reuben', sans-serif;
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0.2;

  font-variant-ligatures: none;
  letter-spacing: 6px;
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
}

svg {
  max-width: 1200px;
  margin-top: 20px;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.textcircle {
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: 350px 350px;
  padding-top: 100px;
  margin-top: 100px;
  transform: scale(1.3);
}

/* svg:hover .textcircle {
  transform: scale(1.2) rotate(90deg);
} */
.count {
  font-family: sans-serif;
  text-align: center;
  inset: 50% 0 auto;
  transform: translateY(-50%);
  font-size: 25vw;
  view-transition-name: count;
}

/* Custom transition */
@keyframes rotate-out {
  to {
    transform: rotate(90deg);
  }
}

@keyframes rotate-in {
  from {
    transform: rotate(-90deg);
  }
}
.logo {
  height: 150px;
  width: 300px;
  left: 20px;
  top: 100px;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  position: absolute;
  z-index: 0;
  transform: scale(0.7);
}

.carousel__slide {
  padding: 2px;
}
.carousel__item {
  min-height: 400px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  border-radius: 12px;
  margin: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: grey;
}

.carousel__viewport {
  perspective: 2000px;
}
.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
  z-index: 5;
  height: 0vh !important;
  touch-action: pan-y;
  overscroll-behavior: none;
  #galleryx {
    top: 15% !important;
    height: 80vh !important;
    background-color: red;
  }
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  height: 100%;
  transform: rotateY(-10deg) scale(0.8);
  /* translate: 0px 200px; */
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotate(10deg) scale(0.8);
  /* translate: 0px 200px; */
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotate(-5deg) scale(0.85);
  /* background-color: yellow; */
  margin-top: 80px !important;
  z-index: 5;

  /* translate: 0px 200px; */
}

.carousel__slide--next {
  opacity: 1;
  transform: rotate(5deg) scale(0.85);
  /* background-color: yellow; */
  margin-top: 80px !important;
  z-index: 5;

  /* translate: 0px 200px; */
}

.carousel__slide--active {
  margin-top: 30px;
  border-radius: 12px;
  margin-left: 20px;
  z-index: 5;
  margin-right: 20px;
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  --border-width: 1px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 420px;
  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: white;
  background: #222;
  border-radius: 12px;

  &::after {
    position: absolute;
    content: '';
    top: calc(-1 * var(--border-width));
    border-radius: 12px;

    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 12px;
    animation: moveGradient 4s alternate infinite;
  }
}
@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>
