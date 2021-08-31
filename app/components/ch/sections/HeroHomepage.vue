<template>
  <div class="pt-8 pb-16">
    <div class="container">
      <Hero type="wide">
        <template v-slot:image>
          <img src="https://placekitten.com/g/1620/600" alt="cat">
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
  </div>
</template>

<script>
import Hero from "~/components/ch/components/Hero";

export default {
  name: 'HeroHomepage',
  components: {
    Hero,
  },
};
</script>
