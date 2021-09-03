<template>
  <div class="pt-8 pb-32">
    <div class="container container--md mx-auto">
      <Hero type="wide">
        <template v-slot:title>
          Datenmodellablage: Model Repository für Geobasisdaten des Bundesrechts
        </template>
      </Hero>
    </div>
  </div>
</template>

<script>
import Hero from "~/components/ch/components/Hero";

export default {
  name: 'HeroDetailComplex',
  components: {
    Hero,
  },
};
</script>
