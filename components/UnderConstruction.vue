<template lang="pug">

div(
  class="text-center md:text-left"
)
  h2(
    class=" \
      px-2 font-serif font-thin tracking-wider text-center \
      text-xl md:text-2xl 2xl:text-4xl \
      my-12 md:my-5 2xl:my-12 \
    "
  )
    | Working on it!
  section.container(
    class=" \
      font-mono \
      py-24 p-6 space-y-6 \
      3xl:text-2xl \
    "
  )
    p
      | This part of the website is still baking in the computer oven!
    p
      | Check back again in a few days, or send me an email at&#32;
      a.border-b(href="mailto:claudekirke@gmail.com") claudekirke@gmail.com
      | .

    div(
      class=" \
        flex justify-around mx-12 \
        pt-12 3xl:pt-64  \
        md:mx-[35%] 2xl:mx-[30%] 3xl:mx-96 \
      "
    )
      img(
        height="10rem"
        src="~/assets/images/undraw_working_on_it.svg"
        alt="working on it"
        title="Working on it! Check back again in a few days."
      )

</template>
