<template>
  <div class="form__group__checkbox">
    <input
      type="checkbox"
      :class="classes"
      :id="id"
      :name="name"
      :value="value"
      :required="required"
      @change="onChange($event)"
      :checked="checked"
    />
    <label v-if="label" :for="id" :class="labelClasses">
      <span v-html="label"></span
      ><span v-if="required" class="sr-only">required</span>
    </label>
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
  name: 'Checkbox',
  props: {
    variant: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
      default: 'outline',
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
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
    onChange: {
      type: Function,
      default: () => ({}),
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      let base = 'input '
      if (this.variant) base += `input--${this.variant} `
      if (this.size) base += `input--${this.size} `
      if (this.messageType) base += `input--${this.messageType} `
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
