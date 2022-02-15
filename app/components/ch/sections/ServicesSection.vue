<template>
  <section class="section bg--secondary-500">
    <div class="container">
      <h2 class="section__title">Dienstleistungen</h2>
      <div class="grid grid--responsive-cols-2 gap--responsive">
        <Card type="highlight">
          <template v-slot:body>
            <h3 class="card__title">Datenmodellablage</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Datenmodellablage"
            />
          </template>
        </Card>
        <Card type="highlight">
          <template v-slot:body>
            <h3 class="card__title">Geodienste</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Geodienste"
            />
          </template>
        </Card>
      </div>

      <div class="grid grid--responsive-cols-3 gap--responsive mt-16">
        <Card type="highlight">
          <template v-slot:body>
            <h3 class="card__title">Datenbezug</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Datenbezug"
            />
          </template>
        </Card>
        <Card type="highlight">
          <template v-slot:body>
            <h3 class="card__title">Beratung und Koordination</h3>
            <p>
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Beratung"
            />
          </template>
        </Card>
        <Card type="highlight">
          <template v-slot:body>
            <h3 class="card__title">Geodienste</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr lesen über Geodienste"
            />
          </template>
        </Card>
      </div>


      <div class="section__action">
        <Btn to="#" label="Alle Dienstleistungen ansehen" variant="bare-negative" icon-pos="right" icon="ArrowRight"></Btn>
      </div>
    </div>
  </section>
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
