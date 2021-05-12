<template>
  <div>
    <section class="text-white relative">
      <div
        class="sm:max-h-96 sm:py-80 md:h-screen 2xl:max-h-96 2xl:py-96 hero-image bg-right-top sm:bg-center bg-cover flex bg-norepeat"
        :style="mainHeaderImage"
      >
        <div class="flex items-center z-10 lg:mx-16 xl:mx-32">
          <div class="py-4 px-5 my-5">
            <div
              class="mb-4 tracking-wide uppercase underline max-w-lg font-bold text-xl md:text-4xl filter drop-shadow-max"
            >
              SHARE YOUR EXCITEMENT WITH YOUR FRIENDS & FAMILY!
            </div>
            <div
              class="mb-4 text-sm md:text-lg font-light leading-normal max-w-md filter drop-shadow-max"
            >
              Spread the word so we can help more people experience the EAB
              difference while finding their perfect vehicle!
            </div>
            <div class="flex space-x-2 sm:space-x-8 text-white">
              <div class="flex flex-col space-y-2 flex-1 sm:flex-initial">
                <fa class="text-5xl md:text-6xl" :icon="faBullhorn" />
                <h1 class="text-md md:text-xl font-semibold">SHARE</h1>
              </div>
              <div class="flex flex-col space-y-2 flex-1 sm:flex-initial">
                <fa class="text-5xl md:text-6xl" :icon="faCommentAlt" />
                <h1 class="text-md md:text-xl font-semibold">EDUCATE</h1>
              </div>
              <div class="flex flex-col space-y-2 flex-1 sm:flex-initial">
                <fa class="text-5xl md:text-6xl" :icon="faMoneyBill" />
                <h1 class="text-md md:text-xl font-semibold">EARN</h1>
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
        <div class="text-brand uppercase text-lg mb-3 sm:pt-10">
          LOVE OUR SERVICE?
        </div>
        <div class="text-white text-3xl font-semibold uppercase mb-5">
          EARN REWARDS FOR SHARING YOUR EXPERIENCE
        </div>
        <div class="text-gray-300 pb-24">
          Our Friends & Family Program allows you to earn rewards for telling
          your friends and family about our service. If they submit a request
          and purchase a vehicle they just need to enter your Friends & Family
          Code during their submission and you get rewarded!
        </div>
        <div
          class="place-items-center justify-center mx-auto uppercase text-brand mb-4"
        >
          Learn more
        </div>
        <button
          class="place-items-center mx-auto rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark"
          @click="sectionOneVisible = !sectionOneVisible"
        >
          <fa
            class="text-brand text-2xl"
            :icon="sectionOneVisible ? faChevronUp : faChevronDown"
          />
        </button>
      </div>
    </section>
    <section
      :class="sectionOneVisible ? 'block' : 'hidden'"
      class="bg-white text-black"
    >
      <div class="container mx-auto pt-16 pb-6 lg:py-10">
        <Features>
          <Feature title-space-value="lg:space-x-32">
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/users.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              GETTING YOUR FRIENDS & FAMILY CODE
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                After purchasing a vehicle from us all clients are given a
                unique Friends & Family code. This code is your personal
                identifier that allows us to track any vehicle requests that
                come in that belong to your friends & family.
              </div>
              <div class="mb-4">
                If you have not purchased a vehicle from us but are still
                interested in spreading the word to your friends & family please
                fill out the below form so we can get you signed up.
              </div>
              <div class="mb-4">
                <button
                  class="bg-gradient-to-r from-yellow-700 to-yellow-500 shadow-lg py-2 px-8 rounded uppercase text-white mb-0.5"
                >
                  Sign Up
                  <fa class="ml-2 text-white" :icon="faChevronRight" />
                </button>
              </div>
            </template>
          </Feature>
          <hr class="my-16" />
          <Feature title-space-value="lg:space-x-32">
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/visa.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              YOUR FRIENDS & FAMILY REWARDS
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                Friends & Family Program members will
                <span class="text-yellow-500">
                  {{ ' earn a minimum of $100 and a maximum of $200 ' }}
                </span>
                for each time their code is used for a vehicle purchase.
              </div>
              <div class="mb-4">
                Rewards will be sent out in a prepaid Visa gift card in the
                month following when the registered Friends & Family vehicle is
                purchased (Example: Your code is used in March - You will
                recieve your gift card in April).
              </div>
            </template>
          </Feature>
          <hr class="my-16" />
          <Feature title-space-value="lg:space-x-32">
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/handshake.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title"> WANT TO EARN MORE? </template>
            <template slot="feature-description">
              <div class="mb-4">
                Have a lot of friends & family or a large network? Have a
                passion for automobiles? Think you would enjoy assisting people
                in having the best car buying experience they’ve ever had?
              </div>
              <div class="mb-4">
                If you answered yes to all of these questions you may be a good
                fit for joining the ExecutiveAB team as an Executive Concierge.
                <NuxtLink to="/careers" class="ml-1 text-brand underline">
                  {{ 'Visit our careers page ' }}
                </NuxtLink>
                for more information. We are always looking for people like you.
              </div>
            </template>
          </Feature>
        </Features>
      </div>
    </section>
    <section class="bg-brand-grayAlternate text-white py-16">
      <CallToAction
        title="Ready to get started?"
        subtitle="START YOUR VEHICLE REQUEST"
        button-text="Get Started"
      />
    </section>
  </div>
</template>

<script>
import bgMainHeader from 'assets/images/friends_and_family_header.jpeg'
import secondSectionBgImage from 'assets/images/friends-and-family-program/second-section-bg-image.jpeg'
import {
  faBullhorn,
  faChevronUp,
  faChevronDown,
  faChevronRight,
  faCommentAlt,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons'
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
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      secondSectionBgImage: { backgroundImage: `url(${secondSectionBgImage})` },
      sectionOneVisible: false,
    }
  },
  head: {
    title: 'Executive - Friends And Family Program',
  },
  computed: {
    faBullhorn() {
      return faBullhorn
    },
    faChevronUp() {
      return faChevronUp
    },
    faChevronDown() {
      return faChevronDown
    },
    faChevronRight() {
      return faChevronRight
    },
    faCommentAlt() {
      return faCommentAlt
    },
    faMoneyBill() {
      return faMoneyBill
    },
  },
}
</script>
