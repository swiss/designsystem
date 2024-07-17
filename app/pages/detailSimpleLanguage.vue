<template>
  <div>
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar
        :isOpen="false"
        :isEasyLanguage="isEasyLanguage"
        :isSignLanguage="isSignLanguage"
      />
      <TopHeader :isEasyLanguage="isEasyLanguage" :isSignLanguage="isSignLanguage" />
      <DesktopMenu :isSimplePage="true" />
      <MobileMenu :isSimplePage="true" />
      <Breadcrumb :isSimplePage="true" />
      <div class="container">
        <Btn
          to="/"
          variant="outline"
          size="sm"
          icon="ArrowLeft"
          iconPos="left"
          label="Zurück"
          class="btn--back"
        />
        <ShareBar :showEasyIcons="false" />
      </div>
    </header>
    <main id="main-content">
      <Hero type="default">
        <template v-slot:title>
          Datenmodellablage: Model Repository für Geobasisdaten des Bundesrechts
        </template>
        <template v-slot:description>
          Der Modellkatalog kann unter models.geo.admin.ch angesehen werden. Ein
          neues «minimales Geodatenmodell» in der Datenmodellablage publizieren.
          Für die Publikation der «minimalen Geodatenmodelle» besteht kein
          direkter Online-Zugang.
        </template>
      </Hero>
      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--md vertical-spacing">
            <TextImage type="default" textProportion="2">
              <template v-slot:title> Image and text example </template>
              <template v-slot:description>
                Der Modellkatalog kann unter models.geo.admin.ch angesehen
                werden. Ein neues «minimales Geodatenmodell» in der
                Datenmodellablage publizieren. Für die Publikation der
                «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang.
                Die Datenmodellablage ist moderiert und die Erfassung neuer
                Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der
                Empfehlungen zur Modellierung wird die Modelldokumentation
                veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in
                jedem Fall in die Datenmodellablage eingepflegt.
              </template>
              <template v-slot:image>
                <figure>
                  <picture>
                    <img
                      src="https://picsum.photos/1600/1200"
                      alt="placeholder"
                    />
                  </picture>
                </figure>
              </template>
            </TextImage>

            <TextImage type="default" textProportion="2">
              <template v-slot:title> Image and text example </template>
              <template v-slot:description>
                Der Modellkatalog kann unter models.geo.admin.ch angesehen
                werden. Ein neues «minimales Geodatenmodell» in der
                Datenmodellablage publizieren. Für die Publikation der
                «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang.
                Die Datenmodellablage ist moderiert und die Erfassung neuer
                Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der
                Empfehlungen zur Modellierung wird die Modelldokumentation
                veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in
                jedem Fall in die Datenmodellablage eingepflegt.
              </template>
              <template v-slot:image>
                <figure>
                  <picture>
                    <img
                      src="https://picsum.photos/1600/1200"
                      alt="placeholder"
                    />
                  </picture>
                </figure>
              </template>
            </TextImage>
          </div>
        </div>
      </section>
      <section class="section section--default">
        <div class="container">
          <Btn
            to="/"
            variant="outline"
            size="sm"
            icon="ArrowLeft"
            iconPos="left"
            label="Zurück"
            class="btn--back"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Hero from '~/components/ch/sections/Hero'
import Btn from '../components/ch/components/Btn.vue'
import TextImage from '../components/ch/components/TextImage'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'

export default {
  name: 'DetailEasyLanguage',
  components: {
    TopBar,
    TopHeader,
    Breadcrumb,
    Hero,
    Btn,
    ShareBar,
    TextImage,
    DesktopMenu,
    MobileMenu,
  },
  data() {
    return {}
  },
  props: {
    isEasyLanguage: {
      type: Boolean,
      default: false,
    },
    isSignLanguage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
}
</script>
