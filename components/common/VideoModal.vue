<template>
  <transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-60 z-50"
    >
      <div class="w-full relative max-w-4xl shadow-lg rounded-lg p-2">
        <button
          aria-label="close"
          class="absolute top-3 right-5 font-semibold bg-black rounded-full h-8 w-8 text-white z-50"
          @click.prevent="close"
        >
          X
        </button>
        <video autoplay playsinline controls>
          <source src="~/assets/videos/section_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showing: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // this.$refs.modalVideo.play()
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
