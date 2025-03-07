<template>
  <div>
    <AlterBodyClasses :isMobileMenuOpen="layoutStore.mobileMenuIsOpen" />
    <header id="main-header">
      <a href="#main-content" class="skip-to-content">Skip to main content</a>
      <TopBar :isOpen="false" />
      <TopHeader />
      <DesktopMenu :showActiveNavigation="true" />
      <MobileMenu :showActiveNavigation="true" />
    </header>
    <main id="main-content">
      <section class="section section--default bg--accent-01">
        <div class="container">
          <h1 id="glossary-title" class="h1">Glossar</h1>
          <div id="outer-search-container">
            <div id="search-container">
              <div id="inner-search-container">
                <div class="search search--large search--page-result">
                  <div class="search__group">
                    <input
                      id="search-input"
                      v-model="searchTerm"
                      type="search"
                      label="GLossar filtern"
                      placeholder="Suchbegriff eingeben"
                      autocomplete="off"
                    />
                    <div v-if="isLoading" class="btn">
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
                      @emit-click="searchTerm = ''"
                    />
                  </div>
                </div>
                <div class="glossary__filters">
                  <CarouselBadgeFilter
                    :id="carouselId"
                    :badgeClicked="setActiveFilter"
                    :activeFilter="activeFilter"
                    :disabledFilters="disabledFilters"
                  />
                  <BadgeFilter
                    :badgeClicked="setActiveFilter"
                    :activeFilter="activeFilter"
                    :disabledFilters="disabledFilters"
                  />
                  <div
                    v-if="showFilterSection"
                    class="glossary__filters__drawer-section"
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
                      @click="toggleFilterSection()"
                    />
                    <div
                      v-if="filtersAreOpen"
                      class="glossary__filters__drawer"
                    >
                      <Select
                        id="select-1"
                        size="sm"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected>Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        id="select-2"
                        size="sm"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected>Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        id="select-3"
                        size="sm"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected>Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        id="select-4"
                        size="sm"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected>Option</option>
                        <option>...</option>
                      </Select>
                      <Select
                        id="select-5"
                        size="sm"
                        name="select-name"
                        label="Filter name"
                      >
                        <option selected>Option</option>
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
          <div class="glossary-results">
            <div
              v-if="loadLimitedResults.length !== 0 && !isLoading"
              class="glossary-results__header"
            >
              <div class="glossary-results__header__left">
                <strong>{{ foundEntries }}</strong
                >Einträge
              </div>
              <div class="glossary-results__header__right">
                <Select
                  id="select-6"
                  bare
                  size="sm"
                  name="select-name"
                  @select="setSorting"
                >
                  <option disabled selected>Sortieren</option>
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
            v-if="loadLimitedResults.length !== 0 && !isLoading"
            class="load-more-container"
          >
            <Btn
              variant="outline"
              size="sm"
              label="Mehr laden"
              :disabled="!canLoadMore"
              :fullWidth="screenSize < 1024"
              @emit-click="handleLoadMore()"
            />
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
import BadgeFilter from '../components/ch/components/BadgeFilter.vue'
import Btn from '../components/ch/components/Btn.vue'
import CarouselBadgeFilter from '../components/ch/components/CarouselBadgeFilter.vue'
import GlossarResultList from '../components/ch/components/GlossarResultList.vue'
import Select from '../components/ch/components/Select.vue'
import SvgIcon from '../components/ch/components/SvgIcon.vue'
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import { v4 as uuidv4 } from 'uuid'
import { reactive, ref, computed, watch, onMounted, nextTick } from 'vue'
import { useLayoutStore } from '../store/layout'
import type { GlossaryResultItem, GlossaryResult } from '../types'

const layoutStore = useLayoutStore()

const useStickyPlaceholder = ref(false)
const initialSearchContainerOffset = ref(0)
const containerHeight = ref(0)
const sorting = ref('a-z')
const screenSize = ref(0)
const loadedResults = ref(15)
const carouselId = ref(uuidv4())
const activeFilter = ref('all')
const searchTerm = ref('')
const filtersAreOpen = ref(false)
const filters = reactive([
  'numeric',
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
])
const resultItems = reactive([
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
    title: 'Garten',
    description: 'Der Garten ist ein Ort zum Anpflanzen von Pflanzen.',
  },
  {
    title: 'Hund',
    description: 'Der Hund ist ein Haustier.',
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
    description: 'Das Xylophon ist ein Musikinstrument mit Holzklangplatten.',
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
    title: 'Elefant',
    description: 'Der Elefant ist ein großes Säugetier mit Rüssel.',
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
    description: 'Das Walross ist ein großes Meeressäugetier mit Stoßzähnen.',
  },
  {
    title: 'Xerophyte',
    description:
      'Die Xerophyte sind Pflanzen, die an trockene Bedingungen angepasst sind.',
  },
  {
    title: 'Yeti',
    description: 'Der Yeti ist ein legendäres Wesen, das in den Bergen lebt.',
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
    title: 'Esel',
    description: 'Der Esel ist ein Haustier und Arbeitstier.',
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
] as GlossaryResultItem[])

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: () => false,
  },
  useStickySearch: {
    type: Boolean,
    default: () => false,
  },
  showFilterSection: {
    type: Boolean,
    default: false,
  },
})

