import Card from '../../ch/components/Card.vue'
import MetaInfo from '../../ch/components/MetaInfo.vue'
import SvgIcon from '../../ch/components/SvgIcon.vue'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    type: {
      table: {
        type: {
          summary: [
            'string: default, highlight, twitter, flat, universal, list',
          ],
        },
      },
      options: ['default', 'highlight', 'twitter', 'flat', 'universal', 'list'],
      control: { type: 'select' },
    },
    layout: {
      table: {
        type: { summary: ['string: default, image-left, image-right'] },
      },
      options: ['default', 'image-left', 'image-right'],
      control: { type: 'select' },
    },
    image: {
      table: { type: { summary: ['string: NoImage, WithImage, WithIcon'] } },
      options: ['NoImage', 'WithImage', 'WithIcon'],
      control: { type: 'select' },
    },
    header: {
      table: { type: { summary: ['string: NoHeader, WithHeader'] } },
      options: ['NoHeader', 'WithHeader'],
      control: { type: 'select' },
    },
    metaInfo: {
      table: { type: { summary: ['string: NoMetaInfo, WithMetaInfo'] } },
      options: ['NoMetaInfo', 'WithMetaInfo'],
      control: { type: 'select' },
    },
    contentSpecs: {
      table: {
        type: { summary: ['string: NoContentSpecs, WithContentSpecs'] },
      },
      options: ['NoContentSpecs', 'WithContentSpecs'],
      control: { type: 'select' },
    },
    contentIcons: {
      table: {
        type: { summary: ['string: NoContentIcons, WithContentIcons'] },
      },
      options: ['NoContentIcons', 'WithContentIcons'],
      control: { type: 'select' },
    },
    footerInfo: {
      table: { type: { summary: ['string: NoFooterInfo, WithFooterInfo'] } },
      options: ['NoFooterInfo', 'WithFooterInfo'],
      control: { type: 'select' },
    },
    footerAction: {
      table: {
        type: { summary: ['string: NoLink, InternalLink, ExternalLink'] },
      },
      options: ['NoLink', 'InternalLink', 'ExternalLink'],
      control: { type: 'select' },
    },
  },
  decorators: [
    () => ({
      template:
        '<div style="padding:3rem; background:var(--background-accent-01)"><story/></div>',
    }),
  ],
}

