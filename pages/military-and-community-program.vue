<template>
  <div>
    <section class="text-white relative">
      <HeroSection
        :main-header-image="mainHeaderImage"
        main-header-image-classes="bg-right sm:bg-center"
      >
        <div class="content float-left py-4 lg:px-5 my-5">
          <div
            class="heading mb-3 tracking-wide uppercase max-w-lg font-bold text-2xl md:text-4xl filter drop-shadow-max"
          >
            WE HOLD YOUR SERVICE CLOSE TO OUR HEART
          </div>
          <div
            class="font-light leading-normal max-w-md filter drop-shadow-max"
          >
            With service at the core of our own business, we recognize and
            celebrate those who serve our nation and communities.
          </div>
        </div>
      </HeroSection>
    </section>
    <section
      class="bg-black lg:pt-16 optimize-bg-image bg-cover"
      :style="secondSectionBgImage"
    >
      <div
        class="flex flex-col md:place-items-center md:justify-center sm:mx-auto px-4 sm:px-10 lg:px-0 max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3 pt-10">
          A SALUTE TO SERVICE
        </div>
        <div class="text-white text-3xl font-semibold uppercase mb-5">
          OUR COMMITMENT TO SERVING THOSE THAT SERVE
        </div>
        <div class="text-gray-300 pb-5 lg:pb-24">
          Our Military & Community Program was designed to give back something
          extra to those that selflessly serve our country. Whether you are a
          military member, a veteran, a law enforcement officer, or work in our
          health care system, we would like to thank you by offering you our
          specialized service with additional benefits.
        </div>
        <div class="flex flex-col place-items-center justify-center mx-auto">
          <div class="uppercase text-brand mb-4">Learn more</div>
          <button
            class="rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark z-50"
            @click="sectionOneVisible = !sectionOneVisible"
          >
            <fa
              class="text-brand text-2xl"
              :icon="sectionOneVisible ? faChevronUp : faChevronDown"
            />
          </button>
        </div>
      </div>
    </section>
    <transition name="fade">
      <section v-show="sectionOneVisible" class="bg-white text-black py-16">
        <div class="container mx-auto py-10 pb-0 lg:py-10">
          <Features>
            <Feature>
              <template slot="feature-image"
                ><img
                  src="~/assets/images/icons/clock.png"
                  class="h-14 md:h-16"
                  alt=""
              /></template>
              <template slot="feature-title">
                SAVE YOUR TIME FOR WHAT MATTERS MOST
              </template>
              <template slot="feature-description">
                <div class="mb-4">
                  We understand firsthand the time sacrifice and dedication that
                  is required to having a service career, and how little
                  personal time is often left for you. That is why our Military
                  & Community Program was specifically designed to provide you
                  with expedited personal service that saves you time and
                  eliminates the stress of traditional car buying.
                </div>
                <div class="mb-4">
                  We handle finding and getting you the best deal on the vehicle
                  you want, taking care of all the paperwork, and having it
                  delivered wherever you want it. That way you can spend your
                  free time doing what you want, and not driving around
                  searching for cars and haggling with dealerships.
                </div>
              </template>
            </Feature>
            <hr class="my-16 border-gray-400" />
            <Feature>
              <template slot="feature-image"
                ><img
                  src="~/assets/images/icons/visa-alternate.png"
                  class="h-14 md:h-16"
                  alt=""
              /></template>
              <template slot="feature-title">
                A THANK YOU FOR YOUR SERVICE
              </template>
              <template slot="feature-description">
                <div class="mb-4">
                  As an extra thank you for your service we provide you with a
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500"
                    >$200 Visa gift card</span
                  >
                  when you allow us to help you purchase your perfect car.
                </div>
                <div class="mb-4">
                  To qualify please select your line of service when filling out
                  your vehicle request submission or tell your Executive
                  Concierge. You will be required to provide some sort of proof
                  of occupation.
                </div>
              </template>
            </Feature>
            <hr class="my-16 border-gray-400" />
            <Feature>
              <template slot="feature-image"
                ><img
                  src="~/assets/images/icons/thumbs-up.png"
                  class="h-14 md:h-16"
                  alt=""
              /></template>
              <template slot="feature-title">
                WE ACCOMMODATE YOUR SPECIAL ARRANGEMENTS
              </template>
              <template slot="feature-description">
                <div class="mb-4">
                  Are you active military and deploying soon or need the vehicle
                  sent to an overseas service station? No problem. We can
                  arrange international shipment, as well as help with taking
                  care of your old vehicle.
                </div>
                <div class="mb-4">
                  Additionally, in certain scenarios, if you do not have time to
                  take care of required maintenance and repairs we can help
                  facilitate concierge servicing at reduced labor rates.
                </div>
                <div class="mb-4">
                  For anything else you need help with, do not hesitate to ask.
                  We have been able to provide assistance in unique
                  circumstances and we are here to make sure your buying and
                  ownership experience is unparalleled.
                </div>
              </template>
            </Feature>
          </Features>
        </div>
      </section>
    </transition>
    <section class="bg-brand-gray text-white py-16">
      <CallToAction
        title="Ready to get started?"
        subtitle="START YOUR VEHICLE REQUEST"
        button-text="Get Started"
      />
    </section>
  </div>
</template>

<script>
import bgMainHeader from 'assets/images/military_program_header.jpeg'
import secondSectionBgImage from 'assets/images/military-and-community-program/second-section-bg-image.jpeg'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import CallToAction from '~/components/CallToAction'
import Feature from '~/components/common/Feature'
import Features from '~/components/common/Features'
import HeroSection from '~/components/common/HeroSection'

export default {
  transitions: 'fade',
  components: {
    CallToAction,
    Feature,
    Features,
    HeroSection,
  },
  loading: true,
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      secondSectionBgImage: { backgroundImage: `url(${secondSectionBgImage})` },
      sectionOneVisible: false,
    }
  },
  head: {
    title: 'EAB | We salute your service',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'EAB | We salute your service',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Auto broker, cars for sale, used cars, car dealership near me, used cars for sale',
      },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      { hid: 'language', name: 'language', content: 'English' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Thank you for your service! $200 Visa Gift Card for Military, Police, Medical Professionals & First Responders. Don't stress or worry when it's time to car shop. Save time & money on used & new cars with our free service.",
      },
    ],
  },
  computed: {
    faChevronUp() {
      return faChevronUp
    },
    faChevronDown() {
      return faChevronDown
    },
  },
}
</script>
