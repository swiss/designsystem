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
      <HeroDetailComplex />
      <section class="section section--default section--pb-only">
        <div class="container container--md">
          <h3 class="h3">
            Simple text
          </h3>
          <p>
            Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
          </p>
          <Accordion spaced />
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
import HeroDetailComplex from "~/components/ch/sections/HeroDetailComplex";
import Accordion from '../components/ch/demo/Accordion.vue'

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
    HeroDetailComplex,
    Accordion
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
