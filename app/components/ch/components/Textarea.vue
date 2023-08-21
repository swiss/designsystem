<template>
  <div class="form__group__input">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}
    </label>
    <textarea
      :class="classes"
      :id="id"
      :name="id"
      :rows="rows"
      :cols="cols"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :required="required"
    >
    </textarea>
    <div
      v-if="message"
      class="badge badge--sm"
      :class="`badge--${messageType}`"
    >
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
      default: 4,
    },
    cols: {
      type: Number,
      default: 50,
    },
    message: {
      type: String,
    },
    messageType: {
      type: String,
      validator: (prop) =>
        ['error', 'warning', 'success', 'info'].includes(prop),
    },
    required: {
      type: Boolean,
      default: false,
    },
    resizable: {
      type: Boolean,
      default: true,
    },
    maxlength: {
      type: Number,
    },
    minlength: {
      type: Number,
    },
  },

  computed: {
    classes() {
      let base = ''
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      if (this.messageType) base += `input--${this.messageType} `
      if (!this.resizable) base += 'textarea--static'
      return base
    },
    labelClasses() {
      let base = ''
      if (this.variant === 'negative') base += `text--negative `
      if (this.size) base += `text--${this.size} `
      if (this.required) base += `text--asterisk `
      return base
    },
  },
}
</script>
