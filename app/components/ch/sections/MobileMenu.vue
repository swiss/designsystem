<template>
  <div
    id="mobilemenu"
    class="mobilemenu"
    :class="isOpen ? 'mobilemenu--is-open' : '' ">
    <div class="navy show-level-0">
      <div class="navy__level-0">
        <MainNavigation context="mobile" />
        <MetaNavigation context="mobile" />
        <TopBarNavigation context="mobile" />
      </div>
      <div class="navy__level-1"></div>
      <div class="navy__level-2"></div>
    </div>
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
    }
  },
  mounted () {
    Navy.init('#mobilemenu > .navy')
  }
}
</script>