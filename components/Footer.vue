<template>
  <div class="bg-black">
    <div class="container mx-auto pt-10 pb-4 sm:py-10 px-5 2xl:px-32">
      <div
        class="flex flex-col md:flex-row md:space-y-0 space-y-10 xl:space-x-16"
      >
        <div
          class="flex md:max-w-lg lg:max-w-none flex-col space-y-5 sm:flex-row sm:space-y-0"
        >
          <div class="flex flex-col w-72">
            <div class="font-bold mb-2">MAIN NAVIGATION</div>
            <div v-for="(link, index) in mainNavigation" :key="index">
              <NuxtLink
                v-if="!link.externalLink"
                :to="link.path"
                class="text-sm mb-2 hover:text-brand transition"
              >
                {{ link.name }}
              </NuxtLink>
              <a
                v-else
                :href="link.path"
                rel="noreferrer"
                class="text-sm mb-2 hover:text-brand transition"
                >{{ link.name }}</a
              >
            </div>
          </div>
          <div class="flex flex-col w-72">
            <div class="font-bold mb-2">ADDITIONAL LINKS</div>
            <div v-for="(link, index) in additionalNavigation" :key="index">
              <NuxtLink
                :to="link.path"
                class="text-sm mb-2 hover:text-brand transition"
              >
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:flex-wrap sm:space-x-10 md:space-x-0 md:space-y-5 lg:space-y-0 lg:space-x-0 xl:space-x-8 2xl:space-x-16"
        >
          <div class="flex xl:flex-1 lg:mr-10 xl:mr-0 flex-col">
            <div class="font-bold mb-4">HEADQUARTERS</div>
            <div class="flex">
              <div class="pr-2">
                <img
                  src="~/assets/images/icons/location.png"
                  class="h-8 w-8"
                  alt="Headquarters"
                />
              </div>
              <div class="text-xs w-56 sm:w-32">
                8500 Redwood Creek Ln San Diego, CA 92126
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="font-bold mb-4">CALL US</div>
            <div class="flex">
              <div class="pr-2">
                <img
                  src="~/assets/images/icons/call.png"
                  class="h-8 w-8"
                  alt="Call Us"
                />
              </div>
              <div class="text-xs">(877) 297-0252</div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="font-bold mb-4">EMAIL US</div>
            <div class="flex">
              <div class="pr-2">
                <img
                  src="~/assets/images/icons/mail.png"
                  class="h-8 w-8"
                  alt="Email Us"
                />
              </div>
              <a
                href="mailto:info@executiveab.com"
                class="no-underline text-xs"
              >
                info@executiveab.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex mt-16 w-full flex-col space-y-5 sm:flex-row sm:space-x-12 sm:content-end sm:flex-wrap"
      >
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:flex-wrap sm:space-x-5 sm:content-end flex-1"
        >
          <div>
            <NuxtLink to="/">
              <img
                class="h-6"
                src="~/assets/logo_white.png"
                alt="Executive AB Logo"
              />
            </NuxtLink>
          </div>
          <div class="flex flex-wrap content-end text-xs">
            <p>© 2021. All Rights Reserved.</p>
          </div>
        </div>
        <div class="flex flex-1 flex-col">
          <div class="hidden sm:block mb-4">CONNECT ON SOCIAL</div>
          <div class="flex parent-div">
            <a
              href="https://www.instagram.com/executiveautob/"
              rel="noreferrer"
              target="_blank"
            >
              <fa class="text-brand mr-4 text-4xl" :icon="faInstagram" />
            </a>
            <a
              href="https://www.facebook.com/executiveautob/"
              rel="noreferrer"
              target="_blank"
            >
              <fa class="text-brand mx-4 text-4xl" :icon="faFacebook" />
            </a>
            <a
              href="https://twitter.com/executiveab"
              rel="noreferrer"
              target="_blank"
            >
              <fa class="text-brand mx-4 text-4xl" :icon="faTwitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/executiveautob/"
              rel="noreferrer"
              target="_blank"
            >
              <fa class="text-brand mx-4 text-4xl" :icon="faLinkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <svg width="0" height="0">
      <linearGradient id="lgrad" x1="100%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgb(177, 88, 19); stop-opacity: 1"
        />
        <stop
          offset="100%"
          style="stop-color: rgb(207, 121, 55); stop-opacity: 1"
        />
      </linearGradient>
    </svg>
  </div>
</template>

<script>
import {
  faEnvelopeOpenText,
  faMapMarkedAlt,
  faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { mainNavigationLinks, additionalLinks } from '../data/footer'
export default {
  data() {
    return {
      mainNavigation: mainNavigationLinks,
      additionalNavigation: additionalLinks,
    }
  },
  computed: {
    faEnvelopeOpenText() {
      return faEnvelopeOpenText
    },
    faMapMarkedAlt() {
      return faMapMarkedAlt
    },
    faPhoneSquareAlt() {
      return faPhoneSquareAlt
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

<style scoped>
.parent-div svg * {
  fill: url(#lgrad);
}
</style>
