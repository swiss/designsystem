<template>
  <Hero type="hub">
    <template v-slot:title>
      Unsere Dienstleistungen
    </template>
    <template v-slot:description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse tincidunt enim id orci facilisis placerat.
      Proin odio mauris, venenatis non placerat at, finibus non tortor.
      Mauris sodales ultrices neque sit amet cogsectetur.
    </template>
  </Hero>
</template>

<script>
import Hero from "~/components/ch/sections/Hero";

export default {
  name: 'HeroHub',
  components: {
    Hero,
  },
};
</script>