export const Example = {
  render: (args) => ({
    components: { Card, MetaInfo, SvgIcon },
    template: `
      <div style="${args.layout !== 'list' ? 'max-width: 600px; margin: auto' : ''}">
        <Card :type="type" :layout="layout"
          :has-icon="${args.image == 'WithIcon'}">
          <template v-if="${args.image != 'NoImage'}" v-slot:image>
            <img
              v-if="${args.image == 'WithImage'}"
              src="https://picsum.photos/775/350"
              alt="cat">
            <SvgIcon
              v-if="${args.image == 'WithIcon'}"
              icon="Balance"
              size="xl"
            />
          </template>
          <template v-if="${args.header == 'WithHeader'}" v-slot:header>
            <svg viewBox="0 0 24 24" class="mr-2 icon icon--xl icon--Twitter ">
              <path
                d="m9.312 18.744a11.758 11.758 0 0 1 -5.694-1.844.35.35 0 0 1 .178-.645 12.242 12.242 0 0 0 3.525-.679 3.826 3.826 0 0 1 -1.75-2.155l-.194-.6a.356.356 0 0 1 0-.212 3.809 3.809 0 0 1 -.924-2.49v-.679a.352.352 0 0 1 .172-.3.422.422 0 0 1 .053-.025 3.827 3.827 0 0 1 .322-3.141l.27-.474a.35.35 0 0 1 .574-.045l.343.422a8.006 8.006 0 0 0 5 2.876 3.819 3.819 0 0 1 6.288-2.8 5.445 5.445 0 0 0 1.376-.579l1.449-.906a.246.246 0 0 1 .36.286l-.743 1.467q-.015.049-.033.1l1.5-.311a.245.245 0 0 1 .3.36s-2.309 2.363-2.855 2.806v.048a9.428 9.428 0 0 1 -9.517 9.52zm-4.346-1.886a10.578 10.578 0 0 0 4.346 1.186 8.736 8.736 0 0 0 8.821-8.821v-.206a.35.35 0 0 1 .136-.287c.545-.419 2.17-1.983 2.17-1.983s-1.637.516-1.762.563c-.142.055-.109-.11-.023-.236.172-.249.966-1.495.966-1.495a12.349 12.349 0 0 1 -2.156 1.1.346.346 0 0 1 -.318-.086 3.118 3.118 0 0 0 -5.255 2.271c0 .088 0 .175.01.262a.348.348 0 0 1 -.1.28.354.354 0 0 1 -.282.1 8.706 8.706 0 0 1 -5.875-3.183l-.024-.03-.02.034a3.123 3.123 0 0 0 .063 3.239.35.35 0 0 1 -.453.5l-.058-.032v.045a3.136 3.136 0 0 0 1.117 2.43.35.35 0 0 1 -.071.582l.039.119a3.124 3.124 0 0 0 2.02 2.019.35.35 0 0 1 .072.634 9.276 9.276 0 0 1 -3.363.995z"></path>
            </svg>
            <div>Tweets from @swiss_geoportal</div>
          </template>
          <template v-slot:metaInfos>
            <MetaInfo
              v-if="${args.metaInfo == 'WithMetaInfo'}"
              :metainfos="['Webartikel', '23. Februar 2022']"
            />
          </template>
          <template v-slot:title>
            <h3>Hochwasser im Juli 2021: 0.25 Mio Besuche auf dem Kartenviewer des Bundes-Geoportals -
              ein Rekordwert</h3>
          </template>
          <template v-slot:description>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium maximus
              vestibulum. Maecenas ac interdum est. Nullam mauris diam, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus pretium maximus vestibulum. Maecenas ac interdum
              est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium maximus
              vestibulum. Maecenas ac interdum est. Nullam mauris diam, Vivamus pretium maximus
              vestibulum.
            </p>
          </template>
          <template v-slot:author>
            <!-- display author here if needed -->
          </template>
          <template v-slot:eventInfos>
            <!-- display eventInfos if needed -->
          </template>
          <template v-slot:specifications>
            <MetaInfo v-if="${args.contentSpecs == 'WithContentSpecs'}" :metainfos="['PDF', '2.34mb']" />
          </template>
          <template v-slot:contentIcons>
            <div
              v-if="${args.contentIcons == 'WithContentIcons'}"
              class="card__content-icons"
            >
              <SvgIcon icon="Youtube" size="xl" />
              <SvgIcon icon="EasyLanguage" size="xl" />
              <SvgIcon icon="SignLanguage" size="xl" />
            </div>
          </template>
          <template v-if="${args.footerInfo == 'WithFooterInfo'}" v-slot:footerInfo>
            <div>Energie, Datenmodell, Nachhaltigkeit</div>
          </template>
          <template
            v-if="${
              args.footerAction == 'InternalLink' ||
              args.footerAction == 'ExternalLink'
            }"
            v-slot:footerAction>
            <a href="#" v-if="${args.footerAction == 'InternalLink'}"
              aria-label="Weiterlesen" class="btn btn--outline btn--icon-only ">
              <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight ">
                <path
                  d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z"></path>
              </svg>
              <span class="btn__text">
                Weiterlesen
              </span>
            </a>
            <a href="#" v-if="${args.footerAction == 'ExternalLink'}"
              rel="external" aria-label="Weiterlesen" class="btn btn--outline btn--icon-only ">
              <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowUpRight ">
                <path d="m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"></path>
              </svg>
              <span class="btn__text">
                Weiterlesen
              </span>
            </a>
          </template>
        </Card>
      </div>`,
  }),
  args: {
    type: 'default',
    layout: 'default',
    image: 'WithImage',
    metaInfo: 'WithMetaInfo',
    contentSpecs: 'WithContentSpecs',
    contentIcons: 'WithContentIcons',
    header: 'NoHeader',
    footerInfo: 'WithFooterInfo',
    footerAction: 'InternalLink',
    body: 'Lorem ',
  },
}

