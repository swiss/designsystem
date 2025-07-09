<template>
  <section class="section bg--secondary-50">
    <div class="container">
      <div :class="computedClasses">
        <div class="grid socials__grid gap--responsive">
          <div class="socials__info">
            <h2 class="section__title">
              {{ sectionTitle }}
            </h2>

            <p v-html="sectionDesc" />
          </div>

          <Card
            v-for="(feed, i) in feeds"
            :key="feed.title + i"
            :type="feed.type == 'twitter' ? 'twitter' : 'default'"
          >
            <template #header>
              <SvgIcon :icon="capitalize(feed.type)" size="xl" class="mr-2" />
              <div>{{ feed.title }}</div>
            </template>
            <template #description>
              <div
                v-if="feed.type == 'twitter'"
                class="socials__twitter"
                v-html="feed.feedURL"
              />
              <div
                v-else-if="feed.type == 'youtube'"
                class="socials__youtube ratio ratio--16/9"
              >
                <!-- Youtube default embedding -->
                <iframe
                  width="560"
                  height="315"
                  :src="feed.feedURL"
                  title="YouTube video player"
                  allowfullscreen
                />
              </div>
              <div
                v-else-if="feed.type == 'instagram'"
                class="socials__instagram"
              >
                <!-- Instagram default embedding -->
                <blockquote
                  class="instagram-media"
                  :data-instgrm-permalink="
                    feed.feedURL +
                    '?utm_source=ig_embed&amp;utm_campaign=loading'
                  "
                  data-instgrm-version="14"
                  style="
                    background: #fff;
                    border: 0;
                    border-radius: 3px;
                    box-shadow:
                      0 0 1px 0 rgba(0, 0, 0, 0.5),
                      0 1px 10px 0 rgba(0, 0, 0, 0.15);
                    margin: 1px;
                    padding: 0;
                    width: 99.375%;
                    width: -webkit-calc(100% - 2px);
                    width: calc(100% - 2px);
                  "
                >
                  <div style="padding: 16px">
                    <a
                      :href="
                        feed.feedURL +
                        '?utm_source=ig_embed&amp;utm_campaign=loading'
                      "
                      style="
                        background: #ffffff;
                        line-height: 0;
                        padding: 0 0;
                        text-align: center;
                        text-decoration: none;
                        width: 100%;
                      "
                      target="_blank"
                    >
                      <div
                        style="
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                        "
                      >
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            flex-grow: 1;
                            justify-content: center;
                          "
                        >
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 4px;
                              flex-grow: 0;
                              height: 14px;
                              margin-bottom: 6px;
                              width: 100px;
                            "
                          />
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 4px;
                              flex-grow: 0;
                              height: 14px;
                              width: 60px;
                            "
                          />
                        </div>
                      </div>
                      <div style="padding: 19% 0" />
                      <div
                        style="
                          display: block;
                          height: 50px;
                          margin: 0 auto 12px;
                          width: 50px;
                        " />
                      <div style="padding-top: 8px">
                        <div
                          style="
                            color: #3897f0;
                            font-family: Arial, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 550;
                            line-height: 18px;
                          "
                        >
                          Sieh dir diesen Beitrag auf Instagram an
                        </div>
                      </div>
                      <div style="padding: 12.5% 0" />
                      <div
                        style="
                          display: flex;
                          flex-direction: row;
                          margin-bottom: 14px;
                          align-items: center;
                        "
                      >
                        <div>
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 50%;
                              height: 12.5px;
                              width: 12.5px;
                              transform: translateX(0px) translateY(7px);
                            "
                          />
                          <div
                            style="
                              background-color: #f4f4f4;
                              height: 12.5px;
                              transform: rotate(-45deg) translateX(3px)
                                translateY(1px);
                              width: 12.5px;
                              flex-grow: 0;
                              margin-right: 14px;
                              margin-left: 2px;
                            "
                          />
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 50%;
                              height: 12.5px;
                              width: 12.5px;
                              transform: translateX(9px) translateY(-18px);
                            "
                          />
                        </div>
                        <div style="margin-left: 8px">
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 50%;
                              flex-grow: 0;
                              height: 20px;
                              width: 20px;
                            "
                          />
                          <div
                            style="
                              width: 0;
                              height: 0;
                              border-top: 2px solid transparent;
                              border-left: 6px solid #f4f4f4;
                              border-bottom: 2px solid transparent;
                              transform: translateX(16px) translateY(-4px)
                                rotate(30deg);
                            "
                          />
                        </div>
                        <div style="margin-left: auto">
                          <div
                            style="
                              width: 0px;
                              border-top: 8px solid #f4f4f4;
                              border-right: 8px solid transparent;
                              transform: translateY(16px);
                            "
                          />
                          <div
                            style="
                              background-color: #f4f4f4;
                              flex-grow: 0;
                              height: 12px;
                              width: 16px;
                              transform: translateY(-4px);
                            "
                          />
                          <div
                            style="
                              width: 0;
                              height: 0;
                              border-top: 8px solid #f4f4f4;
                              border-left: 8px solid transparent;
                              transform: translateY(-4px) translateX(8px);
                            "
                          />
                        </div>
                      </div>
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          flex-grow: 1;
                          justify-content: center;
                          margin-bottom: 24px;
                        "
                      >
                        <div
                          style="
                            background-color: #f4f4f4;
                            border-radius: 4px;
                            flex-grow: 0;
                            height: 14px;
                            margin-bottom: 6px;
                            width: 224px;
                          "
                        />
                        <div
                          style="
                            background-color: #f4f4f4;
                            border-radius: 4px;
                            flex-grow: 0;
                            height: 14px;
                            width: 144px;
                          "
                        /></div
                    ></a>
                    <p
                      style="
                        color: #c9c8cd;
                        font-family: Arial, sans-serif;
                        font-size: 14px;
                        line-height: 17px;
                        margin-bottom: 0;
                        margin-top: 8px;
                        overflow: hidden;
                        padding: 8px 0 7px;
                        text-align: center;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      "
                    >
                      <a
                        :href="
                          feed.feedURL +
                          '?utm_source=ig_embed&amp;utm_campaign=loading'
                        "
                        style="
                          color: #c9c8cd;
                          font-family: Arial, sans-serif;
                          font-size: 14px;
                          font-style: normal;
                          font-weight: normal;
                          line-height: 17px;
                          text-decoration: none;
                        "
                        target="_blank"
                      />
                    </p>
                  </div>
                </blockquote>
                <!-- <script async src="//www.instagram.com/embed.js"></script> -->
              </div>
              <div
                v-else-if="feed.type == 'facebook'"
                class="socials__facebook"
              >
                <!-- Facebook default embedding -->
                <!-- Important! Remove width attribute from iframe in order to have correct styling -->
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fswisstopo%2Fvideos%2F5455503121148000%2F&show_text=false&width=560&t=0"
                  height="314"
                  style="border: none; overflow: hidden"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div
                v-else-if="feed.type == 'linkedIn'"
                class="socials__linkedin"
              >
                <!-- Linkedin default embedding -->
                <!-- Important! Remove width attribute from iframe in order to have correct styling -->
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7080107855969705984"
                  height="632"
                  frameborder="0"
                  allowfullscreen
                  title="Eingebetteter Beitrag"
                />
              </div>
            </template>
            <template #footerAction>
              <Btn
                :to="feed.profileURL"
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

<script setup lang="ts">
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'
import SvgIcon from '../components/SvgIcon.vue'
import { computed, onMounted } from 'vue'
import type { SocialsFeed } from '../../../types'

const props = defineProps({
  sectionTitle: {
    type: String,
    require: true,
    default: () => '',
  },
  sectionDesc: {
    type: String,
    required: true,
    default: () => '',
  },
  feeds: {
    type: Array<SocialsFeed>,
    required: true,
    default: () => [],
  },
})

const computedClasses = computed(() => {
  let base = 'socials '
  if (props.feeds.length === 1) base += `socials--items-1`
  else if (props.feeds.length === 2) base += `socials--items-2 `
  else if (props.feeds.length === 3) base += `socials--items-3 `
  else if (props.feeds.length === 4) base += `socials--items-4 `
  else if (props.feeds.length === 5) base += `socials--items-5 `
  else if (props.feeds.length === 6) base += `socials--items-6 `
  return base
})

const capitalize = function (s: string) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

onMounted(() => {
  if ((window as any).twttr) {
    ;(window as any).twttr.widgets.load()
  }
})
</script>
