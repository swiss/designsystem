<template>
<div>
  <button
    type="button"
    class="btn btn--test"
    @click="onClick"
  >
    {{ label }}
    <svg-icon id="ArrowRight" />
  </button>
</div>
</template>

<script>
import { reactive, computed } from 'vue';
import SvgIcon from '../../foundations/icons/SvgIcon.vue';

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
