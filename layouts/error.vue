<template>
  <div
    class="bg-white font-brandSignature fixed h-screen w-screen flex justify-center items-center"
  >
    <div class="flex-col items-center justify-center w-screen h-screen flex">
      <h1 class="font-mono text-black text-3xl">
        {{ error.statusCode }} - PAGE NOT FOUND
      </h1>
      <nuxt-link
        to="/"
        class="space cursor-pointer flex-col justify-center items-center flex py-2 px-8 mt-10 uppercase shadow-sm text-white bg-brand rounded transform duration-150 ease-in hover:text-white hover:scale-105"
      >
        Go to Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>
