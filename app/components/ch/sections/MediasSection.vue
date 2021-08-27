<template>
  <div class="py-10">
    <div class="container">
      <h2 class="mb-10">Medienmitteilungen</h2>

      <div class="grid grid-cols-6 gap-8 lg:gap-12">
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
            <p>
              Verschiedene Adressen, Standorte einfach und schnell auf map.geo.admin.ch darstellen
            </p>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <p>
            Digitale Karten und Geoinformation im Unterricht
          </p>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <p>
            Swisstopo Daten sind neu in geo.admin.ch Geo- und Downloaddiensten kostenlos...
          </p>
          <template v-slot:footerInfo>
            22. März 2012
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
      </div>
      <div class="flex justify-end mt-4">
        <Btn label="Alle Medienmitteilungen ansehen" variant="bare" icon-pos="right" icon="ArrowRight"></Btn>
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
