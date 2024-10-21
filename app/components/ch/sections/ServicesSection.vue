<template>
  <section class="section bg--secondary-100">
    <div class="container">
      <h2 v-if="isHomePage" class="section__title">
        Unsere top Dienstleistungen
      </h2>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="default">
          <template v-slot:title>
            <h3>Datenmodellablage</h3>
          </template>
          <template v-slot:description>
            <p>
              At vero eos et ac-cusam et justo duo, sadipscing elitr, sed diam
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren.
            </p>
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
        <Card type="default">
          <template v-slot:title>
            <h3>Geodienste</h3>
          </template>
          <template v-slot:description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sadipscing elitr, sed diam. At vero eos et ac-cusam et justo duo
              dolores et ea rebum Stet clita kasd gubergren.
            </p>
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
        <Card type="default">
          <template v-slot:title>
            <h3>Datenbezug</h3>
          </template>
          <template v-slot:description>
            <p>
              Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam At
              vero eos et ac-cusam et justo duo dolores et ea rebum Stet clita
              kasd gubergren.
            </p>
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
      </div>
      <div v-if="isHomePage" class="section__action">
        <Btn
          to="#"
          label="Alle Dienstleistungen ansehen"
          variant="bare"
          icon-pos="right"
          icon="ArrowRight"
        ></Btn>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'
import SvgIcon from '../components/SvgIcon.vue'

const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: () => false,
  },
})
</script>
