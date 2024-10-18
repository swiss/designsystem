import { addons } from '@storybook/manager-api'
import bundTheme from './BundTheme'

addons.setConfig({
  theme: bundTheme,
})
