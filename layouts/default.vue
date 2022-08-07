<template lang="pug">
div(
  class="min-h-screen antialiased bg-gray-700 text-white flex flex-col"
)
  nav.container.mx-auto.py-4.uppercase
    ul.flex.justify-between.space-x-10.px-4
      li
        NuxtLink(
          class="lg:text-lg"
          to="/"
        ) Home
      li.flex-1
      li
        NuxtLink(
          class="lg:text-lg"
          to="/about"
        ) About
      li
        NuxtLink(
          class="lg:text-lg"
          to="/contact"
        ) Contact

  main.container.mx-auto.grow
    Nuxt

  footer(
    class=" \
      grow-0 text-sm text-gray-300 container mx-auto p-4 justify-self-end \
    "
  )
    div(
      class=" \
        flex justify-center \
        pb-4 \
        space-x-8 lg:space-x-8 \
      "
    )
      NuxtLink(
        to="/tems"
      ) Terms of Service
      NuxtLink(
        to="/privacy"
      ) Privacy Policy
    .text-gray-400.flex.justify-center(
      class="pb-4"
    )
      small
        | Copyright &copy; 2022 - Claude Kirke - All Rights Reserved

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "DefaultLayout"
})
</script>

<style scoped>
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}

a {
  background-color: transparent
}

[hidden] {
  display: none
}

html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5
}

*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e2e8f0
}

a {
  color: inherit;
  text-decoration: inherit
}

svg,
video {
  display: block;
}

video {
  max-width: 100%;
  height: auto
}
</style>
