
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Design System for the Swiss Confederation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../../dist/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets(_, [preset, options]) {
        options.corejs = { version: 3 }
      },
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ],
    },
  },

  // Storybook for nuxt project: https://storybook.nuxtjs.org/setup#installation
  storybook: {
    addons: [
      '@storybook/addon-essentials',
      '@storybook/addon-a11y',
      '@whitespace/storybook-addon-html'
    ],
    stories: [
      '~/components/stories/**/*.stories.mdx',
      '~/components/stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    parameters: {
      options: {
        storySort: {
          order: ['Introduction', 'Foundations', ['Overview', 'Colors', 'Icons'], 'Components', 'Examples'],
        },
      },
    }
  },
  typescript: {
    check: false,
  },
}
