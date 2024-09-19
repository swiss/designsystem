export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Design System for the Swiss Confederation',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { content: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://platform.twitter.com/widgets.js',
        /* @ts-ignore */
        charset: 'utf-8',
        async: true,
      },
    ],
  },

  // TODO: might be needed to keep the whitespace as it was in vue2
  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Storybook for nuxt project: https://storybook.nuxtjs.org/setup#installation
  storybook: {
    addons: [
      '@storybook/addon-links',
      'storybook-addon-designs',
      '@storybook/addon-essentials',
      '@storybook/addon-a11y',
      '@whitespace/storybook-addon-html',
    ],
    stories: [
      './components/stories/**/*.stories.mdx',
      './components/stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    parameters: {
      options: {
        storySort: {
          order: [
            'Introduction',
            'Foundations',
            ['Overview', 'Colors', 'Icons'],
            'Components',
            'Examples',
          ],
        },
      },
    },
  },

  typescript: {
    check: false,
  },

  tailwindcss: {
    cssPath: '../css/main.postcss',
    mode: 'jit',
  },

  compatibilityDate: '2024-09-09',
})
