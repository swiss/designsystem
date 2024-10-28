<template>
  <h2 class="glossar-result__title">{{ title }}</h2>
</template>
<script>
export default {
  name: 'GlossarResultTitle',
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
