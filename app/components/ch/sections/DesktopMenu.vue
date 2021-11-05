<template>
  <div
    id="desktop-menu"
    class="desktop-menu"
  >
    <div
      class="desktop-menu__overlay hidden"
      id="desktop-menu__overlay"
    />
    <div class="container container--flex">
      <MainNavigation context="desktop" />
      <div
        class="desktop-menu__drawer hidden"
        id="desktop-menu__drawer"
      >
        <button
          class="desktop-menu__close"
          id="desktop-menu-closer"
        >
          <span>Schliessen</span>
          <SvgIcon
            icon="Cancel"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
import MainNavigation from '../navigations/MainNavigation.vue'
import Navy from '../../../scripts/Navy.js'
import MenuMore from '../../../scripts/MenuMore.js'

export default {
  name: 'DesktopMenu',
  components: {
    SvgIcon,
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
      '#desktop-menu__overlay',
      '#desktop-menu-closer'
    )
    Navy.showLevel(2); // for demo only, show 2nd level of sub-navigation

    MenuMore.init(
      '#desktop-menu > .container > nav'
    );
  }
}
</script>