<template>
  <section class="section section--default">
    <div class="container">
      <h2 class="section__title">Jetzt aktuell</h2>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="default">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Covid 19</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Auftritte und Anlässe während des Covid</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <template v-slot:body>
            <h3 class="card__title">Amtsvorsteherin</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </template>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </div>
      <div class="section__action">
        <Btn label="Alle Aktualitäten ansehen" variant="bare" icon-pos="right" icon="ArrowRight"></Btn>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'NewsSection',
  components: {
    Card,
    Btn,
    SvgIcon,
  },
};
</script>
