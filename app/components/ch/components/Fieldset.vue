<template>
  <fieldset class="form__group">
    <legend
      v-if="legend"
      class="form__group__legend"
      :class="legendClasses"
    >
      {{ legend }} <span v-if="required" class="sr-only">required</span>
    </legend>
    <slot />
    <div v-if="message" class="badge badge--sm" :class="`badge--${messageType}`">
      {{ message }}
    </div>
  </fieldset>
</template>

<script>

export default {
  name: 'Fieldset',
  props: {
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
      default: 'outline'
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
    legend: {
      type: String,
    },
    message: {
      type: String,
    },
    messageType: {
      type: String,
      validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
      default: 'error'
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      let base = 'input '
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      if (this.message) base += `input--${this.messageType} `
      return base
    },
    legendClasses() {
      let base = ''
      if (this.variant === 'negative') base += `text--negative `
      if (this.size) base += `text--${this.size} `
      if (this.required) base += `text--asterisk `
      return base
    },
  },
}
</script>
