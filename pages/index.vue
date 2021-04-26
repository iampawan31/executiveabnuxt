<template>
  <div>
    <div class="relative flex items-center h-screen overflow-hidden">
      <section
        class="w-full grid sm:place-items-end text-white z-30 px-2 sm:px-0 md:px-4 container mx-auto"
      >
        <div
          class="sm:text-right text-center text-4xl font-bold uppercase mb-5"
        >
          PUT THE SALESPERSON IN YOUR REARVIEW
        </div>
        <div class="text-center text-md mb-5">
          We find the vehicle your looking for and save you time <br />
          and money. All you need to do is sit back & buckle-up.
        </div>
        <div class="mx-6 md:mx-0 flex">
          <button
            class="bg-gradient-to-r from-yellow-700 to-yellow-500 transition duration-500 hover:scale-110 transform-gpu py-2 px-4 w-full rounded text-white mt-4 mb-10"
          >
            GET STARTED
            <fa class="ml-1" :icon="faAngleRight" />
          </button>
        </div>
      </section>
      <video
        autoPlay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="~assets/videos/homepage_main_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <section class="bg-brand-gray-alternate py-6">
      <div class="container mx-auto">
        <div class="text-center">
          <div class="text-white text-sm sm:text-lg">
            <fa class="mr-2" :icon="faInfoCircle" />
            COVID-19: SAFETY IS OUR TOP PRIORITY.
            <a href="/" class="ml-2 uppercase underline text-white">
              READ MORE <fa class="ml-1" :icon="faAngleRight" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-brand-gray-dark py-16">
      <div class="mx-auto container">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div
            class="p-14 md:p-8 shadow bg-local bg-cover bg-center"
            :style="firstSectionBackgroundImage1"
          >
            <h1 class="uppercase font-semibold text-white text-xl sm:text-2xl">
              Ready to experience car buying on auto-pilot?
            </h1>
            <p class="mt-4 text-brand text-lg sm:text-xl md:text-lg">
              Tell us what your looking for and let us get started. Our service
              works for all brands and models. Nationwide delivery available.
            </p>
            <button
              class="bg-gradient-to-r from-yellow-700 to-yellow-500 transition duration-500 hover:scale-110 transform-gpu uppercase py-2 px-8 rounded text-white mt-4 mb-10"
            >
              Launch
              <fa class="ml-1" :icon="faAngleRight" />
            </button>
          </div>
          <div
            class="p-14 md:p-8 shadow bg-local bg-cover bg-center"
            :style="firstSectionBackgroundImage2"
          >
            <h1 class="uppercase font-semibold text-white text-xl sm:text-2xl">
              Now anyone can buy the way executives do?
            </h1>
            <p class="mt-4 text-brand text-lg sm:text-xl md:text-lg">
              Those purchasing high end vehicles have utilized our type of
              service for years. Now, we’re making that level of service a
              reality for all buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black bg-blend-darken">
      <div
        class="grid grid-rows-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-3 sm:grid-cols-1 sm:gap-4"
      >
        <div
          class="sm:col-span-1 md:col-span-2 lg:col-span-1 px-4 sm:px-16 py-16"
          :style="sliderBackground"
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
        <div class="py-16 lg:col-span-2">
          <Slides />
        </div>
      </div>
    </section>
    <section class="bg-brand-gray-alternate py-6 sm:py-16">
      <div class="flex flex-col md:hidden">
        <Accordian
          v-for="(homepageTab, index) in homepageTabSection"
          :key="index"
          :open="index === 0 ? true : false"
          :homepage-tab="homepageTab"
        />
      </div>
      <div class="hidden md:flex">
        <tabs>
          <tab
            v-for="(homepageTab, index) in homepageTabSection"
            :key="index"
            :title="homepageTab.tabTitle"
          >
            <div class="container mx-auto">
              <div class="shadow-sm transition-opacity">
                <div class="sm:grid-cols-4 grid">
                  <div
                    class="flex flex-wrap flex-column content-center bg-fixed p-5"
                    :style="{
                      backgroundImage: `url(${homepageTab.imageURL})`,
                    }"
                  >
                    <h1
                      class="uppercase text-3xl text-white font-semibold mb-5"
                    >
                      {{ homepageTab.title }}
                    </h1>
                    <p class="text-brand text-lg">
                      {{ homepageTab.description }}
                    </p>
                  </div>
                  <div class="sm:col-span-3 bg-white text-gray-500">
                    <div class="grid sm:grid-cols-2 p-10 gap-4">
                      <div>
                        <ul class="tab-section">
                          <li
                            v-for="(
                              singleList, indexOne
                            ) in homepageTab.listOne"
                            :key="indexOne"
                            class="mb-4"
                          >
                            {{ singleList }}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul class="tab-section">
                          <li
                            v-for="(
                              singleList, indexTwo
                            ) in homepageTab.listTwo"
                            :key="indexTwo"
                            class="mb-4"
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
                            <fa class="ml-1" :icon="faAngleRight" />
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
        <div class="grid sm:grid-cols-3 gap-4">
          <div class="col-span-2">
            <InstagramFeed
              :token="accessToken"
              fields="media_url,media_type,caption"
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
                    class="swiper max-w-md sm:max-w-4xl"
                    :options="swiperOptions"
                  >
                    <swiper-slide
                      v-for="(feed, index) in props.feeds"
                      :key="index"
                      class="flex"
                    >
                      <div
                        class="flex flex-col bg-white text-black rounded-md shadow-md"
                      >
                        <div class="rounded justify-center flex">
                          <img
                            :src="feed.media_url"
                            class="rounded-md"
                            :text="feed.caption"
                          />
                        </div>
                      </div>
                    </swiper-slide>
                    <div
                      slot="button-prev"
                      class="swiper-button-prev hidden md:block"
                    ></div>
                    <div
                      slot="button-next"
                      class="swiper-button-next hidden md:block"
                    ></div>
                  </swiper>
                </client-only>
              </template>

              <template #error="props">
                <div class="fancy-alert">{{ props.error }}</div>
              </template>
            </InstagramFeed>
          </div>
          <div class="col-span-1 px-4">
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
      />
    </section>
  </div>
