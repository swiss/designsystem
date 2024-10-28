<template>
  <ul :id="`index-page-item-list-${id}`" class="index-page-list">
    <IndexPageResultListItem
      v-for="(listItem, itemIndex) in item.results"
      :key="`listItem-${itemIndex}`"
      v-bind="listItem"
      :searchTerm="searchTerm"
    />
  </ul>
</template>

<script>
import IndexPageResultListItem from '../components/IndexPageResultListItem.vue'

export default {
  name: 'IndexPageResultListItemList',
  components: { IndexPageResultListItem },
  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    searchTerm: {
      type: String,
      required: false,
    },
  },
}
</script>
