<template lang="pug">
div
  h1(v-if='error.statusCode === 404')
    | {{ pageNotFound }}
  h1(v-else='')
    | {{ otherError }}
  NuxtLink(
    class="underline hover:no-underline"
    to='/'
  ) Home page

</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ErrorPage',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
})
</script>
