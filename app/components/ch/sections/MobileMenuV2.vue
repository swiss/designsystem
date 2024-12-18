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
    class="mobile-menu-v2"
  >
    <div id="mobile-menu-header" class="mobile-menu-v2-header">
      <div
        v-for="(title, index) in menuTitles"
        :id="`mobile-menu-v2-header-title-container__level-${index}`"
        :key="index"
        class="top-header__menu-v2-header-title-container"
        :class="`mobile-menu-v2-header-title-container__level-${index}`"
      >
        <h2 :key="`menu-title-${index}`" class="top-header__menu-v2-title">
          <span>
            {{ title }}
          </span>
        </h2>
      </div>
      <Btn
        class="mobile-menu-v2__back-button"
        icon="ArrowLeft"
        iconPos="left"
        label="Zurück"
        size="base"
        variant="bare"
        ariaLabel="Navigiere zurück"
        :class="
          currentLevel > 0 ? 'mobile-menu-v2__back-button--is-visible' : ''
        "
        @emit-click="showLevel(currentLevel - 1)"
      />
      <div class="mobile-menu-v2__close-button">
        <SvgIcon size="3xl" :spin="false" icon="Cancel" @click="closeMenu()" />
      </div>
    </div>
    <div id="scroll-target" />
    <div class="mobile-menu-v2-body">
      <div
        id="mobile-menu-navigation"
        class="mobile-menu-v2-navigation-container"
      >
        <div
          id="mobile-menu-v2__level-0"
          class="mobile-menu-v2__level mobile-menu-v2__level-0"
        >
          <nav aria-label="Main">
            <ul class="mobile-menu-v2-navigation">
              <li>
                <a href="javascript:alert('link')">
                  <span>News</span>
                </a>
              </li>
              <li>
                <a href="javascript:alert('link)">
                  <span>Geodaten</span>
                </a>
              </li>
              <li>
                <a href="javascript:alert('link')">
                  <span>Karten</span>
                </a>
              </li>
              <li>
                <a href="javascript:alert('link')">
                  <span>Geoportale</span>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  role="button"
                  aria-current="true"
                  class="mobile-menu-v2-navigation-item__has-children active"
                  @click="showLevel(1)"
                >
                  <span>Dienstleistungen</span>
                  <SvgIcon icon="ArrowRight" size="lg" />
                </a>
              </li>
              <li>  
                <a href="javascript:alert('link')"> Forschung und Lehre </a>
              </li>
              <li>
                <a href="javascript:alert('link')"> Über geo.admin.ch </a>
              </li>
              <li>
                <a href="javascript:alert('link')"> test1 </a>
              </li>
              <li>
                <a href="javascript:alert('link')"> test2 </a>
              </li>
              <li>
                <a href="javascript:alert('link')"> test3 </a>
              </li>
              <li>
                <a href="javascript:alert('link')"> Extra mainmenu example </a>
              </li>
              <li>
                <a href="javascript:alert('link')">
                  Try to limit mainmenus to 5
                </a>
              </li>
            </ul>
          </nav>
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>

        <div
          id="mobile-menu-v2__level-1"
          class="mobile-menu-v2__level mobile-menu-v2__level-1"
        >
          <nav aria-label="Main">
            <ul class="mobile-menu-v2-navigation">
              <li>
                <a href="javascript:alert('link')">Überblick</a>
              </li>
              <li><a href="javascript:alert('link')">Datenmodellablage</a></li>
              <li>
                <a
                  href="javascript:void(0)"
                  role="button"
                  aria-current="true"
                  class="mobile-menu-v2-navigation-item__has-children active"
                  @click="showLevel(2)"
                  ><span>Geodienste</span> <SvgIcon icon="ArrowRight" size="lg"
                /></a>
              </li>
              <li><a href="javascript:alert('link')">Geodatenmodelle</a></li>
              <li><a href="javascript:alert('link')">FAQ</a></li>
              <li>
                <a href="javascript:alert('link')"
                  >Koordinatenreferenzsysteme</a
                >
              </li>
              <li>
                <a href="javascript:alert('link')"
                  >Geografische Bezeichnungen</a
                >
              </li>
              <li>
                <a href="javascript:alert('link')">Verwaltungseinheiten</a>
              </li>
            </ul>
          </nav>
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>

        <div
          id="mobile-menu-v2__level-2"
          class="mobile-menu-v2__level mobile-menu-v2__level-2"
        >
          <nav aria-label="Main">
            <ul class="mobile-menu-v2-navigation">
              <li>
                <a href="javascript:alert('link')">Überblick</a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  aria-current="true"
                  class="mobile-menu-v2-navigation-item__has-children"
                  @click="showLevel(3)"
                  ><span>Darstellungsdienste</span>
                  <SvgIcon icon="ArrowRight" size="lg"
                /></a>
              </li>
              <li><a href="javascript:alert('link')">Download-Dienste</a></li>
              <li>
                <a href="javascript:alert('link')" class="active"
                  >Linked Data Dienst: GeoDaten semantisch verlinken</a
                >
              </li>
              <li>
                <a href="javascript:alert('link')"
                  >Allgemeine Nutzungsbedingungen und Betriebsbestimmungen der
                  Bundes Geodaten-Infrastruktur BGDI</a
                >
              </li>
              <li><a href="javascript:alert('link')">Suchdienst CSW</a></li>
              <li>
                <a href="javascript:alert('link')"
                  >Konformitätsprüfung Geobasisdienste nach eCH-0056</a
                >
              </li>
              <li><a href="javascript:alert('link')">INSPIRE Dienste</a></li>
            </ul>
          </nav>
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>

        <div
          id="mobile-menu-v2__level-3"
          class="mobile-menu-v2__level mobile-menu-v2__level-3"
        >
          <nav aria-label="Main">
            <ul class="mobile-menu-v2-navigation">
              <li>
                <a href="javascript:alert('link')">Überblick</a>
              </li>
              <li>
                <a href="javascript:alert('link')" aria-current="page">
                  Web Map Services
                </a>
              </li>
              <li>
                <a href="javascript:alert('link')">Web tiling Services</a>
              </li>
              <li>
                <a href="javascript:alert('link')">Vector Tiles Service</a>
              </li>
              <li>
                <a href="javascript:alert('link')">Web Integration: iFrame</a>
              </li>
              <li><a href="javascript:alert('link')">FAQ API</a></li>
            </ul>
          </nav>
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '../../../store/layout'
import Btn from '../components/Btn.vue'
import SvgIcon from '../components/SvgIcon.vue'
import CarouselNavigation from '../navigations/CarouselNavigation.vue'
import MetaNavigationMobile from '../navigations/MobileMetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import { v4 as uuidv4 } from 'uuid'
import { reactive, ref, onMounted, nextTick } from 'vue'

