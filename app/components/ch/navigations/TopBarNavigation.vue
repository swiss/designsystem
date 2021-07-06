<template>
  <nav
    :class="topBarNavigationClass"
    aria-label="Top bar navigation"
  >
    <ul>
      <li>
        <a href="#">
          Anmelden
        </a>
      </li>
      <li>
        <a href="#">
          Leichte Sprache
        </a>
      </li>
      <li>
        <a href="#">
          Gebärden Sprache
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TopbarNavigation',
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
    topBarNavigationClass () {
      let base = `topbar-navigation `
      if (this.context) base += `topbar-navigation--${this.context} `
      return base
    }
  }
}
</script>