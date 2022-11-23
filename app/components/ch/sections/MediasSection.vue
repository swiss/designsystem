<template>
  <section class="section section--default">
    <div class="container">
      <h2 class="section__title">Medienmitteilungen</h2>

      <div class="grid grid--responsive-cols-4 gap--responsive">
        <Card type="default">
          <template v-slot:description>
            Verschiedene Adressen, Standorte einfach und schnell auf map.geo.admin.ch darstellen
          </template>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
        <Card type="default">
          <template v-slot:description>
            Digitale Karten und Geoinformation im Unterricht
          </template>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
        <Card type="default">
          <template v-slot:description>
            Swisstopo Daten sind neu in geo.admin.ch Geo- und Downloaddiensten kostenlos...
          </template>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
        <Card type="default">
          <template v-slot:description>
            IWF würdigt Schweizer Umgang mit der Pandemie
          </template>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
      </div>
      <div class="section__action">
        <Btn
          to="#"
          label="Alle Medienmitteilungen ansehen"
          variant="bare"
          icon-pos="right"
          icon="ArrowRight"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'MediasSection',
  components: {
    Card,
    Btn,
    SvgIcon,
  },
};
</script>
