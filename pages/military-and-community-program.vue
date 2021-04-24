<template>
  <div>
    <section class="text-white relative">
      <div
        class="min-h-screen hero-image bg-center bg-cover flex"
        :style="mainHeaderImage"
      >
        <div class="relative container mx-auto p-4 flex items-center z-10">
          <div>
            <div class="content float-left py-4 px-5 my-5">
              <div
                class="heading mb-3 tracking-wide uppercase underline max-w-md font-bold text-2xl md:text-4xl"
              >
                WE HOLD YOUR SERVICE CLOSE TO OUR HEART
              </div>
              <div
                class="text-lg font-light leading-normal hidden max-w-md sm:block"
              >
                With service at the core of our own business, we recognize and
                celebrate those those that serve our nation and communities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black pt-16">
      <div
        class="flex flex-col place-items-center justify-center mx-auto max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3">A SALUTE TO SERVICE</div>
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
        <div class="uppercase text-brand mb-4">Learn more</div>
        <a
          href="#aboutMilitaryProgram"
          class="rounded-full h-12 w-12 flex items-center justify-center -mb-5 bg-brand-gray-dark"
        >
          <fa class="text-brand text-2xl" :icon="faChevronDown" />
        </a>
      </div>
    </section>
    <section id="aboutMilitaryProgram" class="bg-white text-black py-16">
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="fa-gradient text-8xl" :icon="faClock" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            SAVE YOUR TIME FOR WHAT MATTERS MOST
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              We understand first hand the time-sacrifice and dedication that is
              required to having a service career, and how little personal time
              is often left for you. That is why our Military & Community
              Program was specifically designed to provide you with expedited
              personal service that saves you time and eliminates the stress of
              traditional car buying.
            </div>
            <div class="mb-4">
              We handle finding and getting you the best deal on vehicle you
              want, taking care of all the paperwork, and having it delivered
              wherever you want it. That way you can spend your free time doing
              what you want, and not driving around searching for cars and
              haggling with dealerships.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="fa-gradient text-8xl" :icon="faCcVisa" />
            </div>
            <svg width="0" height="0">
              <linearGradient id="lgrad" x1="100%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 0, 0); stop-opacity: 1"
                />
                <stop
                  offset="100%"
                  style="stop-color: rgb(0, 0, 255); stop-opacity: 1"
                />
              </linearGradient>
            </svg>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            A THANK YOU FOR YOUR SERVICE
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              As an extra thank you for your service we provide you with a
              <span class="text-yellow-500">$200 Visa gift card</span> when you
              allow us to help you purchase your perfect car.
            </div>
            <div class="mb-4">
              To qualify please select your line of service when filling out
              your vehicle request submission or tell your Executive Concierge.
              You will be required to provide some sort of proof of occupation.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="gradient text-8xl" :icon="faThumbsUp" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            REASONS TO PARTNER WITH US
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Through a partnership with EAB your clients will gain access to
              our cost-free auto concierge service and when we earn, you earn.
              Additionally depending on your line of work, you could become our
              preferred partner for service or parts within your industry
              segment.
            </div>
          </div>
        </div>
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
import bgMainHeader from 'assets/images/military_program_header.jpg'
import { faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import CallToAction from '~/components/CallToAction'
export default {
  transitions: 'fade',
  components: {
    CallToAction,
  },
  loading: true,
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
    }
  },
  head: {
    title: 'Executive - Military And Community Program',
  },
  computed: {
    faChevronDown() {
      return faChevronDown
    },
    faClock() {
      return faClock
    },
    faThumbsUp() {
      return faThumbsUp
    },
    faCcVisa() {
      return faCcVisa
    },
  },
}
</script>

<style scoped>
.parent-div svg * {
  fill: url(#lgrad);
}
</style>
