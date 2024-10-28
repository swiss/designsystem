<template>
  <div v-if="isSimplePage">
    <div id="mobile-menu-id" class="mobile-menu-navigation-bar">
      <CarouselNavigation :id="carouselNavId" />
    </div>
    <!-- invisible Placeholder to avoid jump when navigation is set to sticky -->
    <div v-if="useStickyPlaceholder" id="stickyPlaceholder" />
  </div>
  <div
    v-else
    id="mobile-menu-id"
    class="mobile-menu"
    :class="isOpen ? 'mobile-menu--is-open' : ''"
  >
    <MainNavigation
      context="mobile"
      :showActiveNavigation="showActiveNavigation"
    />
    <MetaNavigationMobile />
    <TopBarNavigation :isMobileMenu="true" />
  </div>
</template>

<script setup lang="ts">
import Navy from '../../../scripts/Navy.js'
import CarouselNavigation from '../navigations/CarouselNavigation.vue'
import MainNavigation from '../navigations/MainNavigation.vue'
import MetaNavigationMobile from '../navigations/MobileMetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import { ref, onMounted, nextTick } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const carouselNavId = ref('')
const useStickyPlaceholder = ref(false)
const initialNavBarOffset = ref(0)

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: () => false,
  },
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
  const navBar = document.getElementById('mobile-menu-id') as HTMLElement
  if (initialNavBarOffset.value < window.scrollY) {
    useStickyPlaceholder.value = true
    await nextTick()
    // Set height on placeholder to avoid jump when navigation is set to sticky
    const stickyPlaceholder = document.getElementById(
      'stickyPlaceholder',
    ) as HTMLElement
    stickyPlaceholder.style.height = `${navBar.clientHeight}px`

    navBar.style.top = `${topBar.clientHeight}px`
    navBar.classList.add('mobile-menu-sticky-navigation')
    navBar.classList.remove('mobile-menu-navigation-bar')
  } else {
    navBar.style.top = ''
    useStickyPlaceholder.value = false
    navBar.classList.remove('mobile-menu-sticky-navigation')
    navBar.classList.add('mobile-menu-navigation-bar')
  }
}

onMounted(() => {
  if (props.isSticky) {
    window.addEventListener('scroll', handleScroll)
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
  }
  if (props.isSimplePage) {
    carouselNavId.value = uuidv4()
    return
  }
  Navy.initMobile('#mobile-menu-id > nav', '#mobile-menu-id')
})
</script>
