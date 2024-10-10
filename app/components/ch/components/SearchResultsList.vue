<template>
  <ul class="search-results-list">
    <li v-for="(item, key) in itemList" :key="`${key}`">
      <Card :type="displayType === 'grid' ? 'universal' : 'list'">
        <template v-slot:image v-if="item.image">
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

        <template v-slot:metaInfos>
          <MetaInfo
            :metainfos="item.date ? [item.type, item.date] : [item.type]"
          />
        </template>
        <template v-slot:title>
          <h3>{{ item.title }}</h3>
        </template>
        <template v-slot:description>
          <p>
            {{ item.content }}
          </p>
        </template>
        <template v-slot:author> </template>
        <template v-slot:eventInfos v-if="item.isEvent">
          <ul class="flex flex-wrap">
            <li class="flex items-center mr-6 mb-2">
              <SvgIcon icon="Calendar" size="xl" class="-ml-1.5 mr-1" />
              <div>10-12 Mai 2022</div>
            </li>
            <li class="flex items-center mr-6 mb-2">
              <SvgIcon icon="Clock" size="xl" class="-ml-1.5 mr-1" />
              <div>9 bis 11 Uhr</div>
            </li>
            <li class="flex items-center mr-6 mb-2">
              <SvgIcon icon="MapMarker" size="xl" class="-ml-1.5 mr-1" />
              <div>Zürich</div>
            </li>
          </ul>
        </template>
        <template v-slot:specifications>
          <MetaInfo
            v-if="item.specifications"
            :metainfos="[item.specifications]"
          />
        </template>
        <template v-slot:contentIcons v-if="item.hasIcons != false">
          <div class="card__content-icons">
            <SvgIcon icon="Youtube" size="xl" />
            <SvgIcon icon="EasyLanguage" size="xl" />
            <SvgIcon icon="SignLanguage" size="xl" />
          </div>
        </template>
        <template v-slot:footerInfo>
          <MetaInfo v-if="item.topics" :metainfos="item.topics" />
        </template>
        <template v-slot:footerAction>
          <Btn
            to="item.href"
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

<script setup>
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from '../components/MetaInfo.vue'
import Btn from '../components/Btn.vue'
import Card from '../components/Card.vue'

const props = defineProps({
  itemList: {
    type: Array,
    required: true,
  },
  displayType: {
    type: String,
    required: false,
    default: () => 'list',
  },
})
</script>
