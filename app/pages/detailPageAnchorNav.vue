<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="layoutStore.mobileMenuIsOpen" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
      <Breadcrumb />
      <div class="container">
        <ShareBar />
      </div>
    </header>
    <main id="main-content">
      <Hero type="default">
        <template #title>
          Web Mapping Services WMS: Verfügbare Dienste und Daten
        </template>
        <template #description>
          Das Konzept des INTERLIS Model Repository sieht vor, Datenmodelle als
          http-Ressource nutzbar zu machen. Dabei werden die
          INTERLIS-Modelldateien auf einem Webserver abgelegt, und können
          beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden. Der
          Vorteil für einen Benutzer liegt darin, dass die Modelldateien und
          evtl. weitere importierte Datenmodelle nicht lokal vorhanden sein
          müssen.
        </template>
        <template #image>
          <figure>
            <picture>
              <source
                srcset="https://picsum.photos/1600/900"
                media="(min-width: 800px)"
              />
              <img src="https://picsum.photos/1600/1200" alt="cat" />
            </picture>
            <figcaption>
              Datenmodelle als http-Ressource nutzbar zu machen.
              —&nbsp;©&nbsp;Photograph Name
            </figcaption>
          </figure>
        </template>
      </Hero>
      <section class="section section--py">
        <div
          class="container container--grid container--reverse-mobile gap--responsive"
        >
          <div class="container__main vertical-spacing">
            <h2 id="einleitung" class="h2">Einleitung</h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die Modelldatei und
              die Modelldokumentation zur Publikation eingereicht werden.
            </p>
            <p>
              Über den Kontakt models@geo.admin.ch können die Modelldatei und
              die Modelldokumentation eingereicht werden.
            </p>

            <figure>
              <picture>
                <source
                  srcset="https://picsum.photos/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://picsum.photos/1600/900" alt="cat" />
              </picture>
              <figcaption>
                Image label here —&nbsp;©&nbsp;Photograph Name
              </figcaption>
            </figure>
            <h2 id="datenmodell-ablage" class="h2">
              Datenmodellablage ansehen
            </h2>
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
                  srcset="https://picsum.photos/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://picsum.photos/1600/1200" alt="cat" />
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
            <h2 id="dokumente" class="h2">Weitere Informationen</h2>

            <Accordion id="12345">
              <AccordionItem
                id="10"
                title="Medienmitteilungen"
                headingLevel="h3"
              >
                <h3 class="h5">Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor
                </p>
              </AccordionItem>
              <AccordionItem id="11" title="Interviews" headingLevel="h3">
                <h3 class="h5">Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor
                </p>
              </AccordionItem>
              <AccordionItem
                id="12"
                title="Dokumente und Downloads"
                headingLevel="h3"
              >
                <h3 class="h5">Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor
                </p>
              </AccordionItem>
              <AccordionItem id="13" title="Reden" headingLevel="h3">
                <h3 class="h5">Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor
                </p>
              </AccordionItem>
              <AccordionItem
                id="14"
                title="Gesetze und Verordnungen"
                headingLevel="h3"
              >
                <h3 class="h5">Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="container__aside">
            <div id="aside-content" :class="computedAsideContainerClass">
              <Card type="default">
                <template #title>
                  <h2>Inhaltverzeichnis</h2>
                </template>
                <template #description>
                  <ul class="menu text--sm">
                    <li>
                      <a
                        href="#einleitung"
                        class="menu__item menu__item--border menu__item--condensed"
                      >
                        <div>Einleitung</div>
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
                        <div>Datenmodellablage ansehen</div>
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
                        <div>Weitere Informationen</div>
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
        </div>
      </section>
    </main>
    <footer id="main-footer" class="footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup lang="ts">
import Accordion from '../components/ch/components/Accordion.vue'
import AccordionItem from '../components/ch/components/AccordionItem.vue'
import Card from '../components/ch/components/Card.vue'
import SvgIcon from '../components/ch/components/SvgIcon.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import Hero from '../components/ch/sections/Hero.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import AnchorNav from '../scripts/AnchorNav.js'
import { ref, computed, onMounted, nextTick } from 'vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()

const screenHeight = ref(0)
const asideContainerHeight = ref(0)

const computedAsideContainerClass = computed(() => {
  if (screenHeight.value > asideContainerHeight.value) {
    return 'sticky sticky--top'
  } else {
    return ''
  }
})

const resizeWindow = function () {
  screenHeight.value = document.body.clientHeight

  const asideContainer = document.getElementById('aside-content')
  if (asideContainer) {
    asideContainerHeight.value = asideContainer.clientHeight
  }
}

onMounted(async () => {
  await nextTick()
  AnchorNav.setCurrentMenuItem()
  resizeWindow()
  window.addEventListener('resize', resizeWindow)
})
</script>
