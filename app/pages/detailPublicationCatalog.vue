<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu :showActiveNavigation="true"/>
      <MobileMenu :showActiveNavigation="true"/>
      <Breadcrumb />
      <div class="container">
        <Btn
          to="/"
          variant="outline"
          size="sm"
          icon="ArrowLeft"
          iconPos="left"
          label="Zurück zur Übersicht"
          class="btn--back"
        />
        <ShareBar />
      </div>
    </header>
    <main id="main-content">
      <Hero
        type="default"
        :meta-infos="['Studie', 'publiziert am 03. März 2000']"
        :authors="authors"
      >
        <template v-slot:title>
          Auswirkungen von Corona auf die Schweizer Gesellschaft
        </template>
      </Hero>
      <section class="section">
        <div class="container container--grid gap--responsive">
          <div class="container__main vertical-spacing">
            <Notification
              text='<p>Aus dieser Reihe gibt es eine aktuellere Version: <a href="#" target="_blank">Ausgabe 2022</a>.</p>'
              type="warning"
              icon="InfoCircle"
              :closeBtn="false"
            />
            <figure class="ratio ratio--1/1 bg--secondary-50">
              <picture class="p-8">
                <source
                  srcset="images/publication-cover.png"
                  media="(min-width: 800px)"
                />
                <img
                  src="images/publication-cover.png"
                  alt="publication cover"
                  class="h-full m-auto shadow-xl"
                />
              </picture>
            </figure>

            <div class="md:hidden">
              <!-- mobile only -->
              <div class="box">
                <h2 class="h5">Download</h2>
                <ul class="download-items">
                  <li>
                    <DownloadItem
                      headingLevel="h2"
                      :filename="'dummy.pdf'"
                      :title="'Deutsch'"
                      :url="'../../../static/documents/dummy.pdf'"
                      :type="'PDF'"
                      :date="'524 kB'"
                    />
                  </li>
                  <li>
                    <DownloadItem
                      headingLevel="h2"
                      :filename="'dummy.pdf'"
                      :title="'Französisch'"
                      :url="'../../../static/documents/dummy.pdf'"
                      :type="'PDF'"
                      :date="'524 kB'"
                    />
                  </li>
                  <li>
                    <DownloadItem
                      headingLevel="h2"
                      :filename="'dummy.pdf'"
                      :title="'English'"
                      :url="'../../../static/documents/dummy.pdf'"
                      :type="'PDF'"
                      :date="'524 kB'"
                      class="border-b-0 pb-0"
                    />
                  </li>
                </ul>
              </div>
              <div class="box">
                <h2 class="h5">Druckexemplar bestellen</h2>
                <Btn
                  to="#"
                  variant="filled"
                  icon-pos="right"
                  icon="ArrowRight"
                  label="Zum Online-Shop"
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            </p>
            <p>
              Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
              lacus accumsan et viverra justo commodo. Proin sodales pulvinar
              tempor.
            </p>

            <h2 class="h2">Details</h2>

            <div>
              <InfoBlock title="Sprache" headingLevel="h3">
                <span>Deutsch</span>, <a href="#">Französisch</a>,
                <a href="#">Englisch</a>
              </InfoBlock>

              <InfoBlock title="Erscheinungsdatum" headingLevel="h3">
                <div>03. März 2000</div>
              </InfoBlock>

              <InfoBlock title="Typ" headingLevel="h3">
                <div>Publikation/ Studien & Statistiken</div>
              </InfoBlock>

              <InfoBlock title="Herausgeber" headingLevel="h3">
                <div>Bundesamt für Statistik, Herausgeber 2, Herausgeber 3</div>
              </InfoBlock>

              <InfoBlock title="Copyright" headingLevel="h3">
                <a href="#">Bundesamt für Statistik</a>
              </InfoBlock>

              <InfoBlock title="Nutzungbedigungen" headingLevel="h3">
                <div>Nutzungsbestimmung VE</div>
              </InfoBlock>

              <InfoBlock title="Format" headingLevel="h3">
                <div>PDF</div>
              </InfoBlock>

              <InfoBlock title="BFS-Nummer" headingLevel="h3">
                <div>502-2100</div>
              </InfoBlock>

              <InfoBlock title="Bibliographische Angaben" headingLevel="h3">
                <a href="#">BIBTeX</a>,
                <a href="#">RIS</a>
              </InfoBlock>

              <InfoBlock title="Erhebung, Statistik" headingLevel="h3">
                <a href="#"
                  >Reiseverhalten der Wohnbevölkerung (Modul der
                  Haushaltsbudgeterhebung HABE)</a
                >
              </InfoBlock>

              <InfoBlock
                title="Ausgaben dieser Publikationsreihe"
                headingLevel="h3"
              >
                <a href="#">2020</a>, <span>2021</span>,
                <a href="#">2022</a>
              </InfoBlock>
            </div>

            <div>
              <h2 class="h2">Themen</h2>
              <RelatedTags :tags="tags" bare></RelatedTags>
            </div>
          </div>
          <div class="container__aside">
            <div id="aside-content" :class="computedAsideContainerClass">
              <div class="hidden md:block">
                <!-- desktop only -->
                <div class="box">
                  <h2 class="h5">Download</h2>
                  <ul class="download-items">
                    <li>
                      <DownloadItem
                        headingLevel="h2"
                        :filename="'dummy.pdf'"
                        :title="'Deutsch'"
                        :url="'../../../static/documents/dummy.pdf'"
                        :type="'PDF'"
                        :date="'524 kB'"
                      />
                    </li>
                    <li>
                      <DownloadItem
                        headingLevel="h2"
                        :filename="'dummy.pdf'"
                        :title="'Französisch'"
                        :url="'../../../static/documents/dummy.pdf'"
                        :type="'PDF'"
                        :date="'524 kB'"
                      />
                    </li>
                    <li>
                      <DownloadItem
                        headingLevel="h2"
                        :filename="'dummy.pdf'"
                        :title="'English'"
                        :url="'../../../static/documents/dummy.pdf'"
                        :type="'PDF'"
                        :date="'524 kB'"
                        class="border-b-0 pb-0"
                      />
                    </li>
                  </ul>
                </div>
                <div class="box">
                  <h2 class="h5">Druckexemplar bestellen</h2>
                  <Btn
                    to="#"
                    variant="filled"
                    icon-pos="right"
                    icon="ArrowRight"
                    label="Zum Online-Shop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section publication-back-button-section">
        <div class="container">
          <Btn
            to="/"
            variant="outline"
            size="sm"
            icon="ArrowLeft"
            iconPos="left"
            label="Zurück zur Übersicht"
            class="btn--back"
          />
        </div>
      </section>

      <RelatedPublicationsSection />
    </main>
    <footer class="footer" id="main-footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script>
