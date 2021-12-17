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
      <Hero type="main-image">
        <template v-slot:image>
          <picture>
            <source 
              srcset="https://placekitten.com/g/1200/900"
              media="(min-width: 800px)"
            >
            <img src="https://placekitten.com/g/900/600" alt="cat">
          </picture>
        </template>
        <template v-slot:title>
          Eidgenössisches Departement für Verteidigung, Bevölkerungsschutz und Sport
        </template>
        <template v-slot:description>
          Das Eidgenössische Departement für Verteidigung, Bevölkerungsschutz und Sport (VBS) beschäftigt sich hauptsächlich mit militärischen Fragen. Geleitet wird es seit Anfang 2019 von Viola Amherd.
        </template>
        <template v-slot:cta>
          <Btn
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Unsere Dienstleistungen"
          />
          <Btn
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Über uns"
          />
        </template>      
      </Hero>
      <section class="section bg--secondary-50">
        <div class="container">
          <div class="grid grid--responsive-cols-4 gap--responsive">
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet.
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Sed onsetetur sadipscing elitr ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Consetetur sadipscing elitr sadipscing elitr, sed Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed Lorem ipsum dolor sit amet.
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Vonsetetur sadipscing elitr, onsetetur sadipscing elitr sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
          </div>
        </div>
      </section>
      <section class="section section--default">
        <div class="container container--grid gap--responsive">

          <div class="container__main">
            <h2 class="h2">
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren
            </h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden.
            </p>
            <p>
              Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden.
            </p>

            <figure>
              <picture>
                <source
                  srcset="https://placekitten.com/g/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://placekitten.com/g/1600/900" alt="cat" />
              </picture>
              <figcaption>Image label here —&nbsp;©&nbsp;Photograph Name</figcaption>
            </figure>
            <h2 class="h2">
              Datenmodellablage ansehen
            </h2>
            <p>
              Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a>   angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt.
            </p>
            <div class="ratio ratio--16/9 ratio--mb">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/tHd7kesDCWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>
              Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a>   angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt.
            </p> 
          </div>
          <div class="container__aside" >
            <div class="sticky sticky--top">
              <Card type="default">
                <!--template v-slot:image>
                  <img src="https://placekitten.com/g/775/350" alt="cat">
                </template-->
                <template v-slot:body>
                  <h3 class="card__title">Side notes, can be sticky</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  </p>
                </template>
                <template v-slot:footerAction>
                  <Btn
                    variant="outline"
                    icon-pos="only"
                    icon="ArrowRight"
                    label="Weiterlesen"
                  />
                </template>
              </Card>
            </div>
          </div>
        </div>
          
      </section>

      <QuoteSection />

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--md">
            <div class="grid grid--responsive-cols-2 gap--responsive">
              <figure>
                <picture>
                  <source
                    srcset="https://placekitten.com/g/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://placekitten.com/g/800/600" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. Modelldokumentation zur Publikation eingereicht werden.
                </p>
              </div>
            </div>
            <div class="grid grid--responsive-cols-2 grid--reverse gap--responsive">
              <figure>
                <picture>
                  <source
                    srcset="https://placekitten.com/g/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://placekitten.com/g/1600/900" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können und die Modelldokumentation zur Publikation eingereicht models@geo.admin.ch können und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg--secondary-50">
        <div class="container">
          <div class="grid grid--responsive-cols-3 gap--responsive">
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
            <Card type="default">
              <template v-slot:body>
                <h3 class="card__title">Card example</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__full">
            <div class="grid grid--responsive-cols-2/3-1/3 gap--responsive">
              <figure>
                <picture>
                  <source
                    srcset="https://placekitten.com/g/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://placekitten.com/g/800/600" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. Modelldokumentation zur Publikation eingereicht werden.
                </p>
              </div>
            </div>
            <div class="grid grid--responsive-cols-1/3-2/3 grid--reverse gap--responsive">
              <figure>
                <picture>
                  <source
                    srcset="https://placekitten.com/g/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://placekitten.com/g/1600/900" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können und die Modelldokumentation zur Publikation eingereicht models@geo.admin.ch können und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden.
                </p>
              </div>
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
    QuoteSection
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
