import './docs-fullscreen.css'

export default {
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
}
