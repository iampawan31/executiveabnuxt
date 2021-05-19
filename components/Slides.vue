<template>
  <client-only>
    <swiper
      ref="carousel"
      class="swiper w-screen h-96"
      :options="swiperOptions"
      @ready="onSwiperRedied"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <swiper-slide
        v-for="(slide, index) in firstSlider"
        :key="index"
        class="flex max-w-xs min-h-full"
      >
        <div
          class="flex flex-col text-black pt-10 bg-white rounded-lg shadow-lg"
        >
          <div class="flex mx-auto content-center px-4">
            <img class="w-32 lg:w-48" :src="slide.image" :alt="slide.title" />
          </div>
          <div
            :class="slide.gradient"
            class="py-2 font-semibold text-white justify-center flex text-center"
          >
            {{ slide.title }}
          </div>
          <div class="flex text-sm px-10 py-5">{{ slide.description }}</div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </client-only>
</template>

<script>
import { mapMutations } from 'vuex'
import { firstSlider } from '../data/home'
export default {
  name: 'Slides',
  data() {
    return {
      firstSlider,
      swiperRef: null,
      swiperOptions: {
        loop: false,
        effect: 'slide',
        spaceBetween: 50,
        breakpoints: {
          1024: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            slidesPerView: 4,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: 'true',
            },
          },
        },
      },
    }
  },
  methods: {
    ...mapMutations({
      updateInitialSlide: 'updateInitialSlide',
    }),
    onSwiperRedied(swiper) {
      this.updateInitialSlide(swiper.activeIndex === 0)
      this.swiperRef = swiper
    },
    onSwiperSlideChangeTransitionStart() {
      this.updateInitialSlide(this.swiperRef.activeIndex === 0)
    },
  },
}
</script>
