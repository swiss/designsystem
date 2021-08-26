<template>
  <div class="bg--secondary-50 py-10">
    <div class="container">
      <h2 class="mb-10">Unsere top news</h2>
      <div class="grid grid-cols-6 gap-8 lg:gap-12">
        <Card type="default" class="col-span-6 sm:col-span-3">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3>Geo.Hackmin</h3>
            <p>
              Hatten Sie schon immer eine Idee, die sie mit Geodaten umsetzen wollten?
              Wollten Sie schon immer ein Problem mit Hilfe von Karten und Luftbildern lösen?
            </p>
          </div>
          <template v-slot:footerInfo>
            Veranstaltung
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3>Daten und Dienste online kostenlos als Open Government Data (OGD)</h3>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et ac-cusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3>Daten und Dienste online kostenlos als Open Government Data (OGD)</h3>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et ac-cusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
            </p>
            <p class="text-sm font-bold">Annelies Zimmermann / Mai 10</p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <template v-slot:header>
            <SvgIcon icon="FolderOpen" size="xl" class="mr-2" />
            <p>Dossier</p>
          </template>
          <div class="space-y-4">
            <h3>Chinastrategie 2025</h3>
            <p>
              Description Dossier China strategy Description Description Dossier China strategy Description
            </p>
          </div>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <template v-slot:header>
            <SvgIcon icon="Twitter" size="xl" class="mr-2" />
            <p>Tweets from @swiss_geoportal</p>
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowUpRight"></Btn>
          </template>
        </Card>
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
