<template>
  <div>
    <button
      aria-label="Gebärdensprache öffnen"
      class="btn btn--bare"
      onClick="window.open('?path=/story/pages-detail-easy-language--example')"
    >
      <SvgIcon
        aria-hidden="true"
        icon="SignLanguage"
        size="xl"
        class="sign-language-button__icon"
      />
    </button>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  name: 'Print',
  components: {
    SvgIcon,
  },
}
</script>
