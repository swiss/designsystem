<template>
  <client-only>
    <div>
      <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
      <header id="main-header">
        <a href="#main-content" class="skip-to-content">Skip to main content</a>
        <TopBar :isOpen="false" />
        <TopHeader />
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
        <Hero type="default" :meta-infos="['Veranstaltung']">
          <template v-slot:title>
            Symposium Extremhochwasser in der Schweiz
          </template>
        </Hero>
        <section class="section section--py">
          <div class="container container--grid gap--responsive">
            <div class="container__main vertical-spacing">
              <figure>
                <picture>
                  <source
                    srcset="https://picsum.photos/1600/900"
                    media="(min-width: 800px)"
                  />
                  <img src="https://picsum.photos/1600/900" alt="cat" />
                </picture>
              </figure>

              <div class="container__mobile">
                <!-- mobile only -->
                <div class="box">
                  <h2 class="sr-only">Event Date</h2>
                  <div class="date" lang="de">
                    <div class="date__wrapper">
                      <div class="date__day">10</div>
                      <div class="date__month">Apr</div>
                    </div>
                    <div class="date__separator">–</div>
                    <div class="date__wrapper">
                      <div class="date__day">11</div>
                      <div class="date__month">Apr</div>
                      <div class="date__year">2023</div>
                    </div>
                  </div>
                  <div class="hours">
                    Friday 18:00 – 21:00<br />
                    Saturday 10:00 – 17:00
                  </div>
                </div>
                <div class="box">
                  <Contact
                    address1="Museum Cerny"
                    street="Stadtbachstrasse 8A"
                    zip="3012"
                    city="Bern"
                    country="CH"
                    mapLink="www.google.com/maps"
                    website="www.cerny.ch"
                  />
                </div>
                <div class="box">
                  <Btn
                    to="#"
                    variant="filled"
                    icon-pos="right"
                    icon="ArrowRight"
                    label="Jetzt anmelden"
                  />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor.
              </p>
              <p>
                Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor.
              </p>

              <h2 class="h2">Veranstaltungsdetails</h2>

              <div>
                <InfoBlock title="Teilnahme&shy;bedingungen" headingLevel="h3">
                  <div>Anmeldung zwingend.</div>
                  <div>Anmeldefrist: 10. Dezember 2023</div>
                </InfoBlock>

                <InfoBlock title="Veranstaltungs&shy;sprache" headingLevel="h3">
                  <div>Deutsch</div>
                </InfoBlock>

                <InfoBlock title="Referenten/-innen" headingLevel="h3">
                  <Authors :authors="authors" bare />
                </InfoBlock>

                <InfoBlock title="Kontaktadresse" headingLevel="h3">
                  <Contact
                    title="Geoportal"
                    address1="c/o"
                    address2="Bundesamt für Landestopografie swisstopo"
                    address3="KOGIS (Koordination, Geoinformation und Services )"
                    street="Seftigenstrasse 264"
                    zip="3084"
                    city="Wabern"
                    country="CH"
                    phone="+41 31 123 45 67"
                    fax="+41 31 123 45 67"
                    email="info@geo.admin.ch"
                    website="www.geo.admin.ch"
                    :openingHours="false"
                    :contactForm="true"
                  />
                </InfoBlock>

                <InfoBlock title="Preise" headingLevel="h3">
                  <table class="table table--bare">
                    <caption class="sr-only">
                      Prices entries
                    </caption>
                    <tbody>
                      <tr>
                        <th scope="row">Children under 12</th>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <th scope="row">Students under 18, with ID</th>
                        <td>CHF 10.–</td>
                      </tr>
                      <tr>
                        <th scope="row">AHV</th>
                        <td>CHF 10.–</td>
                      </tr>
                      <tr>
                        <th scope="row">Adults</th>
                        <td>CHF 15.–</td>
                      </tr>
                      <tr>
                        <th scope="row">Families</th>
                        <td>CHF 30.–</td>
                      </tr>
                      <tr>
                        <th scope="row">Handicapped visitors</th>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <th scope="row">Swiss Museums pass</th>
                        <td>Free</td>
                      </tr>
                    </tbody>
                  </table>
                </InfoBlock>

                <InfoBlock title="Unterlagen und Dokumente" headingLevel="h3">
                  <ul class="download-items -mt-4">
                    <li>
                      <DownloadItem
                        headingLevel="h3"
                        :filename="'dummy.pdf'"
                        title="Programm"
                        :url="'../../../static/documents/dummy.pdf'"
                        :type="'PDF'"
                        :date="'22.01.2022'"
                      />
                    </li>
                    <li>
                      <DownloadItem
                        headingLevel="h3"
                        :filename="'image.png'"
                        title="Handouts"
                        description=""
                        :url="'../../../static/images/html-structure.png'"
                        :type="'PNG'"
                        :date="'22.01.2022'"
                      />
                    </li>
                  </ul>
                </InfoBlock>
              </div>

              <div>
                <h2 class="h2">FAQ</h2>
                <Accordion id="100">
                  <AccordionItem
                    id="10"
                    title="Was sind Geodaten?"
                    headingLevel="h3"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    id="11"
                    title="Was sind Geoinformationen?"
                    headingLevel="h3"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor
                    </p>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 class="h2">Themen</h2>
                <RelatedTags :tags="tags" bare></RelatedTags>
              </div>
            </div>
            <div class="container__aside hidden md:block">
              <div id="aside-content" :class="computedAsideContainerClass">
                <!-- desktop only -->
                <div class="box">
                  <h2 class="sr-only">Event Date</h2>
                  <div class="date" lang="de">
                    <div class="date__wrapper">
                      <div class="date__day">10</div>
                      <div class="date__month">Apr</div>
                    </div>
                    <div class="date__separator">–</div>
                    <div class="date__wrapper">
                      <div class="date__day">11</div>
                      <div class="date__month">Apr</div>
                      <div class="date__year">2023</div>
                    </div>
                  </div>
                  <div class="hours">
                    Friday 18:00 – 21:00<br />
                    Saturday 10:00 – 17:00
                  </div>
                </div>
                <div class="box">
                  <Contact
                    address1="Museum Cerny"
                    street="Stadtbachstrasse 8A"
                    zip="3012"
                    city="Bern"
                    country="CH"
                    mapLink="www.google.com/maps"
                    website="www.cerny.ch"
                  />
                </div>
                <div class="box">
                  <Btn
                    to="#"
                    variant="filled"
                    icon-pos="right"
                    icon="ArrowRight"
                    label="Jetzt anmelden"
                  />
                </div>
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
      <footer class="footer" id="main-footer">
        <FooterInformation />
        <FooterNavigation />
      </footer>
    </div>
  </client-only>
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
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
export default {
  name: 'detailPageEvent',
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
  async mounted() {
    await this.$nextTick()
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