const disabledFilters = computed(() => {
  const startingLetters: string[] = []
  resultItems.forEach((elm) => {
    const start = elm.title.charAt(0)
    if (!startingLetters.includes(start)) {
      if (!isNaN(Number(start))) {
        startingLetters.push('numeric')
      } else {
        startingLetters.push(start.toLowerCase())
      }
    }
  })

  return filters.filter((elm) => !startingLetters.includes(elm))
})

const canLoadMore = computed(() => {
  return (
    loadLimitedResults.value.reduce((acc, elm) => {
      return acc + elm.results.length
    }, 0) != foundEntries.value
  )
})

const foundEntries = computed(() => {
  return limitedResultItems.value?.reduce((acc, elm) => {
    return acc + elm.results.length
  }, 0)
})

const loadLimitedResults = computed(() => {
  const result: GlossaryResult[] = []
  let count = 0
  const values = sortedResultItems.value
  for (let i = 0; i < values.length; i++) {
    if (count + values[i].results.length <= loadedResults.value) {
      result.push(values[i])
      count += values[i].results.length
    } else {
      const newResults = Object.values(values)[i].results.slice(
        0,
        loadedResults.value - count,
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
})

const sortedResultItems = computed(() => {
  const tempLimitedResultsItems = limitedResultItems
  return [
    ...tempLimitedResultsItems.value.sort((a, b) => {
      const elementA = a.filter
      const elementB = b.filter

      if (sorting.value === 'a-z') {
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
  ]
})

const limitedResultItems = computed(() => {
  const filteredResults = resultItems.filter((elm) => {
    if (activeFilter.value === 'all') {
      return elm
    }
    const start = elm.title.charAt(0)
    if (activeFilter.value === 'numeric') {
      return !isNaN(Number(start))
    } else {
      return activeFilter.value === start.toLowerCase()
    }
  })

  const result: GlossaryResult[] = []

  filteredResults.forEach((res) => {
    const start = res.title.charAt(0)
    if (result.filter((elm) => elm.filter === start.toLowerCase()).length > 0) {
      const resultIndex = result.findIndex(
        (elm) => elm.filter === start.toLowerCase(),
      )
      result[resultIndex].results.push(res)
    } else {
      if (!isNaN(Number(start))) {
        result.push({
          filter: '0-9',
          results: [res],
        })
      } else {
        result.push({
          filter: start.toLowerCase(),
          results: [res],
        })
      }
    }
  })

  if (searchTerm.value) {
    result.forEach((elm) => {
      elm.results = elm.results.filter((res) => {
        return (
          res.description
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          res.title.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
      })
    })
  }
  return result.filter((elm) => elm.results.length > 0)
})

const toggleFilterSection = async function () {
  filtersAreOpen.value = !filtersAreOpen.value
  await nextTick()
  resizeWindow()
}

const scrollToTop = function () {
  if (useStickyPlaceholder.value) {
    const scrollTarget = document.getElementById('glossary-title')

    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const resizeWindow = function () {
  screenSize.value = document.body.clientWidth
  const searchContainer = document.getElementById(
    'inner-search-container',
  ) as HTMLElement
  const outerSearchContainer = document.getElementById(
    'outer-search-container',
  ) as HTMLElement
  const mainHeader = document.getElementById('main-header') as HTMLElement
  initialSearchContainerOffset.value =
    outerSearchContainer.offsetTop + mainHeader?.clientHeight - 16
  containerHeight.value = searchContainer.clientHeight
  handleScroll()
}

const setScreenSize = function () {
  screenSize.value = document.body.clientWidth
}

const handleScroll = async function () {
  const searchContainer = document.getElementById(
    'search-container',
  ) as HTMLElement
  const innerSearchContainer = document.getElementById(
    'inner-search-container',
  ) as HTMLElement
  if (initialSearchContainerOffset.value < window.scrollY) {
    useStickyPlaceholder.value = true
    await nextTick()
    const stickyPlaceholder = document.getElementById(
      'sticky-search-container-placeholder',
    ) as HTMLElement
    stickyPlaceholder.style.height = `${containerHeight.value}px`

    searchContainer.classList.add('sticky-search-container')
    innerSearchContainer.classList.add('container')
  } else {
    useStickyPlaceholder.value = false
    searchContainer.classList.remove('sticky-search-container')
    innerSearchContainer.classList.remove('container')
  }
}

const setActiveFilter = function (value: string) {
  activeFilter.value = value
  if (props.useStickySearch) {
    scrollToTop()
  }
}

const setSorting = function (value: string) {
  sorting.value = value
}

const handleLoadMore = function () {
  if (loadedResults.value >= foundEntries.value) {
    return
  }

  if (loadedResults.value + 15 < foundEntries.value) loadedResults.value += 15
  else loadedResults.value = foundEntries.value
}

watch(searchTerm, function () {
  scrollToTop()
})

onMounted(() => {
  if (props.useStickySearch) {
    window.addEventListener('scroll', handleScroll)
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
  } else {
    setScreenSize()
    window.addEventListener('resize', setScreenSize)
  }
})
</script>
