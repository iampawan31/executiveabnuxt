<template>
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
</template>

<script>
export default {
  transitions: 'fade',
  layout: 'error',
  props: {
    error: {
      type: [String, Number],
      default: '404',
    },
  },
  head: {
    title: 'EAB | Page not found',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'EAB | Page not found',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Auto broker, cars for sale, used cars, car dealership near me, used cars for sale',
      },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      { hid: 'language', name: 'language', content: 'English' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Browse frequently asked questions about our service. Learn how EAB saves you time & money when car shopping. Skip the local dealer when buying your next used or new car.',
      },
    ],
  },
}
</script>
