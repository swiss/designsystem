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
          <h1 class="h1">Search Results</h1>
          <div class="search search--large search--page-result">
            <div class="search__group">
              <input
                id="search-input"
                type="search"
                label="Ämter filtern"
                placeholder="Search"
                value="Search entry here"
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
                v-else
                label="Ämter filtern"
                icon="Search"
                icon-pos="only"
                variant="bare"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section section--default">
        <div class="container gap--responsive">
          <div class="search-results" aria-live="polite" :aria-busy="isLoading">
            <div class="tabs search-results__tabs">
              <div class="tab__controls-container">
                <div
                  class="tab__controls"
                  role="tablist"
                  aria-label="Additional Content"
                >
                  <button
                    class="tab__control tab__control--active"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="tab-1"
                  >
                    Webseiten
                  </button>
                  <button
                    class="tab__control"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="tab-2"
                    tabindex="-1"
                  >
                    Dokumente und Dateien
                  </button>
                </div>
              </div>

              <div
                id="tab-1"
                tabindex="0"
                role="tabpanel"
                aria-labelledby="tab-1"
                class="tab__container"
              >
                <div
                  v-if="!noResults && !isLoading"
                  class="search-results__header"
                >
                  <div><strong>127</strong>Suchergebnisse</div>
                  <div
                    class="search-results__sort"
                    role="group"
                    aria-labelledby="radio-group-label-1"
                  >
                    <div id="radio-group-label-1">Sortierung nach</div>
                    <div class="form__group">
                      <Radio
                        id="radio-s0"
                        name="radio-group-1"
                        label="Relevanz"
                        value="relevance"
                        checked
                      />
                      <Radio
                        id="radio-s1"
                        name="radio-group-1"
                        label="Datum"
                        value="date"
                      />
                    </div>
                  </div>
                </div>

                <SearchResultsList
                  v-if="!noResults && !isLoading"
                  :itemList="searchResults"
                />
                <div v-if="isLoading" class="my-16">
                  <h2 class="sr-only">Search is loading</h2>
                  <SvgIcon icon="Spinner" size="2xl" class="icon--spin" />
                </div>
                <div
                  v-if="noResults && !isLoading"
                  class="search-results__no-results"
                >
                  <h2 class="text--xl">
                    Die Suche nach
                    <span class="text--bold">«My search keyword»</span> ergab
                    keine Treffer auf der Behördenwebsite
                    <span class="text--bold">«NameNextLogo»</span>
                  </h2>
                  <h3 class="h4">Tipps zur Suche</h3>
                  <ul class="list list--default">
                    <li>Überprüfen Sie die Schreibweise Ihres Suchbegriffes</li>
                    <li>
                      Verwenden Sie einen anderen bzw. allgemeineren Begriff
                    </li>
                    <li>Verwenden Sie ggf. weniger Suchbegriffe</li>
                    <li>Wechseln Sie die Behördenwebsite</li>
                  </ul>
                  <h3 class="h4">Hinweis</h3>
                  <p>
                    Die Suche ist momentan auf die Behördenwebsite
                    "[NameNextLogo]" beschränkt. Eine behördenübergreifende
                    Suche über die Domain *.admin.ch ist erst in Erarbeitung.
                  </p>
                </div>

                <Pagination
                  v-if="!noResults && !isLoading"
                  class="pagination--right"
                  :currentPage="pagination.currentPage"
                  :totalPages="pagination.totalPages"
                  :paginationItems="pagination.items"
                />

                <Notification
                  v-if="!isLoading"
                  type="info"
                  icon="InfoCircle"
                  :closeBtn="false"
                  text="<div class='text--bold'>Haben Sie nicht gefunden wonach Sie suchen?</div>
    <div>Gerne geben wir Ihnen auch persönlich Auskunft. Bitte melden Sie sich via Kontaktformular bei uns.</div><a href='#' class='link'>Kontaktformular</link>"
                />
              </div>

              <div
                id="tab-1"
                tabindex="0"
                role="tabpanel"
                aria-labelledby="tab-1"
                class="tab__container"
              >
                Suchergebnisse für Dokumente und Dateien
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
import AlterBodyClasses from '../components/ch/objects/AlterBodyClasses.vue'
import TopBar from '../components/ch/sections/TopBar.vue'
import TopHeader from '../components/ch/sections/TopHeader.vue'
import DesktopMenu from '../components/ch/sections/DesktopMenu.vue'
import MobileMenu from '../components/ch/sections/MobileMenu.vue'
import FooterInformation from '../components/ch/sections/FooterInformation.vue'
import FooterNavigation from '../components/ch/sections/FooterNavigation.vue'
import SvgIcon from '../components/ch/components/SvgIcon.vue'
import Btn from '../components/ch/components/Btn.vue'
import Radio from '../components/ch/components/Radio.vue'
import SearchResultsList from '../components/ch/components/SearchResultsList.vue'
import Pagination from '../components/ch/components/Pagination.vue'
import Notification from '../components/ch/components/Notification.vue'
import { reactive } from 'vue'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()

const pagination = reactive({
  currentPage: '1',
  totalPages: 'von 13 Seiten',
  items: [
    {
      icon: 'ChevronLeft',
      label: 'Previous Page',
      link: '#prev',
    },
    {
      icon: 'ChevronRight',
      label: 'Next Page',
      link: '#next',
    },
  ],
})

const searchResults = reactive([
  {
    title: 'Search result one',
    content:
      'Max 150 chars, then truncate .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...',
    href: '#',
    type: 'Article',
    date: '12. April 2022',
    specifications:
      'Specifications related to content type (Author, PDF specs etc)',
    topics: ['Topic one', 'Topic two'],
    isVideo: 'true',
    isEasyLanguage: 'true',
    isSignLanguage: 'true',
    image: {
      src: 'https://picsum.photos/230/130/?image=29',
      width: '230',
      height: '130',
      alt: 'image name',
      source: {
        srcset: 'https://picsum.photos/460/260/?image=29',
        width: '460',
        height: '260',
        media: '(min-width: 1024px)',
      },
    },
  },
  {
    title: 'Search result two',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma',
    href: '#',
    type: 'Blogpost',
    date: '12. April 2022',
    specifications:
      'Specifications related to content type (Author, PDF specs etc)',
    topics: ['Topic one', 'Topic two', 'Topic three'],
    image: {
      src: 'https://picsum.photos/130/230/?image=29',
      width: '130',
      height: '230',
      alt: 'image name',
      source: {
        srcset: 'https://picsum.photos/260/400/?image=29',
        width: '260',
        height: '400',
        media: '(min-width: 1024px)',
      },
    },
  },
  {
    title: 'Search result three',
    content:
      'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    href: 'http://admin.ch',
    type: 'Blogpost',
    date: '12. April 2022',
  },
  {
    title: 'Search result four. Display a minimum of ten items',
    content:
      'Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
    href: 'http://admin.ch',
    type: 'Blogpost',
    date: '12. April 2022',
  },
])

defineProps({
  noResults: {
    type: Boolean,
    default: () => false,
  },
  isLoading: {
    type: Boolean,
    default: () => false,
  },
})
</script>
