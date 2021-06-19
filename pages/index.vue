<template>
  <div>
    <div
      class="relative flex items-center h-96 py-72 xl:py-96 2xl:max-h-96 2xl:py-96 overflow-hidden"
    >
      <section
        class="w-full grid sm:place-items-end text-white z-30 px-2 sm:px-0 md:px-4 2xl:px-10 container mx-auto"
      >
        <div
          class="sm:text-right text-left text-2xl md:text-4xl font-bold uppercase mb-5 px-2 md:px-0 filter drop-shadow-max"
        >
          PUT THE SALESPERSON IN YOUR REARVIEW
        </div>
        <div
          class="text-left float-right sm:max-w-lg text-gray-300 text-md mb-5 px-2 md:px-0 filter drop-shadow-max"
        >
          We find the vehicle you're looking for while saving you time & money.
          All you need to do is sit back + buckle up.
        </div>
        <div class="mx-2 md:mx-0 flex flex-shrink">
          <a
            href="https://forms.executiveab.com/ExecutiveAB/form/VehicleRequest1/formperma/ljV2tVecdl87E_wAsOY-BK5MvOaJW1QjLaoQNzYyWEM"
            class="bg-gradient-to-r from-yellow-700 to-yellow-500 py-2 px-4 md:w-full rounded text-white mt-4 mb-10 no-underline"
            >GET STARTED <fa class="ml-1" :icon="faChevronRight"
          /></a>
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
        autoplay
        playsinline
        loop
        preload="metadata"
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-6xl md:max-w-none -left-96 lg:max-w-none lg:left-0"
      >
        <source
          src="~/assets/videos/homepage_main_video.webm"
          type="video/webm"
        />
        <source
          src="~/assets/videos/homepage_main_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <CovidMessageSection />
    <section class="bg-brand-gray-dark py-16">
      <div class="mx-auto container md:px-4 lg:px-0">
        <div
          class="grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 gap-14 lg:gap-20 2xl:gap-10 2xl:mx-10"
        >
          <div
            class="py-14 px-4 md:p-8 lg:p-14 2xl:py-20 shadow bg-local bg-cover optimize-bg-image bg-center"
            :style="firstSectionBackgroundImage1"
          >
            <h1
              class="uppercase font-semibold text-white text-xl sm:text-2xl filter drop-shadow-max"
            >
              EXPERIENCE CAR BUYING ON AUTO-PILOT
            </h1>
            <p
              class="mt-4 text-brand sm:text-xl md:text-lg filter drop-shadow-max"
            >
              Our service works for both new & pre-owned vehicles of all makes
              and models. Delivery available nationwide.
            </p>
            <div class="mt-6">
              <a
                href="https://forms.executiveab.com/ExecutiveAB/form/VehicleRequest1/formperma/ljV2tVecdl87E_wAsOY-BK5MvOaJW1QjLaoQNzYyWEM"
                class="bg-gradient-to-r from-yellow-700 to-yellow-500 uppercase py-2 px-8 rounded text-white mt-4 mb-10 no-underline"
                >Launch <fa class="ml-1" :icon="faChevronRight"
              /></a>
            </div>
          </div>
          <div
            class="shadow bg-local bg-cover optimize-bg-image bg-center lg:h-96"
            :class="
              sectionVideoPlaying
                ? 'bg-black p-0'
                : 'py-14 px-4 md:p-8 lg:p-14 2xl:py-20'
            "
            :style="!sectionVideoPlaying ? firstSectionBackgroundImage2 : null"
          >
            <div v-show="!sectionVideoPlaying">
              <h1
                class="uppercase font-semibold text-white text-xl sm:text-2xl filter drop-shadow-max"
              >
                Now anyone can buy the way executives do
              </h1>
              <p
                class="mt-4 text-brand sm:text-xl md:text-lg filter drop-shadow-max"
              >
                Those purchasing high-end vehicles have utilized our type of
                service for years. Now, we’re making that level of service a
                reality for all buyers.
              </p>
              <div class="mt-4">
                <button
                  class="text-white rounded-full focus:outline-none"
                  @click="openSectionVideo"
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
            <div v-show="sectionVideoPlaying" class="h-96 w-full shadow">
              <video
                ref="sectionVideoRef"
                class="object-cover inline-block h-full w-full"
                width="100%"
                height="100%"
                playsinline
                controls
                preload="metadata"
              >
                <source
                  src="~/assets/videos/section_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black bg-blend-darken">
      <div class="flex flex-col md:flex-row relative">
        <div
          class="flex w-full max-w-lg sm:max-w-full md:max-w-xs xl:max-w-xl 2xl:max-w-xl h-full sm:py-10 bg-no-repeat bg-contain optimize-bg-image sm:bg-cover md:absolute"
          :style="sliderBackground"
        >
          <transition name="fade">
            <div
              v-show="initialSlide || screenWidth < 768"
              class="flex max-w-full transition sm:container md:max-w-xs lg:max-w-xl xl:max-w-2xl xl:pr-40 2xl:max-w-xl md:pr-20 lg:pr-0 sm:mx-auto flex-col p-4 xl:py-0 xl:px-20 content-center justify-center"
            >
              <div class="uppercase text-lg sm:text-xl text-brand mb-5">
                YOUR PERSONAL CONCIERGE AWAITS
              </div>
              <div
                class="uppercase text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold mb-5"
              >
                HOW OUR NO-COST SERVICE WORKS
              </div>
              <div class="sm:text-lg text-gray-400">
                The ultimate hands-off buying experience. Get the perfect
                vehicle, for the perfect price, with
                <span class="text-brand"> no cost to you.</span>
              </div>
            </div>
          </transition>
        </div>
        <div class="flex mx-auto md::mx-0 sm:px-0 py-10">
          <div class="relative">
            <transition name="fade">
              <div
                v-show="!initialSlide && screenWidth > 768"
                class="swiper-button-prev bg-brand-gray-dark"
              >
                <fa class="text-brand text-2xl" :icon="faChevronLeft" />
              </div>
            </transition>
            <Slides />
            <div
              v-show="screenWidth > 768"
              class="swiper-button-next bg-brand-gray-dark"
            >
              <fa class="text-brand text-2xl" :icon="faChevronRight" />
            </div>
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
            <transition name="fade">
              <div class="container mx-auto">
                <div class="shadow-sm rounded-sm transition-opacity">
                  <div
                    class="flex flex-col h-full lg:flex-row xl:max-w-6xl xl:mx-auto"
                  >
                    <div
                      class="flex max-w-full h-36 sm:h-32 lg:h-60 lg:max-w-sm lg:w-80 2xl:max-w-sm flex-wrap flex-column content-center bg-cover optimize-bg-image py-7 lg:py-10 px-5 lg:p-5 rounded-tr-md lg:rounded-tr-none rounded-tl-md lg:rounded-bl-md"
                      :style="{
                        backgroundImage: `url(${homepageTab.imageURL})`,
                      }"
                    >
                      <h1
                        class="uppercase text-xl sm:text-2xl xl:text-3xl text-white font-semibold mb-1 lg:mb-5"
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
                      <div
                        class="flex flex-col h-96 sm:h-72 lg:h-60 lg:flex-row lg:gap-5 2xl:flex-row p-5 flex-wrap content-center"
                      >
                        <div class="flex lg:flex-1">
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
                        <div class="flex lg:flex-1 flex-col">
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
                              v-if="homepageTab.link.isExternalLink"
                              :href="homepageTab.link.path"
                              class="text-brand underline"
                              target="_blank"
                            >
                              {{ homepageTab.link.name }}
                              <fa class="ml-1" :icon="faChevronRight" />
                            </a>
                            <NuxtLink
                              v-else
                              class="text-brand underline"
                              :to="homepageTab.link.path"
                            >
                              {{ homepageTab.link.name
                              }}<fa class="ml-1" :icon="faChevronRight"
                            /></NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
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
                    class="swiper ig-swiper relative max-w-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-2xl xl:max-w-4xl h-72 sm:h-48 md:h-72 lg:h-48 xl:h-60 min-h-full"
                    :options="swiperOptions"
                  >
                    <swiper-slide
                      v-for="(feed, index) in props.feeds"
                      :key="index"
                      class="w-full h-auto"
                    >
                      <div
                        class="bg-cover bg-center optimize-bg-image shadow-md w-full min-h-full"
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
            <div class="sm:text-lg text-gray-400">
              The best kept secret in the auto industry is no longer a secret.
              Browse and explore recent purchases using our service.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black py-16">
      <div class="container mx-auto flex flex-col items-center justify-center">
        <div class="flex mb-10">
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
          <fa class="ml-2 text-3xl text-brand" :icon="faStar" />
        </div>
        <h1
          class="text-2xl sm:text-center px-4 sm:text-3xl uppercase font-bold sm:tracking-widest mb-5 sm:mb-10"
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
    <section class="bg-brand-gray text-white py-16">
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
      screenWidth: 0,
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
            spaceBetween: 30,
          },
        },
      },
      firstSectionBackgroundImage1: { backgroundImage: `url(${bgImage1})` },
      firstSectionBackgroundImage2: { backgroundImage: `url(${bgImage2})` },
      sliderBackground: { backgroundImage: `url(${homepageSliderBackground})` },
      homepageTabSection,
    }
  },
  head: {
    title: 'Home - Executive',
  },
  computed: {
    ...mapGetters({
      initialSlide: 'initialSlide',
      breakpoint: 'breakpoint',
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
    secondVideoRef() {
      return this.$refs.sectionVideoRef
    },
    accessToken() {
      return process.env.NUXT_ENV_IG_TOKEN
    },
  },
  mounted() {
    this.screenWidth = screen.width
    window.addEventListener('resize', this.onResize)
    this.videoPlaying = true
    const videoBg = this.$refs.backgroundVideo
    videoBg.play()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
    toggleVideoPlayback() {
      const videoBg = this.$refs.backgroundVideo
      if (this.videoPlaying) {
        videoBg.pause()
      } else {
        videoBg.play()
      }
      this.videoPlaying = !this.videoPlaying
    },
    openSectionVideo() {
      this.$refs.sectionVideoRef.play()
      this.sectionVideoPlaying = true
      this.toggleVideoPlayback()
    },
  },
}
</script>

<style scoped>
ul.tab-section {
  list-style: none;
  list-style-position: outside;
}

ul.tab-section li {
  padding-left: 25px;
  text-indent: -25px;
}

ul.tab-section li:before {
  content: '✓';
  color: lightgreen;
  font-size: 1.1em;
  margin-right: 0.6em;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
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
