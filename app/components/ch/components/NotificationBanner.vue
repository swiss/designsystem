<template>
  <div
    v-if="!isClosed"
    :class="computedClasses"
  >
    <div class="notification-banner__wrapper">
      <p class="notification-banner__infos">
        Damit wir unser Webangebot optimal auf Ihre Bedürfnisse ausrichten können, verwenden wir das Analysetool Google Analytics. Dabei wird Ihr Verhalten auf der Website in anonymisierter Form erfasst. Es werden also keine personenbezogenen Daten übermittelt oder gespeichert. Wenn Sie damit nicht einverstanden sind, können Sie die Datenerfassung durch Google Analytics unterbinden und diese Website trotzdem ohne Einschränkungen nutzen. Weitere Informationen dazu finden Sie auf unserer Seite
        <a href="#" class="link">Rechtliches</a>.
      </p>
      <Btn
        variant="outline"
        size="sm"
        icon-pos="right"
        icon="Checkmark"
        label="Einverstanden"
        @click.native="isClosed = true"
      />
      <Btn
        variant="bare"
        size="sm"
        icon-pos="right"
        icon="Cancel"
        label=" Weiter ohne Datenerfassung"
        @click.native="isClosed = true"
      />
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
import Btn from '../components/Btn.vue';

export default {
  name: 'NotificationBanner',
  components: {
    SvgIcon,
    Btn,
  },

  props: {
    isClosed: {
      type: Boolean,
      default: false
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info',
      validator: (prop) => [
        'info',
        'warning',
        'error',
        'success'
      ].includes(prop)
    },
  },

  computed: {
    computedClasses () {
      let base = 'notification-banner '
      if (this.isFixed) base += 'notification-banner--fixed '
      if (this.type) base += `notification notification--${this.type} `
      return base
    }
  }
};
</script>

