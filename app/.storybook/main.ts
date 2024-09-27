// TODO: clean up this file, once all stories work
/** @type { import('storybook-vue').StorybookConfig } */
export default {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|ts)',
    // '../components/stories/components/Tabs.mdx',
    // '../components/stories/components/Tabs.stories.js',
    // '../components/stories/pages/Glossary.mdx',
    // '../components/stories/pages/Glossary.stories.js',
    // '../stories/**/*.mdx',
    // '../stories/**/*.stories.ts',
  ],
  addons: [
    // '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-designs',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  staticDirs: [
    { from: '../../dist/', to: '/dist' },
    { from: '../../css/foundations/fonts/', to: '/dist/fonts' },
  ],
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
