<template>
  <nav
    :class="mainnavigationClass"
    aria-label="Main navigation"
  >
    <ul>
      <li>
        <a href="#">
          News
        </a>
      </li>
      <li>
        <a href="#">
          Geodaten
        </a>
      </li>
      <li>
        <a href="#">
          Karten
        </a>
      </li>
      <li>
        <a href="#">
          Thematische Geoportale
        </a>
      </li>
      <li>
        <a href="#">
          Dienstleistungen
        </a>
      </li>
      <li>
        <a href="#">
          Forschung und Lehre
        </a>
      </li>
      <li>
        <a href="#">
          Über geo.admin.ch
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavigation',
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
    mainnavigationClass () {
      let base = `main-navigation `
      if (this.context) base += `main-navigation--${this.context} `
      return base
    }
  }
}
</script>