<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="getMobileMenuIsOpen()" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
    </header>
    <main id="main-content">
      <section class="section section--default bg--secondary-50">
        <div class="container">
          <h1 id="index-page-title" class="h1">Reisen ins Ausland</h1>
          <div id="outer-search-container">
            <div id="search-container">
              <div id="inner-search-container">
                <div class="search search--large search--page-result">
                  <div class="search__group">
                    <input
                      type="search"
                      id="search-input"
                      label="Reiseländer filtern"
                      placeholder="Suchbegriff eingeben"
                      autocomplete="off"
                      v-model="searchTerm"
                    />
                    <div class="btn" v-if="isLoading">
                      <SvgIcon
                        icon="Spinner"
                        size="lg"
                        class="btn__icon icon--spin"
                      />
                    </div>
                    <Btn
                      v-else-if="!searchTerm"
                      label="Reiseländer filtern"
                      icon="Filter"
                      icon-pos="only"
                      variant="bare"
                      size="lg"
                    />
                    <Btn
                      v-else-if="searchTerm"
                      label="Eingabe löschen"
                      icon="CancelCircle"
                      icon-pos="only"
                      variant="bare"
                      size="lg"
                      @emitClick="searchTerm = ''"
                    />
                  </div>
                </div>
                <div class="index-page__filters">
                  <CarouselBadgeFilter
                    :badgeClicked="setActiveFilter"
                    :activeFilter="activeFilter"
                    :disabledFilters="disabledFilters"
                    :id="carouselId"
                  />
                  <BadgeFilter
                    :badgeClicked="setActiveFilter"
                    :activeFilter="activeFilter"
                    :disabledFilters="disabledFilters"
                  />
                  <div
                    v-if="showFilterSection"
                    class="index-page__filters__drawer-section"
                  >
                    <Btn
                      :label="
                        filtersAreOpen ? 'Filter ausblenden' : 'Filter anzeigen'
                      "
                      variant="bare"
                      size="sm"
                      icon-pos="left"
                      icon="ChevronDown"
                      :class="filtersAreOpen ? ' btn--icon-180' : ''"
                      @click.native="toggleFilterSection()"
                    />
                    <div
                      v-if="filtersAreOpen"
                      class="index-page__filters__drawer"
                    >
                      <Select
                        variant="outline"
                        size="sm"
                        id="select-1"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected="">Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        variant="outline"
                        size="sm"
                        id="select-2"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected="">Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        variant="outline"
                        size="sm"
                        id="select-3"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected="">Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        variant="outline"
                        size="sm"
                        id="select-4"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected="">Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        variant="outline"
                        size="sm"
                        id="select-5"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected="">Option</option>
                        <option>...</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- invisible Placeholder to avoid jump when navigation is set to sticky -->
          <div
            v-if="useStickyPlaceholder"
            id="sticky-search-container-placeholder"
          />
        </div>
      </section>
      <section class="section section--default">
        <div class="container gap--responsive">
          <div class="index-page-results">
            <div
              class="index-page-results__header"
              v-if="loadLimitedResults.length !== 0 && !isLoading"
            >
              <div class="index-page-results__header__left">
                <strong>{{ foundEntries }}</strong
                >Länder
              </div>
              <div class="index-page-results__header__right">
                <Select
                  variant="outline"
                  bare
                  size="sm"
                  id="select-6"
                  name="select-name"
                  @select="setSorting"
                >
                  <option disabled="" selected="">Sortieren</option>
                  <option selected value="a-z">Alphabetisch (A-Z)</option>
                  <option value="z-a">Alphabetisch (Z-A)</option>
                </Select>
              </div>
            </div>
            <IndexPageResultList
              v-if="!isLoading && loadLimitedResults.length > 0"
              :resultItems="loadLimitedResults"
              :searchTerm="searchTerm"
            />
            <div v-if="isLoading" class="my-16">
              <h2 class="sr-only">Resultate werden geladen</h2>
              <SvgIcon icon="Spinner" size="2xl" class="icon--spin" />
            </div>
            <div
              v-if="loadLimitedResults.length === 0 && !isLoading"
              class="search-results__no-results"
            >
              <h2 class="text--xl">
                Die Suche nach
                <span class="text--bold">{{ searchTerm }}</span> ergab keine
                Treffer.
              </h2>
              <h3 class="h4">Tipps zur Suche</h3>
              <ul class="list list--default">
                <li>Überprüfen Sie die Schreibweise Ihres Suchbegriffes</li>
                <li>Verwenden Sie einen anderen bzw. allgemeineren Begriff</li>
                <li>Verwenden Sie ggf. weniger Suchbegriffe</li>
              </ul>
            </div>
          </div>
          <div
            class="load-more-container"
            v-if="loadLimitedResults.length !== 0 && !isLoading"
          >
            <Btn
              variant="outline"
              size="sm"
              label="Mehr laden"
              :disabled="!canLoadMore"
              :fullWidth="screenSize < 1024"
              @emitClick="handleLoadMore()"
            />
          </div>
        </div>
      </section>
    </main>
    <footer class="footer" id="main-footer">
      <FooterInformation />
      <FooterNavigation />
    </footer>
  </div>
