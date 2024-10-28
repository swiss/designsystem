import './docs-fullscreen.css'
import { setup } from '@storybook/vue3'
import { createPinia } from 'pinia'

const pinia = createPinia()

// Setup Vue for Storybook, while @nuxtjs/storybook doesn't work
setup((app) => {
  app.use(pinia)
})

export default {
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
  parameters: {
    layout: 'fullscreen',
    options: {
      storySort: {
        order: [
          'Introduction',
          'Doc for developers',
          ['HTML Structure', 'Add CSS classes'],
          'Foundations',
          [
            'Overview',
            'Fonts',
            'Backgrounds',
            'Colors',
            'Icons',
            ['List', 'Implementation'],
          ],
          'Layouts',
          ['General', 'Sections', 'Containers', 'Grids', 'Spacings', 'Ratios'],
          'Components',
          ['Logo', 'Button'],
          'Sections',
          [
            'Header',
            ['TopBar', 'TopHeader', 'DesktopMenu'],
            'Hero',
            'Content',
            'Footer',
          ],
          'Pages',
          ['Homepage'],
        ],
      },
    },
  },
}
