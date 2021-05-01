<template>
  <div :class="hasLogo ? '' : 'container mx-auto'" class="lg:px-36">
    <div class="flex content-center space-x-7">
      <div class="border-t-2 border-b-2 border-brand">
        <div
          class="text-brand text-sm sm:text-xl md:text-2xl sm:ml-10 my-4 uppercase"
        >
          {{ title }}
        </div>
        <div class="text-xl sm:text-4xl lg:text-5xl uppercase text md:ml-10">
          {{ subtitle }}
        </div>
        <div class="text-right">
          <button
            class="bg-gradient-to-r from-yellow-700 to-yellow-500 py-2 px-8 rounded uppercase text-white mb-0"
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
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
}
</script>
