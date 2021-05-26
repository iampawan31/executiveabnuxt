<template>
  <section
    :style="mainHeaderImage"
    class="py-16 sm:py-24 optimize-bg-image bg-cover"
  >
    <div class="container mx-auto px-4 sm:px-0 md:px-4 xl:px-0">
      <div
        class="flex flex-col sm:flex-row px-4 sm:px-0 lg:px-0 xl:justify-center content-center sm:space-x-6 max-w-5xl"
      >
        <div class="flex items-center mb-4 sm:mb-0">
          <div
            class="bg-black bg-opacity-10 inline-block uppercase text-white px-5 sm:px-2 md:px-5 py-3 md:text-3xl lg:text-5xl text-2xl font-bold"
          >
            <span><slot name="title"></slot></span>
          </div>
        </div>
        <div class="flex items-center max-w-xs">
          <slot name="subtitle"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSectionAlternate',
  props: {
    mainHeaderImage: {
      type: Object,
      default: null,
    },
  },
}
</script>
