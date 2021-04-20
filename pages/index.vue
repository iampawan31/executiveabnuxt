<template>
  <div>
    <div class="relative flex items-center h-screen overflow-hidden">
      <section
        class="w-full grid place-items-end text-white z-30 container mx-auto"
      >
        <div class="text-4xl font-bold uppercase mb-5">
          PUT THE SALESPERSON IN YOUR REARVIEW
        </div>
        <div class="text-md mb-5">
          We find the vehicle your looking for and save you time <br />
          and money. All you need to do is sit back & buckle-up.
        </div>
        <button class="bg-brand py-2 px-4 rounded text-white mt-4 mb-10">
          GET STARTED
          <fa class="ml-1" :icon="faAngleRight" />
        </button>
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
        <div class="grid grid-cols-2 gap-5">
          <div
            class="p-14 shadow bg-local bg-cover bg-center"
            :style="firstSectionBackgroundImage1"
          >
            <h1 class="uppercase font-semibold text-white text-xl sm:text-2xl">
              Ready to experience car buying on auto-pilot?
            </h1>
            <p class="mt-4 text-brand text-lg sm:text-xl">
              Tell us what your looking for and let us get started. Our service
              works for all brands and models. Nationwide delivery available.
            </p>
            <button
              class="bg-brand uppercase py-2 px-8 rounded text-white mt-4 mb-10"
            >
              Launch
            </button>
          </div>
          <div
            class="p-14 shadow bg-local bg-cover bg-center"
            :style="firstSectionBackgroundImage2"
          >
            <h1 class="uppercase font-semibold text-white text-xl sm:text-2xl">
              Now anyone can buy the way executives do?
            </h1>
            <p class="mt-4 text-brand text-lg sm:text-xl">
              Those purchasing high end vehicles have utilized our type of
              service for years. Now, we’re making that level of service a
              reality for all buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black py-16">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1 px-16">
          <div class="uppercase text-xl text-brand mb-5">
            YOUR PERSONAL CONCIERGE AWAITS
          </div>
          <div class="uppercase text-3xl font-semibold mb-5">
            HOW OUR NO-COST SERVICE WORKS
          </div>
          <div class="text-lg text-gray-400">
            The ultimate hands-off buying experience. Get the perfect vehicle,
            for the perfect price, with
            <span class="text-brand"> no cost to you.</span>
          </div>
        </div>
        <div class="col-span-2">
          <Slides />
        </div>
      </div>
    </section>
    <section class="bg-brand-gray-dark-alternate py-16">
      <div class="container mx-auto">
        <tabs>
          <tab
            v-for="(homepageTab, index) in homepageTabSection"
            :key="index"
            :title="homepageTab.tabTitle"
          >
            <div class="shadow-sm transition-opacity">
              <div class="grid-cols-4 grid">
                <div
                  class="flex flex-wrap flex-column content-center bg-fixed p-5"
                  :style="{
                    backgroundImage: `url(${homepageTab.imageURL})`,
                  }"
                >
                  <h1 class="uppercase text-3xl text-white font-semibold mb-5">
                    {{ homepageTab.title }}
                  </h1>
                  <p class="text-brand text-lg">
                    {{ homepageTab.description }}
                  </p>
                </div>
                <div class="col-span-3 bg-white text-gray-500">
                  <div class="grid grid-cols-2 p-10 gap-4">
                    <div>
                      <ul class="tab-section">
                        <li
                          v-for="(singleList, indexOne) in homepageTab.listOne"
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
                          v-for="(singleList, indexTwo) in homepageTab.listTwo"
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
          </tab>
        </tabs>
      </div>
    </section>
    <section class="bg-black py-16">
      <div class="container mx-auto">
        <div class="grid sm:grid-cols-3 gap-4">
          <div class="col-span-2"></div>
          <div class="col-span-1">
            <div class="uppercase text-xl text-brand mb-5">
              #EXECUTIVE EXPERIENCE
            </div>
            <div class="uppercase text-3xl font-semibold mb-5">
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
        <div class="w-auto px-4 sm:w-6/12 mb-10">
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
import { homepageTabSection } from '../data/home'
import Slides from '~/components/Slides'
import Tabs from '~/components/common/Tabs'
import Tab from '~/components/common/Tab'
import CallToAction from '~/components/CallToAction'

export default {
  components: {
    Slides,
    Tabs,
    Tab,
    CallToAction,
  },
  data() {
    return {
      firstSectionBackgroundImage1: { backgroundImage: `url(${bgImage1})` },
      firstSectionBackgroundImage2: { backgroundImage: `url(${bgImage2})` },
      homepageTabSection,
    }
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
</style>
