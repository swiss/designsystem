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
      <Hero type="default">
        <template v-slot:title>
          Web Mapping Services WMS: Verfügbare Dienste und Daten
        </template>
        <template v-slot:description>
          Das Konzept des INTERLIS Model Repository sieht vor, Datenmodelle als http-Ressource nutzbar zu machen. Dabei werden die INTERLIS-Modelldateien auf einem Webserver abgelegt, und können beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden. Der Vorteil für einen Benutzer liegt darin, dass die Modelldateien und evtl. weitere importierte Datenmodelle nicht lokal vorhanden sein müssen.
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
            <figcaption>Image label here — © Photograph Name</figcaption>
          </figure>
        </template>
      </Hero>
        <section class="section section--default section--pb-only">
          <div class="container area gap--responsive">
            <div class="area__center--xs">
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
                <figcaption>Image label here — © Photograph Name</figcaption>
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

            <div class="area__center--sm AND grid grid--responsive-cols-1/4-3/4 gap--responsive">
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
                  Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden.
                </p>
              </div>
            </div>

            <div class="area__center--xs">
              <h2 class="h2">
                Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren
              </h2>
              <p>
                Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden.
              </p>
              <p>
                Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a>   angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt.
              </p> 
              
              <Accordion />

            </div>
            <div class="area__center--xs">
              <h2 class="h2">
                Datenmodellablage ansehen
              </h2>
              <p>
                Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a>   angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt.
              </p>
            </div>
          </div>
        </section>

      <Quote />

      <section class="section section--default">
        <div class="container area gap--responsive">
          <div class="area__center--md AND grid grid--responsive-cols-2 gap--responsive">
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
        </div>
        <div class="container area gap--responsive">
          <div class="area__center--md AND grid grid--responsive-cols-2 grid--reverse gap--responsive">
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
import Hero from "~/components/ch/sections/Hero"
import Quote from "~/components/ch/sections/Quote"
import Accordion from "~/components/ch/components/Accordion"

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
    Hero,
    Quote,
    Accordion
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
