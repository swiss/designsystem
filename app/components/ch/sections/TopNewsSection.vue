<template>
  <div class="bg--secondary-50 py-10">
    <div class="container">
      <h2 class="mb-10">Unsere top news</h2>
      <div class="grid grid--responsive-cols-2 gap--responsive">
        <Card type="default" >
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3 class="card__title">Geo.Hackmin</h3>
            <p>
              Hatten Sie schon immer eine Idee, die sie mit Geodaten umsetzen wollten?
              Wollten Sie schon immer ein Problem mit Hilfe von Karten und Luftbildern lösen?
            </p>
            <ul class="flex flex-wrap">
              <li class="flex items-center mr-6 mb-2">
                <SvgIcon icon="Calendar" size="xl" class="-ml-1.5 mr-1" />
                <p>10-12 Mai 2021</p>
              </li>
              <li class="flex items-center mr-6 mb-2">
                <SvgIcon icon="Clock" size="xl" class="-ml-1.5 mr-1" />
                <p>9 bis 11 Uhr</p>
              </li>
              <li class="flex items-center mr-6 mb-2">
                <SvgIcon icon="MapMarker" size="xl" class="-ml-1.5 mr-1" />
                <p>Zürich</p>
              </li>
            </ul>
          </div>
          <template v-slot:footerInfo>
            Veranstaltung
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
        <Card type="default" >
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3 class="card__title">Daten und Dienste online kostenlos als Open Government Data (OGD)</h3>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem
            </p>
          </div>
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

      <div class="grid grid--responsive-cols-3 gap--responsive mt-16">
        <Card type="default">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3 class="card__title">Daten und Dienste online kostenlos als Open Government Data (OGD)</h3>
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
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template v-slot:header>
            <SvgIcon icon="FolderOpen" size="xl" class="mr-2" />
            <p>Dossier</p>
          </template>
          <div class="space-y-4">
            <h3 class="card__title">Chinastrategie 2025</h3>
            <p>
              Description Dossier China strategy Description Description Dossier China strategy Description
            </p>
          </div>
        </Card>
        <Card type="default">
          <template v-slot:header>
            <SvgIcon icon="Twitter" size="xl" class="mr-2" />
            <p>Tweets from @swiss_geoportal</p>
          </template>
          <template v-slot:footerAction>
            <Btn
              variant="outline"
              icon-pos="only"
              icon="ArrowUpRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </div>

      <div class="flex justify-end mt-4">
        <Btn label="Alle News sehen" variant="bare" icon-pos="right" icon="ArrowRight"></Btn>
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
