<template>
  <div class="meta-navigation-container">
    <nav class="meta-navigation meta-navigation--desktop" aria-label="Meta">
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
        <li>
          <a href="#">
            <span> Mehr </span>
            <SvgIcon icon="MoreFilled" size="md" />
          </a>
        </li>
      </ul>
    </nav>
    <LanguageSwitcher v-if="isFreebrand && screenSize > 1023" type="outline" />
  </div>
</template>

<script>
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'MetaNavigation',
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
