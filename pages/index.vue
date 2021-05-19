<template>
  <div>
    <div
      class="relative flex items-center h-96 py-72 xl:py-96 2xl:max-h-96 2xl:py-96 overflow-hidden"
    >
      <section
        class="w-full grid sm:place-items-end text-white z-30 px-2 sm:px-0 md:px-4 2xl:px-4 container mx-auto"
      >
        <div
          class="sm:text-right text-left text-2xl md:text-4xl font-bold uppercase mb-5 px-2 md:px-0 filter drop-shadow-max"
        >
          PUT THE SALESPERSON IN YOUR REARVIEW
        </div>
        <div
          class="text-left sm:text-center text-gray-300 text-md mb-5 px-2 md:px-0 filter drop-shadow-max"
        >
          We find the vehicle your looking for and save you time
          <br class="hidden md:block" />
          and money. All you need to do is sit back & buckle-up.
        </div>
        <div class="mx-2 md:mx-0 flex flex-shrink">
          <button
            class="bg-gradient-to-r from-yellow-700 to-yellow-500 py-2 px-4 md:w-full rounded text-white mt-4 mb-10"
          >
            GET STARTED
            <fa class="ml-1" :icon="faChevronRight" />
          </button>
        </div>
      </section>
      <div class="absolute bottom-4 left-4 md:bottom-16 md:left-16 z-50">
        <button
          class="text-white rounded-full focus:outline-none"
          @click="toggleVideoPlayback"
        >
          <fa v-if="videoPlaying" class="text-5xl" :icon="faPauseCircle" />
          <fa v-else class="text-5xl" :icon="faPlayCircle" />
        </button>
      </div>
      <video
        ref="backgroundVideo"
        :autoPlay="videoPlaying ? true : false"
        loop
        muted
        :poster="require('~/assets/images/home-banner-poster-image.jpeg')"
        class="absolute z-10 w-auto min-w-full min-h-full max-w-6xl md:max-w-none -left-96 lg:max-w-none lg:left-0"
      >
        <source
          src="~/assets/videos/homepage_main_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <CovidMessageSection />
    <section class="bg-brand-gray-dark py-16">
      <div class="mx-auto container">
        <div
          class="grid sm:grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 2xl:gap-10 2xl:mx-10"
        >
          <div
            class="py-14 px-4 md:p-8 lg:p-14 2xl:py-20 shadow bg-local bg-cover bg-center"
            :style="firstSectionBackgroundImage1"
          >
            <h1
              class="uppercase font-semibold text-white text-xl sm:text-2xl filter drop-shadow-max"
            >
              Ready to experience car buying on auto-pilot?
            </h1>
            <p
              class="mt-4 text-brand text-lg sm:text-xl md:text-lg filter drop-shadow-max"
            >
              Tell us what your looking for and let us get started. Our service
              works for all brands and models. Nationwide delivery available.
            </p>
            <button
              class="bg-gradient-to-r from-yellow-700 to-yellow-500 uppercase py-2 px-8 rounded text-white mt-4 mb-10"
            >
              Launch
              <fa class="ml-1" :icon="faChevronRight" />
            </button>
          </div>
          <div
            class="py-14 px-4 md:p-8 lg:p-14 2xl:py-20 shadow bg-local bg-cover bg-center"
            :style="firstSectionBackgroundImage2"
          >
            <h1
              class="uppercase font-semibold text-white text-xl sm:text-2xl filter drop-shadow-max"
            >
              Now anyone can buy the way executives do?
            </h1>
            <p
              class="mt-4 text-brand text-lg sm:text-xl md:text-lg filter drop-shadow-max"
            >
              Those purchasing high end vehicles have utilized our type of
              service for years. Now, we’re making that level of service a
              reality for all buyers.
            </p>
            <div class="mt-3">
              <button
                class="text-white rounded-full focus:outline-none"
                @click="toggleSectionVideoPlayback"
              >
                <fa
                  v-if="sectionVideoPlaying"
                  class="text-5xl"
                  :icon="faPauseCircle"
                />
                <fa v-else class="text-5xl" :icon="faPlayCircle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black bg-blend-darken">
      <div class="flex flex-col lg:flex-row relative">
        <div
          class="flex max-w-lg sm:max-w-4xl h-full sm:py-10 bg-no-repeat bg-contain absolute"
          :style="sliderBackground"
        >
          <div
            :class="!initialSlide ? 'hidden' : null"
            class="flex max-w-full sm:max-w-xl sm:mx-auto flex-col p-4 xl:py-0 xl:px-20 content-center justify-center"
          >
            <div class="uppercase text-lg sm:text-xl text-brand mb-5">
              YOUR PERSONAL CONCIERGE AWAITS
            </div>
            <div class="uppercase text-2xl sm:text-3xl font-semibold mb-5">
              HOW OUR NO-COST SERVICE WORKS
            </div>
            <div class="text-lg text-gray-400">
              The ultimate hands-off buying experience. Get the perfect vehicle,
              for the perfect price, with
              <span class="text-brand"> no cost to you.</span>
            </div>
          </div>
        </div>
        <div class="flex w-screen py-10">
          <div class="relative">
            <div
              v-show="!initialSlide"
              class="swiper-button-prev bg-brand"
            ></div>
            <Slides />
            <div class="swiper-button-next bg-brand"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-brand-gray-dark py-6 sm:py-12">
      <div class="">
        <tabs>
          <tab
            v-for="(homepageTab, index) in homepageTabSection"
            :key="index"
            :title="homepageTab.tabTitle"
          >
            <div class="container mx-auto">
              <div class="shadow-sm rounded-sm transition-opacity">
                <div
                  class="flex flex-col xl:h-60 lg:flex-row xl:max-w-6xl xl:mx-auto"
                >
                  <div
                    class="flex max-w-full lg:max-w-sm lg:w-80 2xl:max-w-sm flex-wrap flex-column content-center bg-cover py-10 px-5 lg:p-5 rounded-tr-md lg:rounded-tr-none rounded-tl-md lg:rounded-bl-md"
                    :style="{
                      backgroundImage: `url(${homepageTab.imageURL})`,
                    }"
                  >
                    <h1
                      class="uppercase text-xl sm:text-2xl xl:text-3xl text-white font-semibold mb-5"
                    >
                      {{ homepageTab.title }}
                    </h1>
                    <p class="text-brand text-xs sm:text-sm xl:text-base">
                      {{ homepageTab.description }}
                    </p>
                  </div>
                  <div
                    class="flex flex-1 bg-white text-gray-500 flex-wrap content-center rounded-br-md rounded-bl-md lg:rounded-bl-none lg:rounded-tr-md xl:px-10"
                  >
                    <div class="flex flex-col lg:flex-row 2xl:flex-row p-5">
                      <div class="flex flex-1">
                        <ul class="tab-section list-outside">
                          <li
                            v-for="(
                              singleList, indexOne
                            ) in homepageTab.listOne"
                            :key="indexOne"
                            class="mb-4 text-sm"
                          >
                            {{ singleList }}
                          </li>
                        </ul>
                      </div>
                      <div class="flex flex-1 flex-col">
                        <ul class="tab-section list-outside">
                          <li
                            v-for="(
                              singleList, indexTwo
                            ) in homepageTab.listTwo"
                            :key="indexTwo"
                            class="mb-4 text-sm"
                          >
                            {{ singleList }}
                          </li>
                        </ul>
                        <div class="ml-6">
                          <a
                            :href="homepageTab.link.path"
                            class="text-brand underline"
                          >
                            {{ homepageTab.link.name }}
                            <fa class="ml-1" :icon="faChevronRight" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab>
        </tabs>
      </div>
    </section>
    <section class="bg-black py-16">
      <div class="container mx-auto">
        <div
          class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 relative lg:pl-4 xl:pl-0"
        >
          <div class="flex mx-auto md:mx-0 lg:mx-auto">
            <InstagramFeed
              :token="accessToken"
              fields="media_url,media_type,caption,permalink"
              :mediatypes="['IMAGE']"
              :count="10"
            >
              <template #loading="props">
                <h1 v-if="props.loading" class="fancy-loading">
                  Loading, please wait...
                </h1>
              </template>

              <template #feeds="props">
                <client-only>
                  <swiper
                    ref="carousel"
                    class="swiper ig-swiper relative max-w-sm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-2xl xl:max-w-4xl h-96 sm:h-60 md:h-72 lg:h-48 xl:h-60 min-h-full"
                    :options="swiperOptions"
                  >
                    <swiper-slide
                      v-for="(feed, index) in props.feeds"
                      :key="index"
                      class="w-full h-auto"
                    >
                      <div
                        class="bg-cover bg-center shadow-md w-full min-h-full"
                        :style="{
                          backgroundImage: `url('${feed.media_url}')`,
                        }"
                      >
                        <a
                          class="absolute bottom-1 right-1"
                          rel="noreferrer"
                          :href="feed.permalink"
                          target="_blank"
                        >
                          <fa class="text-white text-3xl" :icon="faInstagram" />
                        </a>
                      </div>
                    </swiper-slide>
                    <div slot="scrollbar" class="swiper-scrollbar"></div>
                  </swiper>
                </client-only>
              </template>

              <template #error="props">
                <div class="fancy-alert">{{ props.error }}</div>
              </template>
            </InstagramFeed>
          </div>
          <div class="flex flex-col px-4 lg:px-0">
            <div class="uppercase text-xl text-brand mb-5">
              #EXECUTIVE EXPERIENCE
            </div>
            <div class="uppercase text-2xl sm:text-3xl font-semibold mb-5">
              IT’S NOT A SECRET ANYMORE
            </div>
            <div class="text-lg text-gray-400">
              The best kept secret in the auto industry is no longer a secret.
              Browse and explore recent purchases using our service.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black py-16">
      <div class="flex flex-col items-center justify-center">
        <div class="flex mb-10">
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
        </div>
        <h1
          class="text-2xl text-center px-4 sm:text-3xl uppercase font-semibold sm:tracking-widest mb-5 sm:mb-10"
        >
          “If I only knew about this sooner...”
        </h1>
        <div class="w-auto px-4 md:w-11/12 lg:w-6/12 mb-10">
          <p>
            First of all...the service was free. I was looking for a specific
            Ford F150 that was not available in the color I wanted at the
            dealers in my city or any of the online sites. After searching for
            months a friend referred me to EAB. They found the truck I wanted
            for a better price than anything I had seen while searching and had
            it delivered to my house. Amazing service!!!!
          </p>
        </div>
        <div>Miguel R.</div>
        <div>La Habra, California</div>
      </div>
    </section>
    <section class="bg-brand-gray-alternate text-white py-16">
      <CallToAction
        title="YOUR SATISFACTION MEANS EVERYTHING TO US"
        subtitle="EXPERIENCE THE EAB DIFFERENCE"
        button-text="Get Started"
        :has-logo="true"
      />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  faChevronRight,
  faChevronLeft,
  faInfoCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import {
  faPlayCircle,
  faPauseCircle,
} from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import bgImage1 from 'assets/images/homepage_first_section_image_1.jpeg'
import bgImage2 from 'assets/images/homepage_first_section_image_2.jpeg'
import homepageSliderBackground from 'assets/images/homepage_slider_background.jpeg'
import { homepageTabSection } from '../data/home'
import Slides from '~/components/Slides'
import Tabs from '~/components/common/Tabs'
import Tab from '~/components/common/Tab'
import CallToAction from '~/components/CallToAction'
import InstagramFeed from '~/components/InstagramFeed'
import CovidMessageSection from '~/components/home/CovidMessageSection'

