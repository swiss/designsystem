<template>
  <div class="index-page-result__list">
    <div v-for="(item, index) in resultItems" :key="`item-${index}`">
      <IndexPageResultTitle :title="item.filter.toUpperCase()" />
      <IndexPageResultListItemList
        :item="item"
        :id="String(index)"
        :searchTerm="searchTerm"
      />
    </div>
  </div>
</template>

<script>
import IndexPageResultListItemList from '../components/IndexPageResultListItemList.vue';
import IndexPageResultTitle from '../components/IndexPageResultTitle.vue';

export default {
  name: 'IndexPageResultList',
  components: {
    IndexPageResultTitle,
    IndexPageResultListItemList,
  },
  props: {
    resultItems: {
      type: Array,
      default: () => [],
    },
    searchTerm: {
      type: String,
      required: false,
    },
  },
}
</script>
