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
      <Hero type="main-image">
        <template #image>
          <picture>
            <source
              srcset="https://picsum.photos/1200/900"
              media="(min-width: 800px)"
            />
            <img src="https://picsum.photos/900/600" alt="cat" />
          </picture>
        </template>
        <template #title>
          Eidgenössisches Departement für Verteidigung, Bevölkerungsschutz und
          Sport
        </template>
        <template #description>
          Das Eidgenössische Departement für Verteidigung, Bevölkerungsschutz
          und Sport (VBS) beschäftigt sich hauptsächlich mit militärischen
          Fragen. Geleitet wird es seit Anfang 2019 von Viola Amherd.
        </template>
        <template #cta>
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
      <section class="section bg--accent-01">
        <div class="container">
          <div class="grid grid--responsive-cols-4 gap--responsive">
            <Card type="default">
              <template #title>
                <h3>Card example</h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet.
                </p>
              </template>
            </Card>
            <Card type="default">
              <template #title>
                <h3>Card example</h3>
              </template>
              <template #description>
                <p>
                  Sed onsetetur sadipscing elitr ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
            <Card type="default">
              <template #title>
                <h3>Card example</h3>
              </template>
              <template #description>
                <p>
                  Consetetur sadipscing elitr sadipscing elitr, sed Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
                  dolor sit amet.
                </p>
              </template>
            </Card>
            <Card type="default">
              <template #title>
                <h3>Card example</h3>
              </template>
              <template #description>
                <p>
                  Vonsetetur sadipscing elitr, onsetetur sadipscing elitr sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
          </div>
        </div>
      </section>
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
                  srcset="https://picsum.photos/1600/900"
                  media="(min-width: 800px)"
                />
                <img src="https://picsum.photos/1600/900" alt="cat" />
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
                  src="https://www.youtube-nocookie.com/embed/vIG4cKz7ukM"
                  title="Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal"
                  frameborder="0"
                />
              </div>
              <figcaption>
                Geoinformation - Alles findet irgendwo statt — © Swiss
                Geoportal
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
          </div>
          <div class="container__aside">
            <div id="aside-content" :class="computedAsideContainerClass">
              <Card type="default">
                <!--template v-slot:image>
                  <img src="https://picsum.photos/775/350" alt="cat">
                </template-->
                <template #title>
                  <h3>Side notes, can be sticky</h3>
                </template>
                <template #description>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  </p>
                </template>
                <template #footerAction>
                  <Btn
                    to="#"
                    variant="outline"
                    icon-pos="only"
                    icon="ArrowRight"
                    label="Weiterlesen"
                  />
                </template>
              </Card>
              <Newsletter
                type="default"
                state="default"
                title="Abonnieren Sie unseren Newsletter"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo"
                input-label="E-Mail"
                button-label="Newsletter abonnieren"
                success-text="Danke für Ihre Anmeldung. Sie sollten gerade eine Email bekommen haben.  <strong>Bitte klicken sie den enthaltenen Link um die Anmeldung zu abschliessen.</strong>"
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Begin anywhere."
        author="John Cage"
        :image="{
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/John_Cage_%281988%29.jpg/576px-John_Cage_%281988%29.jpg',
          width: '400',
          height: '400',
          alt: 'image name',
          source: {
            srcset:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/John_Cage_%281988%29.jpg/768px-John_Cage_%281988%29.jpg',
            width: '800',
            height: '800',
            media: '(min-width: 1024px)',
          },
        }"
      />

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Table within .container__center--xs</h2>
            <TableSortable
              id="1"
              caption="This table is larger than its container"
              :displayCaption="true"
            />
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--sm vertical-spacing">
            <h2 class="h2">Table within .container__center--sm</h2>
            <TableSortable
              id="2"
              caption="This table is larger than its container"
              :displayCaption="true"
            />
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--md vertical-spacing">
            <h2 class="h2">Table within .container__center--md</h2>
            <TableSortable
              id="3"
              caption="This table has the width of its container"
              :displayCaption="true"
            />
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__full vertical-spacing">
            <h2 class="h2">Table within .container__full</h2>
            <TableSortable
              id="4"
              caption="This table has the width of its container"
              :displayCaption="true"
            />
          </div>
        </div>
      </section>

      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--md">
            <div class="grid grid--responsive-cols-2 gap--responsive">
              <figure>
                <picture>
                  <source
                    srcset="https://picsum.photos/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://picsum.photos/800/600" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage
                  publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können die
                  INTERLIS-Modelldatei und die Modelldokumentation (als PDF
                  Dokument) zur Publikation eingereicht werden.
                  Modelldokumentation zur Publikation eingereicht werden.
                </p>
              </div>
            </div>
            <div
              class="grid grid--responsive-cols-2 grid--reverse gap--responsive"
            >
              <figure>
                <picture>
                  <source
                    srcset="https://picsum.photos/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://picsum.photos/1600/900" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage
                  publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können und die
                  Modelldokumentation zur Publikation eingereicht
                  models@geo.admin.ch können und die Modelldokumentation (als
                  PDF Dokument) zur Publikation eingereicht werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg--bg--accent-01">
        <div class="container">
          <div class="grid grid--responsive-cols-3 gap--responsive">
            <Card type="default">
              <template #title>
                <h3>Card example</h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
            <Card type="default">
              <template #title>
                <h3>Card example</h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </template>
            </Card>
            <Card type="default">
              <template #title>
                <h3>Card example</h3>
              </template>
              <template #description>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
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
                    srcset="https://picsum.photos/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://picsum.photos/800/600" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage
                  publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können die
                  INTERLIS-Modelldatei und die Modelldokumentation (als PDF
                  Dokument) zur Publikation eingereicht werden.
                  Modelldokumentation zur Publikation eingereicht werden.
                </p>
              </div>
            </div>
            <div
              class="grid grid--responsive-cols-1/3-2/3 grid--reverse gap--responsive"
            >
              <figure>
                <picture>
                  <source
                    srcset="https://picsum.photos/1600/1200"
                    media="(min-width: 1024px)"
                  />
                  <img src="https://picsum.photos/1600/900" alt="cat" />
                </picture>
              </figure>
              <div>
                <h2 class="h2">
                  Ein neues «minimales Geodatenmodell» in der Datenmodellablage
                  publizieren
                </h2>
                <p>
                  Über den Kontakt models@geo.admin.ch können und die
                  Modelldokumentation zur Publikation eingereicht
                  models@geo.admin.ch können und die Modelldokumentation (als
                  PDF Dokument) zur Publikation eingereicht werden.
                </p>
              </div>
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
import Btn from '../components/ch/components/Btn.vue'
import Card from '../components/ch/components/Card.vue'
import Newsletter from '../components/ch/components/Newsletter.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import TableSortable from '../components/ch/demo/TableSortable.vue'
import Hero from '../components/ch/sections/Hero.vue'
import QuoteSection from '../components/ch/sections/QuoteSection.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
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
  resizeWindow()
  window.addEventListener('resize', resizeWindow)
})
</script>
