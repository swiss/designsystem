const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path')

module.exports = nuxifyStorybook({
  stories: [
    '../components/stories/**/*.stories.mdx',
    '../components/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [],
  webpackFinal(config, options) {
    return config
  },
})
