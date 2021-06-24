<template>
<div>
  <button
    type="button"
    class="btn btn--test"
  >
    {{ label }}
    <svg-icon id="ArrowRight" />
  </button>
</div>
</template>

<script>

export default {
  name: 'btn',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },
};
</script>
