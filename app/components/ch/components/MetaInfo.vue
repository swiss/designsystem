<template>
  <p class="meta-info">
    <span v-for="info in metainfos" class="meta-info__item">
      {{ info }}
    </span>
  </p>
</template>

<script>
export default {
  name: 'Metainfo',
  props: {
    metainfos: {
      type: Array,
      required: true,
    },
  },
}
</script>
