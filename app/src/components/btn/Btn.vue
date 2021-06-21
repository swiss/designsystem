<template>
<div>
  <button
    type="button"
    :class="classes"
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

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        '🇨🇭-btn': true,
        '🇨🇭-btn--primary': props.primary,
        '🇨🇭-btn--secondary': !props.primary,
        [`🇨🇭-btn--${props.size || 'medium'}`]: true,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
