<template>
  <nav
    :class="breadcrumbNavigationClass"
    aria-label="Breadcrumb navigation"
  >
    <ol>
      <li>
        <a href="#">
          Startseite
        </a>
      </li>
      <li>
        <a href="#">
          Diensleistungen
        </a>
      </li>
      <li>
        <a href="#">
          Geodienste
        </a>
      </li>
      <li>
        <a href="#">
          Datenmodellablage
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbNavigation',
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
