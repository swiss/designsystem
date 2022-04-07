<template>
  <div>
    <button
      aria-label="Print document"
      class="btn btn--bare"
      onClick="window.print()"
    >
      <SvgIcon
        aria-hidden="true"
        icon="Printer"
        size="xl"
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
