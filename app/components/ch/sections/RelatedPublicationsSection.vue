<template>
  <section class="section bg--secondary-50">
    <div class="container">
      <h2 class="section__title">Das könnte Sie auch interessieren</h2>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="universal">
          <template v-slot:image>
            <img src="/images/publication-cover.png" alt="cat" />
          </template>
          <template v-slot:metaInfos>
            <MetaInfo :metainfos="['Bericht', '03. März 2000']" />
          </template>
          <template v-slot:title>
            <h3>Auswirkungen von Corona auf die Schweizer Gesellschaft</h3>
          </template>
          <template v-slot:description>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </template>
          <template v-slot:specifications>
            <MetaInfo :metainfos="['PDF', '3.8 Mb', '102 Seiten', 'Deutsch']" />
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="universal">
          <template v-slot:image>
            <img src="/images/publication-cover.png" alt="cat" />
          </template>
          <template v-slot:metaInfos>
            <MetaInfo :metainfos="['Bericht', '03. März 2000']" />
          </template>
          <template v-slot:title>
            <h3>Auswirkungen von Corona auf die Schweizer Gesellschaft</h3>
          </template>
          <template v-slot:description>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </template>
          <template v-slot:specifications>
            <MetaInfo :metainfos="['PDF', '3.8 Mb', '102 Seiten', 'Deutsch']" />
          </template>
          <template v-slot:footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'
import MetaInfo from '../components/MetaInfo.vue'

const props = defineProps({})
</script>
