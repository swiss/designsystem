<template>
  <div
    :class="computedClasses"
  >
  <Card
      type="default"
      :layout="columns === 1 ? 'image-left' : 'default'"
    >
      <template v-slot:image>
        <img src="https://placekitten.com/g/775/350" alt="cat" />
      </template>

      <template v-slot:title>
        <h3 class="card__title">Card 1</h3>
      </template>
      <template v-slot:description>
        <p>
          Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem
        </p>
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
    <Card type="default" v-if="columns - twitter >= 2">
      <template v-slot:image>
        <img src="https://placekitten.com/g/775/350" alt="cat" />
      </template>
      <template v-slot:title>
        <h3 class="card__title">Card 2</h3>
      </template>
      <template v-slot:description>
        <p>
          Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem
        </p>
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
    <Card type="default" v-if="columns - twitter >= 3">
      <template v-slot:image>
        <img src="https://placekitten.com/g/775/350" alt="cat" />
      </template>
      <template v-slot:title>
        <h3 class="card__title">Card 3</h3>
      </template>
      <template v-slot:description>
        <p>
          Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem
        </p>
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
    <Card type="twitter" v-if="twitter === 1">
      <template v-slot:header>
        <SvgIcon icon="Twitter" size="xl" class="mr-2" />
        <div>Tweets from @swiss_geoportal</div>
      </template>
      <template v-slot:description>
        <a class="twitter-timeline"
          data-theme="light"
          data-tweet-limit="4"
          data-chrome="noheader, nofooter, noborders, transparent"
          href="https://twitter.com/swiss_geoportal"
        >
          Tweets by swiss_geoportal
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'TopNewsSection',
  components: {
    Card,
    Btn,
    SvgIcon,
  },
  props:  {
    columns: {
      type: Number,
      validator: (prop) => {
        return prop > 0 && prop < 5
      },
    },
    twitter: {
      type: Number,
      default: 0,
      validator: (prop) => {
        return prop === 0 || prop === 1
      },
    },
  },

  computed: {
    computedClasses () {
      let base = 'grid gap--responsive '
      if (this.columns === 3) base += `grid--responsive-cols-3 `
      else if (this.columns === 2 && this.twitter === 0) base += `grid--responsive-cols-2 `
      else if (this.columns === 2 && this.twitter === 1) base += `grid--responsive-cols-2/3-1/3 `
      return base
    },
  }
};
</script>
