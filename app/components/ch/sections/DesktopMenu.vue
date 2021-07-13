<template>
  <div
    id="desktop-menu"
    class="desktop-menu"
  >
    <div class="container container--flex">
      <MainNavigation context="desktop" />
      <div
        class="desktop-menu__drawer"
        id="desktop-menu__drawer"
      />
    </div>
  </div>
</template>

<script>
import MainNavigation from '../navigations/MainNavigation.vue'
import Navy from '../../../scripts/Navy.js'

export default {
  name: 'DesktopMenu',
  components: {
    MainNavigation,
    Navy
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  mounted () {
    Navy.init('#desktop-menu > .container > nav > ul > li > ul', '#desktop-menu__drawer')
  }
}
</script>