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
          <h1 id="glossary-title" class="h1">Glossar</h1>
          <div id="outer-search-container">
            <div id="search-container">
              <div id="inner-search-container">
                <div class="search search--large search--page-result">
                  <div class="search__group">
                    <input
                      type="search"
                      id="search-input"
                      label="GLossar filtern"
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
                      label="GLossar filtern"
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
                <div class="glossary__filters">
                  <CarouselGlossaryFilter
                    :badgeClicked="setActiveFilter"
                    :activeFilter="activeFilter"
                    :id="carouselId"
                  />
                  <GlossaryFilter
                    :badgeClicked="setActiveFilter"
                    :activeFilter="activeFilter"
                  />
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
          <div class="glossary-results">
            <div
              class="glossary-results__header"
              v-if="loadLimitedResults.length !== 0 && !isLoading"
            >
              <div class="glossary-results__header__left">
                <strong>{{ foundEntries }}</strong
                >Einträge
              </div>
              <div class="glossary-results__header__right">
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
            <GlossarResultList
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
              iconPos="left"
              label="Mehr laden"
              class="btn--back"
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
import Btn from '../components/ch/components/Btn'
import CarouselGlossaryFilter from '../components/ch/components/CarouselGlossaryFilter.vue'
import GlossarResultList from '../components/ch/components/GlossarResultList.vue'
import GlossaryFilter from '../components/ch/components/GlossaryFilter.vue'
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
  name: 'Glossar',
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
    CarouselGlossaryFilter,
    GlossaryFilter,
    Select,
    GlossarResultList,
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
      resultItems: [
        {
          title: '1. Platziert',
          description: 'Der 1. Platziert ist der Gewinner eines Wettbewerbs.',
        },
        {
          title: 'Ahorn',
          description:
            'Der Ahorn ist ein Laubbaum. Siehe Wikipedia. <a href="https://de.wikipedia.org/wiki/Ahorne">Ahorn</a>',
        },
        {
          title: 'Birne',
          description: 'Die Birne ist eine Frucht.',
        },
        {
          title: 'Eiche',
          description: 'Die Eiche ist ein Laubbaum.',
        },
        {
          title: 'Fuchs',
          description: 'Der Fuchs ist ein Säugetier.',
        },
        {
          title: 'Garten',
          description: 'Der Garten ist ein Ort zum Anpflanzen von Pflanzen.',
        },
        {
          title: 'Hund',
          description: 'Der Hund ist ein Haustier.',
        },
        {
          title: 'Igel',
          description: 'Der Igel ist ein kleines Säugetier mit Stacheln.',
        },
        {
          title: 'Jagd',
          description: 'Die Jagd ist die Suche nach wilden Tieren.',
        },
        {
          title: 'Kuh',
          description: 'Die Kuh ist ein Nutztier.',
        },
        {
          title: 'Löwe',
          description: 'Der Löwe ist ein Raubtier.',
        },
        {
          title: 'Maus',
          description: 'Die Maus ist ein kleines Nagetier.',
        },
        {
          title: 'Natur',
          description: 'Die Natur umfasst alles, was lebt und existiert.',
        },
        {
          title: 'Ozean',
          description: 'Der Ozean ist ein großer Salzwasserbereich.',
        },
        {
          title: 'Pflanze',
          description:
            'Die Pflanze ist ein lebendes Organismus, der Photosynthese betreibt.',
        },
        {
          title: 'Qualle',
          description: 'Die Qualle ist ein wirbelloses Meerestier.',
        },
        {
          title: 'Rabe',
          description: 'Der Rabe ist ein schwarzer Vogel.',
        },
        {
          title: 'Schaf',
          description: 'Das Schaf ist ein Nutztier, das Wolle produziert.',
        },
        {
          title: 'Tiger',
          description: 'Der Tiger ist ein großer Raubkatze.',
        },
        {
          title: 'Uhu',
          description: 'Der Uhu ist eine große Eulenart.',
        },
        {
          title: 'Vogel',
          description: 'Der Vogel ist ein fliegendes Tier mit Federn.',
        },
        {
          title: 'Wal',
          description: 'Der Wal ist ein großes Meeressäugetier.',
        },
        {
          title: 'Xylophon',
          description:
            'Das Xylophon ist ein Musikinstrument mit Holzklangplatten.',
        },
        {
          title: 'Yoga',
          description: 'Yoga ist eine körperliche und geistige Übungsmethode.',
        },
        {
          title: 'Zebra',
          description: 'Das Zebra ist ein afrikanisches Huftier mit Streifen.',
        },
        {
          title: 'Apfel',
          description: 'Der Apfel ist eine Frucht.',
        },
        {
          title: 'Banane',
          description: 'Die Banane ist eine tropische Frucht.',
        },
        {
          title: 'Cherry',
          description: 'Die Kirsche ist eine kleine rote Frucht.',
        },
        {
          title: 'Delfin',
          description: 'Der Delfin ist ein intelligentes Meeressäugetier.',
        },
        {
          title: 'Elefant',
          description: 'Der Elefant ist ein großes Säugetier mit Rüssel.',
        },
        {
          title: 'Frosch',
          description: 'Der Frosch ist ein Amphib.',
        },
        {
          title: 'Giraffe',
          description:
            'Die Giraffe ist ein hohes afrikanisches Tier mit langem Hals.',
        },
        {
          title: 'Hai',
          description: 'Der Hai ist ein großer Raubfisch.',
        },
        {
          title: 'Ibis',
          description: 'Der Ibis ist ein Vogel mit langem Schnabel.',
        },
        {
          title: 'Jaguar',
          description: 'Der Jaguar ist eine große Raubkatze.',
        },
        {
          title: 'Krokodil',
          description: 'Das Krokodil ist ein großes Reptil.',
        },
        {
          title: 'Löwenzahn',
          description: 'Der Löwenzahn ist eine gelbe Blume.',
        },
        {
          title: 'Mango',
          description: 'Die Mango ist eine tropische Frucht.',
        },
        {
          title: 'Nashorn',
          description: 'Das Nashorn ist ein großes Säugetier mit Horn.',
        },
        {
          title: 'Orchidee',
          description: 'Die Orchidee ist eine exotische Blume.',
        },
        {
          title: 'Pinguin',
          description: 'Der Pinguin ist ein flugunfähiger Vogel.',
        },
        {
          title: 'Quokka',
          description: 'Das Quokka ist ein kleines Beuteltier.',
        },
        {
          title: 'Rose',
          description: 'Die Rose ist eine duftende Blume.',
        },
        {
          title: 'Schmetterling',
          description: 'Der Schmetterling ist ein fliegendes Insekt.',
        },
        {
          title: 'Tukan',
          description: 'Der Tukan ist ein bunter Vogel mit großem Schnabel.',
        },
        {
          title: 'Vulkan',
          description: 'Der Vulkan ist ein Berg, der Lava und Asche ausstößt.',
        },
        {
          title: 'Walross',
          description:
            'Das Walross ist ein großes Meeressäugetier mit Stoßzähnen.',
        },
        {
          title: 'Xerophyte',
          description:
            'Die Xerophyte sind Pflanzen, die an trockene Bedingungen angepasst sind.',
        },
        {
          title: 'Yeti',
          description:
            'Der Yeti ist ein legendäres Wesen, das in den Bergen lebt.',
        },
        {
          title: 'Zitrone',
          description: 'Die Zitrone ist eine saure Zitrusfrucht.',
        },
        {
          title: 'Ananas',
          description: 'Die Ananas ist eine tropische Frucht.',
        },
        {
          title: 'Bambus',
          description: 'Der Bambus ist eine schnell wachsende Pflanze.',
        },
        {
          title: 'Cobra',
          description: 'Die Cobra ist eine giftige Schlange.',
        },
        {
          title: 'Dattel',
          description: 'Die Dattel ist eine süße Frucht.',
        },
        {
          title: 'Esel',
          description: 'Der Esel ist ein Haustier und Arbeitstier.',
        },
        {
          title: 'Flamingo',
          description: 'Der Flamingo ist ein rosa Vogel mit langen Beinen.',
        },
        {
          title: 'Gazelle',
          description: 'Die Gazelle ist ein schnelles afrikanisches Tier.',
        },
        {
          title: 'Hibiskus',
          description: 'Der Hibiskus ist eine bunte Blume.',
        },
        {
          title: 'Igitt',
          description: 'Igitt ist ein Ausdruck des Ekels.',
        },
        {
          title: 'Jagdhund',
          description:
            'Der Jagdhund ist ein speziell ausgebildeter Hund für die Jagd.',
        },
        {
          title: 'Kaktus',
          description: 'Der Kaktus ist eine stachelige Pflanze.',
        },
        {
          title: 'Lama',
          description: 'Das Lama ist ein südamerikanisches Kameltier.',
        },
        {
          title: 'Maulwurf',
          description: 'Der Maulwurf ist ein grabendes Säugetier.',
        },
        {
          title: 'Nashornkäfer',
          description: 'Der Nashornkäfer ist ein großer Käfer mit Horn.',
        },
        {
          title: 'Orang-Utan',
          description: 'Der Orang-Utan ist ein Menschenaffe.',
        },
        {
          title: 'Papagei',
          description: 'Der Papagei ist ein bunter Vogel, der sprechen kann.',
        },
        {
          title: 'Qualm',
          description: 'Qualm ist Rauch oder Dampf.',
        },
        {
          title: 'Raubvogel',
          description: 'Der Raubvogel ist ein Vogel, der andere Tiere jagt.',
        },
        {
          title: 'Schnecke',
          description: 'Die Schnecke ist ein langsam kriechendes Weichtier.',
        },
        {
          title: 'Einhorn',
          description:
            'Das Einhorn ist ein mythologisches Tier mit einem Horn auf der Stirn.',
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
    scroolToTop() {
      if (this.useStickyPlaceholder) {
        const scrollTarget = document.getElementById('glossary-title')

        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    resizeWindow() {
      this.screenSize = document.body.clientWidth
      const searchContainer = document.getElementById('inner-search-container')
      const outerSearchContainer = document.getElementById(
        'outer-search-container'
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
        'inner-search-container'
      )
      if (this.initialSearchContainerOffset < window.scrollY) {
        this.useStickyPlaceholder = true
        await this.$nextTick()
        const stickyPlaceholder = document.getElementById(
          'sticky-search-container-placeholder'
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
            this.loadedResults - count
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
            (elm) => elm.filter === res.title.charAt(0).toLowerCase()
          ).length > 0
        ) {
          const resultIndex = result.findIndex(
            (elm) => elm.filter === res.title.charAt(0).toLowerCase()
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
