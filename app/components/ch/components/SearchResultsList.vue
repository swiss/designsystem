<template>
  <ul class="search-results-list">
    <li v-for="(item, key) in itemList" :key="`${key}`">
      <Card :type="displayType === 'grid' ? 'universal' : 'list'">
        <template v-if="item.image" #image>
          <figure>
            <picture>
              <source
                v-if="item.image.source"
                :srcset="item.image.source.srcset"
                :media="item.image.source.media"
              />
              <img :src="item.image.src" :alt="item.image.alt" />
            </picture>
          </figure>
        </template>

        <template #metaInfos>
          <MetaInfo
            :metainfos="item.date ? [item.type, item.date] : [item.type]"
          />
        </template>
        <template #title>
          <h3>{{ item.title }}</h3>
        </template>
        <template #description>
          <p>
            {{ item.content }}
          </p>
        </template>
        <template #author />
        <template v-if="item.isEvent" #eventInfos>
          <ul class="flex flex-wrap">
            <li class="flex items-center mb-2 mr-6">
              <SvgIcon icon="Calendar" size="xl" class="-ml-1.5 mr-1" />
              <div>10-12 Mai 2022</div>
            </li>
            <li class="flex items-center mb-2 mr-6">
              <SvgIcon icon="Clock" size="xl" class="-ml-1.5 mr-1" />
              <div>9 bis 11 Uhr</div>
            </li>
            <li class="flex items-center mb-2 mr-6">
              <SvgIcon icon="MapMarker" size="xl" class="-ml-1.5 mr-1" />
              <div>Zürich</div>
            </li>
          </ul>
        </template>
        <template #specifications>
          <MetaInfo
            v-if="item.specifications"
            :metainfos="[item.specifications]"
          />
        </template>
        <template v-if="item.hasIcons != false" #contentIcons>
          <div class="card__content-icons">
            <SvgIcon icon="Youtube" size="xl" />
            <SvgIcon icon="EasyLanguage" size="xl" />
            <SvgIcon icon="SignLanguage" size="xl" />
          </div>
        </template>
        <template #footerInfo>
          <MetaInfo v-if="item.topics" :metainfos="item.topics" />
        </template>
        <template #footerAction>
          <Btn
            :to="item.href"
            variant="outline"
            icon-pos="only"
            icon="ArrowRight"
            label="Weiterlesen"
          />
        </template>
      </Card>
    </li>
  </ul>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from '../components/MetaInfo.vue'
import Btn from '../components/Btn.vue'
import Card from '../components/Card.vue'
import type { SearchResultItem } from '../../../types'

defineProps({
  itemList: {
    type: Array<SearchResultItem>,
    required: true,
  },
  displayType: {
    type: String,
    required: false,
    default: () => 'list',
  },
})
</script>
