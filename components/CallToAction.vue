<template>
  <div class="container mx-auto px-4 lg:px-36">
    <div class="border-t-2 border-b-2 border-brand">
      <div
        class="text-brand text-center text-sm sm:text-xl md:text-2xl sm:ml-10 my-4 uppercase"
      >
        {{ title }}
      </div>
      <div
        class="text-xl sm:text-4xl lg:text-5xl uppercase mb-4 text-center md:ml-10"
      >
        {{ subtitle }}
      </div>
      <div class="text-right">
        <button class="py-2 px-8 rounded uppercase text-white mb-0">
          {{ buttonText }}
          <fa class="ml-2 text-white" :icon="faChevronRight" />
        </button>
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
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
}
</script>
