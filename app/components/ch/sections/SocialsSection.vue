<template>
  <section class="section bg--secondary-50">
    <div class="container">
      <h2 class="section__title">{{sectionTitle}}</h2>

      <p v-html="sectionDesc"></p>

      <Card
        v-for="(feed) in feeds"
        :key="feed.title"
        :type="feed.type=='twitter'? 'twitter' : 'default'"
      >
        <template v-slot:header>
          <SvgIcon icon="Twitter" size="xl" class="mr-2" />
          <div>{{feed.title}}</div>
        </template>
        <template v-slot:body>
          <div v-if="feed.type=='twitter'">
            <a class="twitter-timeline"
              data-theme="light"
              data-tweet-limit="1"
              data-chrome="noheader, nofooter, noborders, transparent"
              :href="feed.url"
            >
              {{feed.title}}
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </template>
        <template v-slot:footerAction>
          <Btn
            :to="feed.url"
            variant="outline"
            icon-pos="only"
            icon="ArrowUpRight"
            label="Weiterlesen"
          />
        </template>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/ch/components/Card.vue';
import Btn from "~/components/ch/components/Btn";
import SvgIcon from '../components/SvgIcon.vue';


export default {
  name: 'SocialsSection',
  components: {
    Card,
    Btn,
    SvgIcon
  },
  props:  {
    sectionTitle: {
      type: String,
      require: true,
      default: ""
    },
    sectionDesc: {
      type: String,
      required: true,
      default: ""
    },
    feeds: {
      type: Array,
      required: true,
      default: () => []
    },
  }
};
</script>
