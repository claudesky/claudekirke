<template lang="pug">

div(
  class="text-center md:text-left"
)
  h1(
    class=" \
      px-2 font-serif font-thin tracking-wider text-center \
      text-4xl md:text-4xl 2xl:text-6xl \
      my-9 md:my-4 2xl:my-9 \
    "
  )
    | Claude Kirke
  section.container(
    class=" \
      font-mono \
      py-24 p-6 space-y-6 \
      3xl:text-2xl \
    "
  )
    p
      | Hi there! It&apos;s great to have you as a visitor here.
    p
      | I&apos;m excited for you to see it, but this website is still under
      | construction. Please check back again in a few days,
      | or send me an email at&#32;
      a.border-b(href="mailto:claudekirke@gmail.com") claudekirke@gmail.com
      | .
    p
      | Thank you!

    div(
      class=" \
        flex justify-around mx-12 p-0 \
        md:mx-[35%] 2xl:mx-[30%] 3xl:mx-96 \
      "
    )
      img(
        height="10rem"
        src="~/assets/images/undraw_under_construction_46pa.svg"
        alt="under construction"
        title="Under construction! Check back again in a few days."
      )

</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
  head: {
    title: 'Home',
  },
}
</script>
