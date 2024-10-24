// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({
  // Disable server-side rendering
  ssr: false,

  // Nuxt app configuration
  app: {
    // Global page headers
    head: {
      title: 'Design System for the Swiss Confederation',
      htmlAttrs: { lang: 'en' },
      meta: [
        { content: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, minimum-scale=1',
        },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }],
    },
  },

  // TODO: might be needed to keep the whitespace as it was in vue2
  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },

  // Auto import components
  components: false,

  // Nuxt modules for dev and build
  modules: [
    // https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss',
    // https://nuxt.com/modules/pinia
    '@pinia/nuxt',
    // https://storybook.nuxtjs.org
    // '@nuxtjs/storybook', // Currently not working with Nuxt 3
  ],

  // TailwindCSS module configuration: https://tailwindcss.nuxtjs.org/tailwind/config
  tailwindcss: {
    cssPath: '../css/main.postcss',
  },

  // Vite configuration: https://nuxt.com/docs/api/nuxt-config#vite
  vite: {
    // TODO: Can probably be removed once @storybook/vue3@8.4 is released.
    optimizeDeps: {
      include: ['jsdoc-type-pratt-parser'],
    },
  },

  // Future backward compatibility is guaranteed with the following setting
  compatibilityDate: '2024-10-31',
})
