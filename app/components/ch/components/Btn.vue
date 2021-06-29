<template>
<div>
  <button
    type="button"
    class="btn btn--test"
  >
    {{ label }}
    <SvgIcon icon="ArrowRight" />
  </button>
</div>
</template>

<script>

import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'btn',
  components: {
    SvgIcon
  },
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
