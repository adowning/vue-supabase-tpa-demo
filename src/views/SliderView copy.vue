<template>
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
  <div
    :style="`position: absolute; left: 0px; top: 0px;height: 100vh; width: 100vw; background-image: url(/images/background.jpg); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;`"
  >
    <div
      :style="`color: white; text-align: center; margin: auto; contain;  height: 40vh; width: 100%;  position: absolute; z-index: 1;`"
    >
      <div class="bl_game__info">
        <div class="bl_game_left">
          <div
            v-if="currentSlide"
            :style="`min-width: 55%; min-height: 400px; background-size: contain; background-repeat: no-repeat; background-image: url(/images/${currentSlide.name}back.jpg); `"
          ></div>
        </div>

        <div class="bl_game_right">
          <p class="bl_game__topic">gameplay</p>
          <ul class="bl_game__list">
            <li class="bl_game__item">
              <span class="bl_game__param">Slot type</span>
              <span class="bl_game__val">5X3</span>
            </li>
            <li class="bl_game__item">
              <span class="bl_game__param">Paylines</span>
              <span class="bl_game__val">243 ways</span>
            </li>
            <li class="bl_game__item">
              <span class="bl_game__param">Reels</span>
              <span class="bl_game__val">5</span>
            </li>

            <li class="bl_game__item">
              <span class="bl_game__param">Maximum Win Base Game</span>
              <span class="bl_game__val">146x</span>
            </li>
            <li class="bl_game__item">
              <span class="bl_game__param">Volatility</span>
              <span class="bl_game__val">Medium</span>
            </li>

            <li class="bl_game__item">
              <span class="bl_game__param">Bonus Feature</span>
              <span class="bl_game__val">2</span>
            </li>
            <li class="bl_game__item">
              <span class="bl_game__param">Hit Frequency</span>
              <span class="bl_game__val">26%</span>
            </li>
            <li class="bl_game__item">
              <span class="bl_game__param">RTP</span>
              <span class="bl_game__val">96.24%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
const currentSlide = ref<null | any>(null);

const slides = ref([
  // 'LargeBigTop',
  // 'LargeBlackDiamond',
  // 'LargeBrauhaus',
  // 'LargeInerstellarAttack',
  // 'Large:ighteningLEapard',
  { name: 'crazyscientist', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'cleosheart', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'africanking', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'bananas', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'charming', vip: 0, new: 0, hot: 0, jackpot: 0 },

  { name: 'discofruits', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'frostyfruits', vip: 0, new: 0, hot: 0, jackpot: 0 },
  { name: 'hitinvegas', vip: 0, new: 0, hot: 0, jackpot: 0 }
]);
// export default defineComponent({
//   name: 'SliderView',
//   components: {
//     Carousel,
//     Slide
//     // Pagination
//   }
// });

function handleSlideEnd(val: any) {
  currentSlide.value = slides.value[val.currentSlideIndex];
}
onMounted(() => {
  handleSlideEnd({ currentSlideIndex: 0 });
  console.log('loaded');
});
</script>

<style scoped>
.bl_game_left {
  width: 40%;
}
.bl_game__info {
  width: 100%;
  max-width: 1400px;
  text-align: start;
  display: -ms-flex;
  display: flex;
  font-size: 10px;
  margin: auto;
  flex-wrap: wrap;
  padding-right: 10px;
  box-sizing: border-box;
}
.bl_game_right {
  -webkit-text-size-adjust: 100%;
  display: block;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 400;
  color: #fff;
  max-height: 200px;
  right: 0px;
  width: 44%;
  padding-bottom: 30px;
  padding-left: 30px;
}
li:not(:last-child) {
  margin-bottom: 8px;
}
.bl_game__list {
  -webkit-text-size-adjust: 100%;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 400;
  color: #fff;
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100%;
}
.bl_game__item {
  -webkit-text-size-adjust: 100%;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 400;
  color: #fff;

  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
}
.carousel__slide {
  padding: 15px;
}
.carousel__item {
  min-height: 400px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  border-radius: 8px;
  margin-top: 10px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
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
  z-index: 2;
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
  background-color: yellow;
  margin-top: 80px !important;

  /* translate: 0px 200px; */
}

.carousel__slide--next {
  opacity: 1;
  transform: rotate(5deg) scale(0.85);
  background-color: yellow;
  margin-top: 80px !important;

  /* translate: 0px 200px; */
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  background-color: blue;
}
</style>
