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
      <MainNavigation context="desktop" :isHomePage="isHomePage" />
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
    },
    isHomePage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getCurrentLevel () {
      let currentLevel = 0;
      if(!this.isHomePage) {
        currentLevel = document.body.classList.contains('context--mobile') ? 3 : 2;
      }
      console.log('sldkfh', currentLevel)
      return currentLevel;
    }
  },
  mounted () {
    Navy.initDesktop(
      '#desktop-menu > .container > nav',
      '#desktop-menu__drawer',
      '#desktop-menu__overlay',
      '#desktop-menu-closer'
    )
    // demo: show 2nd/3rd level of sub-navigation for detail pages depending the context, 
    // or show the level 0 for homepage:
    // on desktop, we have to open a level above,
    // because level 0 is displayed as mainmenu
    Navy.showLevel(this.getCurrentLevel()) ;     

    window.addEventListener('resize', function(e) {
      Navy.showLevel(this.getCurrentLevel());
    }.bind(this), false);

    MenuMore.init(
      '#desktop-menu > .container > nav'
    );
  }
}
</script>