</template>

<script>
import {
  faAngleRight,
  faInfoCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import bgImage1 from 'assets/images/homepage_first_section_image_1.jpg'
import bgImage2 from 'assets/images/homepage_first_section_image_2.jpg'
import homepageSliderBackground from 'assets/images/homepage_slider_background.jpg'
import { homepageTabSection } from '../data/home'
import Accordian from '~/components/common/Accordian'
import Slides from '~/components/Slides'
import Tabs from '~/components/common/Tabs'
import Tab from '~/components/common/Tab'
import CallToAction from '~/components/CallToAction'
import InstagramFeed from '~/components/InstagramFeed'

export default {
  transitions: 'fade',
  components: {
    Accordian,
    Slides,
    Tabs,
    Tab,
    CallToAction,
    InstagramFeed,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        height: 80,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        effect: 'slide',
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          640: {
            slidesPerView: 1,
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
        'QVJYbHNXMWVzdXdIWHU3R2RiRG4zWlZAnQS1TVmE2VUVwT1FiUFhZAV0xoaVB4UnVkajMxaElHWkRmRy1IdDIyRE40VHZAwX25CbDFEN3hLQ0NVdTNkZAVBUTl9RblFIN2Q4d3VsMUtWYjQzOHJxWFlNSgZDZD',
    }
  },
  head: {
    title: 'Executive - Home',
  },
  computed: {
    faAngleRight() {
      return faAngleRight
    },
    faInfoCircle() {
      return faInfoCircle
    },
    faStar() {
      return faStar
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
}
</style>
