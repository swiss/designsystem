import { create } from '@storybook/theming'
import logo from '../assets/logos/BundLogo.svg?inline'

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandImage: logo,
})
