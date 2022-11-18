<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
     <NotificationBanner :isFixed="true" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu isHomePage />
      <MobileMenu isHomePage />
      <Breadcrumb isHomePage />
    </header>
    <main id="main-content">
      <Hero type="main">
        <template v-slot:title>
          Willkommen zu Hause. Eidgenössisches Departement für Verteidigung, Bevölkerungsschutz und Sport.
        </template>
        <template v-slot:description>
          Das Eidgenössische Departement für Verteidigung, Bevölkerungsschutz und Sport (VBS) beschäftigt sich hauptsächlich mit militärischen Fragen. Geleitet wird es seit Anfang 2019 von Viola Amherd.
        </template>
        <template v-slot:cta>
          <Btn
            to="#"
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Unsere Dienstleistungen"
          />
          <Btn
            to="#"
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Über uns"
          />
        </template>
      </Hero>
      <TopNewsSection />
      <ServicesSection isHomePage />
      <NewsSection />
      <SocialsSection
        :section-title="socialSection.sectionTitle"
        :section-desc="socialSection.sectionDesc"
        :feeds="socialSection.feeds"
      />
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
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script>
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import NotificationBanner from '../components/ch/components/NotificationBanner.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import TopNewsSection from "~/components/ch/sections/TopNewsSection"
import ServicesSection from "~/components/ch/sections/ServicesSection"
import SocialsSection from "~/components/ch/sections/SocialsSection"
import MostSeenSection from "~/components/ch/sections/MostSeenSection"
import PortraitSection from "~/components/ch/sections/PortraitSection"
import MediasSection from "~/components/ch/sections/MediasSection"
import NewsSection from "~/components/ch/sections/NewsSection"
import Hero from "~/components/ch/sections/Hero"
import BackToTopBtn from '../components/ch/components/BackToTopBtn.vue'
import Btn from '../components/ch/components/Btn.vue'

export default {
  name: 'Index',
  components: {
    AlterBodyClasses,
    NotificationBanner,
    TopBar,
    TopHeader,
    Breadcrumb,
    DesktopMenu,
    MobileMenu,
    FooterInformation,
    FooterNavigation,
    TopNewsSection,
    ServicesSection,
    NewsSection,
    SocialsSection,
    MostSeenSection,
    PortraitSection,
    MediasSection,
    Hero,
    BackToTopBtn,
    Btn
  },
  data() {
    return {
      socialSection: {
        sectionTitle: 'Geoportal in den sozialen Medien',
        sectionDesc: "Hier die aktuellsten Posts. Wenn Sie mehr erfahren möchten, besuchen Sie bitte die jeweiligen Kanäl.",
        feeds: [
          {
            type: "facebook",
            title: "News on Facebook",
            pofileURL: "https://www.facebook.com/swisstopo",
            feedURL: "https://www.facebook.com/swisstopo/videos/5455503121148000/",
          },
          {
            type: "instagram",
            title: "Insights on Instagram",
            pofileURL: "https://www.instagram.com/swisstopo/",
            feedURL: "https://www.instagram.com/p/Cd6KkQsOnOh/?utm_source=ig_web_copy_link"
          }
        ]
      }
    }
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
