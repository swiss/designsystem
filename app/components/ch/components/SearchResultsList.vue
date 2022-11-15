<template>
  <ul
    class="search-results-list"
  >
    <li
      v-for="(item, key) in itemList"
      :key="`${key}`"
    >
      <Card :type="displayType === 'grid' ? 'universal' : 'list'">
        <template v-slot:image v-if="item.image">
          <figure>
            <picture>
              <source v-if="item.image.source"
                :srcset="item.image.source.srcset"
                :media="item.image.source.media"
              />
              <img :src="item.image.src" :alt="item.image.alt" />
            </picture>
          </figure>
        </template>

        <template v-slot:metaInfos>
          <MetaInfo
            :metainfos="[item.type, item.date]"
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
        <template v-slot:author>
        </template>
        <template v-slot:specifications>
          <MetaInfo
            :metainfos="[item.specifications]"
          />
        </template>
        <template v-slot:contentIcons>
          <div
            class="card__content-icons"
          >
            <SvgIcon icon="Youtube" size="xl"/>
            <SvgIcon icon="EasyLanguage" size="xl"/>
            <SvgIcon icon="SignLanguage" size="xl"/>
          </div>
        </template>
        <template v-slot:footerInfo>
          <MetaInfo
            v-if="item.topics" :metainfos="item.topics"
          />
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

<script>
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from '../components/MetaInfo.vue'
import Btn from '../components/Btn.vue'
import Card from '../components/Card.vue'

export default {
  name: 'SearchresultsList',
  components: {
    SvgIcon,
    MetaInfo,
    Btn,
    Card
  },
  props: {
    itemList: {
      type: Array,
      required: true
    },
    displayType: {
      type: String,
      required: false,
      default: 'list'
    }

  }
}
</script>

