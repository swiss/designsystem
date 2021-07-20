<template>
  <nav
    :class="breadcrumbNavigationClass"
    aria-label="Breadcrumb navigation"
  >
    <ol>
      <li>
        <a href="javascript:alert('homepage')">
          Startseite
        </a>
      </li>
      <li>
        <a href="#">
          Diensleistungen
          <SvgIcon
            icon="ChevronDown"
            class="breadcrumb__icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          Geodienste
          <SvgIcon
            icon="ChevronDown"
            class="breadcrumb__icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          Datenmodellablage
          <SvgIcon
            icon="ChevronDown"
            class="breadcrumb__icon"
          />
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'BreadcrumbNavigation',
  components: {
    SvgIcon
  },
  props: {
    context: {
      type: String,
      required: true,
      validator: (prop) => [
        'desktop',
        'mobile'
      ].includes(prop)
    }
  },
  computed: {
    breadcrumbNavigationClass () {
      let base = `breadcrumb-navigation `
      if (this.context) base += `breadcrumb-navigation--${this.context} `
      return base
    }
  }
}
</script>
