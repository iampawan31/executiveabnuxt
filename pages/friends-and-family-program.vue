<template>
  <div>
    <section class="text-white relative">
      <div
        class="min-h-screen hero-image bg-center bg-cover flex"
        :style="mainHeaderImage"
      >
        <div class="relative container mx-48 p-4 flex items-center z-10">
          <div>
            <div class="content float-left py-4 px-5 my-5">
              <div
                class="heading mb-3 tracking-wide uppercase underline max-w-lg font-bold text-2xl md:text-4xl"
              >
                SHARE YOUR EXCITEMENT WITH YOUR FRIENDS & FAMILY!
              </div>
              <div class="text-lg font-light leading-normal max-w-md block">
                Spread the word so we can help more people experience the EAB
                difference while finding their perfect vehicle!
              </div>
              <div class="grid grid-cols-5 text-white mt-4 gap-4 w-max-xl">
                <div class="text-center">
                  <fa class="text-6xl mb-4" :icon="faBullhorn" />
                  <h1 class="text-xl font-semibold">SHARE</h1>
                </div>
                <div class="pt-10">
                  <hr class="border-gray-400 border-t-2" />
                </div>
                <div class="text-center">
                  <fa class="text-6xl mb-4" :icon="faCommentAlt" />
                  <h1 class="text-xl font-semibold">EDUCATE</h1>
                </div>
                <div class="pt-10">
                  <hr class="border-gray-400 border-t-2" />
                </div>
                <div class="text-center">
                  <fa class="text-6xl mb-4" :icon="faMoneyBill" />
                  <h1 class="text-xl font-semibold">EARN</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black pt-16" :style="secondSectionBgImage">
      <div
        class="flex flex-col place-items-center justify-center mx-auto max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3 pt-10">
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
    </section>
    <section
      :class="sectionOneVisible ? 'block' : 'hidden'"
      class="bg-white text-black py-16"
    >
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <img src="~/assets/images/icons/users.png" class="h-16" alt="" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            GETTING YOUR FRIENDS & FAMILY CODE
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              After purchasing a vehicle from us all clients are given a unique
              Friends & Family code. This code is your personal identifier that
              allows us to track any vehicle requests that come in that belong
              to your friends & family.
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
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <img src="~/assets/images/icons/visa.png" class="h-16" alt="" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            YOUR FRIENDS & FAMILY REWARDS
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Friends & Family Program members will
              <span class="text-yellow-500">
                {{ ' earn a minimum of $100 and a maximum of $200 ' }}
              </span>
              for each time their code is used for a vehicle purchase.
            </div>
            <div class="mb-4">
              Rewards will be sent out in a prepaid Visa gift card in the month
              following when the registered Friends & Family vehicle is
              purchased (Example: Your code is used in March - You will recieve
              your gift card in April).
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <img
                src="~/assets/images/icons/handshake.png"
                class="h-16"
                alt=""
              />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            WANT TO EARN MORE?
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Have a lot of friends & family or a large network? Have a passion
              for automobiles? Think you would enjoy assisting people in having
              the best car buying experience they’ve ever had?
            </div>
            <div class="mb-4">
              If you answered yes to all of these questions you may be a good
              fit for joining the ExecutiveAB team as an Executive Concierge.
              <NuxtLink to="/careers" class="ml-1 text-brand underline">
                {{ 'Visit our careers page ' }}
              </NuxtLink>
              for more information. We are always looking for people like you.
            </div>
          </div>
        </div>
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
export default {
  transitions: 'fade',
  components: {
    CallToAction,
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
