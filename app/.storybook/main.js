const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path')

module.exports = nuxifyStorybook({
  stories: [
    '../components/stories/**/*.stories.mdx',
    '../components/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [],

  webpackFinal: async (config) => {
    // tell webpack to accept vtt files
    config.module.rules.push({
      test: /\.vtt$/,
      use: ['url-loader'],
    });

    // Return the altered config
    return config;
  },
})
