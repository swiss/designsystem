<template>
  <nav
    :class="topBarNavigationClass"
    aria-label="Top bar"
  >
    <ul>
      <li>
        <a href="#">
          Anmelden
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
      let base = `top-bar-navigation `
      if (this.context) base += `top-bar-navigation--${this.context} `
      return base
    }
  }
}
</script>
