<template>
  <section class="section bg--secondary-100">
    <div class="container">

      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="highlight">
          <template v-slot:title>
            <h3>Datenmodellablage</h3>
          </template>
          <template v-slot:description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo></template>
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
          <template v-slot:title>
            <h3>Geodienste</h3>
          </template>
          <template v-slot:description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo></template>
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
        <Card type="highlight">
          <template v-slot:title>
            <h3>Datenbezug</h3>
          </template>
          <template v-slot:description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo></template>
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
          <template v-slot:title>
            <h3>Beratung und Koordination</h3>
          </template>
          <template v-slot:description>
            <p>
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo></template>
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
          <template v-slot:title>
            <h3>Geodienste</h3>
          </template>
          <template v-slot:description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam At vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template v-slot:footerInfo></template>
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

    </div>
  </section>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'SubPagesSection',
  components: {
    Card,
    Btn,
    SvgIcon,
  },
  props: {
    isHomePage: {
      type: Boolean,
      default: false
    }
  },
};
</script>
