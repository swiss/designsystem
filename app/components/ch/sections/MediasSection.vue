<template>
  <div class="py-10">
    <div class="container">
      <h2 class="mb-10">Medienmitteilungen</h2>

      <div class="grid grid--responsive-cols-4 gap--responsive">
        <Card type="default">
            <p>
              Verschiedene Adressen, Standorte einfach und schnell auf map.geo.admin.ch darstellen
            </p>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
        <Card type="default">
          <p>
            Digitale Karten und Geoinformation im Unterricht
          </p>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
        <Card type="default">
          <p>
            Swisstopo Daten sind neu in geo.admin.ch Geo- und Downloaddiensten kostenlos...
          </p>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
        <Card type="default">
          <p>
            IWF würdigt Schweizer Umgang mit der Pandemie
          </p>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Mehr anschauen"
            />
          </template>
        </Card>
      </div>
      <div class="flex justify-end mt-4">
        <Btn
          label="Alle Medienmitteilungen ansehen"
          variant="bare"
          icon-pos="right"
          icon="ArrowRight"
        />
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
