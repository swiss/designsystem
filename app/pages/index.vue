<template>
  <div>
    <AlterBodyClasses
      :isMobileMenuOpen="layoutStore.mobileMenuIsOpen"
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
        <template #image>
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
        <template #title> Was uns als VE ausmacht </template>
        <template #description>
          Das Eidgenössische Departement für Verteidigung, Bevölkerungsschutz
          und Sport (VBS) beschäftigt sich hauptsächlich mit militärischen
          Fragen. Geleitet wird es seit Anfang 2019 von Viola Amherd. Das
          Eidgenössische Departement für Verteidigung, Bevölkerungsschutz und
          Sport (VBS) beschäftigt sich hauptsächlich mit militärischen Fragen.
          Geleitet wird es seit Anfang 2019 von Viola Amherd.
        </template>
        <template #cta>
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
      <TopNewsSection data-default-theme="dark" />
      <MediasSection />
      <SocialsSection
        :section-title="socialSection.sectionTitle"
        :section-desc="socialSection.sectionDesc"
        :feeds="socialSection.feeds"
        data-default-theme="dark"
      />
      <ServicesSection isHomePage />
      <TopicsSection isHomePage data-default-theme="dark" />

      <BackToTopBtn fixed type="outline" target="main-header" />
    </main>
    <footer id="main-footer" class="footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BackToTopBtn from '../components/ch/components/BackToTopBtn.vue'
import Btn from '../components/ch/components/Btn.vue'
import NotificationBanner from '../components/ch/components/NotificationBanner.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import Hero from '../components/ch/sections/Hero.vue'
import MediasSection from '../components/ch/sections/MediasSection.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import ServicesSection from '../components/ch/sections/ServicesSection.vue'
import SocialsSection from '../components/ch/sections/SocialsSection.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import TopicsSection from '../components/ch/sections/TopicsSection.vue'
import TopNewsSection from '../components/ch/sections/TopNewsSection.vue'
import { useLayoutStore } from '../store/layout'
import type { SocialsFeed } from '../types'

const layoutStore = useLayoutStore()

const socialSection = reactive({
  sectionTitle: 'Das Amt XY in den Sozialen Medien',
  sectionDesc:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan.',
  feeds: [
    {
      type: 'twitter',
      title: 'Press-resleases on Twitter',
      profileURL: 'https://twitter.com/swiss_geoportal',
      feedURL:
        '<blockquote class="twitter-tweet"><p lang="de" dir="ltr">[DE] Erfahre alles über die Energie-/Wärmequelle (Leistung und Aktualisierungsdaten) der Heizung in Schweizer Gebäuden dank dem eidgenössischen Gebäude- und Wohnungsregister! <br>Karte: <a href="https://t.co/DuexdeRciJ">https://t.co/DuexdeRciJ</a><br>🔥🏠📊 <a href="https://twitter.com/hashtag/Energieeffizienz?src=hash&amp;ref_src=twsrc%5Etfw">#Energieeffizienz</a> <a href="https://twitter.com/hashtag/BFS?src=hash&amp;ref_src=twsrc%5Etfw">#BFS</a> <a href="https://twitter.com/hashtag/GWR?src=hash&amp;ref_src=twsrc%5Etfw">#GWR</a> <a href="https://twitter.com/StatSchweiz?ref_src=twsrc%5Etfw">@StatSchweiz</a> <a href="https://t.co/ofNwgPulhf">pic.twitter.com/ofNwgPulhf</a></p>&mdash; geo.admin.ch (@swiss_geoportal) <a href="https://twitter.com/swiss_geoportal/status/1636356390708219904?ref_src=twsrc%5Etfw">March 16, 2023</a></blockquote>',
    },
    {
      type: 'youtube',
      title: 'Investigations on Youtube',
      profileURL: 'https://www.youtube.com/c/SwissGeoportal',
      feedURL: 'https://www.youtube.com/embed/BR5zDpPDKFM',
    },
  ] as SocialsFeed[],
})

defineProps({
  isIntranet: {
    type: Boolean,
    default: () => false,
  },
})
</script>
