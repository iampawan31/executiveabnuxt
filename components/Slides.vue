<template>
  <client-only>
    <swiper
      ref="carousel"
      class="w-screen max-w-xs md:max-w-none xl:max-w-screen-2xl h-96 md:h-96 lg:h-96 xl:h-96 min-h-full"
      :options="swiperOptions"
      @ready="onSwiperRedied"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
      @slide-next-transition-end="(swiper) => sliderNextClicked(swiper)"
      @slide-prev-transition-end="(swiper) => sliderPrevClicked(swiper)"
    >
      <swiper-slide
        v-for="(slide, index) in firstSlider"
        :key="index"
        class="flex min-h-full"
      >
        <div
          class="flex flex-col text-black pt-10 bg-white rounded-lg shadow-lg"
        >
          <div class="flex mx-auto content-center px-4">
            <img
              class="w-48 h-36 lg:h-32 lg:w-40"
              :src="slide.image"
              :alt="slide.title"
            />
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
      <div slot="pagination" class="swiper-pagination z-50"></div>
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
          1536: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            slidesPerView: 4,
            spaceBetween: 80,
          },
          1280: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: 'true',
            },
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
      updateBreakpoint: 'updateBreakpoint',
    }),
    sliderNextClicked(swiper) {
      // this.swiperRef.slideTo(this.swiperRef.slides.length - 1)
    },
    sliderPrevClicked(swiper) {
      // this.swiperRef.slideTo(0)
    },
    onSwiperRedied(swiper) {
      this.updateInitialSlide(swiper.activeIndex === 0)
      this.updateBreakpoint(swiper.currentBreakpoint)
      this.swiperRef = swiper
    },
    onSwiperSlideChangeTransitionStart() {
      this.updateInitialSlide(this.swiperRef.activeIndex === 0)
    },
  },
}
</script>
