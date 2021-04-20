<template>
  <div
    v-show="isActive"
    class="inline-block text-black p-10 min-w-full rounded-md"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },
  data() {
    return {
      isActive: true,
    }
  },
}
</script>
