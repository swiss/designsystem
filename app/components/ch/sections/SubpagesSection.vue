<template>
  <section class="section bg--secondary-100">
    <div class="container">
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="highlight">
          <template #title>
            <h3>Datenmodellablage</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam At vero eos et ac-cusam et justo duo
              dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template #footerInfo />
          <template #footerAction>
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
          <template #title>
            <h3>Geodienste</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam At vero eos et ac-cusam et justo duo
              dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template #footerInfo />
          <template #footerAction>
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
          <template #title>
            <h3>Datenbezug</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam At vero eos et ac-cusam et justo duo
              dolores et ea rebum Stet clita kasd gubergren.
            </p>
          </template>
          <template #footerInfo />
          <template #footerAction>
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
          <template #title>
            <h3>Beratung und Koordination</h3>
          </template>
          <template #description>
            <p>
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren.
            </p>
          </template>
          <template #footerInfo />
          <template #footerAction>
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
          <template #title>
            <h3>Geodienste</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              At vero eos et ac-cusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren.
            </p>
          </template>
          <template #footerInfo />
          <template #footerAction>
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

<script setup lang="ts">
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'

defineProps({
  isHomePage: {
    type: Boolean,
    default: () => false,
  },
})
</script>
