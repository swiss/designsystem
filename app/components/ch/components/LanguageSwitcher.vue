<template>
  <div :class="computedClass" :id="`language-switcher-${context}`">
    <label for="lang-switcher" class="sr-only">
      Select language
    </label>
    <Select v-if="context=='desktop'" id="lang-switcher" bare variant="negative">
      <option>DE</option>
      <option>FR</option>
      <option>IT</option>
      <option>RU</option>
      <option>EN</option>
    </Select>
    <nav v-else aria-label="Change Language">
      <ul>
        <li><a href="#">DE</a></li>
        <li><a href="#">FR</a></li>
        <li><a href="#">IT</a></li>
        <li><a href="#">RU</a></li>
        <li><a href="#">EN</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Select from '../components/Select.vue'

export default {
  name: 'LanguageSwitcher',
  components: {
    Select
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
    computedClass () {
      let base = `language-switcher `
      if (this.context) base += `language-switcher--${this.context} `
      return base
    }
  }
}
</script>