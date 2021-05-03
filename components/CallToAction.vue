<template>
  <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-36">
    <div class="flex content-center space-x-7">
      <div class="flex flex-col flex-1" :style="callToActionBorder">
        <div
          class="text-brand text-xs sm:text-lg md:text-xl lg:text-xl xl:text-2xl sm:ml-10 md:ml-10 my-4 uppercase"
        >
          {{ title }}
        </div>
        <div
          class="text-xl sm:text-4xl lg:text-4xl xl:text-5xl uppercase text sm:ml-10 md:ml-10"
        >
          {{ subtitle }}
        </div>
        <div class="text-right mt-4 xl:mt-auto">
          <button
            class="bg-gradient-to-r from-yellow-700 to-yellow-500 py-1 md:py-2 px-4 md:px-8 rounded uppercase text-white mb-0"
          >
            {{ buttonText }}
            <fa class="ml-2 text-white" :icon="faChevronRight" />
          </button>
        </div>
      </div>
      <div v-if="hasLogo">
        <img class="h-20" src="~/assets/images/bbb-rating.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import callToActionBorderImage from 'assets/images/call-to-action-border-top.png'
export default {
  props: {
    title: {
      type: String,
      default: 'dark',
    },
    subtitle: {
      type: String,
      default: 'dark',
    },
    buttonText: {
      type: String,
      default: 'dark',
    },
    hasLogo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      callToActionBorder: {
        borderImage: `url(${callToActionBorderImage}) 30 stretch`,
        borderTop: '2px solid orange',
        borderBottom: '2px solid orange',
      },
    }
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
}
</script>
