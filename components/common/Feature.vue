<template>
  <div
    :class="[spaceValue, titleSpaceValue]"
    class="flex flex-col flex-wrap sm:flex-row lg:flex-nowrap xl:space-x-72"
  >
    <div
      class="flex sm:flex-row space-x-2 sm:space-x-4 xl:space-x-8 mb-4 lg:mb-0"
    >
      <slot name="feature-image"></slot>
      <div
        class="flex sm:max-w-md lg:max-w-2xl xl:max-w-xs sm:text-2xl text-lg font-bold flex-wrap content-center lg:content-start"
      >
        <slot name="feature-title"></slot>
      </div>
    </div>
    <div class="flex flex-col lg:max-w-lg">
      <slot name="feature-description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    spaceValue: {
      type: String,
      default: '2xl:space-x-96',
    },
    titleSpaceValue: {
      type: String,
      default: 'lg:space-x-16',
    },
  },
}
</script>
