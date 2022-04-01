<template>
  <div 
    class="pagination"
    :class="!field ? 'pagination--extended' : '' "
  >
    <input 
      v-if="field"
      class="pagination__input"
      :class="computedClasses" 
      :value="currentPage" 
      aria-label="pagination input"
    />  
    <div 
      v-if="field"
      class="pagination__text"
    >
      {{ totalPages }}
    </div>
    <ul class="pagination_items">
      <li v-for="(item, index) in paginationItems" :key="`item-${index}`">
        <PaginationItem
          :icon="item.icon"
          :label="item.label"
          :link="item.link"
          :type="type"
          :size="size"
        />
      </li>
    </ul>
  </div>
</template>

<script>

import PaginationItem from "~/components/ch/components/PaginationItem";

export default {
  name: 'pagination',
  components: {
    PaginationItem
  },
  props: {
    type: {
      type: String,
      default: 'outline',
      validator: (prop) => [
        'outline',
        'outline-negative',
      ].includes(prop)
    },
    size: {
      type: String,
      default: 'base',
      validator: (prop) => [
        'sm',
        'base',
        'lg'
      ].includes(prop)
    },
    field: {
      type: Boolean,
      default: true
    },
    currentPage: {
      type: String
    },
    totalPages: {
      type: String
    },
    paginationItems: {
      type: Array
    }
  },
  
  computed: {
    computedClasses () {
      let base = 'input '
      if (this.type) base += `input--${this.type} `
      if (this.size) base += `input--${this.size} `
      return base
    }
  }
}
</script>
