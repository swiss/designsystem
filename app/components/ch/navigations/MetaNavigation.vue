<template>
  <nav
    :class="metanavigationClass"
    aria-label="Meta navigation"
  >
    <ul>
      <li>
        <a href="#">
          Über uns
        </a>
      </li>
      <li>
        <a href="#">
        Jobs
      </a>
      </li>
      <li>
        <a href="#">
          Kontakt
        </a>
      </li>
      <li>
        <a href="#">
          Medien
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MetaNavigation',
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
    metanavigationClass () {
      let base = `metanavigation `
      if (this.context) base += `metanavigation--${this.context} `
      return base
    }
  }
}
</script>