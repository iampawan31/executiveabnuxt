<template>
  <div class="py-4 mt-4">
    <div class="mx-auto container px-4 sm:px-8 2xl:px-16">
      <div
        class="text-xl md:text-3xl md:mx-auto font-semibold uppercase mb-5 md:text-center md:max-w-3xl"
      >
        Proudly providing purchasing services for the employees of:
      </div>
      <div
        class="flex overflow-x-auto no-scrollbar md:flex-wrap xl:space-x-5 my-10 md:mx-auto md:justify-center"
      >
        <div
          v-for="(brand, index) in sponsorBrands"
          :key="index"
          class="min-w-max mx-2 my-2"
        >
          <img :src="brand.imageSrc" class="w-auto h-16" :alt="brand.name" />
        </div>
      </div>
      <div class="pb-16 max-w-xl md:mx-auto md:text-center">
        with hundreds more, and growing!
      </div>
    </div>
  </div>
</template>

<script>
import { sponsorBrands } from '../../data/common'
export default {
  data() {
    return {
      sponsorBrands,
    }
  },
}
</script>

<style></style>
