<template>
  <div class="form__group__input">
    <label
      v-if="label"
      :for="id"
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <textarea
      :class="classes"
      :id="id"
      :name="id"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
    >
    </textarea>
    <div v-if="message" class="badge badge--sm" :class="`badge--${messageType}`">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    rows: {
      type: Number,
      default: 4
    },
    cols: {
      type: Number,
      default: 50
    },
    message: {
      type: String,
    },
    messageType: {
      type: String,
      validator: (prop) => ['error', 'warning', 'success', 'info'].includes(prop),
      default: 'error'
    },
  },

  computed: {
    classes() {
      let base = ''
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      if (this.message) base += `input--${this.messageType} `
      return base
    },
    labelClasses() {
      let base = ''
      if (this.variant === 'negative') base += `text--negative `
      if (this.size) base += `text--${this.size} `
      return base
    },
  },
}
</script>
