<template>
  <div class="flex flex-row-reverse items-end">
    <div class="flex share-container">
      <Print />
      <SvgIcon icon="Share" size="lg" />
    </div>
  </div>
</template>

<script>
import Print from '../components/Print.vue'
import SvgIcon from '../components/SvgIcon.vue'
export default {
  name: 'ShareBar',
  props: {},
  computed: {},
  components: { Print, SvgIcon },
}
</script>