</template>
<script>
import BadgeFilter from '../components/ch/components/BadgeFilter.vue'
import Btn from '../components/ch/components/Btn'
import CarouselBadgeFilter from '../components/ch/components/CarouselBadgeFilter.vue'
import IndexPageResultList from '../components/ch/components/IndexPageResultList.vue'
import Select from '../components/ch/components/Select.vue'
import SvgIcon from '../components/ch/components/SvgIcon'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
const { v4: uuidv4 } = require('uuid')

export default {
  name: 'IndexPage',
  components: {
    FooterInformation,
    FooterNavigation,
    DesktopMenu,
    MobileMenu,
    TopBar,
    TopHeader,
    AlterBodyClasses,
    SvgIcon,
    Btn,
    CarouselBadgeFilter,
    BadgeFilter,
    Select,
    IndexPageResultList,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    useStickySearch: {
      type: Boolean,
      default: false,
    },
    showFilterSection: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      useStickyPlaceholder: false,
      initialSearchContainerOffset: 0,
      containerHeight: 0,
      sorting: 'a-z',
      screenSize: 0,
      loadedResults: 15,
      carouselId: uuidv4(),
      activeFilter: 'all',
      searchTerm: '',
      filtersAreOpen: false,
      filters: [
        'numbric',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ],
      resultItems: [
        {
          title: 'Afganistan',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '10. August 2021'],
          footerInfos: ['PDF', '5.4 MB', '16. Oktober 2021'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Australien',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '23. januar 2022'],
          footerInfos: ['PDF', '4.1 MB', '10. Oktober 2023'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Brasilien',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '05. März 2020'],
          footerInfos: ['PDF', '3.9 MB', '08. April 2020'],
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Irland',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '30. Dezember 2019'],
          footerInfos: ['PDF', '1.8 MB', '30. Dezember 2019'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Kanada',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '15. Februar 2021'],
          footerInfos: ['PDF', '2.3 MB', '20. Februar 2021'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Deutschland',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '12. März 2022'],
          footerInfos: ['PDF', '3.2 MB', '18. März 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Japan',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '22. April 2020'],
          footerInfos: ['PDF', '4.5 MB', '28. April 2020'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Indien',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '05. Mai 2021'],
          footerInfos: ['PDF', '3.7 MB', '10. Mai 2021'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'China',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '18. Juni 2022'],
          footerInfos: ['PDF', '4.0 MB', '25. Juni 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Russland',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '10. Juli 2021'],
          footerInfos: ['PDF', '5.1 MB', '15. Juli 2021'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Südafrika',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '25. August 2020'],
          footerInfos: ['PDF', '2.8 MB', '30. August 2020'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Neuseeland',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '12. September 2021'],
          footerInfos: ['PDF', '3.4 MB', '18. September 2021'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Spanien',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '05. Oktober 2022'],
          footerInfos: ['PDF', '4.7 MB', '10. Oktober 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Italien',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '15. November 2021'],
          footerInfos: ['PDF', '3.6 MB', '20. November 2021'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Frankreich',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '20. Dezember 2021'],
          footerInfos: ['PDF', '4.2 MB', '25. Dezember 2021'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Schweiz',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '10. Januar 2022'],
          footerInfos: ['PDF', '3.9 MB', '15. Januar 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Norwegen',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '05. Februar 2022'],
          footerInfos: ['PDF', '4.3 MB', '10. Februar 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Schweden',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '15. März 2022'],
          footerInfos: ['PDF', '4.1 MB', '20. März 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Mexiko',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '10. April 2022'],
          footerInfos: ['PDF', '3.8 MB', '15. April 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Argentinien',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '20. Mai 2022'],
          footerInfos: ['PDF', '4.0 MB', '25. Mai 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Griechenland',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '10. Juli 2022'],
          footerInfos: ['PDF', '4.5 MB', '15. Juli 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
        {
          title: 'Thailand',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          metaInfos: ['Blogpost', '20. August 2022'],
          footerInfos: ['PDF', '4.6 MB', '25. August 2022'],
          image: 'https://picsum.photos/400/200',
          footerAction: 'https://www.google.ch',
        },
      ],
    }
  },
  mounted() {
    if (this.useStickySearch) {
      window.addEventListener('scroll', this.handleScroll)
      this.resizeWindow()
      window.addEventListener('resize', this.resizeWindow)
    } else {
      this.setScreenSize()
      window.addEventListener('resize', this.setScreenSize)
    }
  },
  watch: {
    searchTerm() {
      this.scroolToTop()
    },
  },
  methods: {
    async toggleFilterSection() {
      this.filtersAreOpen = !this.filtersAreOpen
      await this.$nextTick()
      this.resizeWindow()
    },
    scroolToTop() {
      if (this.useStickyPlaceholder) {
        const scrollTarget = document.getElementById('index-page-title')

        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    resizeWindow() {
      this.screenSize = document.body.clientWidth
      const searchContainer = document.getElementById('inner-search-container')
      const outerSearchContainer = document.getElementById(
        'outer-search-container',
      )
      const mainHeader = document.getElementById('main-header')
      this.initialSearchContainerOffset =
        outerSearchContainer.offsetTop + mainHeader?.clientHeight - 16
      this.containerHeight = searchContainer.clientHeight
      this.handleScroll()
    },
    setScreenSize() {
      this.screenSize = document.body.clientWidth
    },
    async handleScroll() {
      const searchContainer = document.getElementById('search-container')
      const innerSearchContainer = document.getElementById(
        'inner-search-container',
      )
      if (this.initialSearchContainerOffset < window.scrollY) {
        this.useStickyPlaceholder = true
        await this.$nextTick()
        const stickyPlaceholder = document.getElementById(
          'sticky-search-container-placeholder',
        )
        stickyPlaceholder.style.height = `${this.containerHeight}px`

        searchContainer.classList.add('sticky-search-container')
        innerSearchContainer.classList.add('container')
      } else {
        this.useStickyPlaceholder = false
        searchContainer.classList.remove('sticky-search-container')
        innerSearchContainer.classList.remove('container')
      }
    },
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    },
    setActiveFilter(value) {
      this.activeFilter = value
      if (this.useStickySearch) {
        this.scroolToTop()
      }
    },
    setSorting(value) {
      this.sorting = value
    },
    handleLoadMore() {
      if (this.loadedResults >= this.foundEntries) {
        return
      }
      this.loadedResults + 15 < this.foundEntries
        ? (this.loadedResults += 15)
        : (this.loadedResults = this.foundEntries)
    },
  },
  computed: {
    disabledFilters() {
      const startingLetters = []
      this.resultItems.forEach((elm) => {
        const start = elm.title.charAt(0)
        if (!startingLetters.includes(start)) {
          if (!isNaN(elm.title.charAt(0))) {
            startingLetters.push('numbric')
          } else {
            startingLetters.push(start.toLowerCase())
          }
        }
      })

      return this.filters.filter((elm) => !startingLetters.includes(elm))
    },
    canLoadMore() {
      return (
        this.loadLimitedResults?.reduce((acc, elm) => {
          return acc + elm.results.length
        }, 0) != this.foundEntries
      )
    },
    foundEntries() {
      return this.limitedResultItems?.reduce((acc, elm) => {
        return acc + elm.results.length
      }, 0)
    },

    loadLimitedResults() {
      let result = []
      let count = 0
      const values = Object.values(this.sortedResultItems)
      for (let i = 0; i < values.length; i++) {
        if (count + values[i].results.length <= this.loadedResults) {
          result.push(values[i])
          count += values[i].results.length
        } else {
          let newResults = Object.values(values)[i].results.slice(
            0,
            this.loadedResults - count,
          )
          if (newResults.length > 0) {
            result.push({
              filter: values[i].filter,
              results: newResults,
            })
          }
          break
        }
      }
      return result
    },

    sortedResultItems() {
      return {
        ...this.limitedResultItems.sort((a, b) => {
          const elementA = a.filter
          const elementB = b.filter

          if (this.sorting === 'a-z') {
            if (elementA < elementB) {
              return -1
            }
            if (elementA > elementB) {
              return 1
            }
          } else {
            if (elementA > elementB) {
              return -1
            }
            if (elementA < elementB) {
              return 1
            }
          }
          return 0
        }),
      }
    },
    limitedResultItems() {
      let filteredResults = this.resultItems.filter((elm) => {
        if (this.activeFilter === 'all') {
          return elm
        }
        if (this.activeFilter === 'numbric') {
          return !isNaN(elm.title.charAt(0))
        } else {
          return this.activeFilter === elm.title.charAt(0).toLowerCase()
        }
      })

      let result = []

      filteredResults.forEach((res) => {
        if (
          result.filter(
            (elm) => elm.filter === res.title.charAt(0).toLowerCase(),
          ).length > 0
        ) {
          const resultIndex = result.findIndex(
            (elm) => elm.filter === res.title.charAt(0).toLowerCase(),
          )
          result[resultIndex].results.push(res)
        } else {
          if (!isNaN(res.title.charAt(0))) {
            result.push({
              filter: '0-9',
              results: [res],
            })
          } else {
            result.push({
              filter: res.title.charAt(0).toLowerCase(),
              results: [res],
            })
          }
        }
      })

      if (this.searchTerm) {
        result.forEach((elm) => {
          elm.results = elm.results.filter((res) => {
            return (
              res.description
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase()) ||
              res.title.toLowerCase().includes(this.searchTerm.toLowerCase())
            )
          })
        })
      }
      return result.filter((elm) => elm.results.length > 0)
    },
  },
}
</script>
