<template>
  <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-36">
    <div
      class="flex flex-col lg:flex-row space-y-5 content-center sm:space-x-7"
    >
      <div class="flex flex-col flex-1" :style="callToActionBorder">
        <div
          class="text-brand text-xs sm:text-md lg:text-lg xl:text-xl sm:ml-10 md:ml-10 my-4 uppercase"
        >
          {{ title }}
        </div>
        <div
          class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase text sm:ml-10 md:ml-10"
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
      <div v-if="hasLogo" class="flex lg:items-center">
        <img class="h-16 sm:h-20" src="~/assets/images/bbb-rating.png" alt="" />
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