const carouselNavId = ref('')
const useStickyPlaceholder = ref(false)
const initialNavBarOffset = ref(0)
const currentLevel = ref(2)
const menuTitles = reactive([
  'Hauptmenü',
  'Dienstleistungen',
  'Geodienste',
  'Darstellungsdienste',
])

const props = defineProps({
  isSticky: {
    type: Boolean,
    default: () => false,
  },
  isSimplePage: {
    type: Boolean,
    default: () => false,
  },
})

const handleHeaderPlaceholder = function () {
  const header = document.getElementById('mobile-menu-header') as HTMLElement
  const titleContainer = document.getElementById(
    `mobile-menu-v2-header-title-container__level-${currentLevel.value}`,
  ) as HTMLElement
  const currentLevelEl = document.getElementById(
    `mobile-menu-v2__level-${currentLevel.value}`,
  ) as HTMLElement
  currentLevelEl.style.borderTopWidth = `${titleContainer.clientHeight}px`
  header.style.height = `${titleContainer.clientHeight}px`
}

const scrollToTop = function () {
  const scrollTarget = document.getElementById('scroll-target') as HTMLElement
  scrollTarget.scrollIntoView({ behavior: 'smooth' })
}

const showLevel = async function (level: number) {
  currentLevel.value = level
  document.body.classList.remove(
    'show-level-0',
    'show-level-1',
    'show-level-2',
    'show-level-3',
    'show-level-4',
    'show-level-5',
    'show-level-6',
    'show-level-7',
  )
  document.body.classList.add(`show-level-${level}`)

  await nextTick()

  scrollToTop()
  handleHeaderPlaceholder()
}

const closeMenu = function () {
  handleHeaderPlaceholder()
  useLayoutStore().toggleMobileMenu()
}

const resizeWindow = function () {
  const topHeader = document.getElementById('top-header-id') as HTMLElement
  const topBar = document.getElementById('top-bar') as HTMLElement
  initialNavBarOffset.value =
    topHeader.offsetTop + topHeader.clientHeight - topBar?.clientHeight
  handleScroll()
}

const handleScroll = function () {
  const topBar = document.getElementById('top-bar') as HTMLElement
  const navBar = document.getElementById('mobile-menu-id') as HTMLElement
  if (initialNavBarOffset.value < window.scrollY) {
    useStickyPlaceholder.value = true
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
  handleHeaderPlaceholder()
  window.addEventListener('resize', handleHeaderPlaceholder)
})
</script>
