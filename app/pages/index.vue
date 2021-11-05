<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu isHomePage />
      <MobileMenu isHomePage />
      <Breadcrumb />
    </header>
    <main id="main-content">
      <HeroHome />
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
import HeroHome from "~/components/ch/sections/HeroHome";

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
    HeroHome
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
