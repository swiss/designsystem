<template>
  <li>
    <button
      class="download-item"
      :href="url"
      target="_blank"
      :download="title"
      :id="`download-item-${id}`"
    >
      <SvgIcon icon="Download" size="xl" class="download-item__icon" />
      <div>
        <p class="download-item__title">
          {{ title }}
        </p>
        <p v-if="description" class="download-item__description">
          {{ description }}
        </p>
        <p class="download-meta-info">
          <span class="download-item__size">
            {{ type }}
          </span>
          <span class="download-item__meta-divider">|</span>
          <span class="download-item__date">
            {{ date }}
          </span>
        </p>
      </div>
    </button>
  </li>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
import DownloadItem from '../../../scripts/DownloadItem.js'
export default {
  name: 'Accordion',
  components: {
    SvgIcon,
  },
  props: {
    id: {
      type: String,
      required: false,
      // generate default randomized id if not existing
      default: () => Math.random().toString(36).substring(2, 15),
    },
    title: {
      type: String,
      required: true,
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

  mounted() {
    DownloadItem.init(`#download-item-${this.id}`)
  },
}
</script>
