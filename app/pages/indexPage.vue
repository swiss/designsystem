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
      <section class="section section--default bg--accent-01">
        <div class="container">
          <h1 id="index-page-title" class="h1">Reisen ins Ausland</h1>
          <div id="outer-search-container">
            <div id="search-container">
              <div id="inner-search-container">
                <div class="search search--large search--page-result">
                  <div class="search__group">
                    <input
                      id="search-input"
                      v-model="searchTerm"
                      type="search"
                      label="Reiseländer filtern"
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
                      @emit-click="searchTerm = ''"
                    />
                  </div>
                </div>
                <div class="index-page__filters">
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
                      @click="toggleFilterSection()"
                    />
                    <div
                      v-if="filtersAreOpen"
                      class="index-page__filters__drawer"
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
          <div class="index-page-results">
            <div
              v-if="loadLimitedResults.length !== 0 && !isLoading"
              class="index-page-results__header"
            >
              <div class="index-page-results__header__left">
                <strong>{{ foundEntries }}</strong
                >Länder
              </div>
              <div class="index-page-results__header__right">
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
import IndexPageResultList from '../components/ch/components/IndexPageResultList.vue'
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
import {
  defineProps,
  ref,
  reactive,
  computed,
  watch,
  nextTick,
  onMounted,
} from 'vue'
import type { GlossaryResult, GlossaryResultItem } from '../types'
import { useLayoutStore } from '../store/layout'

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
const filters = ref([
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
    title: 'Afganistan',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    metaInfos: ['Blogpost', '10. August 2021'],
    footerInfos: ['PDF', '5.4 MB', '16. Oktober 2021'],
    image: 'https://picsum.photos/600/900',
    footerAction: 'https://www.google.ch',
  },
  {
    title: 'Australien',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    metaInfos: ['Blogpost', '23. januar 2022'],
    footerInfos: ['PDF', '4.1 MB', '10. Oktober 2023'],
    image: 'https://picsum.photos/300/400',
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
    image: 'https://picsum.photos/600/900',
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
    image: 'https://picsum.photos/600/900',
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
    image: 'https://picsum.photos/600/900',
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
] as GlossaryResultItem[])

const props = defineProps({
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

  return filters.value.filter((elm) => !startingLetters.includes(elm))
})

const canLoadMore = computed(() => {
  return (
    loadLimitedResults.value?.reduce((acc, elm) => {
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
      let newResults = values[i].results.slice(0, loadedResults.value - count)
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
  let filteredResults = resultItems.filter((elm) => {
    const start = elm.title.charAt(0)
    if (activeFilter.value === 'all') {
      return elm
    }
    if (activeFilter.value === 'numeric') {
      return !isNaN(Number(start))
    } else {
      return activeFilter.value === start.toLowerCase()
    }
  })

  let result: GlossaryResult[] = []

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

async function toggleFilterSection() {
  filtersAreOpen.value = !filtersAreOpen.value
  await nextTick()
  resizeWindow()
}

function scrollToTop() {
  if (useStickyPlaceholder.value) {
    const scrollTarget = document.getElementById('index-page-title')

    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

function resizeWindow() {
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

function setScreenSize() {
  screenSize.value = document.body.clientWidth
}

async function handleScroll() {
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

function getMobileMenuIsOpen() {
  return useLayoutStore().mobileMenuIsOpen
}

function setActiveFilter(value: string) {
  activeFilter.value = value
  if (props.useStickySearch) {
    scrollToTop()
  }
}

function setSorting(value: string) {
  sorting.value = value
}

function handleLoadMore() {
  if (loadedResults.value >= foundEntries.value) {
    return
  }
  if (loadedResults.value + 15 < foundEntries.value) loadedResults.value += 15
  else loadedResults.value = foundEntries.value
}

watch(
  () => searchTerm,
  () => {
    scrollToTop()
  },
)

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
