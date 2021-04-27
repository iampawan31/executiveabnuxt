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
        <div
          class="flex flex-col text-black py-10 bg-white rounded-lg shadow-lg"
        >
          <div class="flex mx-auto content-center w-40">
            <img :src="slide.image" :alt="slide.title" />
          </div>
          <div
            class="bg-green-500 py-2 font-semibold justify-center flex text-center"
          >
            {{ slide.title }}
          </div>
          <div class="flex text-md p-5">{{ slide.description }}</div>
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
        spaceBetween: 30,
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

/* .swiper-container .swiper-slide {
  height: 400px;
} */
</style>
