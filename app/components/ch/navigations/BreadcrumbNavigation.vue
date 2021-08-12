<template>
  <nav
    :class="breadcrumbNavigationClass"
    aria-label="Breadcrumb navigation"
  >
    <ul>
      <li>
        <a href="javascript:alert('homepage')">
          <span>Startseite</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" role="button" class="breadcrumb__has-children active">
          <span>Diensleistungen</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__icon" />
        </a>
        <ul>
          <li><a href="javascript:alert('link')">News</a></li>
          <li><a href="javascript:alert('link')">Geodaten</a></li>
          <li><a href="javascript:alert('link')">Karten</a></li>
          <li><a href="javascript:alert('link')">Geoportale</a></li>
          <li><a href="javascript:alert('link')">Dienstleistungen</a></li>
          <li><a href="javascript:alert('link')">Forschung und Lehre</a></li>
          <li><a href="javascript:alert('link')">Über geo.admin.ch</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <span>Geodienste</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__icon" />
        </a>
        <ul>
          <li><a href="javascript:alert('link')">Link 1</a></li>
          <li><a href="javascript:alert('link')">Link 2</a></li>
          <li><a href="javascript:alert('link')">Link 3</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <span>Datenmodellablage</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__icon" />
        </a>
        <ul>
          <li><a href="javascript:alert('link')">Link 1</a></li>
          <li><a href="javascript:alert('link')">Link 2</a></li>
          <li><a href="javascript:alert('link')">Link 3</a></li>
        </ul>
      </li>
    </ul>
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
