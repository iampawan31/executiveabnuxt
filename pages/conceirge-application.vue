<template>
  <div class="bg-white my-10">
    <client-only>
      <vue-friendly-iframe
        class="conceirge-application-iframe"
        class-name="request-vehicle-iframe"
        src="https://forms.zohopublic.com/ExecutiveAB/form/JobApplicationForm1/formperma/lpA7M85_H43V3BuaNJwzruXng4_tPI1qqn9gK9h3p9M"
        frameborder="0"
      ></vue-friendly-iframe>
    </client-only>
  </div>
</template>

<script>
export default {
  transitions: 'fade',
  layout: 'white',
  head: {
    title: 'EAB | Conceirge Application',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'EAB | Conceirge Application',
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
.conceirge-application-iframe {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.conceirge-application-iframe iframe {
  height: 1050px;
}
</style>
