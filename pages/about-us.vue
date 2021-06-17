<template>
  <div>
    <section class="text-white relative">
      <HeroSection
        :main-header-image="mainHeaderImage"
        main-header-image-classes="bg-right sm:bg-center"
      >
        <div class="content float-left py-4 lg:px-5 my-5">
          <div
            class="heading mb-3 tracking-wide uppercase max-w-xs sm:max-w-lg lg:max-w-lg xl:max-w-lg font-bold text-2xl md:text-4xl filter drop-shadow-max"
          >
            Your perfect car is out there
          </div>
          <div
            class="font-light leading-normal max-w-lg block filter drop-shadow-max"
          >
            and we are here to find it for you. Our personalized service was
            created to help people never settle for less than their perfect car.
          </div>
        </div>
      </HeroSection>
    </section>
    <section class="py-16">
      <div class="container mx-auto px-4 2xl:px-20">
        <div
          class="flex flex-col space-y-6 lg:flex-row lg:space-x-6 xl:space-x-12"
        >
          <div class="flex lg:max-w-sm flex-col lg:px-4 sm:px-0">
            <div class="flex text-lg text-brand mb-5">OUR PROMISE TO YOU</div>
            <div class="flex text-3xl mb-5 font-semibold">
              EXECUTIVE SERVICE WITH PROVEN RESULTS
            </div>
            <div class="flex font-light text-gray-300">
              We aim to make sure you enjoy an exceptional car-buying
              experience. By removing the dealership & salespeople from the
              equation we are able to ensure our clients receive the highest
              level of service with great savings to match. We guarantee you
              will not miss the salesperson.
            </div>
          </div>
          <div class="flex justify-between flex-1 space-x-2 lg:px-4 sm:px-0">
            <div
              class="flex-col sm:flex-row content-center flex-grow space-y-4 sm:space-y-0 sm:space-x-5 flex mt-5"
            >
              <div class="sm:mx-auto items-center flex flex-grow">
                <div class="filter drop-shadow-max-white">
                  <div
                    class="flex text-gray-200 text-4xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold mb-3"
                  >
                    <client-only>
                      <number
                        ref="number2"
                        :from="0"
                        :to="11239"
                        :format="theCommaFormat"
                        :duration="3"
                        :delay="0"
                        easing="Power1.easeOut"
                        @start="showFirstTab = true"
                      />
                    </client-only>
                    <div v-show="showFirstTab">+</div>
                  </div>
                  <div
                    class="text-brand tracking-tighter text-lg sm:text-sm lg:text-sm xl:text-md 2xl:text-lg font-bold"
                  >
                    VEHICLE PURCHASES
                  </div>
                </div>
              </div>
              <div class="sm:mx-auto items-center flex flex-grow">
                <div class="filter drop-shadow-max-white">
                  <div
                    class="flex text-4xl sm:text-3xl text-gray-200 lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold mb-3"
                  >
                    <div v-show="showSecondTab">$</div>
                    <client-only>
                      <number
                        ref="number1"
                        :from="0"
                        :to="4.26"
                        :format="theFormat"
                        :duration="3"
                        :delay="0"
                        easing="Power1.easeOut"
                        @start="showSecondTab = true"
                      />
                    </client-only>
                    <div v-show="showSecondTab">MIL+</div>
                  </div>
                  <div
                    class="text-brand tracking-tighter text-lg sm:text-sm lg:text-sm xl:text-md 2xl:text-lg font-bold"
                  >
                    DOLLARS SAVED OFF RETAIL
                  </div>
                </div>
              </div>
              <div class="sm:mx-auto items-center flex flex-grow">
                <div class="filter drop-shadow-max-white">
                  <div
                    class="flex text-gray-200 text-4xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold mb-3"
                  >
                    <div v-show="showThirdTab">$</div>
                    <client-only>
                      <number
                        ref="number2"
                        :from="0"
                        :to="3750"
                        :format="theCommaFormat"
                        :duration="3"
                        :delay="0"
                        easing="Power1.easeOut"
                        @start="showThirdTab = true"
                      />
                    </client-only>
                  </div>
                  <div
                    class="text-brand tracking-tighter text-lg sm:text-sm lg:text-sm xl:text-md 2xl:text-lg font-bold"
                  >
                    AVERAGE SAVINGS PER VEHICLE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-16 bg-no-repeat optimize-bg-image bg-cover"
      :style="secondSectionBackgroundImage"
    >
      <div class="mb-6">
        <div
          class="mx-auto container px-4 sm:px-8 2xl:px-16 text-sm sm:text-lg"
        >
          LUXURY & PERFORMANCE AUTO BRANDS
          <fa class="ml-2 text-brand" :icon="faChevronDown" />
        </div>
        <div class="bg-brand-gray-medium-dark py-4 mt-4">
          <div class="mx-auto container px-4 sm:px-8 2xl:px-16">
            <div
              class="flex overflow-x-auto no-scrollbar md:flex-wrap xl:space-x-5"
            >
              <div
                v-for="(brand, index) in luxuryBrands"
                :key="index"
                class="min-w-max mx-2 my-2"
              >
                <img :src="brand" class="w-16 h-16" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <div
          class="mx-auto container px-4 sm:px-8 2xl:px-16 text-sm sm:text-lg"
        >
          DOMESTIC AUTO BRANDS
          <fa class="ml-2 text-brand" :icon="faChevronDown" />
        </div>
        <div class="bg-brand-gray-medium-dark py-4 mt-4">
          <div class="mx-auto container px-4 sm:px-8 2xl:px-16">
            <div
              class="flex overflow-x-auto no-scrollbar md:flex-wrap xl:space-x-5"
            >
              <div
                v-for="(brand, index) in domesticBrands"
                :key="index"
                class="min-w-max mx-2 my-2"
              >
                <img :src="brand" class="w-16 h-16" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <div
          class="mx-auto container px-4 sm:px-8 2xl:px-16 text-sm sm:text-lg"
        >
          POPULAR AUTO BRANDS
          <fa class="ml-2 text-brand" :icon="faChevronDown" />
        </div>
        <div class="bg-brand-gray-medium-dark py-4 mt-4">
          <div class="mx-auto container px-4 sm:px-8 2xl:px-16">
            <div
              class="flex overflow-x-auto no-scrollbar md:flex-wrap xl:space-x-5"
            >
              <div
                v-for="(brand, index) in popularBrands"
                :key="index"
                class="min-w-max mx-2 my-2"
              >
                <img :src="brand" class="w-16 h-16" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="sm:text-right mx-auto container px-4 sm:px-8 2xl:px-16 mt-4 sm:mt-0 text-sm sm:text-lg"
        >
          AND ACCESS TO MANY MORE!
          <fa class="ml-2 text-brand" :icon="faChevronRight" />
        </div>
      </div>
    </section>
    <section class="bg-white text-black text-lg py-10">
      <div class="container mx-auto px-4 lg:px-36 xl:px-48">
        <div class="mb-3 uppercase text-brand">
          WE LOVE CARS, BUT DISLIKE THE TRADITIONAL BUYING PROCESS
        </div>
        <div class="mb-5 uppercase text-3xl font-normal tracking-wide">
          OUR PASSION WAS BORN OUT OF EXPERIENCE
        </div>
        <div class="mb-4">
          In July 2006, our founding partner decided to purchase a new vehicle.
          As a car enthusiast the vehicle purchasing process was not new to him
          as he had purchased 50+ vehicles in his life so far.
        </div>
        <div class="mb-4">
          When he went to the local dealership to make the purchase, he was well
          prepared. He did his homework and knew every single detail and feature
          he wanted. He compared pricing, searched diligently, and found the
          dealer with the exact vehicle in stock.
        </div>
        <div class="mb-4">
          After negotiating with the dealer for hours, they simply could not
          come to an agreement. The dealership then attempted to push him
          towards the purchase of a different vehicle that lacked some of the
          key features he wanted. He refused to settle.
        </div>
        <div class="mb-4">
          Later that week, he located another vehicle nearly 200 miles away and
          successfully made a deal. The joy of driving home with his new vehicle
          was dampened by exhaustion from the entire car-buying process. He knew
          he had to find a way to avoid going through the hassle that
          traditional car-buying created. It was then he reflected on hotel
          concierge services and the attention and advantages provided to their
          guests.
        </div>
        <div class="mb-4">
          With this thought in mind, he was determined to create a business
          model that would allow people to utilize a no-cost concierge-like
          service that facilitated vehicle sales directly with auto
          manufacturers and eliminated the hassles that went along with
          traditional car buying.
        </div>
        <div class="mb-4">
          Out of that experience, ExecutiveAB was born, and 15 years later we're
          still here. We continue our mission to help people experience a new
          way of car buying that lets them find their perfect car in a
          stress-free way.
        </div>
        <div
          class="mt-12 mb-6 font-brandSignature max-w-sm text-brand text-4xl sm:text-5xl"
        >
          <img
            src="~/assets/images/about-us/tagline_text.png"
            alt="Executive Experience"
          />
        </div>
      </div>
    </section>
    <section class="bg-brand-gray text-white py-16">
      <CallToAction
        title="THINK OF ANYTHING ELSE WE CAN HELP YOU WITH?"
        subtitle="GET IN TOUCH WITH US"
        button-text="Contact us"
        button-link="/contact-us"
        :external-link="false"
      />
    </section>
  </div>
