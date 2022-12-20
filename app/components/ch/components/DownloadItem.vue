<template>
  <a
    class="download-item"
    :href="url"
    download
  >
    <SvgIcon icon="Download" size="xl" class="download-item__icon" />
    <div>
      <component
        :is="tag"
        class="download-item__title"
      >
        {{ title }}
      </component>
      <p v-if="description" class="download-item__description">
        {{ description }}
      </p>
      <MetaInfo :metainfos="[type, date]" class="download-item__meta-info" />
    </div>
  </a>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from './MetaInfo.vue'
export default {
  name: 'DownloadItem',
  components: {
    SvgIcon,
    MetaInfo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    headingLevel: {
      type: String,
      default: 'h4',
      validator: (prop) => [
        'h2',
        'h3',
        'h4',
        'h5',
        'div'
      ].includes(prop)
    }
  },
  computed: {
    tag () {
      return this.headingLevel
    }
  }
}
</script>
