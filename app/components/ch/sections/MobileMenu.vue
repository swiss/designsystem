<template>
  <div
    id="mobile-menu-id"
    class="mobile-menu"
    :class="isOpen ? 'mobile-menu--is-open' : '' "
  >
    <MainNavigation context="mobile" :isHomePage="isHomePage" />
    <MetaNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
  </div>
</template>

<script>
import MainNavigation from '../navigations/MainNavigation.vue'
import MetaNavigation from '../navigations/MetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import SvgIcon from '../components/SvgIcon.vue'
import Navy from '../../../scripts/Navy.js'

export default {
  name: 'MobileMenu',
  components: {
    MainNavigation,
    MetaNavigation,
    TopBarNavigation,
    SvgIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isHomePage: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    Navy.initMobile(
      '#mobile-menu-id > nav',
      '#mobile-menu-id'
    );
  }
}
</script>
