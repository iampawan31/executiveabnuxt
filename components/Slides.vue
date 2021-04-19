<template>
  <client-only>
    <swiper ref="carousel" class="swiper" :options="swiperOptions">
      <swiper-slide
        v-for="(slide, index) in firstSlider"
        :key="index"
        class="flex"
      >
        <div class="flex flex-col bg-white text-black rounded-md shadow-md">
          <div class="px-5 pt-5">
            <img :src="slide.image" :alt="slide.title" />
          </div>
          <div
            class="bg-green-600 text-center h-12 py-3 text-xl text-white font-semibold"
          >
            {{ slide.title }}
          </div>
          <div class="flex-1 text-sm p-3">{{ slide.description }}</div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </client-only>
</template>

<script>
import { firstSlider } from '../data/home'
export default {
  name: 'Slides',
  data() {
    return {
      firstSlider,
      swiperOptions: {
        loop: false,
        effect: 'slide',
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
