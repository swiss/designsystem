<template>
  <div :class="computedClass">
    <label for="lang-switcher" class="sr-only"> Select language </label>
    <Select id="lang-switcher" bare variant="negative">
      <option>DE</option>
      <option>FR</option>
      <option>IT</option>
      <option disabled>RM</option>
      <option>EN</option>
    </Select>
  </div>
</template>

<script>
import Select from '../components/Select.vue'

export default {
  name: 'LanguageSwitcher',
  components: {
    Select,
  },
  computed: {
    computedClass() {
      let base = `language-switcher `
      return base
    },
  },
}
</script>
