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
      <Hero type="default" :meta-infos="metaInfos" :authors="authors">
        <template v-slot:title>
          Example Page with anchor navigation
        </template>
        <template v-slot:description>
          Der Vorteil für einen Benutzer liegt darin, dass die Modelldateien und
          evtl. weitere importierte Datenmodelle nicht lokal vorhanden sein
          müssen.
        </template>
      </Hero>
      <!--section class="section bg--secondary-50">
        <div class="container">
          <div class="grid grid--responsive-cols-4 gap--responsive">
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet.
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Sed onsetetur sadipscing elitr ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Consetetur sadipscing elitr sadipscing elitr, sed Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
                  dolor sit amet.
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Vonsetetur sadipscing elitr, onsetetur sadipscing elitr sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
          </div>
        </div>
      </section-->
      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__main vertical-spacing">
            <h2 class="h2">
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage
              publizieren
            </h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
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
            <h2 class="h2">Datenmodellablage ansehen</h2>
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
              <div class="ratio ratio--16/9">
                <iframe
                  width="560"
                  height="315"
                  src="//www.youtube-nocookie.com/embed/vIG4cKz7ukM"
                  title="Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal"
                  frameborder="0"
                />
              </div>
              <figcaption>Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal</figcaption>
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
          </div>
          <div class="container__aside">
            <div class="sticky sticky--top">
              <Card type="default">
                <template v-slot:body>
                  <h3 class="card__title">Side notes, can be sticky</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  </p>
                </template>
                <template v-slot:footerAction>
                  
                </template>
              </Card>
            </div>
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
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
