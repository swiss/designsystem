<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu isHomePage />
      <MobileMenu isHomePage />
      <Breadcrumb isHomePage />
    </header>
    <main id="main-content">
      <Hero type="wide">
        <template v-slot:image>
          <source srcset="https://placekitten.com/g/1620/600"
                  media="(min-width: 800px)">
          <img src="https://placekitten.com/g/800/296" alt="cat">
        </template>
        <template v-slot:title>
          Who we are, what we do, all in one paragraph
        </template>
        <template v-slot:description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse tincidunt enim id orci facilisis placerat.
          Proin odio mauris, venenatis non placerat at, finibus non tortor.
          Mauris sodales ultrices neque sit amet cogsectetur.
        </template>
      </Hero>
      <TopNewsSection />
      <ServicesSection />
      <NewsSection />
      <MostSeenSection />
      <PortraitSection />
      <MediasSection />
      <BackToTopBtn
        fixed
        type="outline"
        target="main-header"
      />
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
import BackToTopBtn from '../components/ch/components/BackToTopBtn.vue'
import TopNewsSection from "~/components/ch/sections/TopNewsSection";
import ServicesSection from "~/components/ch/sections/ServicesSection";
import MostSeenSection from "~/components/ch/sections/MostSeenSection";
import PortraitSection from "~/components/ch/sections/PortraitSection";
import MediasSection from "~/components/ch/sections/MediasSection";
import NewsSection from "~/components/ch/sections/NewsSection";
import Hero from "~/components/ch/sections/Hero";

export default {
  name: 'Index',
  components: {
    AlterBodyClasses,
    TopBar,
    TopHeader,
    Breadcrumb,
    DesktopMenu,
    MobileMenu,
    FooterInformation,
    FooterNavigation,
    BackToTopBtn,
    TopNewsSection,
    ServicesSection,
    NewsSection,
    MostSeenSection,
    PortraitSection,
    MediasSection,
    Hero
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
