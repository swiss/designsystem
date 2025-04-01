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
    </header>
    <main id="main-content">
      <section class="section section--default bg--accent-01">
        <div class="container">
          <h1 class="h1">Veranstaltungen</h1>
          <div
            class="search__filters"
            :class="filtersAreOpen ? 'filters--are-open' : ''"
          >
            <div class="search__filters__actions">
              <Btn
                :label="
                  filtersAreOpen ? 'Filter ausblenden' : 'Filter anzeigen'
                "
                variant="bare"
                size="sm"
                icon="ChevronDown"
                iconPos="left"
                :class="filtersAreOpen ? ' btn--icon-180' : ''"
                @click="filtersAreOpen = !filtersAreOpen"
              />
            </div>
            <div v-if="filtersAreOpen" class="search__filters__drawer">
              <Input
                id="select-1"
                type="text"
                size="sm"
                name="select-name"
                label="Stichwortfilter"
              />
              <Select
                id="select-2"
                size="sm"
                name="select-name"
                label="Organisation"
              >
                <option selected>VBS - Alle</option>
                <option disabled>(Future tree selector here)</option>
              </Select>
              <Select
                id="select-3"
                size="sm"
                name="select-name"
                label="Themen"
              >
                <option selected>- Alle -</option>
                <option>...</option>
              </Select>
              <Input
                id="date-start"
                type="date"
                size="sm"
                name="select-name"
                value="2022-05-01"
                label="Zeitraum | Startdatum"
              />
              <Input
                id="date-start"
                type="date"
                size="sm"
                name="select-name"
                value="2022-06-01"
                label="Zeitraum | Enddatum"
              />
              <Select
                id="select-5"
                size="sm"
                name="select-name"
                label="Veranstaltungs-Typ"
              >
                <option selected>- Alle -</option>
                <option>Ausstellung</option>
                <option>Kongress</option>
                <option selected>Konferenz</option>
                <option>Teamevent</option>
                <option>Webinar</option>
                <option>Workshop</option>
              </Select>
              <Select
                id="select-6"
                size="sm"
                name="select-name"
                label="Austragungsort"
              >
                <option selected>- Alle -</option>
                <option>...</option>
              </Select>
            </div>
            <div class="search__filters__tags">
              <TagItem
                label="VBS - Alle"
                variant="primary"
                size="sm"
                icon="Cancel"
              />
              <TagItem
                label="Konferenz"
                variant="primary"
                size="sm"
                icon="Cancel"
              />
              <TagItem
                label="01.05.2022 - 01.06.2022"
                variant="primary"
                size="sm"
                icon="Cancel"
              />
              <TagItem
                label="Filter zurücksetzen"
                variant="default"
                size="sm"
                icon="Repeat"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section section--default">
        <div class="container gap--responsive">
          <div
            class="search-results"
            :class="
              displayType === 'grid'
                ? 'search-results--grid'
                : 'search-results--list'
            "
            aria-live="polite"
            :aria-busy="isLoading"
          >
            <div v-if="!noResults && !isLoading" class="search-results__header">
              <div class="search-results__header__left">
                <div class="search-results__occurences">
                  <strong>4</strong> Suchergebnisse
                </div>
                <div class="separator separator--vertical" />
                <Btn
                  label="Abo erstellen"
                  variant="bare"
                  size="sm"
                  icon-pos="right"
                  icon="RSS"
                />
              </div>
              <div class="search-results__header__right">
                <Select
                  id="select-7"
                  bare
                  size="sm"
                  name="select-name"
                  label="Sortierung"
                  :hideLabel="true"
                >
                  <option disabled selected>Sortieren</option>
                  <option>nach Relevanz</option>
                  <option>by date (increasing)</option>
                  <option>by date (decreasing)</option>
                  <option>...</option>
                </Select>
                <div class="separator separator--vertical" />
                <Btn
                  variant="bare"
                  icon-pos="only"
                  icon="List"
                  size="sm"
                  label="Display as list"
                  @click="displayType = 'list'"
                />
                <Btn
                  variant="bare"
                  icon-pos="only"
                  icon="Apps"
                  size="sm"
                  label="Display as grid"
                  @click="displayType = 'grid'"
                />
              </div>
            </div>
            <h2 class="sr-only">News list</h2>
            <SearchResultsList
              v-if="!noResults && !isLoading"
              :itemList="searchResults"
              :displayType="displayType"
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
                <span class="text--bold">«My search keyword»</span> ergab keine
                Treffer auf der Behördenwebsite
                <span class="text--bold">«NameNextLogo»</span>
              </h2>
              <h3 class="h4">Tipps zur Suche</h3>
              <ul class="list list--default">
                <li>Überprüfen Sie die Schreibweise Ihres Suchbegriffes</li>
                <li>Verwenden Sie einen anderen bzw. allgemeineren Begriff</li>
                <li>Verwenden Sie ggf. weniger Suchbegriffe</li>
                <li>Wechseln Sie die Behördenwebsite</li>
              </ul>
              <h3 class="h4">Hinweis</h3>
              <p>
                Die Suche ist momentan auf die Behördenwebsite "[NameNextLogo]"
                beschränkt. Eine behördenübergreifende Suche über die Domain
                *.admin.ch ist erst in Erarbeitung.
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
import SearchResultsList from '../components/ch/components/SearchResultsList.vue'
import Pagination from '../components/ch/components/Pagination.vue'
import Notification from '../components/ch/components/Notification.vue'
import Select from '../components/ch/components/Select.vue'
import Input from '../components/ch/components/Input.vue'
import TagItem from '../components/ch/components/TagItem.vue'
import Breadcrumb from '../components/ch/sections/Breadcrumb.vue'
import { reactive } from 'vue'
import { useLayoutStore } from '../store/layout'
import type { SearchResultItem } from '../types'

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
      'Max 150 chars, then truncate. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...',
    href: '#',
    type: 'Konferenz',
    isEvent: true,
    hasIcons: false,
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
    type: 'Konferenz',
    isEvent: true,
    hasIcons: false,
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
    type: 'Konferenz',
    isEvent: true,
    hasIcons: false,
  },
  {
    title: 'Search result four. Display a minimum of ten items',
    content:
      'Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
    href: 'http://admin.ch',
    type: 'Konferenz',
    isEvent: true,
    hasIcons: false,
  },
] as SearchResultItem[])

const filtersAreOpen = defineModel('filtersAreOpen', {
  type: Boolean,
  default: () => false,
})
const displayType = defineModel('displayType', {
  type: String,
  default: () => 'grid',
})
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
