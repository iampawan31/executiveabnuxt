<template>
  <section
    class="bg-gradient-to-r from-brand-gray-light to-brand-gray-medium-dark py-5"
  >
    <div class="container mx-auto">
      <div class="text-center">
        <div class="text-white text-sm sm:text-lg">
          <fa class="mr-2" :icon="faExclamationCircle" />
          COVID-19: SAFETY IS OUR TOP PRIORITY.
          <a href="/" class="ml-2 uppercase underline text-brand">
            READ MORE <fa class="ml-1" :icon="faChevronRight" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  faExclamationCircle,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    faExclamationCircle() {
      return faExclamationCircle
    },
    faChevronRight() {
      return faChevronRight
    },
  },
}
</script>
