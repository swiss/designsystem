<template>
  <div
    id="mobile-menu-id"
    class="mobile-menu"
    :class="isOpen ? 'mobile-menu--is-open' : ''"
  >
    <MainNavigation context="mobile" :isHomePage="isHomePage" :showActiveNavigation="showActiveNavigation" />
    <MetaNavigationMobile />
    <TopBarNavigation context="mobile" :isMobileMenu="true" />
  </div>
</template>

<script>
import Navy from '../../../scripts/Navy.js'
import SvgIcon from '../components/SvgIcon.vue'
import MainNavigation from '../navigations/MainNavigation.vue'
import MetaNavigationMobile from '../navigations/MobileMetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'

export default {
  name: 'MobileMenu',
  components: {
    MainNavigation,
    MetaNavigationMobile,
    TopBarNavigation,
    SvgIcon,
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
  },
  mounted() {
    Navy.initMobile('#mobile-menu-id > nav', '#mobile-menu-id')
  },
}
</script>
