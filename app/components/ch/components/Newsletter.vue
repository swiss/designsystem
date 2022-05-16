<template>
<div :class="classes">
    <h3 v-text="title" class="newsletter__title h3"></h3>
    <p v-html="text" class="newsletter__text"></p>
    <form v-if="state!=='sent'" action="" class="newsletter__form">
      <Input
        :type="'email'"
        :id="'newsletter-address'"
        :label="inputLabel"
        :autocomplete="'true'"
        class="newsletter__input"
      />
      <Btn
        :variant="'filled'"
        :size="'base'"
        :label="buttonLabel"
        class="newsletter__button"
      />
    </form>
    <Notification
    v-else
    :icon="'CheckmarkCircle'"
    :text="successText"
    :type="'success'"
    :closeBtn="false"
    class="newsletter__notification"
  />
  </div>
</template>

<script>
import Input from './Input.vue';
import Btn from './Btn.vue';

import Notification from './Notification.vue';

export default {
  name: 'newsletter',
  components: {
    Input,
    Btn,
    Notification,
  },
  props: {
    state: {
      type: String,
      default: undefined,
      validator: (prop) => [
        'default',
        'sent'
      ].includes(prop)
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    inputLabel: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      required: true,
    },
    successText: {
      type: String,
      required: true,
    }
  },

  computed: {
    classes () {
      let base = 'newsletter '
      if (this.state) base += `notification--${this.state} `
      return base
    },
  }
};
</script>

