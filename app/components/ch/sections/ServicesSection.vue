<template>
  <div class="bg--secondary-500 py-10">
    <div class="container">
      <h2 class="mb-10 text-white">Dienstleistungen</h2>
      <div class="grid grid-cols-6 gap-8 lg:gap-12">
        <Card type="highlight" class="col-span-6 sm:col-span-3">
          <div class="space-y-4">
            <h3>Datenmodellablage</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="highlight" class="col-span-6 sm:col-span-3">
          <div class="space-y-4">
            <h3>Geodienste</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="highlight" class="col-span-6 sm:col-span-3 md:col-span-2">
          <div class="space-y-4">
            <h3>Datenbezug</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="highlight" class="col-span-6 sm:col-span-3 md:col-span-2">
          <div class="space-y-4">
            <h3>Beratung und Koordination</h3>
            <p>
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="highlight" class="col-span-6 sm:col-span-3 md:col-span-2">
          <div class="space-y-4">
            <h3>Geodienste</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
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
  name: 'topHeader',
  components: {
    Card,
    Btn,
    SvgIcon,
  },
};
</script>
