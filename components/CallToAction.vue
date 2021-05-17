<template>
  <div
    :class="hasLogo ? 'xl:px-4' : ''"
    class="container mx-auto px-4 sm:px-8 md:px-16"
  >
    <div
      :class="hasLogo ? 'justify-between' : 'justify-center'"
      class="flex flex-col lg:flex-row space-y-8 content-center xl:px-4"
    >
      <div
        class="flex flex-col flex-1 max-w-4xl lg:max-w-2xl xl:max-w-4xl"
        :style="callToActionBorder"
      >
        <div
          class="text-brand text-xs sm:text-md lg:text-lg xl:text-xl sm:ml-10 md:ml-10 mt-4 mb-1 uppercase"
        >
          {{ title }}
        </div>
        <div
          class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl uppercase text sm:ml-10 md:ml-10"
        >
          {{ subtitle }}
        </div>
        <div class="text-right xl:-mt-6">
          <a
            href="https://forms.executiveab.com/ExecutiveAB/form/VehicleRequest1/formperma/ljV2tVecdl87E_wAsOY-BK5MvOaJW1QjLaoQNzYyWEM"
            class="bg-gradient-to-r inline-block no-underline from-yellow-700 to-yellow-500 py-1 md:py-2 px-4 rounded uppercase text-white mb-0"
          >
            {{ buttonText }}
            <fa class="ml-2 text-white" :icon="faChevronRight" />
          </a>
        </div>
      </div>
      <div v-if="hasLogo" class="flex justify-end lg:items-center">
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