import Accordion from '~/components/ch/components/Accordion.vue'
import AccordionItem from '~/components/ch/components/AccordionItem.vue'
import Authors from '~/components/ch/components/Authors.vue'
import Btn from '~/components/ch/components/Btn'
import Card from '~/components/ch/components/Card'
import Contact from '~/components/ch/components/Contact'
import DownloadItem from '~/components/ch/components/DownloadItem.vue'
import InfoBlock from '~/components/ch/components/InfoBlock.vue'
import Notification from '~/components/ch/components/Notification.vue'
import RelatedTags from '~/components/ch/components/RelatedTags.vue'
import SvgIcon from '~/components/ch/components/SvgIcon'
import ShareBar from '~/components/ch/demo/ShareBar.vue'
import Hero from '~/components/ch/sections/Hero'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import RelatedPublicationsSection from '../components/ch/sections/RelatedPublicationsSection.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'

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
    Card,
    Btn,
    SvgIcon,
    Hero,
    ShareBar,
    Contact,
    InfoBlock,
    DownloadItem,
    Accordion,
    AccordionItem,
    RelatedTags,
    Authors,
    Notification,
    RelatedPublicationsSection,
  },
  data: function () {
    return {
      tags: [
        { label: 'Datenmodell', url: '#' },
        { label: 'Energie', url: '#' },
        { label: 'INTERLIS', url: '#' },
        { label: 'GKG/KOGIS', url: '#' },
        { label: 'Energie', url: '#' },
        { label: 'INTERLIS', url: '#' },
        { label: 'GKG/KOGIS', url: '#' },
        { label: 'Datenmodell', url: '#' },
      ],
      authors: [
        {
          name: 'Maria Muster',
          img: 'https://picsum.photos/120/120/?image=29',
          url: '#',
          prefix: ' ',
        },
        {
          name: 'Katja Anna-Beerli',
          img: 'https://picsum.photos/120/120/?image=30',
          url: '#',
        },
      ],
      screenHeight: 0,
      asideContainerHeight: 0,
    }
  },
  mounted() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
    resizeWindow() {
      this.screenHeight = document.body.clientHeight

      const asideContainer = document.getElementById('aside-content')
      if (asideContainer) {
        this.asideContainerHeight = asideContainer.clientHeight
      }
    },
  },
  computed: {
    computedAsideContainerClass() {
      if (this.screenHeight > this.asideContainerHeight) {
        return 'sticky sticky--top'
      } else {
        return ''
      }
    },
  },
}
</script>
