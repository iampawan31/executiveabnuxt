<template>
  <div :class="containerClass">
    <slot name="loading" :loading="loading" />
    <slot :feeds="feeds" name="feeds" />
    <slot name="error" :error="error" />
  </div>
</template>

<script>
export default {
  props: {
    /*
     * Instagram access token.
     */
    token: {
      type: String,
      required: true,
    },
    /*
     * Media Fields (see https://developers.facebook.com/docs/instagram-basic-display-api/reference/media#fields)
     */
    fields: {
      type: String,
      required: true,
    },
    /*
     * Number of posts rendered.
     */
    count: {
      type: Number,
      default: 1,
    },
    /*
     * Kinds of media to filter (Can be IMAGE, VIDEO, or CAROUSEL_ALBUM.).
     */
    mediatypes: {
      type: Array,
      required: true,
    },
    // Class for container div
    containerClass: {
      type: String,
      default: '',
      required: false,
    },
  },
  data: () => ({
    error: null,
    loading: false,
    feeds: [],
  }),
  mounted() {
    this.getUserFeed()
  },
  methods: {
    async getUserFeed() {
      this.loading = true
      await fetch(
        `https://graph.instagram.com/me/media?access_token=${this.token}&fields=${this.fields}`
      )
        .then((response) => response.json())
        .then((response) => {
          this.loading = false
          if (response.status === 400) this.error = response.error.message
          for (const n in response.data) {
            if (this.mediatypes.includes(response.data[n].media_type)) {
              this.feeds.push(response.data[n])
              if (this.feeds.length >= this.count) {
                return
              }
            }
          }
        })
        .catch((error) => {
          throw error
        })
    },
  },
}
</script>
