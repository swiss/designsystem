<template>
  <div id="desktop-menu" class="desktop-menu">
    <div class="desktop-menu__overlay hidden" id="desktop-menu__overlay" />
    <div class="container container--flex">
      <MainNavigationSimple v-if="isSimplePage" />
      <MainNavigation
        v-else
        :showActiveNavigation="showActiveNavigation"
        context="desktop"
      />
      <div class="desktop-menu__drawer hidden" id="desktop-menu__drawer">
        <button class="desktop-menu__close" id="desktop-menu-closer">
          <span>Schliessen</span>
          <SvgIcon icon="Cancel" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuMore from '../../../scripts/MenuMore.js'
import Navy from '../../../scripts/Navy.js'
import SvgIcon from '../components/SvgIcon.vue'
import MainNavigation from '../navigations/MainNavigation.vue'
import MainNavigationSimple from '../navigations/MainNavigationSimple.vue'

export default {
  name: 'DesktopMenu',
  components: {
    SvgIcon,
    MainNavigation,
    Navy,
    MainNavigationSimple,
  },
  props: {
    // Allow disabling active navigation item highlighting for pages like shopping cart
    showActiveNavigation: {
      type: Boolean,
    },
    isSimplePage: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.isSimplePage) {
      return
    }
    Navy.initDesktop({
      navigationNav: '#desktop-menu > .container > nav',
      drawer: '#desktop-menu__drawer',
      overlay: '#desktop-menu__overlay',
      closeButton: '#desktop-menu-closer',
    })
    // demo only: force to show 2nd level of sub-navigation
    Navy.showLevel(this.showActiveNavigation ? 2 : 0)

    // demo only: force level-0 to open when more button is clicked
    document
      .getElementById('more-button')
      .addEventListener('click', function () {
        Navy.showLevel(0)
      })

    MenuMore.init({
      navigationItem: '#desktop-menu > .container > nav',
      moreButton: '#more-button',
      moreContainer: '#more-container',
    })
  },
}
</script>
