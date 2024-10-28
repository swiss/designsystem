<template>
  <nav class="meta-navigation meta-navigation--mobile" aria-label="Meta">
    <ul>
      <li>
        <a href="#" class="meta-navigation__item"> Jobs </a>
      </li>
      <li>
        <a href="#" class="meta-navigation__item"> Kontakt </a>
      </li>
      <li>
        <a href="#" class="meta-navigation__item"> Medien </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'MetaNavigationMobile',
  components: {
    SvgIcon,
    LanguageSwitcher,
  },
  props: {
    isFreebrand: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      screenSize: 0,
    }
  },
  created() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  },
  methods: {
    resizeWindow() {
      this.screenSize = document.body.clientWidth
    },
  },
}
</script>
