<template>
  <div class="bg-black">
    <div class="container mx-auto py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="flex flex-col">
            <div class="font-bold mb-2">MAIN NAVIGATION</div>
            <div v-for="(link, index) in mainNavigation" :key="index">
              <NuxtLink
                :to="link.path"
                class="text-sm mb-2 hover:text-brand transition"
              >
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col">
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
          class="grid md:grid-rows-2 lg:grid-flow-row lg:grid-cols-3 md:grid-flow-col gap-4"
        >
          <div>
            <div class="grid grid-flow-row gap-2">
              <div class="sm:mx-4">
                <div class="font-bold mb-4 sm:text-center">HEADQUARTERS</div>
                <div class="text-center mb-4 hidden sm:block">
                  <fa class="text-brand text-4xl" :icon="faMapMarkedAlt" />
                </div>
                <div class="text-xs sm:w-auto w-56 mt-4">
                  8500 Redwood Creek Ln San Diego, CA 92126 Bloomfield, CT 06002
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-flow-row gap-2">
              <div class="sm:mx-4">
                <div class="font-bold mb-4 sm:text-center">CALL US</div>
                <div class="text-center mb-4 hidden sm:block">
                  <fa class="text-brand text-4xl" :icon="faPhoneSquareAlt" />
                </div>
                <div class="sm:text-center text-xs mt-4">(877) 297-0252</div>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-flow-row gap-2">
              <div class="sm:mx-4">
                <div class="font-bold mb-4 sm:text-center">EMAIL US</div>
                <div class="text-center mb-4 hidden sm:block">
                  <fa class="text-brand text-4xl" :icon="faEnvelopeOpenText" />
                </div>
                <div class="text-xs sm:text-center mt-4">
                  info@executiveab.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-16 w-full space-x-12 content-end flex-wrap">
        <div class="flex flex-wrap space-x-5 content-end flex-1">
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
          <div class="flex">
            <a href="https://www.instagram.com/executiveautob/" target="_blank">
              <fa class="text-brand mr-4 text-4xl" :icon="faInstagram" />
            </a>
            <a href="https://www.facebook.com/executiveautob/" target="_blank">
              <fa class="text-brand mx-4 text-4xl" :icon="faFacebook" />
            </a>
            <a href="https://twitter.com/executiveab" target="_blank">
              <fa class="text-brand mx-4 text-4xl" :icon="faTwitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/executiveautob/"
              target="_blank"
            >
              <fa class="text-brand mx-4 text-4xl" :icon="faLinkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
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
