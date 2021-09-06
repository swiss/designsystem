<template>
  <Hero type="hub">
    <template v-slot:title>
      Unsere Dienstleistungen
    </template>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse tincidunt enim id orci facilisis placerat.
      Proin odio mauris, venenatis non placerat at, finibus non tortor.
      Mauris sodales ultrices neque sit amet cogsectetur.
    </p>
  </Hero>
</template>

<script>
import Hero from "~/components/ch/components/Hero";

export default {
  name: 'HeroHub',
  components: {
    Hero,
  },
};
</script>
