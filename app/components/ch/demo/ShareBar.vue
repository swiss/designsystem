<template>
  <div class="container">
    <div class="share-bar">
      <div class="flex share-container">
        <Print />
        <button
          id=""
          aria-label="Share document"
          class="btn btn--bare share-bar__share-button"
          >
          <SvgIcon aria-hidden="true" icon="Share" size="xl" />
        </button>
      </div>
      <Btn
        to="/"
        variant="outline"
        size="sm"
        icon="ArrowLeft"
        iconPos="left"
        label="Zurück zu Übersicht"
        class="mr-auto"
      />
    </div>
  </div>
</template>

<script>
import Print from '../components/Print.vue'
import SvgIcon from '../components/SvgIcon.vue'
import Btn from '../components/Btn.vue'
export default {
  name: 'ShareBar',
  props: {},
  computed: {},
  components: { Print, SvgIcon, Btn },
}
</script>
