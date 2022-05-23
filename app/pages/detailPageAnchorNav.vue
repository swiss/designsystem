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
      <ShareBar />
    </header>
    <main id="main-content">
      <Hero type="default">
        <template v-slot:title>
          Web Mapping Services WMS: Verfügbare Dienste und Daten
        </template>
        <template v-slot:description>
          Das Konzept des INTERLIS Model Repository sieht vor, Datenmodelle als
          http-Ressource nutzbar zu machen. Dabei werden die
          INTERLIS-Modelldateien auf einem Webserver abgelegt, und können
          beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden. Der
          Vorteil für einen Benutzer liegt darin, dass die Modelldateien und
          evtl. weitere importierte Datenmodelle nicht lokal vorhanden sein
          müssen.
        </template>
        <template v-slot:image>
          <figure>
            <picture>
              <source
                srcset="https://placekitten.com/g/1600/900"
                media="(min-width: 800px)"
              />
              <img src="https://placekitten.com/g/1600/1200" alt="cat" />
            </picture>
            <figcaption>
              Datenmodelle als http-Ressource nutzbar zu machen.
              —&nbsp;©&nbsp;Photograph Name
            </figcaption>
          </figure>
        </template>
      </Hero>
      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__aside">
            <div class="sticky sticky--top">
              <Card type="default">
                <template v-slot:body>
                  <h3 class="card__title">Inhaltverzeichnis</h3>
                  <ul class="menu text--sm">
                    <li>
                      <a 
                        href="#einleitung" 
                        class="menu__item menu__item--border menu__item--condensed"
                      >
                        <div>
                          Einleitung
                        </div>
                        <SvgIcon
                          icon="ArrowAngleBottomLeft"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#datenmodell-ablage" 
                        class="menu__item menu__item--border menu__item--condensed"
                      >
                        <div>
                          Datenmodellablage ansehen
                        </div>
                        <SvgIcon
                          icon="ArrowAngleBottomLeft"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#dokumente" 
                        class="menu__item menu__item--border menu__item--condensed"
                      >
                        <div>
                          Weitere Informationen
                        </div>
                        <SvgIcon
                          icon="ArrowAngleBottomLeft"
                          class="menu__item__icon"
                        />
                      </a>
                    </li>
                  </ul>
                </template>
              </Card>
            </div>
          </div>
          <div class="container__main vertical-spacing">
            <h2 class="h2" id="einleitung">
              Einleitung
            </h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              Modelldatei und die Modelldokumentation zur Publikation eingereicht werden.
            </p>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              Modelldatei und die Modelldokumentation eingereicht werden.
            </p>

            <figure>
              <picture>
                <source
                  srcset="https://placekitten.com/g/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://placekitten.com/g/1600/900" alt="cat" />
              </picture>
              <figcaption>
                Image label here —&nbsp;©&nbsp;Photograph Name
              </figcaption>
            </figure>
            <h2 class="h2" id="datenmodell-ablage">Datenmodellablage ansehen</h2>
            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>
            <figure>
              <picture>
                <source
                  srcset="https://placekitten.com/g/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://placekitten.com/g/1600/1200" alt="cat" />
              </picture>
              <figcaption>
                Datenmodelle als http-Ressource nutzbar zu machen.
                —&nbsp;©&nbsp;Photograph Name
              </figcaption>
            </figure>
            <p>
              Der Modellkatalog kann unter
              <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues
              «minimales Geodatenmodell» in der Datenmodellablage publizieren.
              Für die Publikation der «minimalen Geodatenmodelle» besteht kein
              direkter Online-Zugang. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>
            <h2 class="h2" id="dokumente">
              Weitere Informationen
            </h2>
            
            <Accordion id="12345">             
              <AccordionItem id="10" title="Medienmitteilungen" headingLevel="h3">
                <h4 class="h5">Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor</p>
              </AccordionItem>
              <AccordionItem id="11" title="Interviews" headingLevel="h3">
                <h4 class="h5">Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor</p>
              </AccordionItem>
              <AccordionItem id="12" title="Dokumente und Downloads" headingLevel="h3">
                <h4 class="h5">Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor</p>
              </AccordionItem>
              <AccordionItem id="13" title="Reden" headingLevel="h3">
                <h4 class="h5">Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor</p>
              </AccordionItem>
              <AccordionItem id="13" title="Gesetze und Verordnungen" headingLevel="h3">
                <h4 class="h5">Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor</p>
              </AccordionItem>
            </Accordion>
          </div>
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
import Card from '~/components/ch/components/Card'
import Btn from '~/components/ch/components/Btn'
import SvgIcon from '~/components/ch/components/SvgIcon'
import Hero from '~/components/ch/sections/Hero'
import QuoteSection from '~/components/ch/sections/QuoteSection'
import ShareBar from '~/components/ch/demo/ShareBar.vue'
import Accordion from '~/components/ch/components/Accordion.vue'
import AccordionItem from '~/components/ch/components/AccordionItem.vue'

import AnchorNav from '~/scripts/AnchorNav.js'

export default {
  name: 'detailPageAnchorNav',
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
    QuoteSection,
    ShareBar,
    Accordion,
    AccordionItem
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },

  mounted () {
    AnchorNav.setCurrentMenuItem()
  }
}
</script>
