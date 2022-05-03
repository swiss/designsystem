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
              Datenmodelle als http-Ressource nutzbar zu machen. Der Vorteil für
              einen Benutzer liegt darin, dass die Modelldateien und evtl.
              weitere importierte Datenmodelle nicht lokal vorhanden sein müssen
              —&nbsp;©&nbsp;Photograph Name
            </figcaption>
          </figure>
        </template>
      </Hero>
      <section class="section section--default section--pb-only">
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <h2 class="h2">Carousel with few images</h2>
            <p>
              To display a few images as a carousel, set the pagination type to
              «bullets». Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>

            <SlideshowExample
              paginationType="bullets"
              loop="loop"
              :id="1"
              :slides="slides"
            />

            <h2 class="h2">Carousel with more than 5 images</h2>
            <p>
              To display a more images in a carousel, set the pagination type to
              «fraction». Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>

            <SlideshowExample
              paginationType="fraction"
              loop="loop"
              :id="2"
              :slides="slides"
            />

            <p>
              To display a single image, use the recommended markup with figure,
              picture and img elements.
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

            <h2 class="h2">Audio player</h2>
            <p>
              Use a default audio element wrapped into an audio player class. Die Datenmodellablage ist moderiert und
              die Erfassung neuer Datenmodelle wird durch Modellierung vorgenommen.
            </p>

            <AudioPlayer
              title="First of August speech"
              description="Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              copyright="Reuters"
              url="https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3"
              type="audio/mp3"
            />

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

            <TextImage type="default">
              <template v-slot:title>
                Ein neues «minimales Geodatenmodell» in der Datenmodellablage
                publizieren
              </template>
              <template v-slot:description>
                Über den Kontakt models@geo.admin.ch können die
                INTERLIS-Modelldatei und die Modelldokumentation (als PDF
                Dokument) zur Publikation eingereicht werden. Über den Kontakt
                models@geo.admin.ch können die INTERLIS-Modelldatei und die
                Modelldokumentation (als PDF Dokument) zur Publikation
                eingereicht werden.
              </template>
              <template v-slot:image>
                <figure>
                  <picture>
                    <source
                      srcset="https://placekitten.com/g/1600/1200"
                      media="(min-width: 1024px)"
                    />
                    <img src="https://placekitten.com/g/800/600" alt="cat" />
                  </picture>
                </figure>
              </template>
            </TextImage>

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

            <h2 class="h2">
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage
              publizieren
            </h2>
            <p>
              Über den Kontakt models@geo.admin.ch können die
              INTERLIS-Modelldatei und die Modelldokumentation (als PDF
              Dokument) zur Publikation eingereicht werden.
            </p>
            <blockquote>
              Der Modellkatalog kann unter angesehen werden. Simple quote in a
              text flow.
            </blockquote>
            <p>
              Der Modellkatalog kann unter angesehen werden. Datenmodellablage
              <a href="#" target="_blank">external link</a> publizieren. Für die
              Publikation der «minimalen Geodatenmodelle» besteht kein direkter
              Online-Zugang. Die Datenmodellablage ist moderiert und die
              Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen.
              Entsprechend der Empfehlungen zur Modellierung wird die
              Modelldokumentation veröffentlicht oder verlinkt. Die
              INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage
              eingepflegt.
            </p>
            <p>
              Der <strong>strong</strong> Modellkatalog kann unter
              <mark>mark</mark> angesehen werden <del>Strike through</del> and
              <u>underline</u>. Ein neues «minimales Geodatenmodell» in der
              Datenmodellablage publizieren. Für die Publikation der «minimalen
              Geodatenmodelle» besteht kein direkter Online-Zugang. Die
              Datenmodellablage ist moderiert und die Erfassung neuer
              Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der
              Empfehlungen zur Modellierung wird die Modelldokumentation
              veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in
              jedem Fall in die Datenmodellablage eingepflegt.
            </p>
            <div class="bg-gray-50">
              <Tabs></Tabs>
            </div>
            <ul>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues
                <a href="#" target="_blank">external link in list</a>
                publizieren
              </li>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues Modell in der Datenmodellablage publizieren
              </li>
            </ul>

            <ol>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues Modell in der Datenmodellablage publizieren
              </li>
              <li>
                Ein neues minimales Geodatenmodell in der Datenmodellablage
                publizieren
              </li>
              <li>
                List item neues Modell in der Datenmodellablage publizieren
              </li>
            </ol>

            <Accordion
              id="3456"
              :content="[
                {
                  title: 'Accordion item one',
                  content: 'Content here <br>second line',
                },
                {
                  title: 'Accordion item two',
                  content: 'Content here <br>second line<br>third line',
                },
                {
                  title:
                    'Accordion item three. this one has a long title, like this we can test how it displays on two lines',
                  content:
                    '<h4 class=&quot;h3&quot;>Demo list</h4><ul class=&quot;list list--bullet&quot;><li>list item</li><li>list item</li></ul>',
                },
              ]"
            />

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

            <TextImage>
              <template v-slot:title> Modelldokumentation </template>
              <template v-slot:description>
                Über den Kontakt models@geo.admin.ch können die
                Modelldokumentation zur Publikation eingereicht werden. Über den
                Kontakt models@geo.admin.ch können die zur Publikation
                eingereicht werden.
              </template>
              <template v-slot:image>
                <figure>
                  <picture>
                    <source
                      srcset="https://placekitten.com/g/1600/1200"
                      media="(min-width: 1024px)"
                    />
                    <img src="https://placekitten.com/g/800/600" alt="cat" />
                  </picture>
                </figure>
              </template>
            </TextImage>

            <h2 class="h2">Modellkatalog ansehen</h2>
            <p>
              Ein neues «minimales Geodatenmodell» in der Datenmodellablage
              publizieren. Für die Publikation der «minimalen Geodatenmodelle»
              besteht kein direkter Online-Zugang. Die Datenmodellablage ist
              moderiert und die Erfassung neuer Datenmodelle wird durch
              GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur
              Modellierung wird die Modelldokumentation veröffentlicht oder
              verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die
              Datenmodellablage eingepflegt.
            </p>
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
          <div class="container__center--xs">
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
        </div>
      </section>

      <RelatedTags :tags="tags"></RelatedTags>

      <ContactSection />
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
import Hero from '~/components/ch/sections/Hero'
import QuoteSection from '~/components/ch/sections/QuoteSection'
import ContactSection from '~/components/ch/sections/ContactSection'
import Accordion from '~/components/ch/components/Accordion'
import TextImage from '~/components/ch/components/TextImage'
import AudioPlayer from '~/components/ch/components/AudioPlayer'
import SlideshowExample from '~/components/ch/demo/SlideshowExample.vue'
import Tabs from '~/components/ch/demo/Tabs.vue'
import RelatedTags from '~/components/ch/sections/RelatedTags.vue'
import ShareBar from '../components/ch/demo/ShareBar.vue'

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
    QuoteSection,
    ContactSection,
    Accordion,
    TextImage,
    AudioPlayer,
    SlideshowExample,
    Tabs,
    RelatedTags,
    ShareBar,
  },
  data: function () {
    return {
      slides: [
        {
          image: {
            src: 'https://picsum.photos/1024/768/?image=29',
            width: '1024',
            height: '768',
            alt: 'image name',
          },
          source: {
            srcset: 'https://picsum.photos/2048/1152/?image=29',
            width: '2048',
            height: '1152',
            media: '(min-width: 1024px)',
          },
          caption: {
            title: 'Image one title',
            description: 'Image one description',
            copyright: 'Photograph name'
          }
        },
        {
          image: {
            src: 'https://picsum.photos/1024/768/?image=28',
            width: '1024',
            height: '768',
            alt: 'image name',
          },
          source: {
            srcset: 'https://picsum.photos/2048/1152/?image=28',
            width: '2048',
            height: '1152',
            media: '(min-width: 1024px)',
          },
          caption: {
            title: 'Image two, title without description',
            copyright: 'Photograph name'
          }
        },
        {
          image: {
            src: 'https://picsum.photos/1024/768/?image=1045',
            width: '1024',
            height: '768',
            alt: 'image name',
          },
          source: {
            srcset: 'https://picsum.photos/2048/1152/?image=1045',
            width: '2048',
            height: '1152',
            media: '(min-width: 1024px)',
          },
          caption: {
            description: 'Image three, description only',
            copyright: 'Photograph name'
          }
        },
      ],
      tags:[
        { label: 'Datenmodell', url: '#' },
        { label: 'Energie', url: '#' },
        { label: 'INTERLIS', url: '#' },
        { label: 'GKG/KOGIS', url: '#' },
        { label: 'Datenmodell', url: '#' },
        { label: 'Energie', url: '#' },
        { label: 'INTERLIS', url: '#' },
        { label: 'GKG/KOGIS', url: '#' }
      ]
    }
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
  },
}
</script>
