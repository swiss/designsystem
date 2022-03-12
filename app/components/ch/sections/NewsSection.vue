<template>
  <section class="section section--default section--carousel">
    <div class="container">
      <h2 class="section__title">Jetzt aktuell</h2>
      <CarouselExample  
        paginationType="bullets"  
        :id="1"
      />
      <div class="section__action">
        <Btn to="#" label="Alle Aktualitäten ansehen" variant="bare" icon-pos="right" icon="ArrowRight"></Btn>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';
import CarouselExample from '~/components/ch/demo/CarouselExample.vue'

export default {
  name: 'NewsSection',
  components: {
    Card,
    Btn,
    SvgIcon,
    CarouselExample
  },
};
</script>
