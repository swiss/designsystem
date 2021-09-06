<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu />
      <MobileMenu />
      <Breadcrumb />
    </header>
    <main id="main-content">
      <HeroDetailSimple />
      <section class="section section--default section--pb-only">
        <div class="container container--md">
          <h2 class="h2">
            Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren
          </h2>
          <p>
            Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden.
          </p>
          <figure>
            <picture>
              <source
                srcset="https://placekitten.com/g/1620/600"
                media="(min-width: 800px)"
              />
              <img src="https://placekitten.com/g/800/296" alt="cat" />
            </picture>
            <figcaption>Image label here</figcaption>
          </figure>
          <h2 class="h2">
            Datenmodellablage ansehen
          </h2>
          <p>
            Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a>   angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt.
          </p>

        </div>
      </section>

    </main>
    <footer class="footer" id="main-footer">
      <footer-information />
      <footer-navigation />
    </footer>
  </div>
</template>

<script>
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import HeroDetailSimple from "~/components/ch/sections/HeroDetailSimple";

export default {
  name: 'detailPageSimple',
  components: {
    AlterBodyClasses,
    TopBar,
    TopHeader,
    Breadcrumb,
    DesktopMenu,
    MobileMenu,
    FooterInformation,
    FooterNavigation,
    HeroDetailSimple
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
