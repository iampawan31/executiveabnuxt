<template>
  <div>
    <section :style="mainHeaderImage" class="py-24">
      <div class="container mx-auto">
        <div class="grid grid-cols-7">
          <div></div>
          <div class="col-span-2 flex items-center">
            <div
              class="bg-black bg-opacity-10 inline-block uppercase text-white px-5 py-3 text-5xl font-bold"
            >
              <span>// CAREERS</span>
            </div>
          </div>
          <div class="flex items-center col-span-2">
            Join the EAB team and join us on our mission to help transform the
            way consumers purchase vehicles.
          </div>
          <div></div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black py-24">
      <div class="container mx-auto">
        <div
          class="bg-white shadow-2xl rounded-lg mx-auto max-w-2xl w-full space-y-8 p-12"
        >
          <div class="text-3xl font-bold">BECOME AN EXECUTIVE CONCIERGE</div>
          <div class="text-gray-500">
            We are always on the lookout for talent that has a passion for
            putting client experience first. We see a future where the past
            dealership models no longer exist, and consumers are in full control
            of the vehicle purchasing process.
          </div>
          <div class="text-gray-500">
            If you are interested in helping us build this future, we are
            interested in you. We look forward to receiving your application!
          </div>
          <button
            class="bg-brand shadow-lg py-2 px-8 rounded uppercase text-white mb-0.5"
          >
            Application
            <fa class="ml-2 text-white" :icon="faChevronRight" />
          </button>
        </div>
      </div>
    </section>
    <section class="bg-white text-black">
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10">
          <div class="col-span-1">
            <fa class="ml-2 text-8xl text-brand" :icon="faUserTie" />
          </div>
          <div class="col-span-2 text-3xl font-semibold">
            WHAT IS AN EXECUTIVE CONCEIRGE?
          </div>
          <div></div>
          <div class="col-span-6">
            <div class="mb-4">
              As an Executive Concierge you will be responsible for servicing
              clients with their vehicle requests. You will serve as the main
              point of contact for clients while you guide them through our
              streamlined auto-buying process.
            </div>
            <div class="mb-4">
              Our analysts and management team handle all of the heavy lifting
              while you simply ensure all your clients' needs are met, all of
              their questions are answered, and all steps within the process are
              completed so they may receive delivery of their perfect vehicle.
            </div>
            <div class="mb-4">
              Utilizing your personal and professional networks, you will be a
              champion for the EAB brand - creating awareness of the benefits of
              our cost-free service, while building yourself a base clientele to
              work with.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10">
          <div class="col-span-1">
            <fa class="ml-2 text-8xl text-brand" :icon="faThList" />
          </div>
          <div class="col-span-2 text-3xl font-semibold">
            APPLICANT REQUIREMENTS
          </div>
          <div></div>
          <div class="col-span-6">
            <div class="mb-4">
              Applicants considering becoming an Executive Concierge should have
              a love & passion for helping people paired with strong
              time-management and networking / communication skills. We do not
              require degrees, sales backgrounds, or experience in the auto
              industry.
            </div>
            <div class="mb-4">
              Our ideal applicants are saavy self-starters that will enjoy the
              freedom of being able to manage and grow their own clientele. All
              applicants must be able to pass a standard background check.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10">
          <div class="col-span-1">
            <fa class="ml-2 text-8xl text-brand" :icon="faSun" />
          </div>
          <div class="col-span-2 text-3xl font-semibold">
            PERKS OF BECOMING AN EXECUTIVE CONCIERGE
          </div>
          <div></div>
          <div class="col-span-6">
            <div class="mb-4">
              As an Executive Concierge you will have the freedom to work
              remotely and create your own schedule. All you need is a laptop,
              smartphone or tablet and as much time as you are able to invest
              into your own success.
            </div>
            <div class="mb-4">
              You are in full control of your earning potential and have the
              ability to create a consistent uncapped income stream. Apply for
              more details.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  faChevronRight,
  faSun,
  faThList,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'

import bgMainHeader from 'assets/images/careers_header.jpg'
export default {
  transitions: 'fade',
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
    }
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
    faSun() {
      return faSun
    },
    faThList() {
      return faThList
    },
    faUserTie() {
      return faUserTie
    },
  },
}
</script>