export const DefaultCard = {
  render: () => ({
    template: `
      <div class="grid grid--responsive-cols-1/2-1/2 gap--responsive">
        <div class="card card--default card--clickable">
          <div class="card__image">
            <img src="https://picsum.photos/775/350" alt="cat" />
          </div>

          <div class="card__content">
            <div class="card__body">
              <div class="card__title">
                <h3>Hochwasser im Juli 2021</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium maximus vestibulum.
              </p>
            </div>

            <div class="card__footer">
              <div class="card__footer__info">
                <div>Nachhaltigkeit</div>
              </div>

              <div class="card__footer__action">
                <a href="#" aria-label="Weiterlesen" class="btn btn--outline btn--icon-only">
                  <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight">
                    <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
                  </svg>

                  <span class="btn__text">Weiterlesen</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card card--default card--clickable">
          <div class="card__image">
            <img src="https://picsum.photos/775/350" alt="cat" />
          </div>

          <div class="card__content">
            <div class="card__body">
              <div class="card__title">
                <h3>Hochwasser im Juli 2021</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium maximus vestibulum.
              </p>
            </div>

            <div class="card__footer">
              <div class="card__footer__info">
                <div>Nachhaltigkeit</div>
              </div>

              <div class="card__footer__action">
                <a href="#" aria-label="Weiterlesen" class="btn btn--outline btn--icon-only">
                  <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight">
                    <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
                  </svg>

                  <span class="btn__text">Weiterlesen</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
  }),
}

export const UniversalCard = {
  render: () => ({
    template: `
      <div class="grid grid--responsive-cols-3 gap--responsive">
        <div class="card card--default card--clickable">
          <div class="card__content">
            <div class="card__body">
              <div class="card__title">
                <h3>Hochwasser im Juli 2021</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium maximus vestibulum.
              </p>

              <div class="card__image">
                <img src="https://picsum.photos/775/350" alt="cat" />
              </div>
            </div>

            <div class="card__footer">
              <div class="card__footer__info">
                <div>Nachhaltigkeit</div>
              </div>

              <div class="card__footer__action">
                <a href="#" aria-label="Weiterlesen" class="btn btn--outline btn--icon-only">
                  <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight">
                    <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
                  </svg>

                  <span class="btn__text">Weiterlesen</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card card--default card--clickable">
          <div class="card__content">
            <div class="card__body">
              <div class="card__title">
                <h3>Hochwasser im Juli 2021</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium maximus vestibulum.
              </p>
            </div>

            <div class="card__footer">
              <div class="card__footer__info">
                <div>Nachhaltigkeit</div>
              </div>

              <div class="card__footer__action">
                <a href="#" aria-label="Weiterlesen" class="btn btn--outline btn--icon-only">
                  <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight">
                    <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
                  </svg>

                  <span class="btn__text">Weiterlesen</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card card--default card--clickable">
          <div class="card__content">
            <div class="card__body">
              <div class="card__title">
                <h3>Hochwasser im Juli 2021</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium maximus vestibulum.
              </p>
            </div>

            <div class="card__footer">
              <div class="card__footer__info">
                <div>Nachhaltigkeit</div>
              </div>

              <div class="card__footer__action">
                <a href="#" aria-label="Weiterlesen" class="btn btn--outline btn--icon-only">
                  <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight">
                    <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
                  </svg>

                  <span class="btn__text">Weiterlesen</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
  }),
}

export const SocialCard = {
  render: () => ({
    template: `
      <div class="socials socials--items-1">
        <div class="grid socials__grid gap--responsive">
          <div class="socials__info">
            <h2 class="section__title">Title for social medias section</h2>
            <p>Introduction text here</p>
          </div>

          <div class="card card--default card--clickable ">
            <div class="card__header">
              <svg viewBox="0 0 24 24" class="mr-2 icon icon--xl icon--Twitter ">
                <path d="m9.312 18.744a11.758 11.758 0 0 1 -5.694-1.844.35.35 0 0 1 .178-.645 12.242 12.242 0 0 0 3.525-.679 3.826 3.826 0 0 1 -1.75-2.155l-.194-.6a.356.356 0 0 1 0-.212 3.809 3.809 0 0 1 -.924-2.49v-.679a.352.352 0 0 1 .172-.3.422.422 0 0 1 .053-.025 3.827 3.827 0 0 1 .322-3.141l.27-.474a.35.35 0 0 1 .574-.045l.343.422a8.006 8.006 0 0 0 5 2.876 3.819 3.819 0 0 1 6.288-2.8 5.445 5.445 0 0 0 1.376-.579l1.449-.906a.246.246 0 0 1 .36.286l-.743 1.467q-.015.049-.033.1l1.5-.311a.245.245 0 0 1 .3.36s-2.309 2.363-2.855 2.806v.048a9.428 9.428 0 0 1 -9.517 9.52zm-4.346-1.886a10.578 10.578 0 0 0 4.346 1.186 8.736 8.736 0 0 0 8.821-8.821v-.206a.35.35 0 0 1 .136-.287c.545-.419 2.17-1.983 2.17-1.983s-1.637.516-1.762.563c-.142.055-.109-.11-.023-.236.172-.249.966-1.495.966-1.495a12.349 12.349 0 0 1 -2.156 1.1.346.346 0 0 1 -.318-.086 3.118 3.118 0 0 0 -5.255 2.271c0 .088 0 .175.01.262a.348.348 0 0 1 -.1.28.354.354 0 0 1 -.282.1 8.706 8.706 0 0 1 -5.875-3.183l-.024-.03-.02.034a3.123 3.123 0 0 0 .063 3.239.35.35 0 0 1 -.453.5l-.058-.032v.045a3.136 3.136 0 0 0 1.117 2.43.35.35 0 0 1 -.071.582l.039.119a3.124 3.124 0 0 0 2.02 2.019.35.35 0 0 1 .072.634 9.276 9.276 0 0 1 -3.363.995z" />
              </svg>

              <div>Press-resleases on Twitter</div>
            </div>

            <div class="card__content">
              <div class="card__body">Last twitter feed here</div>

              <div class="card__footer card__footer--icon-only">
                <div class="card__footer__action">
                  <a href="#" title="Weiterlesen" class="btn btn--outline btn--icon-only ">
                    <svg viewBox="0 0 24 24" enable-background="new 0 0 24 24" class="btn__icon icon icon--base icon--ArrowUpRight ">
                      <path d="m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z" />
                    </svg>

                    <span class="btn__text">Weiterlesen</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
  }),
}
