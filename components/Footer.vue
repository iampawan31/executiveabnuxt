<template>
  <div class="bg-black">
    <div class="container mx-auto py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="grid grid-flow-row">
            <div class="font-bold mb-2">MAIN NAVIGATION</div>
            <NuxtLink
              v-for="(link, index) in mainNavigation"
              :key="index"
              :to="link.path"
              class="text-sm hover:text-brand transition"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
          <div class="grid grid-flow-row">
            <div class="font-bold mb-2">ADDITIONAL LINKS</div>
            <NuxtLink
              v-for="(link, index) in additionalNavigation"
              :key="index"
              :to="link.path"
              class="text-sm hover:text-brand transition"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-4">
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
      <div class="grid sm:grid-cols-2 sm:gap-0 gap-4 mt-10">
        <div class="flex items-end mx-auto">
          <NuxtLink to="/">
            <img
              class="sm:h-auto sm:w-2/3 w-48"
              src="~/assets/logo_white.png"
              alt="Executive AB Logo"
            />
          </NuxtLink>
          <span class="ml-4 text-xs">© 2021. All Rights Reserved.</span>
        </div>
        <div class="grid grid-rows-1 mx-auto sm:px-4 gap-4 sm:grid-rows-2">
          <div class="hidden sm:block">CONNECT ON SOCIAL</div>
          <div>
            <fa class="text-brand mr-4 text-4xl" :icon="faInstagram" />
            <fa class="text-brand mx-4 text-4xl" :icon="faFacebook" />
            <fa class="text-brand mx-4 text-4xl" :icon="faTwitter" />
            <fa class="text-brand mx-4 text-4xl" :icon="faLinkedin" />
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
