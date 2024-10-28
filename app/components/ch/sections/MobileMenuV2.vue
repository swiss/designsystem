<template>
  <div v-if="isSimplePage">
    <div class="mobile-menu-navigation-bar" id="mobile-menu-id">
      <CarouselNavigation :id="carouselNavId" />
    </div>
    <!-- invisible Placeholder to avoid jump when navigation is set to sticky -->
    <div v-if="useStickyPlaceholder" id="stickyPlaceholder" />
  </div>
  <div
    v-else
    id="mobile-menu-id"
    class="mobile-menu-v2"
    :class="isOpen ? 'mobile-menu-v2--is-open' : ''"
  >
    <div class="mobile-menu-v2-header" id="mobile-menu-header">
      <div
        v-for="(title, index) in menuTitles"
        :key="index"
        class="top-header__menu-v2-header-title-container"
        :id="`mobile-menu-v2-header-title-container__level-${index}`"
        :class="`mobile-menu-v2-header-title-container__level-${index}`"
      >
        <h2 class="top-header__menu-v2-title" :key="`menu-title-${index}`">
          <span>
            {{ title }}
          </span>
        </h2>
      </div>
      <btn
        class="mobile-menu-v2__back-button"
        @emitClick="showLevel(currentLevel - 1)"
        icon="ArrowLeft"
        iconPos="left"
        label="Zurück"
        size="base"
        variant="bare"
        ariaLabel="Navigiere zurück"
        :class="
          currentLevel > 0 ? 'mobile-menu-v2__back-button--is-visible' : ''
        "
      />
      <div class="mobile-menu-v2__close-button">
        <SvgIcon
          size="3xl"
          :spin="false"
          icon="Cancel"
          @click.native="closeMenu()"
        />
      </div>
    </div>
    <div id="scroll-target" />
    <div class="mobile-menu-v2-body">
      <div
        class="mobile-menu-v2-navigation-container"
        id="mobile-menu-navigation"
      >
        <div
          class="mobile-menu-v2__level mobile-menu-v2__level-0"
          id="mobile-menu-v2__level-0"
        >
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
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>

        <div
          class="mobile-menu-v2__level mobile-menu-v2__level-1"
          id="mobile-menu-v2__level-1"
        >
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
              <a href="javascript:alert('link')">Koordinatenreferenzsysteme</a>
            </li>
            <li>
              <a href="javascript:alert('link')">Geografische Bezeichnungen</a>
            </li>
            <li><a href="javascript:alert('link')">Verwaltungseinheiten</a></li>
          </ul>
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>

        <div
          class="mobile-menu-v2__level mobile-menu-v2__level-2"
          id="mobile-menu-v2__level-2"
        >
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
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>

        <div
          class="mobile-menu-v2__level mobile-menu-v2__level-3"
          id="mobile-menu-v2__level-3"
        >
          <ul class="mobile-menu-v2-navigation">
            <li>
              <a href="javascript:alert('link')">Überblick</a>
            </li>
            <li>
              <a href="javascript:alert('link')" aria-current="page">
                Web Map Services
              </a>
            </li>
            <li><a href="javascript:alert('link')">Web tiling Services</a></li>
            <li><a href="javascript:alert('link')">Vector Tiles Service</a></li>
            <li>
              <a href="javascript:alert('link')">Web Integration: iFrame</a>
            </li>
            <li><a href="javascript:alert('link')">FAQ API</a></li>
          </ul>
          <MetaNavigationMobile />
          <TopBarNavigation :isMobileMenu="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btn from '../components/Btn.vue'
import SvgIcon from '../components/SvgIcon.vue'
import CarouselNavigation from '../navigations/CarouselNavigation.vue'
import MetaNavigationMobile from '../navigations/MobileMetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'

export default {
  name: 'MobileMenuV2',
  components: {
    CarouselNavigation,
    btn,
    SvgIcon,
    MetaNavigationMobile,
    TopBarNavigation,
  },
  props: {
    isSticky: {
      type: Boolean,
      default: false,
    },
    isSimplePage: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpen() {
      if (this.isOpen) {
        this.scroolToTop()
      }
    },
  },
  data() {
    return {
      carouselNavId: '',
      useStickyPlaceholder: false,
      initialNavBarOffset: 0,
      currentLevel: 2,
      menuTitles: [
        'Hauptmenü',
        'Dienstleistungen',
        'Geodienste',
        'Darstellungsdienste',
      ],
      canNavigateBack: true,
      headerHeigt: 0,
    }
  },
  mounted() {
    if (this.isSticky) {
      window.addEventListener('scroll', this.handleScroll)
      this.resizeWindow()
      window.addEventListener('resize', this.resizeWindow)
    }
    if (this.isSimplePage) {
      this.carouselNavId = uuidv4()
      return
    }
    this.handleHeaderPlaceholder()
    window.addEventListener('resize', this.handleHeaderPlaceholder)
  },
  methods: {
    handleHeaderPlaceholder() {
      const header = document.getElementById('mobile-menu-header')
      const titleContainer = document.getElementById(
        `mobile-menu-v2-header-title-container__level-${this.currentLevel}`,
      )
      const currentLevel = document.getElementById(
        `mobile-menu-v2__level-${this.currentLevel}`,
      )
      currentLevel.style.borderTopWidth = `${titleContainer.clientHeight}px`
      header.style.height = `${titleContainer.clientHeight}px`
    },
    scroolToTop() {
      const scrollTarget = document.getElementById('scroll-target')
      scrollTarget.scrollIntoView({ behavior: 'smooth' })
    },
    async showLevel(level) {
      if (level === 0) {
        this.canNavigateBack = false
      } else {
        this.canNavigateBack = true
      }

      this.currentLevel = level
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

      await this.$nextTick()

      this.scroolToTop()
      this.handleHeaderPlaceholder()
    },
    closeMenu() {
      this.handleHeaderPlaceholder()
      this.$store.dispatch('layout/toggleMobileMenu')
    },
    resizeWindow() {
      const topHeader = document.getElementById('top-header-id')
      const topBar = document.getElementById('top-bar')
      this.initialNavBarOffset =
        topHeader.offsetTop + topHeader.clientHeight - topBar?.clientHeight
      this.handleScroll()
    },
    handleScroll() {
      const topBar = document.getElementById('top-bar')
      const navBar = document.getElementById('mobile-menu-id')
      if (this.initialNavBarOffset < window.scrollY) {
        this.useStickyPlaceholder = true
        // Set height on placeholder to avoid jump when navigation is set to sticky
        const stickyPlaceholder = document.getElementById('stickyPlaceholder')
        stickyPlaceholder.style.height = `${navBar.clientHeight}px`

        navBar.style.top = `${topBar.clientHeight}px`
        navBar.classList.add('mobile-menu-sticky-navigation')
        navBar.classList.remove('mobile-menu-navigation-bar')
      } else {
        navBar.style.top = ''
        this.useStickyPlaceholder = false
        navBar.classList.remove('mobile-menu-sticky-navigation')
        navBar.classList.add('mobile-menu-navigation-bar')
      }
    },
  },
}
</script>
