<template>
  <div>
    <HeroSectionAlternate :main-header-image="mainHeaderImage">
      <template slot="title">// PARTNER WITH US</template>
      <template slot="subtitle"
        >Help us make sure everyone has access to the best client experiences in
        the automotive industry.</template
      >
    </HeroSectionAlternate>
    <section class="bg-white text-black py-12 px-5 2xl:px-0">
      <div class="container mx-auto xl:px-24 2xl:px-32">
        <div
          class="flex flex-col md:flex-row space-y-10 lg:space-y-0 lg:space-x-10 2xl:space-x-32 md:mt-10"
        >
          <div
            class="flex flex-1 flex-col space-y-10 lg:space-y-0 sm:mt-10 pr-4"
          >
            <div class="uppercase font-semibold text-2xl sm:text-3xl mb-4">
              EAB PARTNERSHIP PROGRAM
            </div>
            <div class="text-gray-400">
              We are always open to partnering with organizations that share our
              values and are looking for ways to help grow their business while
              elevating their customer experience.
            </div>
            <div class="mt-5 text-gray-400">
              Please reach out to us with any questions or if you are interested
              in pursuing a partnership with our organization.
            </div>
          </div>
          <div
            class="flex flex-col bg-white shadow-2xl rounded-lg w-auto h-auto p-12 lg:p-8"
          >
            <form
              ref="formRef"
              name="partner-with-us"
              netlify-honeypot="bot-field"
              netlify
              @submit.prevent="submitForm"
            >
              <div class="flex flex-col">
                <p class="hidden">
                  <label
                    >Don’t fill this out if you’re human:
                    <input name="bot-field"
                  /></label>
                </p>
                <input type="hidden" name="form-name" value="contact" />
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
                :title="alertTitle"
              />
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-black py-16 lg:pt-4">
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
              provide services, products, or technology to clients in the
              automotive industry.
            </div>
            <div class="mb-4">
              From collision and repair shops to performance shops and mobile
              detailers, a partnership with EAB and your business could be a
              great fit for both of our organizations.
            </div>
          </template>
        </Feature>
        <hr class="my-16 border-gray-400" />
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
              Typically we partner with organizations through a referral fee or
              referral exchange program. To be approved as a referral partner we
              will need to confirm your organization has a history of providing
              quality service or products, and are an industry leader in client
              satisfaction in your respective industry and geographical area.
            </div>
          </template>
        </Feature>
        <hr class="my-16 border-gray-400" />
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
              Through a partnership with EAB, your clients will gain access to
              our cost-free auto concierge service and when we earn, you earn.
              Additionally, depending on your line of work, you could become our
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
import HeroSectionAlternate from '~/components/common/HeroSectionAlternate'
import Alert from '~/components/common/Alert'

export default {
  transitions: 'fade',
  components: { Feature, Features, HeroSectionAlternate, Alert },
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      name: '',
      email: '',
      subject: '',
      message: '',
      alertType: '',
      alertMessage: '',
      alertTitle: '',
      showAlert: false,
    }
  },
  head: {
    title: 'Partner With Us - Executive',
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
  methods: {
    setAlert(type, message, title) {
      this.alertType = type
      this.alertMessage = message
      this.alertTitle = title
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
          this.setAlert('green', 'Form submitted successfully', 'Success')
          this.name = ''
          this.email = ''
          this.subject = ''
          this.message = ''
          console.log('Form submitted successfully')
        })
        .catch(() =>
          this.setAlert(
            'red',
            'Form submission failed. Please try again',
            'Failed'
          )
        )
    },
  },
}
</script>
