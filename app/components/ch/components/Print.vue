<template>
  <div>
    <button
      aria-label="Print document"
      class="print-button"
      onClick="window.print()"
    >
      <SvgIcon
        aria-hidden=""
        icon="Printer"
        size="lg"
        class="print-button__icon"
      />
    </button>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import MetaInfo from './MetaInfo.vue'
export default {
  name: 'Print',
  components: {
    SvgIcon,
  },
}
</script>
