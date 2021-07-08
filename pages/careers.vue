<template>
  <div>
    <HeroSectionAlternate :main-header-image="mainHeaderImage">
      <template slot="title">// CAREERS</template>
      <template slot="subtitle"
        >Join the EAB team on our mission to help transform the way consumers
        purchase vehicles.</template
      >
    </HeroSectionAlternate>
    <section
      class="bg-white text-black py-10 sm:py-24 optimize-bg-image bg-cover"
      :style="bgSecondSection"
    >
      <div class="container mx-auto">
        <div
          class="bg-white shadow-2xl rounded-lg mx-auto sm:max-w-2xl w-full p-4 space-y-8 sm:p-12"
        >
          <div class="text-2xl sm:text-3xl font-bold">
            BECOME AN EXECUTIVE CONCIERGE
          </div>
          <div class="text-gray-500">
            We are always on the lookout for talent that has a passion for
            putting client experience first. We see a future where the past
            dealership models no longer exist, and consumers are in full control
            of the vehicle purchasing process.
          </div>
          <div class="text-gray-500 mb-2">
            If you are interested in helping us build this future, we are
            interested in you. We look forward to receiving your application!
          </div>
          <div>
            <NuxtLink
              to="conceirge-application"
              class="shadow-lg py-2 px-8 bg-gradient-to-r from-yellow-700 to-yellow-500 rounded uppercase text-white mb-0.5"
            >
              Application
              <fa class="ml-2 text-white" :icon="faChevronRight" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-16 sm:mt-0 sm:py-16">
        <Features>
          <Feature space-value="2xl:space-x-64">
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/user-tie.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              WHAT IS AN EXECUTIVE CONCEIRGE?
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                As an Executive Concierge, you will be responsible for servicing
                clients with their vehicle requests. You will serve as the main
                point of contact for clients while you guide them through our
                streamlined auto-buying process.
              </div>
              <div class="mb-4">
                Our analysts and management team handle all of the heavy lifting
                while you simply ensure all your clients' needs are met, all of
                their questions are answered, and all steps within the process
                are completed so they may receive delivery of their perfect
                vehicle.
              </div>
              <div class="mb-4">
                Utilizing your personal and professional networks, you will be a
                champion for the EAB brand - creating awareness of the benefits
                of our cost-free service while building yourself a base
                clientele to work with.
              </div>
            </template>
          </Feature>
          <hr class="my-16 border-gray-400" />
          <Feature space-value="2xl:space-x-64">
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/list.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title"> APPLICANT REQUIREMENTS </template>
            <template slot="feature-description">
              <div class="mb-4">
                Applicants considering becoming an Executive Concierge should
                have a love & passion for helping people paired with strong
                time-management and networking/communication skills. We do not
                require degrees, sales backgrounds, or experience in the auto
                industry.
              </div>
              <div class="mb-4">
                Our ideal applicants are savvy self-starters that will enjoy the
                freedom of being able to manage and grow their own clientele.
                All applicants must be able to pass a standard background check.
              </div>
            </template>
          </Feature>
          <hr class="my-16 border-gray-400" />
          <Feature space-value="2xl:space-x-64">
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/sun.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              PERKS OF BECOMING AN EXECUTIVE CONCIERGE
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                As an Executive Concierge, you will have the freedom to work
                remotely and create your own schedule. All you need is a laptop,
                smartphone, or tablet and as much time as you are able to invest
                into your own success.
              </div>
              <div class="mb-4">
                You are in full control of your earning potential and have the
                ability to create a consistent uncapped income stream. Apply for
                more details.
              </div>
            </template>
          </Feature>
        </Features>
      </div>
    </section>
  </div>
</template>

<script>
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import bgMainHeader from 'assets/images/careers_header.jpeg'
import bgSecondSection from 'assets/images/careers_bg.jpeg'
import Feature from '~/components/common/Feature'
import Features from '~/components/common/Features'
import HeroSectionAlternate from '~/components/common/HeroSectionAlternate'

export default {
  transitions: 'fade',
  components: {
    Feature,
    Features,
    HeroSectionAlternate,
  },
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      bgSecondSection: { backgroundImage: `url(${bgSecondSection})` },
    }
  },
  head: {
    title: 'EAB | Become an Executive Concierge',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'EAB | Become an Executive Concierge',
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
          'Join our team as we transform the car buying industry and help people enjoy stress-free vehicle shopping. No experience needed. Unlimited earning potential $$. 100% Remote Work on your schedule. Positions available nationwide.',
      },
    ],
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
}
</script>
