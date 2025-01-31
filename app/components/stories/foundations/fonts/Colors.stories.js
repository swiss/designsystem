import ColorList from '../../../ch/demo/ColorList.vue'

export default {
  title: 'Foundations/Fonts/Colors',
  component: ColorList,
}

export const LightDarkModeColors = {
  render: () => ({
    template: `<div>
      <div class="text--text-contrast">color--text-contrast</div>
      <div class="text--text-disabled">color--text-disabled</div>
      <div class="text--text-label">color--text-label</div>
      <div class="text--text-main">color--text-main</div>
      <div class="text--text-quote">color--text-quote</div>
      <div class="text--text-selected">color--text-selected</div>
    </div>`,
  }),
}

export const TextColors = {
  render: () => ({
    template: `<div>
      <div class="color--default">color--default</div>
      <div class="color--light">color--light</div>
      <div class="color--link">color--link</div>
    </div>`,
  }),
}

export const NegativeColor = {
  render: () => ({
    template: `<div class="storybook-bg-negative">
      <div class="color--negative">color--negative</div>
    </div>`,
  }),
}

export const AllColorVariantsDefault = {
  render: () => ({
    template: `<div class="storybook-backgrounds">
      <div class="color--text-900">color--text-900</div>
      <div class="color--text-800">color--text-800 - default text color</div>
      <div class="color--text-700">color--text-700</div>
      <div class="color--text-600">color--text-600</div>
      <div class="color--text-500">color--text-500 - still AA Accessible on white backgrounds</div>
      <div class="color--text-400 bg--secondary-900">color--text-400</div>
      <div class="color--text-300 bg--secondary-800">color--text-300</div>
      <div class="color--text-200 bg--secondary-700">color--text-200</div>
      <div class="color--text-100 bg--secondary-600">color--text-100</div>
      <div class="color--text-50 bg--secondary-500">color--text-50</div>
      <div class="color--white bg--secondary-400">color--white</div>
    </div>`,
  }),
}

export const AllColorVariantsPrimary = {
  render: () => ({
    template: `<div class="storybook-backgrounds">
      <div class="color--primary-900">color--primary-900</div>
      <div class="color--primary-800">color--primary-800</div>
      <div class="color--primary-700">color--primary-700</div>
      <div class="color--primary-600">color--primary-600 - default link color</div>
      <div class="color--primary-500">color--primary-500</div>
      <div class="color--primary-400 bg--secondary-900">color--primary-400</div>
      <div class="color--primary-300 bg--secondary-800">color--primary-300</div>
      <div class="color--primary-200 bg--secondary-700">color--primary-200</div>
      <div class="color--primary-100 bg--secondary-600">color--primary-100</div>
      <div class="color--primary-50 bg--secondary-500">color--primary-50</div>
      <div class="color--white bg--secondary-400">color--white</div>
    </div>`,
  }),
}

export const FlexibleColors = {}
