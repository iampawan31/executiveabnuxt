<template>
  <div>
    <section :style="mainHeaderImage" class="py-24">
      <div class="container mx-auto">
        <div class="grid grid-cols-8">
          <div></div>
          <div class="col-span-3 flex items-center">
            <div
              class="bg-black bg-opacity-10 inline-block uppercase text-white px-5 py-3 text-5xl font-bold"
            >
              <span>// CONTACT US</span>
            </div>
          </div>
          <div class="flex items-center col-span-2">
            We’d love to hear from you. Send us a message, chat, e-mail, call or
            connect with us on social media.
          </div>
          <div></div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black py-24">
      <div class="container mx-auto">
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            <div class="uppercase text-2xl font-semibold">
              SEND US A MESSAGE
            </div>
            <div class="text-gray-600">
              Ask us anything and we will get back to you as soon as possible.
              Please allow 1-2 business days for responses.
            </div>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-8 mt-10">
          <div class="bg-white col-span-3 shadow-2xl rounded-lg p-12">
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
          <div
            class="bg-white col-span-2 h-auto shadow-2xl rounded-lg py-12 pb-0"
          >
            <div class="grid grid-rows-3 gap-8 px-12">
              <div class="grid grid-cols-4">
                <div class="col-span-1">
                  <fa class="text-5xl text-brand" :icon="faMapMarkerAlt" />
                </div>
                <div class="col-span-3">
                  8500 Redwood Creek Ln San Diego, CA 92126 Bloomfield, CT 06002
                </div>
              </div>
              <div class="grid grid-cols-4">
                <div class="col-span-1">
                  <fa class="text-5xl text-brand" :icon="faPhoneAlt" />
                </div>
                <div class="col-span-3">(877) 297-0252</div>
              </div>
              <div class="grid grid-cols-4">
                <div class="col-span-1">
                  <fa class="text-5xl text-brand" :icon="faEnvelopeOpenText" />
                </div>
                <div class="col-span-3">
                  <a href="mailto:info@executiveab.com" class="no-underline">
                    info@executiveab.com
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-5 grid grid-rows-1">
              <div class="flex justify-end mt-16">
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
    <section class="bg-white text-black">
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-2 my-10">
          <div class="col-span-1">
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
            <div class="inline-grid grid-cols-2 gap-24 mt-5">
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
import bgMainHeader from 'assets/images/contact_us_header.jpg'
export default {
  transitions: 'fade',
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
    }
  },
  head: {
    title: 'Executive - Contact Us',
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
