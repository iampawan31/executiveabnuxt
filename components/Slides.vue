<template>
  <client-only>
    <swiper
      ref="carousel"
      class="swiper max-w-xs sm:max-w-4xl lg:max-w-full"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(slide, index) in firstSlider"
        :key="index"
        class="flex"
      >
        <div class="flex flex-col bg-white text-black rounded-md shadow-md">
          <div class="px-5 pt-5 justify-center flex">
            <img :src="slide.image" class="h-36" :alt="slide.title" />
          </div>
          <div
            class="bg-green-600 text-center h-12 py-3 text-md text-white font-semibold"
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
        loop: true,
        effect: 'slide',
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.swiper-button-prev::after,
.swiper-button-next::after {
  color: orange;
}
</style>
