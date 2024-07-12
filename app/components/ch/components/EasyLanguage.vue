<template>
  <div>
    <button
      aria-label="Einfache Sprache öffnen"
      class="btn btn--bare"
      onClick="window.open('?path=/story/pages-detail-easy-language--example')"
    >
      <SvgIcon
        aria-hidden="true"
        icon="EasyLanguage"
        size="xl"
        class="easy-language-button__icon"
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
