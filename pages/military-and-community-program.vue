<template>
  <div>
    <section class="text-white relative">
      <div
        class="sm:max-h-96 sm:py-80 md:h-screen 2xl:max-h-96 2xl:py-96 hero-image bg-center-top sm:bg-center bg-cover flex bg-norepeat"
        :style="mainHeaderImage"
      >
        <div class="relative container mx-auto p-4 flex items-center z-10">
          <div>
            <div class="content float-left py-4 px-5 my-5">
              <div
                class="heading mb-3 tracking-wide uppercase underline max-w-lg font-bold text-2xl md:text-4xl filter drop-shadow-max"
              >
                WE HOLD YOUR SERVICE CLOSE TO OUR HEART
              </div>
              <div
                class="font-light leading-normal text-xs sm:text-sm md:text-lg max-w-md filter drop-shadow-max"
              >
                With service at the core of our own business, we recognize and
                celebrate those those that serve our nation and communities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black pt-16" :style="secondSectionBgImage">
      <div
        class="flex flex-col sm:place-items-center sm:justify-center sm:mx-auto px-4 sm:px-10 lg:px-0 max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3 pt-10">
          A SALUTE TO SERVICE
        </div>
        <div class="text-white text-3xl font-semibold uppercase mb-5">
          OUR COMMITMENT TO SERVING THOSE THAT SERVE
        </div>
        <div class="text-gray-300 pb-24">
          Our Military & Community Program was designed to give back something
          extra to those that selflessly serve our country. Whether you are a
          military member, a veteran, a law enforcement officer, or work in our
          health care system, we would like to thank you by offering you our
          specialized service with additional benefits.
        </div>
        <div class="flex flex-col place-items-center justify-center mx-auto">
          <div class="uppercase text-brand mb-4">Learn more</div>
          <button
            class="rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark"
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
    <section
      :class="sectionOneVisible ? 'block' : 'hidden'"
      class="bg-white text-black py-16"
    >
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
                We understand first hand the time-sacrifice and dedication that
                is required to having a service career, and how little personal
                time is often left for you. That is why our Military & Community
                Program was specifically designed to provide you with expedited
                personal service that saves you time and eliminates the stress
                of traditional car buying.
              </div>
              <div class="mb-4">
                We handle finding and getting you the best deal on vehicle you
                want, taking care of all the paperwork, and having it delivered
                wherever you want it. That way you can spend your free time
                doing what you want, and not driving around searching for cars
                and haggling with dealerships.
              </div>
            </template>
          </Feature>
          <hr class="my-16" />
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
                <span class="text-yellow-500">$200 Visa gift card</span> when
                you allow us to help you purchase your perfect car.
              </div>
              <div class="mb-4">
                To qualify please select your line of service when filling out
                your vehicle request submission or tell your Executive
                Concierge. You will be required to provide some sort of proof of
                occupation.
              </div>
            </template>
          </Feature>
          <hr class="my-16" />
          <Feature>
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/thumbs-up.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              REASONS TO PARTNER WITH US
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                Through a partnership with EAB your clients will gain access to
                our cost-free auto concierge service and when we earn, you earn.
                Additionally depending on your line of work, you could become
                our preferred partner for service or parts within your industry
                segment.
              </div>
            </template>
          </Feature>
        </Features>
      </div>
    </section>
    <section class="bg-brand-gray-alternate text-white py-16">
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

export default {
  transitions: 'fade',
  components: {
    CallToAction,
    Feature,
    Features,
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
    title: 'Executive - Military And Community Program',
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
