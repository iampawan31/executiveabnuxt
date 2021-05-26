<template>
  <div
    :class="mainHeaderImageClasses"
    class="sm:max-h-96 sm:py-40 md:py-60 xl:py-80 md:h-screen 2xl:max-h-96 2xl:py-96 hero-image bg-cover optimize-bg-image flex bg-norepeat"
    :style="mainHeaderImage"
  >
    <div class="relative container mx-auto p-4 flex items-center z-10">
      <div>
        <div class="content float-left py-4 lg:px-5 my-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    mainHeaderImage: {
      type: String,
      default: null,
    },
    mainHeaderImageClasses: {
      type: String,
      default: 'bg-center-top sm:bg-center',
    },
  },
}
</script>
