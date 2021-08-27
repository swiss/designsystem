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
          <SvgIcon icon="ChevronRight" class="breadcrumb__include-icon" aria-hidden="true" />
          <span>Diensleistungen</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__dropdown-icon" aria-hidden="true" />
        </a>
        <ul>
          <li>
            <a href="javascript:alert('link')">
              <span>News</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Geodaten</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Karten</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Geoportale</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')" class="active">
              <span>Dienstleistungen</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Forschung und Lehre</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Über geo.admin.ch</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <SvgIcon icon="ChevronRight" class="breadcrumb__include-icon" aria-hidden="true" />
          <span>Geodienste</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__dropdown-icon" aria-hidden="true" />
        </a>
        <ul>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 1</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 2</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Link 3</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <SvgIcon icon="ChevronRight" class="breadcrumb__include-icon" aria-hidden="true" />
          <span>Datenmodellablage</span>
          <SvgIcon icon="ChevronDown" class="breadcrumb__dropdown-icon" aria-hidden="true" />
        </a>
        <ul>
          <li>
            <a href="javascript:alert('link')">
              <span>Previous sibling of Datenmodellablage</span>
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Datenmodellablage</span>
            </a>
          </li>
          <li>
            <a href="javascript:alert('link')">
              <span>Next sibling with sub content</span>
              <SvgIcon icon="ArrowRight" size="lg" aria-hidden="true" />
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
  computed: {
    breadcrumbNavigationClass () {
      let base = `breadcrumb-navigation `
      if (this.context) base += `breadcrumb-navigation--${this.context} `
      return base
    }
  }
}
</script>
