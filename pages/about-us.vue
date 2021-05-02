<template>
  <div>
    <section class="text-white relative">
      <div
        class="h-screen 2xl:max-h-96 2xl:py-96 hero-image bg-center bg-cover flex"
        :style="mainHeaderImage"
      >
        <div
          class="relative container mx-auto p-4 2xl:mx-20 flex items-center z-10"
        >
          <div class="bg-black sm:bg-transparent bg-opacity-20 rounded">
            <div class="content float-left py-4 px-5 my-5">
              <div
                class="heading mb-3 tracking-wide uppercase underline font-bold text-4xl"
              >
                Your perfect car is out there
              </div>
              <div class="text-lg font-light leading-normal max-w-lg block">
                and we are here to find it for you. Our personalized service was
                created to help people never settle for less than their perfect
                car.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-center" :style="firstSectionBackgroundImage1">
      <div class="container mx-auto px-4 lg:px-20">
        <div class="flex flex-col lg:flex-row lg:space-x-6 xl:space-x-12">
          <div class="flex lg:max-w-sm flex-col px-4 sm:px-0">
            <div class="flex text-brand mb-5">OUR PROMISE TO YOU</div>
            <div class="flex text-xl lg:text-2xl mb-5 font-semibold">
              EXECUTIVE SERVICE WITH PROVEN RESULTS
            </div>
            <div class="flex font-light text-gray-300">
              We aim to make sure you enjoy an exceptional car buying
              experience. By removing the dealership and sales people from the
              equation we are able to ensure our clients recieve the highest
              level of service with great savings to match. We gaurantee you
              will not miss the sales person.
            </div>
          </div>
          <div class="flex justify-between flex-1 space-x-2 px-4 sm:px-0">
            <div
              class="flex-col sm:flex-row content-center flex-grow space-y-4 sm:space-y-0 sm:space-x-5 flex mt-5"
            >
              <div class="sm:mx-auto items-center flex flex-grow">
                <div>
                  <div
                    class="text-4xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-3"
                  >
                    11,239+
                  </div>
                  <div
                    class="text-brand tracking-tighter text-lg sm:text-sm lg:text-sm xl:text-md 2xl:text-lg font-bold"
                  >
                    VEHICLE PURCHASES
                  </div>
                </div>
              </div>
              <div class="sm:mx-auto items-center flex flex-grow">
                <div>
                  <div
                    class="text-4xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-3"
                  >
                    $42.6 MIL+
                  </div>
                  <div
                    class="text-brand tracking-tighter text-lg sm:text-sm lg:text-sm xl:text-md 2xl:text-lg font-bold"
                  >
                    DOLLARS SAVED OFF RETAIL
                  </div>
                </div>
              </div>
              <div class="sm:mx-auto items-center flex flex-grow">
                <div>
                  <div
                    class="text-4xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-3"
                  >
                    $3750
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
    <section class="py-16 bg-no-repeat" :style="secondSectionBackgroundImage">
      <div class="mb-6">
        <div
          class="mx-auto container px-4 sm:px-8 2xl:px-16 text-sm sm:text-lg"
        >
          LUXURY & PERFORMANCE AUTO BRANDS
          <fa class="ml-2 text-brand" :icon="faChevronDown" />
        </div>
        <div class="bg-brand-gray-medium-dark py-4 mt-4">
          <div class="mx-auto container px-4 sm:px-8 2xl:px-16">
            <div class="flex flex-wrap xl:flex-nowrap xl:space-x-5">
              <div
                v-for="(brand, index) in luxuryBrands"
                :key="index"
                class="mx-2 my-2 xl:my-auto"
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
            <div class="flex flex-wrap lg:flex-nowrap lg:space-x-5">
              <div
                v-for="(brand, index) in domesticBrands"
                :key="index"
                class="mx-2 my-2 lg:my-auto"
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
            <div class="flex flex-wrap lg:flex-nowrap lg:space-x-5">
              <div
                v-for="(brand, index) in popularBrands"
                :key="index"
                class="mx-2 my-2 lg:my-auto"
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
      <div class="container mx-auto px-4 lg:px-36">
        <div class="mb-6 uppercase text-brand">
          WE LOVE CARS, BUT DISLIKE THE TRADITIONAL BUYING PROCESS
        </div>
        <div class="mb-6 uppercase text-3xl font-normal tracking-wide">
          OUR PASSION WAS BORN OUT OF EXPERIENCE
        </div>
        <div class="mb-6">
          In July 2006 our founding partner had decided on and located the next
          car he wanted to purchase. As a car enthusiast, purchasing cars was
          not new to him. He had owned over 30 different vehicles of all
          different makes and models throughout his life.
        </div>
        <div class="mb-6">
          When he headed out to his local dealership to make the purchase he was
          well prepared. He had already done his homework on every single detail
          & feature he wanted on his vehicle. He had spent weeks comparing
          pricing within his entire area, searching diligently for what dealer
          had the vehicle specifically how he wanted it - and he had finally
          found it.
        </div>
        <div class="mb-6">
          He was prepared to go 12-rounds with the sales person and manager to
          make sure he got the vehicle, and got a good deal on it as well. After
          negotiating with the dealer for hours, they could not come to an
          agreement on the vehicle he wanted. The dealership then attempted to
          push him towards purchasing another vehicle that was lacking some of
          the key features he wanted, but he refused to settle.
        </div>
        <div class="mb-6">
          Later that week he located another vehicle that matched his wants 200
          miles away in another city, and was able to make a deal. On his way
          driving back, his joy of finally purchasing the vehicle he wanted was
          dampened by his exhaustion of the entire process. He drove and thought
          to himself how he could avoid ever going through the struggles of
          traditional auto buying again. After remembering how he often relied
          on concierge services in hotels when traveling for work - the idea
          came to him.
        </div>
        <div class="mb-6">
          He was determined to create a business model that would allow people
          to utilize a no cost concierge-like service that facilitates vehicle
          sales directly with auto manufacturors and eliminates the hassles that
          go along with traditional car buying.
        </div>
        <div class="mb-6">
          Out of that experience Executive Auto Broker was born, and 15 years
          later we are still here. We continue our mission of helping people
          from all walks of life experience a way of car buying that lets them
          find their perfect car in a stress-free way.
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
export default {
  transitions: 'fade',
  components: {
    CallToAction,
  },
  data() {
    return {
      luxuryBrands,
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
    title: 'Executive - About Us',
  },
  computed: {
    faChevronDown() {
      return faChevronDown
    },
    faChevronRight() {
      return faChevronRight
    },
  },
}
</script>
