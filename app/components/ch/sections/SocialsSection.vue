<template>
  <section class="section bg--secondary-50">
    <div class="container">
      <div :class="computedClasses">
        <div class="socials__grid grid gap--responsive">
          <div class="socials__info">
            <h2 class="section__title">{{sectionTitle}}</h2>

            <p v-html="sectionDesc"></p>
          </div>

          <Card
            v-for="(feed, i) in feeds"
            :key="feed.title+i"
            :type="feed.type=='twitter'? 'twitter' : 'default'"
          >
            <template v-slot:header>
              <SvgIcon :icon="capitalize(feed.type)" size="xl" class="mr-2" />
              <div>{{feed.title}}</div>
            </template>
            <template v-slot:description>
              <div
                v-if="feed.type=='twitter'"
                class="socials__twitter"
              >
                <!-- Twitter default embedding -->
                <a class="twitter-timeline"
                  data-theme="light"
                  data-tweet-limit="1"
                  data-chrome="noheader, nofooter, noborders, transparent"
                  :href="feed.feedURL"
                >
                  {{feed.title}}
                </a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
              <div
                v-else-if="feed.type=='youtube'"
                class="socials__youtube ratio ratio--16/9"
              >
                <!-- Youtube default embedding -->
                <iframe
                  width="560"
                  height="315"
                  :src="feed.feedURL"
                  title="YouTube video player"
                  allowfullscreen>
                </iframe>
              </div>
              <div
                v-else-if="feed.type=='instagram'"
                class="socials__instagram"
              >
                <!-- Instagram default embedding -->
                <blockquote class="instagram-media" :data-instgrm-permalink="feed.feedURL+'?utm_source=ig_embed&amp;utm_campaign=loading'" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a :href="feed.feedURL+'?utm_source=ig_embed&amp;utm_campaign=loading'" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;">  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Sieh dir diesen Beitrag auf Instagram an</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a :href="feed.feedURL+'?utm_source=ig_embed&amp;utm_campaign=loading'" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank"></a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>
              </div>
              <div
                v-else-if="feed.type=='facebook'"
                class="socials__facebook"
              >
                <!-- Facebook default embedding -->
                <!-- Important! Remove width attribute from iframe in order to have correct styling -->
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fswisstopo%2Fvideos%2F5455503121148000%2F&show_text=false&width=560&t=0" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
              </div>
              <div
                v-else-if="feed.type=='linkedIn'"
                class="socials__linkedin"
              >
                <!-- Linkedin default embedding -->
                <!-- Important! Remove width attribute from iframe in order to have correct styling -->
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7080107855969705984" height="632" frameborder="0" allowfullscreen="" title="Eingebetteter Beitrag"></iframe>
              </div>
            </template>
            <template v-slot:footerAction>
              <Btn
                :to="feed.pofileURL"
                variant="outline"
                icon-pos="only"
                icon="ArrowUpRight"
                label="Weiterlesen"
              />
            </template>
          </Card>
        </div>
      </div>
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
  },
  methods: {
    capitalize (s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  },
  computed: {
    computedClasses () {
      let base = 'socials '
      if (this.feeds.length ===  1) base += `socials--items-1`
      else if (this.feeds.length ===  2) base += `socials--items-2 `
      else if (this.feeds.length ===  3) base += `socials--items-3 `
      else if (this.feeds.length ===  4) base += `socials--items-4 `
      else if (this.feeds.length ===  5) base += `socials--items-5 `
      else if (this.feeds.length ===  6) base += `socials--items-6 `
      return base
    },
  }
};
</script>
