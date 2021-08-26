<template>
  <div class="py-10">
    <div class="container">
      <h2 class="mb-10">Meist gesehen</h2>

      <h3 class="mb-4">Top Karten</h3>
      <div class="grid grid-cols-6 gap-8 lg:gap-12">
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3>Wandern</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3>Historische Karten</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <template v-slot:image>
            <img src="https://placekitten.com/g/775/350" alt="cat">
          </template>
          <div class="space-y-4">
            <h3>PLZ und Ortschaften</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
          <template v-slot:footerInfo>
            Dienstleistungen & Produkte
          </template>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowRight"></Btn>
          </template>
        </Card>
      </div>

      <h3 class="mt-10 mb-4">Top Themen</h3>
      <div class="grid grid-cols-6 gap-8 lg:gap-12">
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <div class="space-y-4">
            <h3>Wandern</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowUpRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <div class="space-y-4">
            <h3>Historische Karten</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowUpRight"></Btn>
          </template>
        </Card>
        <Card type="default" class="col-span-6 sm:col-span-3 md:col-span-2">
          <div class="space-y-4">
            <h3>PLZ und Ortschaften</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
          <template v-slot:footerAction>
            <Btn type="outline" icon-pos="only" icon="ArrowUpRight"></Btn>
          </template>
        </Card>
      </div>

    </div>
  </div>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'topHeader',
  components: {
    Card,
    Btn,
    SvgIcon,
  },
};
</script>
