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
  options: {
    storySort: {
      order: ['Introduction', 'Foundations', 'Components', 'Examples', ['Home', 'Login', 'Admin']],
    },
  },
}
