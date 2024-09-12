<template>
  <div>
    <AlterBodyClasses
      :isMobileMenuOpen="getMobileMenuIsOpen()"
      :isIntranet="isIntranet"
    />
    <NotificationBanner :isFixed="true" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu isHomePage :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
      <Breadcrumb isHomePage />
    </header>
    <main id="main-content">
      <Hero type="main-image">
        <template v-slot:image>
          <picture>
            <source
              srcset="https://picsum.photos/1282/961/?image=29"
              media="(min-width: 1800px)"
            />
            <source
              srcset="https://picsum.photos/1192/894/?image=29"
              media="(min-width: 1024px)"
            />
            <source
              srcset="https://picsum.photos/800/600/?image=29"
              media="(min-width: 768px)"
            />
            <source
              srcset="https://picsum.photos/680/510/?image=29"
              media="(min-width: 480px)"
            />
            <img
              src="https://picsum.photos/480/360/?image=29"
              alt="ratio is 4/3"
            />
          </picture>
        </template>
        <template v-slot:title> Was uns als VE ausmacht </template>
        <template v-slot:description>
          Das Eidgenössische Departement für Verteidigung, Bevölkerungsschutz
          und Sport (VBS) beschäftigt sich hauptsächlich mit militärischen
          Fragen. Geleitet wird es seit Anfang 2019 von Viola Amherd.
        </template>
        <template v-slot:cta>
          <Btn
            to="#"
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Organisationsprofil"
          />
          <Btn
            to="#"
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Zur top Dienstleistung"
          />
        </template>
      </Hero>
      <TopNewsSection />
      <MediasSection />
      <SocialsSection
        :section-title="socialSection.sectionTitle"
        :section-desc="socialSection.sectionDesc"
        :feeds="socialSection.feeds"
      />
      <ServicesSection isHomePage />
      <TopicsSection isHomePage />

      <BackToTopBtn fixed type="outline" target="main-header" />
    </main>
    <footer class="footer" id="main-footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script>
import Hero from '~/components/ch/sections/Hero'
import MediasSection from '~/components/ch/sections/MediasSection'
import MostSeenSection from '~/components/ch/sections/MostSeenSection'
import PortraitSection from '~/components/ch/sections/PortraitSection'
import ServicesSection from '~/components/ch/sections/ServicesSection'
import SocialsSection from '~/components/ch/sections/SocialsSection'
import TopicsSection from '~/components/ch/sections/TopicsSection'
import TopNewsSection from '~/components/ch/sections/TopNewsSection'
import BackToTopBtn from '../components/ch/components/BackToTopBtn.vue'
import Btn from '../components/ch/components/Btn.vue'
import NotificationBanner from '../components/ch/components/NotificationBanner.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'

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
    TopicsSection,
    SocialsSection,
    MostSeenSection,
    PortraitSection,
    MediasSection,
    Hero,
    BackToTopBtn,
    Btn,
  },
  data() {
    return {
      socialSection: {
        sectionTitle: 'Das Amt XY in den Sozialen Medien',
        sectionDesc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan.',
        feeds: [
          {
            type: 'twitter',
            title: 'Press-resleases on Twitter',
            pofileURL: 'https://twitter.com/swiss_geoportal',
            feedURL: 'https://twitter.com/swiss_geoportal',
          },
          {
            type: 'youtube',
            title: 'Investigations on Youtube',
            pofileURL: 'https://www.youtube.com/c/SwissGeoportal',
            feedURL: 'https://www.youtube.com/embed/BR5zDpPDKFM',
          },
        ],
      },
    }
  },
  props: {
    isIntranet: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
