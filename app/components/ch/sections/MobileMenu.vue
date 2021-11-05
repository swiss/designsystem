<template>
  <div
    id="mobile-menu"
    class="mobile-menu"
    :class="isOpen ? 'mobile-menu--is-open' : '' "
  >
    <MainNavigation context="mobile" />
    <MetaNavigation context="mobile" />
    <TopBarNavigation context="mobile" />
    <LanguageSwitcher context="mobile" />
  </div>
</template>

<script>
import MainNavigation from '../navigations/MainNavigation.vue'
import MetaNavigation from '../navigations/MetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import SvgIcon from '../components/SvgIcon.vue'
import Navy from '../../../scripts/Navy.js'

export default {
  name: 'MobileMenu',
  components: {
    MainNavigation,
    MetaNavigation,
    TopBarNavigation,
    LanguageSwitcher,
    SvgIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  mounted () {
    Navy.initMobile('#mobile-menu > nav', '#mobile-menu' );
    Navy.showLevel(3); // for demo only, show 3rd level of sub-navigation
  }
}
</script>