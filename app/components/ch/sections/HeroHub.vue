<template>
  <div class="py-8">
    <div class="container">
      <Hero type="hub">
        <template v-slot:image>
          <source srcset="https://placekitten.com/g/1060/380"
                  media="(min-width: 800px)">
          <img src="https://placekitten.com/g/600/222" alt="cat">
        </template>
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
    </div>
  </div>
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