export default {
  name: 'Home',
  transitions: 'fade',
  components: {
    Slides,
    Tabs,
    Tab,
    CallToAction,
    InstagramFeed,
    CovidMessageSection,
  },
  data() {
    return {
      videoPlaying: true,
      sectionVideoPlaying: false,
      swiperOptions: {
        loop: false,
        effect: 'slide',
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          hide: false,
          dragClass: 'swiper-scrollbar-drag-custom',
        },
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            navigation: false,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            navigation: false,
            spaceBetween: 10,
          },
        },
      },
      firstSectionBackgroundImage1: { backgroundImage: `url(${bgImage1})` },
      firstSectionBackgroundImage2: { backgroundImage: `url(${bgImage2})` },
      sliderBackground: { backgroundImage: `url(${homepageSliderBackground})` },
      homepageTabSection,
      accessToken:
        'IGQVJYbHNXMWVzdXdIWHU3R2RiRG4zWlZAnQS1TVmE2VUVwT1FiUFhZAV0xoaVB4UnVkajMxaElHWkRmRy1IdDIyRE40VHZAwX25CbDFEN3hLQ0NVdTNkZAVBUTl9RblFIN2Q4d3VsMUtWYjQzOHJxWFlNSgZDZD',
    }
  },
  head: {
    title: 'Home - Executive',
  },
  computed: {
    ...mapGetters({
      initialSlide: 'initialSlide',
    }),
    faInfoCircle() {
      return faInfoCircle
    },
    faStar() {
      return faStar
    },
    faPlayCircle() {
      return faPlayCircle
    },
    faPauseCircle() {
      return faPauseCircle
    },
    faChevronLeft() {
      return faChevronLeft
    },
    faChevronRight() {
      return faChevronRight
    },
    faInstagram() {
      return faInstagram
    },
  },
  mounted() {
    this.videoPlaying = true
    const videoBg = this.$refs.backgroundVideo
    videoBg.play()
  },
  methods: {
    toggleVideoPlayback() {
      const videoBg = this.$refs.backgroundVideo
      if (this.videoPlaying) {
        videoBg.pause()
      } else {
        videoBg.play()
      }
      this.videoPlaying = !this.videoPlaying
    },
    toggleSectionVideoPlayback() {
      // const videoBg = this.$refs.sectionBackgroundVideo
      // if (this.sectionVideoPlaying) {
      //   videoBg.pause()
      // } else {
      //   videoBg.play()
      // }
      // this.sectionVideoPlaying = !this.sectionVideoPlaying
    },
  },
}
</script>

<style scoped>
ul.tab-section {
  list-style: none;
  list-style-position: outside;
}

ul.tab-section li:before {
  content: '✓';
  color: lightgreen;
  font-size: 1.1em;
  margin-right: 0.6em;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  color: white;
  font-size: 32px;
}

.swiper-button-next,
.swiper-button-prev {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.swiper-container.ig-swiper {
  padding-bottom: 20px;
}

.swiper-container-horizontal > .swiper-scrollbar {
  height: 8px;
}

.swiper-scrollbar {
  border-radius: 0;
  background: gray;
}
</style>

<style>
.swiper-scrollbar-drag-custom {
  background: white !important;
  border-radius: 0 !important;
  height: 100%;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
}
</style>
