<template>
  <aside
    class="authors"
  >
    <div
      v-if="authorsWithImages.length"
      class="disc-images"
      aria-hidden="true"
    >
      <div
        v-for="(author) in authors"
        :key="author.name"
        class="disc-image"
      >
        <img
          v-if="author.img"
          :src="author.img"
          :title="author.name"
        />
        <div
          v-else-if="author.initials"
        >
          {{ author.initials }}
        </div>
        <SvgIcon
          v-else
          icon="User"
          class="btn__icon text-secondary-300"
        />

        <div
          v-else
        >
          <SvgIcon
            icon="User"
            class="btn__icon text-secondary-300"
          />
        </div>
      </div>
    </div>
    <address class="authors__names">
      {{ authors[0].prefix ? authors[0].prefix : 'von' }}

      <component
        v-for="(author, index) in authors"
        :is="author.url ? 'a' : 'span'"
        :class="author.url ? 'link' : ''"
        :href="author.url"
        :key="author.name"
        class="author__name"
      ><!--
      -->{{ author.name }}<!-- removing unneeded white space
      -->
      </component>
    </address>
  </aside>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'Authors',
  components: {
    SvgIcon
  },
  props: {
    authors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    authorsWithImages() {
      return this.authors.filter((author, index) => {
        return (author.img)
      })
    }
  }
}
</script>
