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
      <div>
        <section
          id=""
          identifier="lead-contentpage"
          class="hero hero--title-only"
        >
          <div class="container container--grid gap--responsive">
            <div class="hero__content container__center--md">
              <h1 class="hero__title h1">
                Fragen zu Geobasisdaten des Bundesrechts
              </h1>
            </div>
          </div>
        </section>
        <section
          id="doc-section"
          identifier="section"
          class="section section--default"
        >
          <div
            id="doc-container-grid"
            identifier="container-grid"
            class="container container--grid gap--responsive"
          >
            <div class="container__center--xs vertical-spacing">
              <p id="doc-1flo6kaen0" identifier="p">
                Der Monat Juli war in seiner ersten Hälfte nass und das Wetter
                instabil wie bereits im Juni. Ab dem 12. Juli 2021 folgte erneut
                kräftiger Regen, ausgelöst durch das Tiefdruckgebiet Bernd,
                welches Hochwasser an Flüssen und Überschwemmung an Seen zufolge
                hatte.
              </p>
              <p id="doc-1flo6kihj0" identifier="p">
                Der Bedarf an Informationen über mögliche Gefahren und aktuelle
                Warnungen war entsprechend gross. Während der Unwetterereignisse
                wurde folglich eine erstaunlich hohe Besucherzahl auf
                www.map.geo.admin.ch verzeichnet. Am 16.07.2021 erreichte die
                Zahl der «Visits» auf map.geo.admin.ch schliesslich den
                Rekordwert von rund 250'000 Besuchen.
              </p>
              <p id="doc-1flo6kihk0" identifier="p">
                Link zu Geodatensätzen im Bereich Niederschlag /
                Hochwasser(gefahr):
              </p>
              <p id="doc-1flo6kihm0" identifier="p">
                <a
                  href="https://s.geo.admin.ch/91ef58c0c3"
                  target="_blank"
                  class="link"
                  >https://s.geo.admin.ch/91ef58c0c3</a
                >
              </p>
              <p id="doc-1flo6kihn0" identifier="p">
                Durch die zeitgerechte Erhebung und Bereitstellung von Geodaten
                für die Ereignisbewältigung und –dokumentation - im konkreten
                Fall im Bereich Niederschlag und Hochwasser - konnten Besucher
                auf viele hilfreiche Echtzeit-Datensätze zugreifen.
              </p>
              <p id="doc-1flo6kihn1" identifier="p">
                Folgende Bundes-Webseiten nutzten iframes (dynamische
                Integration) von map.geo.admin.ch, um weitere aktuelle
                Informationen und Messwerte zur Situation zu zeigen:
              </p>
              <div id="doc-1flo6kmaf0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://www.hydrodaten.admin.ch/fr"
                        target="_blank"
                        class="link"
                        >www.hydrodaten.admin.ch</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://www.meteoschweiz.admin.ch/home/messwerte.html"
                        target="_blank"
                        >www.meteoschweiz.admin.ch/home/messwerte.html
                      </a></span
                    >
                  </li>
                </ul>
              </div>
              <p id="doc-1flo6l7m00" identifier="p">
                Mehr Datensätze zum Thema Niederschlag/Wind, sowie
                Abflüsse/Wasserstand/Hochwassergefahr:
              </p>
              <p id="doc-1flo6lam10" identifier="p">METEOSCHWEIZ</p>
              <div id="doc-1flo6li5j0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f3426ce2"
                        target="_blank"
                        class="link"
                        >Niederschlagsummen</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f342c08b"
                        target="_blank"
                        class="link"
                        >Windgeschwindigkeit
                      </a></span
                    >
                  </li>
                </ul>
              </div>
              <p id="doc-1flo6lvv30" identifier="p">BAFU</p>
              <div id="doc-1flo6m5ib0" identifier="list">
                <!---->
                <!---->
                <ul class="list list--default">
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f33d9c51"
                        target="_blank"
                        >Warnkarte Nationale Gewässer </a
                      >/
                      <a
                        href="https://s.geo.admin.ch/654a699a56"
                        target="_blank"
                        >Fliessgewässer</a
                      >
                      /
                      <a
                        href="https://s.geo.admin.ch/65bca53013"
                        target="_blank"
                        >Gefahrenstufen</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/65319a667b"
                        target="_blank"
                        class="link"
                        >Abflüsse und Wasserstände</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/6536df0550"
                        target="_blank"
                        class="link"
                        >Hydrologische Stationen mit Vorhersagen</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f340d80f"
                        target="_blank"
                        class="link"
                        >Gefährdungskarte Oberflächenabfluss
                      </a></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span>
                      <a
                        href="https://s.geo.admin.ch/91f34152d2"
                        target="_blank"
                        >Überschwemmungsgebiete Aquaprotect 50-100</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f341a9f0"
                        target="_blank"
                        class="link"
                        >Murgang Silvaprotect</a
                      ></span
                    >
                  </li>
                  <li>
                    <!---->
                    <span
                      ><a
                        href="https://s.geo.admin.ch/91f341feec"
                        target="_blank"
                        class="link"
                        >Hangmuren Silvaprotect</a
                      ></span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer id="main-footer" class="footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()
</script>
