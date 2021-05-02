<template>
  <div>
    <section :style="mainHeaderImage" class="py-16 sm:py-24 xl:px-24 2xl:px-16">
      <div class="container mx-auto px-4 sm:px-0">
        <div
          class="flex flex-col sm:flex-row justify-center content-center sm:space-x-6 max-w-5xl"
        >
          <div class="flex items-center mb-4 sm:mb-0">
            <div
              class="bg-black bg-opacity-10 inline-block uppercase text-white px-5 py-3 md:text-3xl xl:text-5xl text-2xl font-bold"
            >
              <span>// PARTNER WITH US</span>
            </div>
          </div>
          <div class="flex items-center max-w-xs sm:w-72 md:was-w-xs">
            Join the EAB team and join us on our mission to help transform the
            way consumers purchase vehicles.
          </div>
          <div></div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black py-12 px-5 2xl:px-0">
      <div class="container mx-auto xl:px-32">
        <div class="flex flex-col md:flex-row space-y-10 lg:space-y-0 md:mt-10">
          <div class="flex flex-1 flex-col space-y-10 lg:space-y-0 mt-10 pr-4">
            <div class="uppercase text-2xl sm:text-3xl">
              EAB PARTNERSHIP PROGRAM
            </div>
            <div class="text-gray-400">
              We are always open to partnering with organizations that share our
              values and are looking for ways to help grow their business while
              elevating their customer experience.
            </div>
            <div class="mt-5 text-gray-400">
              Please reach out to us with any questions or if you are interested
              in persuing a partnership with our organization.
            </div>
          </div>
          <div
            class="flex flex-1 flex-col bg-white shadow-2xl rounded-lg w-auto h-auto p-12"
          >
            <div class="flex flex-col">
              <div
                class="flex flex-grow flex-col sm:flex-row sm:space-x-4 mb-6"
              >
                <label class="block flex-grow mb-6 sm:mb-0">
                  <input
                    type="text"
                    class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                    placeholder="Name"
                  />
                </label>
                <label class="block flex-grow">
                  <input
                    type="email"
                    class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                    placeholder="E-mail"
                  />
                </label>
              </div>
              <label class="block mb-6">
                <input
                  type="text"
                  class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                  placeholder="Subject"
                />
              </label>
              <label class="block mb-6">
                <textarea
                  class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </label>
            </div>
            <div class="flex-grow-0">
              <button
                class="bg-gradient-to-r from-yellow-700 to-yellow-500 shadow-lg py-2 px-8 float-right rounded uppercase text-white mt-5"
              >
                Send
                <fa class="ml-2 text-white" :icon="faChevronRight" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black">
      <Features>
        <Feature>
          <template slot="feature-image"
            ><img
              src="~/assets/images/icons/small-building.png"
              class="h-14 md:h-16"
              alt=""
          /></template>
          <template slot="feature-title">
            TYPES OF ORGANIZATIONS WE PARTNER WITH
          </template>
          <template slot="feature-description">
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
          </template>
        </Feature>
        <hr class="my-16" />
        <Feature>
          <template slot="feature-image"
            ><img
              src="~/assets/images/icons/transfer.png"
              class="h-14 md:h-16"
              alt=""
          /></template>
          <template slot="feature-title">
            HOW WE PARTNER WITH ORGANIZATIONS
          </template>
          <template slot="feature-description">
            <div class="mb-4">
              Typically we partner with organizations through a refferal fee or
              refferal exchange program. To be approved as a refferal partner we
              will need to confirm your organization has a history of providing
              quality service or products, and are an industry leader in client
              satisfaction in your respective industry and geographical area.
            </div>
          </template>
        </Feature>
        <hr class="my-16" />
        <Feature>
          <template slot="feature-image"
            ><img
              src="~/assets/images/icons/smile.png"
              class="h-14 md:h-16"
              alt=""
          /></template>
          <template slot="feature-title"> REASONS TO PARTNER WITH US </template>
          <template slot="feature-description">
            <div class="mb-4">
              Through a partnership with EAB your clients will gain access to
              our cost-free auto concierge service and when we earn, you earn.
              Additionally depending on your line of work, you could become our
              preferred partner for service or parts within your industry
              segment.
            </div>
          </template>
        </Feature>
      </Features>
    </section>
  </div>
</template>

<script>
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import bgMainHeader from 'assets/images/partner_with_us_header.jpeg'
import Feature from '~/components/common/Feature'
import Features from '~/components/common/Features'
export default {
  transitions: 'fade',
  components: { Feature, Features },
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
  },
}
</script>
