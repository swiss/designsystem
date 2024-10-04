<template>
  <div v-if="isSimplePage">
    <div class="mobile-menu-navigation-bar" id="mobile-menu-id">
      <CarouselNavigation :id="carouselNavId" />
    </div>
    <!-- invisible Placeholder to avoid jump when navigation is set to sticky -->
    <div v-if="useStickyPlaceholder" id="stickyPlaceholder" />
  </div>
  <div
    v-else
    id="mobile-menu-id"
    class="mobile-menu"
    :class="isOpen ? 'mobile-menu--is-open' : ''"
  >
    <MainNavigation
      context="mobile"
      :showActiveNavigation="showActiveNavigation"
    />
    <MetaNavigationMobile />
    <TopBarNavigation :isMobileMenu="true" />
  </div>
</template>

<script>
import Navy from '../../../scripts/Navy.js'
import SvgIcon from '../components/SvgIcon.vue'
import CarouselNavigation from '../navigations/CarouselNavigation.vue'
import MainNavigation from '../navigations/MainNavigation.vue'
import MetaNavigationMobile from '../navigations/MobileMetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
const { v4: uuidv4 } = require('uuid')

export default {
  name: 'MobileMenu',
  components: {
    MainNavigation,
    MetaNavigationMobile,
    TopBarNavigation,
    SvgIcon,
    CarouselNavigation,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    // Allow disabling active navigation item highlighting for pages like shopping cart
    showActiveNavigation: {
      type: Boolean,
      default: true,
    },
    isSimplePage: {
      type: Boolean,
      default: false,
    },
    isSticky: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      carouselNavId: '',
      useStickyPlaceholder: false,
      initialNavBarOffset: 0,
    }
  },
  mounted() {
    if (this.isSticky) {
      window.addEventListener('scroll', this.handleScroll)
      this.resizeWindow()
      window.addEventListener('resize', this.resizeWindow)
    }
    if (this.isSimplePage) {
      this.carouselNavId = uuidv4()
      return
    }
    Navy.initMobile('#mobile-menu-id > nav', '#mobile-menu-id')
  },
  methods: {
    resizeWindow() {
      const topHeader = document.getElementById('top-header-id')
      const topBar = document.getElementById('top-bar')
      this.initialNavBarOffset =
        topHeader.offsetTop + topHeader.clientHeight - topBar?.clientHeight
      this.handleScroll()
    },
    handleScroll() {
      const topBar = document.getElementById('top-bar')
      const navBar = document.getElementById('mobile-menu-id')
      if (this.initialNavBarOffset < window.scrollY) {
        this.useStickyPlaceholder = true
        // Set height on placeholder to avoid jump when navigation is set to sticky
        const stickyPlaceholder = document.getElementById('stickyPlaceholder')
        stickyPlaceholder.style.height = `${navBar.clientHeight}px`

        navBar.style.top = `${topBar.clientHeight}px`
        navBar.classList.add('mobile-menu-sticky-navigation')
        navBar.classList.remove('mobile-menu-navigation-bar')
      } else {
        navBar.style.top = ''
        this.useStickyPlaceholder = false
        navBar.classList.remove('mobile-menu-sticky-navigation')
        navBar.classList.add('mobile-menu-navigation-bar')
      }
    },
  },
}
</script>
