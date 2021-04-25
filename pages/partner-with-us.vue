<template>
  <div>
    <section :style="mainHeaderImage" class="py-24">
      <div class="container mx-auto">
        <div class="grid sm:grid-cols-9 sm:gap-8">
          <div></div>
          <div class="col-span-4 flex items-center">
            <div
              class="bg-black bg-opacity-10 inline-block uppercase text-white px-3 py-3 text-5xl font-bold"
            >
              <span>// PARTNER WITH US</span>
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
        <div class="grid sm:grid-cols-2">
          <div class="bg-gray-50 p-10">
            <div class="uppercase text-3xl">EAB PARTNERSHIP PROGRAM</div>
            <div class="text-gray-400 mt-5">
              We are always open to partnering with organizations that share our
              values and are looking for ways to help grow their business while
              elevating their customer experience.
            </div>
            <div class="mt-5 text-gray-400">
              Please reach out to us with any questions or if you are interested
              in persuing a partnership with our organization.
            </div>
          </div>
          <div class="bg-white shadow-2xl rounded-lg w-auto h-auto p-12">
            <div class="grid grid-cols-1 gap-6">
              <div class="grid grid-rows-3 gap-4">
                <div class="grid grid-cols-2 gap-4">
                  <label class="block">
                    <input
                      type="text"
                      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder="Name"
                    />
                  </label>
                  <label class="block">
                    <input
                      type="email"
                      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder="Email"
                    />
                  </label>
                </div>
                <label class="block">
                  <input
                    type="text"
                    class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                    placeholder="Subject"
                  />
                </label>
                <label class="block">
                  <textarea
                    class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                    rows="2"
                    placeholder="Message"
                  ></textarea>
                </label>
              </div>
            </div>
            <button
              class="bg-gradient-to-r from-yellow-700 to-yellow-500 shadow-lg py-2 px-8 float-right rounded uppercase text-white mt-5"
            >
              Send
              <fa class="ml-2 text-white" :icon="faChevronRight" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black">
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="text-8xl text-brand" :icon="faBuilding" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            TYPES OF ORGANIZATIONS WE PARTNER WITH
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              We are open to partnering with organizations of all types that
              provide services, products or technology to clients in the
              automative industry.
            </div>
            <div class="mb-4">
              From collission and repair shops to performance shops and mobile
              detailers, a partnership with EAB and your business could be a
              great fit for both of our organizations.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="text-8xl text-brand" :icon="faExchangeAlt" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            HOW WE PARTNER WITH ORGANIZATIONS
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Typically we partner with organizations through a refferal fee or
              refferal exchange program. To be approved as a refferal partner we
              will need to confirm your organization has a history of providing
              quality service or products, and are an industry leader in client
              satisfaction in your respective industry and geographical area.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="text-8xl text-brand" :icon="faSmile" />
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
    <svg width="0" height="0">
      <linearGradient id="lgrad" x1="100%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgb(205, 176, 28); stop-opacity: 1"
        />
        <stop
          offset="100%"
          style="stop-color: rgb(117, 176, 24); stop-opacity: 1"
        />
      </linearGradient>
    </svg>
  </div>
</template>

<script>
import { faBuilding, faSmile } from '@fortawesome/free-regular-svg-icons'
import {
  faChevronRight,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons'

import bgMainHeader from 'assets/images/partner_with_us_header.jpg'
export default {
  transitions: 'fade',
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
    }
  },
  head: {
    title: 'Executive - Partner With Us',
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
    faBuilding() {
      return faBuilding
    },
    faExchangeAlt() {
      return faExchangeAlt
    },
    faSmile() {
      return faSmile
    },
  },
}
</script>

<style scoped>
.parent-div svg * {
  fill: url(#lgrad);
}
</style>
