<template>
  <div v-if="isSimplePage" class="mobile-menu-navigation-bar">
    <CarouselNavigation :id="carouselNavId" />
  </div>
  <div
    v-else
    id="mobile-menu-id"
    class="mobile-menu"
    :class="isOpen ? 'mobile-menu--is-open' : ''"
  >
    <MainNavigation
      context="mobile"
      :isHomePage="isHomePage"
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
    isHomePage: {
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
  },
  data() {
    return {
      carouselNavId: '',
    }
  },
  mounted() {
    if (this.isSimplePage) {
      this.carouselNavId = uuidv4()
      return
    }
    Navy.initMobile('#mobile-menu-id > nav', '#mobile-menu-id')
  },
}
</script>
