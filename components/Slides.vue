<template>
  <client-only>
    <swiper ref="carousel" class="swiper" :options="swiperOptions">
      <swiper-slide
        v-for="(slide, index) in firstSlider"
        :key="index"
        class="flex"
      >
        <div
          class="flex flex-col text-black pt-10 bg-white rounded-lg shadow-lg"
        >
          <div class="flex mx-auto content-center px-4">
            <img class="w-32 xl:w-auto" :src="slide.image" :alt="slide.title" />
          </div>
          <div
            :class="slide.gradient"
            class="py-2 font-semibold text-white justify-center flex text-center"
          >
            {{ slide.title }}
          </div>
          <div class="flex text-sm p-5">{{ slide.description }}</div>
        </div>
      </swiper-slide>
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
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
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
