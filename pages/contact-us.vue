<template>
  <div>
    <section :style="mainHeaderImage" class="py-24">
      <div class="container mx-auto">
        <div class="flex justify-center content-center space-x-6 max-w-5xl">
          <div class="col-span-3 flex items-center">
            <div
              class="bg-black bg-opacity-10 inline-block uppercase text-white px-5 py-3 md:text-5xl sm:text-3xl font-bold"
            >
              <span>// CONTACT US</span>
            </div>
          </div>
          <div class="flex items-center max-w-xs">
            We’d love to hear from you. Send us a message, chat, e-mail, call or
            connect with us on social media.
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black py-24 px-5 2xl:px-0">
      <div class="container mx-auto 2xl:px-32">
        <div class="flex">
          <div class="">
            <div class="uppercase text-2xl font-semibold">
              SEND US A MESSAGE
            </div>
            <div class="text-gray-600 max-w-sm">
              Ask us anything and we will get back to you as soon as possible.
              Please allow 1-2 business days for responses.
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-16 mt-10"
        >
          <div
            class="bg-white flex flex-col flex-grow max-w-4xl shadow-2xl rounded-lg p-14"
          >
            <div class="flex flex-col">
              <div class="flex flex-grow space-x-4 mb-6">
                <label class="block flex-grow">
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
          <div
            class="bg-white xl:w-2xl flex flex-col shadow-2xl rounded-lg pt-14 mb-0 pb-4"
          >
            <div class="px-12">
              <div class="flex space-x-8 mb-10">
                <div class="">
                  <img
                    src="~/assets/images/icons/location.png"
                    class="h-10 w-10"
                    alt=""
                  />
                </div>
                <div class="w-48">
                  8500 Redwood Creek Ln San Diego, CA 92126 Bloomfield, CT 06002
                </div>
              </div>
              <div class="flex space-x-8 mb-10">
                <div class="">
                  <img
                    src="~/assets/images/icons/call.png"
                    class="h-10 w-10"
                    alt=""
                  />
                </div>
                <div class="max-w-xs">(877) 297-0252</div>
              </div>
              <div class="flex space-x-8">
                <div class="">
                  <img
                    src="~/assets/images/icons/mail.png"
                    class="h-10 w-10"
                    alt=""
                  />
                </div>
                <div class="flex">
                  <a href="mailto:info@executiveab.com" class="no-underline">
                    info@executiveab.com
                  </a>
                </div>
              </div>
            </div>
            <div class="flex content-end align-bottom justify-items-end">
              <div class="flex content-end flex-row w-full justify-end mt-16">
                <fa class="text-gray-400 mx-4 text-4xl" :icon="faInstagram" />
                <fa class="text-gray-400 mx-4 text-4xl" :icon="faFacebook" />
                <fa class="text-gray-400 mx-4 text-4xl" :icon="faTwitter" />
                <fa class="text-gray-400 mx-4 text-4xl" :icon="faLinkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black px-5 2xl:px-0">
      <div class="container mx-auto py-16 2xl:px-32">
        <div class="grid grid-cols-2 my-10">
          <div class="lg:col-span-1 col-span-2">
            <div class="font-semibold text-3xl uppercase mb-4">
              NEED ADDITIONAL INFORMATION?
            </div>
            <div class="text-gray-500">
              We aim to provide you with as many resources as possible when
              using or inquiring about our service.
            </div>
            <div class="mt-4 text-gray-500">
              Please read our how it works and FAQ pages for knowledge on our
              most requested information and common questions.
            </div>
            <div class="inline-grid grid-cols-2 lg:gap-16 gap-24 mt-5">
              <button
                class="bg-gradient-to-r from-yellow-700 to-yellow-500 inline-block shadow-lg py-2 px-8 rounded uppercase w-auto text-white mb-0.5"
              >
                How Page
                <fa class="ml-2 text-white" :icon="faChevronRight" />
              </button>
              <button
                class="bg-gradient-to-r from-yellow-700 to-yellow-500 shadow-lg py-2 px-8 rounded uppercase text-white mb-0.5"
              >
                FAQ Page<fa class="ml-2 text-white" :icon="faChevronRight" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  faChevronDown,
  faChevronRight,
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import bgMainHeader from 'assets/images/contact_us_header.jpeg'
export default {
  transitions: 'fade',
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
    }
  },
  head: {
    title: 'Contact Us - Executive',
  },
  computed: {
    faChevronDown() {
      return faChevronDown
    },
    faChevronRight() {
      return faChevronRight
    },
    faEnvelopeOpenText() {
      return faEnvelopeOpenText
    },
    faMapMarkerAlt() {
      return faMapMarkerAlt
    },
    faPhoneAlt() {
      return faPhoneAlt
    },
    faInstagram() {
      return faInstagram
    },
    faFacebook() {
      return faFacebook
    },
    faTwitter() {
      return faTwitter
    },
    faLinkedin() {
      return faLinkedin
    },
  },
}
</script>
