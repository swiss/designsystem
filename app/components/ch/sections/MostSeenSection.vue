<template>
  <section class="section section--default">
    <div class="container">
      <h2 class="section__title">Meist gesehen</h2>
      <h3 class="section__subtitle">Top Karten</h3>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="default">
          <template #image>
            <img src="https://picsum.photos/775/350" alt="cat" />
          </template>
          <template #title>
            <h3>Wandern</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed
            </p>
          </template>
          <template #footerInfo> Dienstleistungen & Produkte </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template #image>
            <img src="https://picsum.photos/775/350" alt="cat" />
          </template>
          <template #title>
            <h3>Historische Karten</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </template>
          <template #footerInfo> Dienstleistungen & Produkte </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowRight"
              label="Weiterlesen"
            />
          </template>
        </Card>
        <Card type="default">
          <template #image>
            <img src="https://picsum.photos/775/350" alt="cat" />
          </template>
          <template #title>
            <h3>PLZ und Ortschaften</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </template>
          <template #footerInfo> Dienstleistungen & Produkte </template>
          <template #footerAction>
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

      <h3 class="section__subtitle">Top Themen</h3>
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <Card type="default">
          <template #title>
            <h3>Are</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowUpRight"
              label="Weiterlesen"
              rel="external"
            />
          </template>
        </Card>
        <Card type="default">
          <template #title>
            <h3>Energie</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowUpRight"
              label="Weiterlesen"
              rel="external"
            />
          </template>
        </Card>
        <Card type="default">
          <template #title>
            <h3>Luftfahrt</h3>
          </template>
          <template #description>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </template>
          <template #footerAction>
            <Btn
              to="#"
              variant="outline"
              icon-pos="only"
              icon="ArrowUpRight"
              label="Weiterlesen"
              rel="external"
            />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Btn from '../components/Btn.vue'
import Card from '../components/Card.vue'
</script>
