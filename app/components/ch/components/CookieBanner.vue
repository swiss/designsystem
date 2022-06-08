<template>
  <div 
    v-if="!isClosed"
    class="cookie-banner"
  >
    <div class="cookie-banner__wrapper">
      <div class="cookie-banner__infos">
        <Notification
          type="info"
          icon="InfoCircle"
          :closeBtn="false"
          class="notification--no-shadow"
          text="<div>Damit wir unser Webangebot optimal auf Ihre Bedürfnisse ausrichten können, verwenden wir das Analysetool Google Analytics. Dabei wird Ihr Verhalten auf der Website in anonymisierter Form erfasst. Es werden also keine personenbezogenen Daten übermittelt oder gespeichert. Wenn Sie damit nicht einverstanden sind, können Sie die Datenerfassung durch Google Analytics unterbinden und diese Website trotzdem ohne Einschränkungen nutzen. Weitere Informationen dazu finden Sie auf unserer Seite <a href='#' class='link'>Rechtliches</a>.</div>"
        />
      </div>
      <div class="cookie-banner__actions ">
        <Btn
          variant="filled"
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
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
import Btn from '../components/Btn.vue';
import Notification from '../components/Notification.vue';

export default {
  name: 'CookieBanner',
  components: {
    SvgIcon,
    Btn,
    Notification
  },

  props: {
    isClosed: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    classes () {
      let base = 'cookie-banner '
      if (this.type) base += `cookie-banner--${this.type} `
      return base
    },
  }
};
</script>

