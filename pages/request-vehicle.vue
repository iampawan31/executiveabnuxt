<template>
  <div class="bg-white h-screen my-10">
    <client-only>
      <vue-friendly-iframe
        class="request-vehicle-iframe"
        class-name="request-vehicle-iframe"
        src="https://forms.executiveab.com/ExecutiveAB/form/VehicleRequest1/formperma/ljV2tVecdl87E_wAsOY-BK5MvOaJW1QjLaoQNzYyWEM"
        frameborder="0"
        @iframe-load="initLoader"
        @load="iframeLoaded"
      ></vue-friendly-iframe>
    </client-only>
  </div>
</template>

<script>
export default {
  transitions: 'fade',
  layout: 'white',
  head: {
    title: 'EAB | Request vehicle',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'EAB | Request vehicle',
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

<style>
.request-vehicle-iframe {
  overflow: hidden;
  width: 100%;
  height: 1000px;
}
</style>
