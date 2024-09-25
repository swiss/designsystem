/** @type { import('storybook-vue').StorybookConfig } */
export default {
  stories: [
    '../components/stories/**/*.stories.mdx',
    '../components/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    //'@storybook/addon-links',
    //'@storybook/addon-designs',
    //'@storybook/addon-essentials',
    //'@storybook/addon-a11y',
    //'@whitespace/storybook-addon-html',
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  // webpackFinal: async (config) => {
  //   // tell webpack to accept vtt files
  //   config.module.rules.push({
  //     test: /\.vtt$/,
  //     use: ['url-loader'],
  //   })

  //   // Return the altered config
  //   return config
  // },
}

// Storybook for nuxt project: https://storybook.nuxtjs.org/setup#installation
// storybook: {
//   addons: [
//     '@storybook/addon-links',
//     'storybook-addon-designs',
//     '@storybook/addon-essentials',
//     '@storybook/addon-a11y',
//     '@whitespace/storybook-addon-html',
//   ],
//   stories: [
//     './components/stories/**/*.stories.mdx',
//     './components/stories/**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//   parameters: {
//     options: {
//       storySort: {
//         order: [
//           'Introduction',
//           'Foundations',
//           ['Overview', 'Colors', 'Icons'],
//           'Components',
//           'Examples',
//         ],
//       },
//     },
//   },
// },
