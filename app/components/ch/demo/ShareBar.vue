<template>
  <div class="share-bar">
    <div class="flex share-container">
      <template v-if="showEasyIcons">
        <EasyLanguage />
        <SignLanguage />
      </template>
      <Print />
      <button
        id=""
        aria-label="Share document"
        class="btn btn--bare share-bar__share-button"
      >
        <SvgIcon aria-hidden="true" icon="Share" size="xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
import EasyLanguage from '../components/EasyLanguage.vue'
import Print from '../components/Print.vue'
import SignLanguage from '../components/SignLanguage.vue'
import SvgIcon from '../components/SvgIcon.vue'

const props = defineProps({
  showEasyIcons: {
    type: Boolean,
    default: true,
  },
})
</script>
