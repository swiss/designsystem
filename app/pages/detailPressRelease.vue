<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="layoutStore.mobileMenuIsOpen" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader overrideLogoForPrint="Staatssekretariat für Wirtschaft SECO" />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
      <Breadcrumb />
      <div class="container">
        <Btn
          to="/"
          variant="outline"
          size="sm"
          icon="ArrowLeft"
          iconPos="left"
          label="Zurück"
          class="btn--back"
        />
        <ShareBar />
      </div>
    </header>
    <main id="main-content">
      <Hero type="default" :meta-infos="metaInfos" :authors="authors">
        <template #title>
          Rückerstattungsaktion der US-amerikanischen Konsumentenschutzbehörde
        </template>
        <template #description>
          Bern, 10.02.2022 — Die US-amerikanische Konsumentenschutzbehörde
          Federal Trade Commission FTC hat das SECO im Juli 2022 über eine
          Rückerstattungsaktion informiert, die in den kommenden Monaten
          erfolgen wird. Personen in der Schweiz, die von falschen
          Gewinnversprechen des US-amerikanischen Unternehmens Next-Gen
          getäuscht worden sind, sollen einen Teil ihres bezahlten Geldes
          zurückerhalten.
        </template>
        <template #image>
          <figure>
            <div class="ratio ratio--16/9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/vIG4cKz7ukM"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <figcaption>
              Datenmodelle als http-Ressource nutzbar zu machen. Der Vorteil für
              einen Benutzer liegt darin, dass die Modelldateien und evtl.
              weitere importierte Datenmodelle nicht lokal vorhanden sein müssen
              —&nbsp;©&nbsp;Photograph Name
            </figcaption>
          </figure>
        </template>
      </Hero>
      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <p>
              Das US-amerikanische Unternehmen Next-Gen hat seit dem Jahr 2013
              weltweit Mil-lionen von Personen mittels Gewinnversprechen
              getäuscht. Next-Gen hat diese Personen angeschrieben und ihnen
              einen hohen Gewinn in Aussicht gestellt. Die Auszahlung des
              Gewinns machte die Next-Gen jedoch von einer Vorauszahlung
              abhängig: Sie verlangte von den angeschriebenen Personen einen im
              Verhältnis zum Gewinn niedrigen Betrag, damit die Auszahlung
              abgewickelt werden könne. Viele Personen kamen der Aufforderung
              der Next-Gen nach und bezahlten den ver-langten Betrag. Einen
              Gewinn hat Next-Gen jedoch nie ausbezahlt. Auch Personen in der
              Schweiz erlagen dieser Schwindelei.
            </p>

            <p>
              Die US-amerikanische Konsumentenschutzbehörde FTC hat im Jahr 2018
              in den USA gegen die verantwortlichen Personen der Next-Gen ein
              Gerichtsverfahren eingeleitet. Im Rahmen eines Vergleichs erklärte
              sich die Next-Gen zu Beginn des Jahres 2019 bereit, mehrere
              Millionen US-Dollar zu bezahlen. Beinahe 25 Millionen US-Dollar
              werden von der FTC nun dazu verwendet, getäuschten Personen einen
              Teil ihres an Next-Gen bezahlten Geldes zurückzuerstatten. Die FTC
              lanciert eine Rückerstattungsaktion auch an Personen in der
              Schweiz. Diese Rückzahlungen werden via PayPal stattfinden.
            </p>

            <p>
              Die FTC schreibt in den kommenden Monaten betroffene Personen in
              der Schweiz an, damit die Rückerstattung des Geldes abgewickelt
              werden kann. Der letzte Termin zur Anforderung der Rückerstattung
              ist der 17. Oktober 2022. Weitere Informationen zur
              Rückerstattungsaktion der FTC finden Sie auf deren Webseite
              www.ftc.gov (siehe insbesondere die Pressemitteilung vom 19. Juli
              2022, Next-Gen Refund page sowie Fragen und Antworten zu den
              Rückzahlungen).
            </p>

            <p>
              Die FTC hat das Staatssekretariat für Wirtschaft (SECO) im Rahmen
              des internationalen Netzwerks International Consumer Protection
              and Enforcement Network ICPEN kontaktiert. Die FTC und das SECO
              sind zwei der 70 Mitglieder dieses Netz-werks, welches die
              Bekämpfung von grenzüberschreitenden unlauteren Geschäftspraktiken
              bezweckt. Durch die globale Reichweite und Zusammenarbeit unter
              den Behörden in diesem Netzwerk soll die Durchsetzung des
              Konsumentenschutzes über internationale Grenzen hinweg erleichtert
              werden.
            </p>

            <h2 class="h2">Weiterführende Artikel</h2>
            <ul>
              <li>
                <a href="http://www.admin.ch">
                  Internal link, without target _blank (recommanded)
                </a>
              </li>
              <li>
                <a href="http://www.ftc.gov" target="_blank" rel="external">
                  Informationen zur Rückerstattungsaktion der FTC
                </a>
              </li>
              <li>
                <a
                  href="https://www.ftc.gov/news-events/news/press-releases/2022/07/us-federal-trade-commission-returning-almost-25-million-consumers-worldwide-who-were-defrauded-next"
                  target="_blank"
                  rel="external"
                >
                  Pressemitteilung vom 19.07.2022
                </a>
              </li>
              <li>
                <a
                  href="https://www.ftc.gov/enforcement/refunds/next-gen-refunds"
                  target="_blank"
                  rel="external"
                >
                  Next-Gen Refund page
                </a>
              </li>
              <li>
                <a
                  href="https://www.ftc.gov/enforcement/recent-ftc-cases-resulting-refunds/refund-programs-frequently-asked-questions"
                  target="_blank"
                  rel="external"
                >
                  Fragen und Antworten zu den Rückzahlungen
                </a>
              </li>
              <li>
                <a href="https://icpen.org/" target="_blank" rel="external">
                  International consumer Protection and Enforcement Network
                </a>
              </li>
            </ul>

            <h2 class="h2">Dokumente und Dateien</h2>

            <ul class="download-items">
              <li>
                <DownloadItem
                  headingLevel="h2"
                  filename="dummy.pdf"
                  title="Information on the usage of websites"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor."
                  url="/documents/dummy.pdf"
                  type="PDF"
                  date="22.01.2022"
                />
              </li>
              <li>
                <DownloadItem
                  headingLevel="h2"
                  filename="image.png"
                  title="Information on the usage of websites"
                  description=""
                  url="/images/html-structure.png"
                  type="PNG"
                  date="22.01.2022"
                />
              </li>
            </ul>

            <h2 class="h2">Kontakt für Rückfragen</h2>
            <address>
              <strong>Staatssekretariat für Wirtschaft SECO</strong><br />
              Holzikofenweg 36<br />
              CH-3003 Bern<br />
              Tel. +41 58 462 56 56<br />
              <a href="mailto:medien@seco.admin.ch">medien@seco.admin.ch</a>
            </address>

            <h2 class="h2">Herausgeber</h2>

            <p>
              Staatssekretariat für Wirtschaft<br />
              <a href="http://www.seco.admin.ch "> www.seco.admin.ch </a>
            </p>
            <p>
              Name de Amtes <br /><a href="www.amtsurl.ch">www.amtsurl.ch</a>
            </p>

            <div>
              <h2 class="h2">Themen</h2>
              <RelatedTags :tags="tags" bare />
            </div>
          </div>
        </div>
      </section>
      <section class="section section--default">
        <div class="container">
          <Btn
            to="/"
            variant="outline"
            size="sm"
            icon="ArrowLeft"
            iconPos="left"
            label="Zurück"
            class="btn--back"
          />
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
import DownloadItem from '../components/ch/components/DownloadItem.vue'
import RelatedTags from '../components/ch/components/RelatedTags.vue'
import Hero from '../components/ch/sections/Hero.vue'
import Btn from '../components/ch/components/Btn.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import { reactive } from 'vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()

const metaInfos = reactive([
  'Medienmitteilung',
  '10. Februar 22, aktualisiert am 16. Februar 22',
])
const authors = reactive([
  {
    name: 'Staatssekretariat für Wirtschaft SECO',
    url: '#',
    prefix: 'Herausgegeben vom',
  },
])
const tags = reactive([
  { label: 'Datenmodell', url: '#' },
  { label: 'Energie', url: '#' },
  { label: 'INTERLIS', url: '#' },
  { label: 'GKG/KOGIS', url: '#' },
  { label: 'Energie', url: '#' },
  { label: 'INTERLIS', url: '#' },
  { label: 'GKG/KOGIS', url: '#' },
  { label: 'Datenmodell', url: '#' },
])
</script>
