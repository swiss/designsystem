<template>
  <div class="pt-8 pb-16">
    <Hero type="wide">
      <template v-slot:image>
        <source srcset="https://placekitten.com/g/1620/600"
                media="(min-width: 800px)">
        <img src="https://placekitten.com/g/800/296" alt="cat">
      </template>
      <template v-slot:title>
        Who we are, what we do, all in one paragraph
      </template>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt enim id orci facilisis placerat.
        Proin odio mauris, venenatis non placerat at, finibus non tortor.
        Mauris sodales ultrices neque sit amet cogsectetur.
      </p>
    </Hero>
  </div>
</template>

<script>
import Hero from "~/components/ch/components/Hero";

export default {
  name: 'HeroHome',
  components: {
    Hero,
  },
};
</script>
