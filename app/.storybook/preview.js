import '../../dist/main.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
        'Foundations', [
          'Overview',
          'Fonts',
          'Backgrounds',
          'Colors',
          'Icons', [
            'List',
            'Implementation'
          ],
        ],
        'Implementation',
        'Components', [
          'Logo',
          'Button'
        ]
      ],
    },
  },
}