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
          <li>
            <a href="javascript:alert('link')">
              <span>News</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Geodaten</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Karten</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Geoportale</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')" class="active">
              <span>Dienstleistungen</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Forschung und Lehre</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Über geo.admin.ch</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <span>Geodienste</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__icon" />
        </a>
        <ul>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 1</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 2</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 3</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <span>Datenmodellablage</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__icon" />
        </a>
        <ul>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 1</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 2</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 3</span>
              <SvgIcon icon="ArrowRight" size="lg" />
            </a>
          </li>
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
