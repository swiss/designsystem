<template>
  <h2 class="index-page-result__title">{{ title }}</h2>
</template>
<script>
export default {
  name: 'IndexPageResultTitle',
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
