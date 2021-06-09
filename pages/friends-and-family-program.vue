<template>
  <div>
    <section class="text-white relative">
      <HeroSection
        :main-header-image="mainHeaderImage"
        main-header-image-classes="bg-center"
      >
        <div class="float-left py-4 lg:px-5 my-5">
          <div
            class="heading mb-3 tracking-wide uppercase underline max-w-sm sm:max-w-lg lg:max-w-lg xl:max-w-lg font-bold text-2xl md:text-4xl filter drop-shadow-max"
          >
            SHARE YOUR EXCITEMENT WITH YOUR FRIENDS & FAMILY!
          </div>
          <div
            class="mb-4 font-light leading-normal max-w-md filter drop-shadow-max"
          >
            Spread the word so we can help more people experience the EAB
            difference while finding their perfect vehicle!
          </div>
          <div class="flex space-x-2 sm:space-x-8 text-white">
            <div
              class="flex flex-col space-y-2 flex-1 sm:flex-initial justify-center items-center"
            >
              <img
                class="h-10 w-10 sm:h-16 sm:w-16"
                src="~assets/images/icons/megaphone.png"
                alt="Share"
              />
              <h1 class="text-md md:text-xl font-semibold">SHARE</h1>
            </div>
            <div
              class="flex flex-col space-y-2 flex-1 sm:flex-initial justify-center items-center"
            >
              <img
                class="h-10 w-10 sm:h-16 sm:w-16"
                src="~assets/images/icons/message.png"
                alt="Educate"
              />
              <h1 class="text-md md:text-xl font-semibold">EDUCATE</h1>
            </div>
            <div
              class="flex flex-col space-y-2 flex-1 sm:flex-initial justify-center items-center"
            >
              <img
                class="h-10 w-10 sm:h-16 sm:w-16"
                src="~assets/images/icons/paper-bill.png"
                alt="Earn"
              />
              <h1 class="text-md md:text-xl font-semibold">EARN</h1>
            </div>
          </div>
        </div>
      </HeroSection>
    </section>
    <section
      class="bg-black pt-10 lg:pt-16 optimize-bg-image bg-cover"
      :style="secondSectionBgImage"
    >
      <div
        class="flex flex-col sm:place-items-center sm:justify-center sm:mx-auto px-4 sm:px-10 lg:px-0 max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3 sm:pt-10">
          LOVE OUR SERVICE?
        </div>
        <div class="text-white text-3xl font-semibold uppercase mb-5">
          EARN REWARDS FOR SHARING YOUR EXPERIENCE
        </div>
        <div class="text-gray-300 pb-5 lg:pb-24">
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
          class="place-items-center mx-auto rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark z-50"
          @click="sectionOneVisible = !sectionOneVisible"
        >
          <fa
            class="text-brand text-2xl"
            :icon="sectionOneVisible ? faChevronUp : faChevronDown"
          />
        </button>
      </div>
    </section>
    <transition name="fade">
      <section v-show="sectionOneVisible" class="bg-white text-black">
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
                  interested in spreading the word to your friends & family
                  please fill out the below form so we can get you signed up.
                </div>
                <div class="mb-4">
                  <NuxtLink
                    to="/contact-us"
                    class="bg-gradient-to-r no-underline from-yellow-700 to-yellow-500 shadow-lg py-2 px-8 rounded uppercase text-white mb-0.5"
                  >
                    Sign Up
                    <fa class="ml-2 text-white" :icon="faChevronRight" />
                  </NuxtLink>
                </div>
              </template>
            </Feature>
            <hr class="my-16 border-gray-400" />
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
                  month following when the registered Friends & Family vehicle
                  is purchased (Example: Your code is used in March - You will
                  recieve your gift card in April).
                </div>
              </template>
            </Feature>
            <hr class="my-16 border-gray-400" />
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
                  passion for automobiles? Think you would enjoy assisting
                  people in having the best car buying experience they’ve ever
                  had?
                </div>
                <div class="mb-4">
                  If you answered yes to all of these questions you may be a
                  good fit for joining the ExecutiveAB team as an Executive
                  Concierge.
                  <NuxtLink to="/careers" class="ml-1 text-brand underline">
                    {{ 'Visit our careers page ' }}
                  </NuxtLink>
                  for more information. We are always looking for people like
                  you.
                </div>
              </template>
            </Feature>
          </Features>
        </div>
      </section>
    </transition>
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
import HeroSection from '~/components/common/HeroSection'

export default {
  transitions: 'fade',
  components: {
    CallToAction,
    Feature,
    Features,
    HeroSection,
  },
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      secondSectionBgImage: { backgroundImage: `url(${secondSectionBgImage})` },
      sectionOneVisible: false,
    }
  },
  head: {
    title: 'Friends & Family Program - Executive',
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
