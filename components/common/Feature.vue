<template>
  <div
    class="flex flex-col flex-wrap sm:flex-row lg:flex-nowrap lg:space-x-16 xl:space-x-72 2xl:space-x-96"
  >
    <div
      class="flex sm:flex-row space-x-2 sm:space-x-4 xl:space-x-8 mb-4 lg:mb-0"
    >
      <slot name="feature-image"></slot>
      <div
        class="flex sm:max-w-md lg:max-w-2xl xl:max-w-xs sm:text-2xl text-lg font-bold"
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
}
</script>