</template>

<script>
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import bgMainHeader from 'assets/images/about_us_header.jpeg'
import firstSectionBg from 'assets/images/about-us/second_section_bg.png'
import secondSectionBg from 'assets/images/about-us/third_section_bg.jpeg'
import { luxuryBrands, domesticBrands, popularBrands } from '../data/aboutUs'
import CallToAction from '~/components/CallToAction'
import HeroSection from '~/components/common/HeroSection'

export default {
  transitions: 'fade',
  components: {
    CallToAction,
    HeroSection,
  },
  data() {
    return {
      luxuryBrands,
      showFirstTab: false,
      showSecondTab: false,
      showThirdTab: false,
      domesticBrands,
      popularBrands,
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      firstSectionBackgroundImage1: {
        backgroundImage: `url(${firstSectionBg})`,
      },
      secondSectionBackgroundImage: {
        backgroundImage: `url(${secondSectionBg})`,
      },
    }
  },
  head: {
    title: 'About Us - Executive',
  },
  computed: {
    faChevronDown() {
      return faChevronDown
    },
    faChevronRight() {
      return faChevronRight
    },
  },
  methods: {
    theFormat(number) {
      return number.toFixed(2)
    },
    theWholeFormat(number) {
      return number.toFixed(0)
    },
    theCommaFormat(number) {
      if (number > 10000) {
        return number
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } else {
        return number.toFixed(0)
      }
    },
  },
}
</script>
