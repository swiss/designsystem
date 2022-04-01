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
    </header>
    <main id="main-content">
      <section class="section section--default bg--secondary-50">
        <div class="container">
          <h1 class="h1">Search Results</h1>
          <div class="search search--large search--page-result">
            <div class="search__group">
              <input 
                type="text" 
                id="search-input" 
                label="Ämter filtern" 
                placeholder="Search" 
                value="Search entry here"
                autocomplete="off" 
              />
            <Btn 
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
          <div class="search-results">
            <div class="search-results__header">
              <div>
                <strong>10 von 127</strong>Suchergebnisse
              </div>
              <div class="search-results__sort" role="group" aria-labelledby="radio-group-label-1">
                <div id="radio-group-label-1">Sortierung nach</div>
                <div class="form__group">
                  <Radio id="radio-s0" name="radio-group-1" label="Relevanz" value="relevance" checked />
                  <Radio id="radio-s1" name="radio-group-1" label="Datum" value="date" />
                </div>
              </div>
            </div>
            
            <SearchResultsList 
              :itemList="searchResults"
            />
            
            <Pagination
              class="pagination--right"
              :currentPage="pagination.currentPage"
              :totalPages="pagination.totalPages"
              :paginationItems="pagination.items"
            />

            <Notification 
              type="info" 
              icon="InfoCircle" 
              :closeBtn="false"
              text="<div class='text--bold'>Unzufrieden mit der Suche?</div>
<div>Bitte helfen Sie uns, unsere Suche zu verbessern, indem Sie uns eine Rückmeldung darüber geben, was schief gelaufen ist oder fehlt.</div><a href='#'>Send a improvement proposal</link>" 
            />
          </div>
        </div>
      </section>

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
import SvgIcon from '../components/ch/components/SvgIcon'
import Btn from "../components/ch/components/Btn"
import Radio from '../components/ch/components/Radio.vue'
import SearchResultsList from '../components/ch/components/SearchResultsList.vue'
import Pagination from '../components/ch/components/Pagination.vue'
import Notification from '../components/ch/components/Notification.vue'

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
    SvgIcon,
    Btn,
    Radio,
    SearchResultsList,
    Pagination,
    Notification
  },

  data: function(){
    return {
      isSearchInputFocused: false,
      pagination: {
        currentPage: '1',
        totalPages: 'von 13 Seiten',
        items: [
          {
            icon: "ChevronLeft",
            label: "Previous Page",
            link: "#prev"
          },
          {
            icon: "ChevronRight",
            label: "Next Page",
            link: "#next"
          }
        ]
      },
      searchResults: [
        { 
          title: 'Search result one',
          content: 'Max 150 chars, then truncate .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...',
          href: '#',
          type: 'Article',
          date: '12. April 2022',
          specifications: 'Specifications related to content type (Author, PDF specs etc)',
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
            }
          }
        },
        { 
          title: 'Search result two',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma',
          href: '#',
          type: 'Blogpost',
          date: '12. April 2022',
          specifications: 'Specifications related to content type (Author, PDF specs etc)',
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
            }
          }
        },
        { 
          title: "Search result three", 
          content: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
          href: 'http://admin.ch',
          type: 'Blogpost',
          date: '12. April 2022',
        },
        { 
          title: "Search result four. Display a minimum of ten items", 
          content: "Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
          href: 'http://admin.ch',
          type: 'Blogpost',
          date: '12. April 2022',
        }

      ]
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },  
  },
  methods: {
    getMobileMenuIsOpen() {
      return this.$store.getters['layout/getMobileMenuIsOpen']
    }
  }
}
</script>
