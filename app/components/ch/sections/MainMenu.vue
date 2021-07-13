<template>
  <div
    id="mainmenu"
    class="mainmenu"
  >
    <div class="container container--flex">
      <MainNavigation context="desktop" />
      <div
        class="mainmenu__drawer"
        id="mainmenu__drawer"
      />
    </div>
  </div>
</template>

<script>
import MainNavigation from '../navigations/MainNavigation.vue'
import Navy from '../../../scripts/Navy.js'

export default {
  name: 'MainMenu',
  components: {
    MainNavigation
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  mounted () {
    Navy.init(
      '#mainmenu > .container > nav > ul > li > ul',
      '#mainmenu__drawer',
      {context: 'desktop'}
    )
  }
}
</script>