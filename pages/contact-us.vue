<template>
  <div>
    <HeroSectionAlternate :main-header-image="mainHeaderImage">
      <template slot="title">// CONTACT US</template>
      <template slot="subtitle"
        >We’d love to hear from you. Send us a message, chat, e-mail, call or
        connect with us on social media.</template
      >
    </HeroSectionAlternate>
    <section class="bg-white text-black py-12 sm:pt-24 px-4 2xl:px-0">
      <div class="container mx-auto 2xl:px-32">
        <div class="flex">
          <div class="">
            <div
              class="uppercase text-2xl md:text-3xl font-semibold text-left mb-4"
            >
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
            class="bg-white flex flex-col flex-grow max-w-4xl shadow-2xl rounded-lg p-8 sm:p-14"
          >
            <form
              ref="formRef"
              name="contact"
              netlify-honeypot="bot-field"
              netlify
              @submit.prevent="submitForm"
            >
              <p class="hidden">
                <label
                  >Don’t fill this out if you’re human: <input name="bot-field"
                /></label>
              </p>
              <input type="hidden" name="form-name" value="contact" />
              <div class="flex flex-col">
                <div
                  class="flex flex-grow flex-col sm:flex-row sm:space-x-4 mb-6"
                >
                  <label class="block flex-grow mb-6 sm:mb-0">
                    <input
                      v-model="name"
                      required
                      type="text"
                      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                      name="name"
                      placeholder="Name"
                    />
                  </label>
                  <label class="block flex-grow">
                    <input
                      v-model="email"
                      required
                      type="email"
                      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                      name="email"
                      placeholder="E-mail"
                    />
                  </label>
                </div>
                <label class="block mb-6">
                  <input
                    v-model="subject"
                    required
                    type="text"
                    class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                    name="subject"
                    placeholder="Subject"
                  />
                </label>
                <label class="block mb-6">
                  <textarea
                    v-model="message"
                    required
                    class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                    rows="3"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </label>
              </div>
              <div class="flex-grow-0">
                <button
                  type="submit"
                  class="bg-gradient-to-r from-yellow-700 focus:outline-none to-yellow-500 shadow-lg py-2 px-8 float-right rounded uppercase text-white mt-5"
                >
                  Send
                  <fa class="ml-2 text-white" :icon="faChevronRight" />
                </button>
              </div>
            </form>
            <transition name="fade">
              <Alert
                v-show="showAlert"
                class="mt-4"
                :alert-type="alertType"
                :message="alertMessage"
              />
            </transition>
          </div>
          <div
            class="bg-white xl:w-2xl flex flex-col shadow-2xl rounded-lg pt-14 mb-0 pb-4 lg:pb-0"
          >
            <div class="px-4 sm:px-12">
              <div class="flex space-x-8 mb-10">
                <div class="">
                  <img
                    src="~/assets/images/icons/location.png"
                    class="h-10 w-10"
                    alt=""
                  />
                </div>
                <div class="w-48">
                  8500 Redwood Creek Ln San Diego, CA 92126
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
                <a
                  href="https://www.instagram.com/executiveautob/"
                  target="_blank"
                >
                  <fa class="text-gray-400 mx-4 text-4xl" :icon="faInstagram"
                /></a>
                <a
                  href="https://www.facebook.com/executiveautob/"
                  target="_blank"
                >
                  <fa class="text-gray-400 mx-4 text-4xl" :icon="faFacebook" />
                </a>
                <a href="https://twitter.com/executiveab" target="_blank">
                  <fa class="text-gray-400 mx-4 text-4xl" :icon="faTwitter" />
                </a>
                <a
                  href="https://www.linkedin.com/company/executiveautob/"
                  target="_blank"
                >
                  <fa class="text-gray-400 mx-4 text-4xl" :icon="faLinkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black px-4 2xl:px-0">
      <div class="container mx-auto py-10 sm:pb-16 2xl:px-32">
        <div class="grid grid-cols-2 sm:my-10">
          <div class="lg:col-span-1 col-span-2">
            <div class="font-semibold text-2xl md:text-3xl uppercase mb-4">
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
            <div class="inline-grid grid-cols-2 lg:gap-16 gap-4 sm:gap-24 mt-5">
              <NuxtLink
                to="how-it-works"
                class="bg-gradient-to-r from-yellow-700 to-yellow-500 inline-block shadow-lg py-2 px-4 sm:px-8 rounded uppercase w-auto text-white mb-0.5"
              >
                How Page
                <fa class="ml-2 text-white" :icon="faChevronRight" />
              </NuxtLink>
              <NuxtLink
                to="faqs"
                class="bg-gradient-to-r from-yellow-700 to-yellow-500 shadow-lg py-2 px-4 sm:px-8 rounded uppercase text-white mb-0.5"
              >
                FAQ Page<fa class="ml-2 text-white" :icon="faChevronRight" />
              </NuxtLink>
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
import HeroSectionAlternate from '~/components/common/HeroSectionAlternate'
import Alert from '~/components/common/Alert'

export default {
  transitions: 'fade',
  components: {
    HeroSectionAlternate,
    Alert,
  },
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      name: '',
      email: '',
      subject: '',
      message: '',
      alertType: null,
      alertMessage: null,
      showAlert: false,
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
  methods: {
    setAlert(type, message) {
      this.alertType = type
      this.alertMessage = message
      this.showAlert = true
    },
    submitForm() {
      const myForm = this.$refs.formRef
      const formData = new FormData(myForm)

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          this.setAlert(true, 'Form submitted successfully')
          this.name = ''
          this.email = ''
          this.subject = ''
          this.message = ''
        })
        .catch(() =>
          this.setAlert(false, 'Form submission failed. Please try again')
        )
    },
  },
}
</script>
