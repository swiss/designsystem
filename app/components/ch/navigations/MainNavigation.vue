<template>
  <nav
    :class="mainnavigationClass"
    aria-label="Main navigation"
  >
    <component :is="dummyContent"></component>
    
    <div class="more-buttons">
      <button class="hidden more-button more-button--left" id="more-button-left">
        <SvgIcon icon="ArrowLeft" size="lg" />
        <span>More</span>
      </button>
      <button class="hidden more-button more-button--right" id="more-button-right">
        <span>More</span>
        <SvgIcon icon="ArrowRight" size="lg" />
      </button>
	  </div>
  </nav>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
import DummyMainNavigationForDetailPage from '../demo/DummyMainNavigationForDetailPage.vue'
import DummyMainNavigationForHomePage from '../demo/DummyMainNavigationForHomePage.vue'

export default {
  name: 'MainNavigation',
  components: {
    SvgIcon,
    DummyMainNavigationForDetailPage,
    DummyMainNavigationForHomePage
  },
  props: {
    context: {
      type: String,
      required: true,
      validator: (prop) => [
        'desktop',
        'mobile'
      ].includes(prop)
    },
    isHomePage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mainnavigationClass () {
      let base = `main-navigation `
      if (this.context) base += `main-navigation--${this.context} `
      return base
    },

    dummyContent () {
      console.log('this.isHomePage', this.isHomePage);
      return this.isHomePage ? 'DummyMainNavigationForHomePage' : 'DummyMainNavigationForDetailPage'
    }
  }
}
</script>