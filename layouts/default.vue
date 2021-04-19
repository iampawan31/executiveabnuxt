<template>
  <div class="bg-brand-gray text-white">
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
  },
}
</script>
