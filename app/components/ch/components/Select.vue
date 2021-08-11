<template>
  <div class="select">
    <select :class="classes">
      <option selected>Some Text1</option>
      <option>Some Text2</option>
      <option>Some Text3</option>
      <option>Some Text4</option>
      <option>Some Text5</option>
    </select>
    <div class="select__icon">
      <svg
        role="presentation"
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      validator: (prop) => ['outline', 'negative'].includes(prop),
    },
    size: {
      type: String,
      validator: (prop) => ['sm', 'base', 'lg'].includes(prop),
    },
  },

  computed: {
    classes() {
      let base = ''
      if (this.type) base += `input--${this.type} `
      if (this.size) base += `input--${this.size} `
      return base
    },
  },
}
</script>
