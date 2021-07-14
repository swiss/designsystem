<template>
  <div
    id="desktop-menu"
    class="desktop-menu"
  >
    <div
      class="desktop-menu__overlay"
      id="desktop-menu__overlay"
    />
    <div class="container container--flex">
      <MainNavigation context="desktop" />
      <div
        class="desktop-menu__drawer hidden"
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
    Navy.initDesktop(
      '#desktop-menu > .container > nav',
      '#desktop-menu__drawer',
      '#desktop-menu__overlay'
    )
  }
}
</script>