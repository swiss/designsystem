import Card from '../../ch/components/Card.vue'
import Btn from '../../ch/components/Btn.vue'
import SvgIcon from '../../ch/components/SvgIcon.vue'
import SubpagesSection from '../../ch/sections/SubpagesSection.vue'

const TemplateCardArticle = (args) => ({
  setup: () => ({ ...args }),
  components: { Card, Btn, SvgIcon },
  template: `
    <div>
      <div style="padding: 3em;" class="bg--accent-01">
        <div style="max-width: 600px; margin: auto;">
          <Card :type="type">
            <template v-slot:image>
              <img src="https://picsum.photos/775/435" alt="cat">
            </template>
            <template v-slot:metaInfos>
              <p class="meta-info">
                <span class="meta-info__item">
                  Webartikel
                </span>
                <span class="meta-info__item">
                  23. Februar 2022
                </span>
              </p>
            </template>
            <template v-slot:title>
              <h3>Daten und Dienste online kostenlos als Open Government Data (OGD)</h3>
            </template>
            <template v-slot:description>
              <p>
                Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem
              </p>
            </template>
            <template v-slot:footerInfo>
              Topic
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
    </div>`,
})

const TemplateCardEvent = (args) => ({
  setup: () => ({ ...args }),
  components: { Card, Btn, SvgIcon },
  template: `
    <div>
      <div style="padding: 3em;" class="bg--accent-01">
        <div style="max-width: 600px; margin: auto;">
          <Card type="default">
            <template v-slot:image>
              <img src="https://picsum.photos/775/350" alt="cat">
            </template>
            <template v-slot:metaInfos>
              <p class="meta-info">
                <span class="meta-info__item">
                  Konferenz
                </span>
                <span class="meta-info__item">
                  23. Februar 2022
                </span>
              </p>
            </template>
            <template v-slot:title>
              <h3>Event title</h3>
            </template>
            <template v-slot:description>
              <p>
                Hatten Sie schon immer eine Idee, die sie mit Geodaten umsetzen wollten?
                Wollten Sie schon immer ein Problem mit Hilfe von Karten und Luftbildern lösen?
              </p>
            </template>
            <template v-slot:eventInfos>
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
            <template v-slot:footerInfo>
              Topic
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
    </div>`,
})

const TemplateCardShare = (args) => ({
  setup: () => ({ ...args }),
  components: { Card, Btn, SvgIcon },
  template: `
    <div>
      <div style="padding: 3em;" class="bg--accent-01">
        <div style="max-width: 600px; margin: auto;">
          <Card>
            <template v-slot:header>
              <SvgIcon icon="Instagram" size="xl" class="mr-2" />
              <div>Instagram insights</div>
            </template>
            <template v-slot:description>
              <div
                class="socials__instagram"
              >
                <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0"
                  src="https://www.instagram.com/p/Cd6KkQsOnOh/embed/?cr=1&amp;v=14&amp;wp=333&amp;rd=https%3A%2F%2Fstorybook.bund-ds.bedev.liip.ch&amp;rp=%2Fiframe.html%3Fid%3Dpages-homepage--example%26viewMode%3Ddocs#%7B%22ci%22%3A0%2C%22os%22%3A880315.3999999994%2C%22ls%22%3A879792.2999999998%2C%22le%22%3A880250.2000000002%7D"
                  allowtransparency="true" allowfullscreen="true" frameborder="0" height="588"
                  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"
                  style="background: white; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>
              </div>
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
    </div>`,
})

const TemplateCardHub = (args) => ({
  setup: () => ({ ...args }),
  components: { SubpagesSection },
  template: `<SubpagesSection />`,
})

export default {
  title: 'Components/Card/Cards variants',
  components: (Card, Btn, SvgIcon),
}

export const ArticleOrNewsItem = {
  render: TemplateCardArticle,
  args: {
    type: 'default',
  },
}

export const NewsItemOptionalImage = {
  render: TemplateCardArticle,
  name: 'News item, optional image',
  args: {
    type: 'universal',
  },
}

export const EventItem = {
  render: TemplateCardEvent,
  args: {},
}

export const SharingItem = {
  render: TemplateCardShare,
  args: {},
}

export const HubPageItem = {
  render: TemplateCardHub.bind({}),
  args: {},
}
