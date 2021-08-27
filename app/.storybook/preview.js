import '../../dist/main.css'
import './docs-fullscreen.css'

import { parameters as nuxtParameters } from '~~/.nuxt-storybook/storybook/preview.js'

export const parameters = {
  ...nuxtParameters,
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      // htmlWhitespaceSensitivity: 'strict',
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'Introduction',
        'Foundations',
        [
          'Overview',
          'Fonts',
          'Backgrounds',
          'Colors',
          'Icons',
          ['List', 'Implementation'],
        ],
        'Implementation',
        [
          'HTML Structure',
          'Add Tailwind classes'
        ],
        'Components',
        ['Logo', 'Button'],
        'Sections',
        ['Header', ['TopBar', 'TopHeader', 'DesktopMenu']],
        'Pages',
        ['Homepage'],
      ],
    },
  },
}
