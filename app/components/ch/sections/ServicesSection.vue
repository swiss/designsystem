<template>
  <div class="bg--secondary-500 py-10">
    <div class="container">
      <h2 class="mb-10 text-white">Dienstleistungen</h2>
      <div class="grid grid--responsive-cols-2 gap--responsive">
        <Card type="highlight">
          <div class="space-y-4">
            <h3 class="card__title">Datenmodellablage</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn variant="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="highlight">
          <div class="space-y-4">
            <h3 class="card__title">Geodienste</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn variant="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
      </div>

      <div class="grid grid--responsive-cols-3 gap--responsive mt-16">
        <Card type="highlight">
          <div class="space-y-4">
            <h3 class="card__title">Datenbezug</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn variant="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="highlight">
          <div class="space-y-4">
            <h3 class="card__title">Beratung und Koordination</h3>
            <p>
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn variant="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="highlight">
          <div class="space-y-4">
            <h3 class="card__title">Geodienste</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn variant="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
      </div>


      <div class="flex justify-end mt-4">
        <Btn label="Alle Dienstleistungen ansehen" variant="bare-negative" icon-pos="right" icon="ArrowRight"></Btn>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'ServicesSection',
  components: {
    Card,
    Btn,
    SvgIcon,
  },
};
</script>
