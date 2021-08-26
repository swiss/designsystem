<template>
  <div class="bg--secondary-50">
    <div class="container">
      <div class="grid grid-cols-2 gap-4">
        <Card>
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-6">
            <h3>Geo.Hackmin</h3>
            <p>Hatten Sie schon immer eine Idee, die sie mit Geodaten umsetzen wollten?
              Wollten Sie schon immer ein Problem mit Hilfe von Karten und Luftbildern lösen?</p>
          </div>
          <template v-slot:footerInfo>
            Veranstaltung
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card>
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-6">
            <h3>Geo.Hackmin</h3>
            <p>Hatten Sie schon immer eine Idee, die sie mit Geodaten umsetzen wollten?
              Wollten Sie schon immer ein Problem mit Hilfe von Karten und Luftbildern lösen?</p>
          </div>
          <template v-slot:footerInfo>
            Veranstaltung
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";


export default {
  name: 'topHeader',
  components: {
    Card,
    Btn
  },
};
</script>
