<template>
  <div id="desktop-menu" class="desktop-menu">
    <div id="desktop-menu__overlay" class="desktop-menu__overlay hidden" />
    <div>
      <div id="desktop-navigation-id">
        <div class="container container--flex">
          <MainNavigationSimple v-if="isSimplePage" />
          <MainNavigation
            v-else
            :showActiveNavigation="showActiveNavigation"
            context="desktop"
          />
          <div id="desktop-menu__drawer" class="desktop-menu__drawer hidden">
            <button id="desktop-menu-closer" class="desktop-menu__close">
              <span>Schliessen</span>
              <SvgIcon icon="Cancel" />
            </button>
          </div>
        </div>
      </div>
      <!-- invisible Placeholder to avoid jump when navigation is set to sticky -->
      <div
        v-if="useStickyPlaceholder"
        id="sticky-desktop-navigation-placeholder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuMore from '../../../scripts/MenuMore.js'
import Navy from '../../../scripts/Navy.js'
import SvgIcon from '../components/SvgIcon.vue'
import MainNavigation from '../navigations/MainNavigation.vue'
import MainNavigationSimple from '../navigations/MainNavigationSimple.vue'
import { ref, onMounted, nextTick } from 'vue'

const useStickyPlaceholder = ref(false)
const initialNavBarOffset = ref(0)

const props = defineProps({
  // Allow disabling active navigation item highlighting for pages like shopping cart
  showActiveNavigation: {
    type: Boolean,
    default: () => false,
  },
  isSimplePage: {
    type: Boolean,
    default: () => false,
  },
  isSticky: {
    type: Boolean,
    default: () => false,
  },
})

const resizeWindow = function () {
  const topHeader = document.getElementById('top-header-id') as HTMLElement
  const topBar = document.getElementById('top-bar') as HTMLElement
  initialNavBarOffset.value =
    topHeader.offsetTop + topHeader.clientHeight - topBar?.clientHeight
  handleScroll()
}

const handleScroll = async function () {
  const topBar = document.getElementById('top-bar') as HTMLElement
  const navBar = document.getElementById('desktop-navigation-id') as HTMLElement
  const navigation = document.getElementById('main-navigation') as HTMLElement
  if (initialNavBarOffset.value < window.scrollY) {
    useStickyPlaceholder.value = true
    await nextTick()
    // Set height on placeholder to avoid jump when navigation is set to sticky
    const stickyPlaceholder = document.getElementById(
      'sticky-desktop-navigation-placeholder',
    ) as HTMLElement
    stickyPlaceholder.style.height = `${navigation.clientHeight}px`

    navBar.style.top = `${topBar.clientHeight}px`
    navBar.classList.add('sticky-navigation')
  } else {
    navBar.style.top = ''
    useStickyPlaceholder.value = false
    navBar.classList.remove('sticky-navigation')
  }
}

onMounted(async () => {
  if (props.isSticky) {
    window.addEventListener('scroll', handleScroll)
    await nextTick()
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
  }
  Navy.initDesktop({
    navigationNav: '#desktop-menu > div > div > .container > nav',
    drawer: '#desktop-menu__drawer',
    overlay: '#desktop-menu__overlay',
    closeButton: '#desktop-menu-closer',
  })
  // demo only: force to show 2nd level of sub-navigation
  Navy.showLevel(props.showActiveNavigation ? 2 : 0)

  // demo only: force level-0 to open when more button is clicked
  if (!props.isSimplePage) {
    ;(document.getElementById('more-button') as HTMLElement).addEventListener(
      'click',
      function () {
        Navy.showLevel(0)
      },
    )

    MenuMore.init({
      navigationItem: '#desktop-menu > div > div > .container > nav',
      moreButton: '#more-button',
      moreContainer: '#more-container',
    })
  }
})
</script>
