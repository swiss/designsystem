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
                @focus="isSearchInputFocused = true"
                @blur="isSearchInputFocused = false"
                type="text" 
                id="search-input" 
                label="Ämter filtern" 
                placeholder="Search" 
                value="Search entry here"
                autocomplete="off" 
              />
            <Btn 
              @click.native="resetSearchInput"
              label="Ämter filtern" 
              :icon="isSearchInputFocused ? 'CancelCircle' : 'Search'" 
              icon-pos="only" 
              variant="bare" 
              size="lg" 
            />
            </div>
          </div>
        </div>
      </section>
      <section class="section section--default">
        <div class="container container--grid gap--responsive">
          <div class="search-result">
            <h3>Search Result 1</h3>
            <p>Description</p>
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
    Btn
  },

  data: function(){
    return {
      isSearchInputFocused: false
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
    },

    resetSearchInput () {
      const searchInput = document.getElementById('search-input')
      searchInput.value = ''
      searchInput.focus()
    }
  }
}
</script>
