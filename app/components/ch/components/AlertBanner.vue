<template>
  <div :class="classes" v-if="!isClosed">
    <div class="alert-banner__wrapper">
      <SvgIcon
        v-if="icon"
        :icon="icon"
        class="notification__icon"
      />
      <div class="alert-banner__grid">
        <div class="alert-banner__header">
          <h4 class="font--bold">{{ title }}</h4>
          <p>{{ topic }}</p>
          <p>{{ lastUpdated }}</p>
        </div>
        <div class="alert-banner__content">
          <p>{{ text }}</p>
        </div>
        <ul v-if="link" class="alert-banner__list">
          <li class="alert-banner__list-item">
            <p>{{ introLink }}</p>
            <div class="alert-banner__link">
              <Btn
                :href="link.href"
                :label="link.label"
                :icon="link.icon ? link.icon : 'ArrowRight'"
                icon-pos="right"
                size="sm"
                variant="link-negative"
              />
            </div>
          </li>
        </ul>
      </div>
      <button
        v-if="closeBtn"
        class="alert-banner__close"
        @click="isClosed = true"
        aria-label="Close alert banner"
      >
        <SvgIcon
          icon="Cancel"
        />
      </button>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';
import Btn from '../components/Btn.vue';

export default {
  name: 'AlertBanner',
  components: {
    SvgIcon,
    Btn
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: undefined,
      validator: (prop) => [
        'info',
        'alert',
        'warning',
        'error',
        'success'
      ].includes(prop)
    },
    lastUpdated: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    introLink: {
      type: String,
      required: false,
    },
    link: {
      type: Object,
      required: false,
    },
    icon: {
      type: String,
      default: 'warning'
    },
    isClosed: {
      type: Boolean,
      default: false
    },
    closeBtn: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes () {
      let base = 'alert-banner '
      if (this.type) base += `alert-banner--${this.type} `
      return base
    },
  }
};
</script>

