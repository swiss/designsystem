<template>
  <li>
    <a
      class="download-item"
      :href="url"
      download
    >
      <SvgIcon icon="Download" size="xl" class="download-item__icon" />
      <div>
        <h5 class="download-item__title">
          {{ title }}
        </h5>
        <p v-if="description" class="download-item__description">
          {{ description }}
        </p>
        <MetaInfo :metainfos="[type, date]" class="download-item__meta-infos" />
      </div>
    </a>
  </li>
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
  },
}
</script>
