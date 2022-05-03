<template>
  <aside
    class="authors"
    :class="{
      'authors--single' : authors.length === 1,
    }"
  >
    <div v-if="authorsWithImages.length" class="authors__images">
      <div
        v-for="(author) in authorsWithImages"
        :key="author.name"
        class="authors__image"
      >
        <img
          :src="author.img"
          :title="author.name"
        />
      </div>
    </div>
    <div class="authors__names">
      Von
      <span
        v-for="(author, index) in authors"
        :key="author.name"
      >
        <a v-if="author.url" :href="author.url" class="link">{{ author.name}}</a><!-- comment avoids empty space before ','
        --><span v-else>{{ author.name}}</span><!--
        --><span v-if="index!==authors.length-1">, </span>
      </span>
       <span></span>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Authors',
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
