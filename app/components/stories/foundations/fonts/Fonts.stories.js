import Fonts from '../../../ch/foundations/Fonts.vue'

export default {
  title: 'Foundations/Fonts/Sizes and styles',
  component: Fonts,
  argTypes: {
    textStyle: {
      name: 'style and weight',
      options: ['regular', 'italic', 'bold', 'bold-italic'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['3xl', '2xl', 'xl', 'lg', 'base', 'sm', 'xs'],
      control: {
        type: 'select',
      },
    },
  },
}

export const Headings = {
  render: () => ({
    template: `<div>
      <div class="h1">Title heading 1</div>
      <div class="h2">Title heading 2</div>
      <div class="h3">Title heading 3</div>
      <div class="h4">Title heading 4</div>
      <div class="h5">Title heading 5</div>
    </div>`,
  }),
}

export const TextSize = {
  render: () => ({
    template: `<div>
      <div class="text--3xl">Text size 3xl</div>
      <div class="text--2xl">Text size 2xl</div>
      <div class="text--xl">Text size xl</div>
      <div class="text--lg">Text size lg</div>
      <div class="text--base">Text size base</div>
      <div class="text--sm">Text size sm</div>
      <div class="text--xs">Text size xs</div>
    </div>`,
  }),
}

export const StyleVariations = {
  render: () => ({
    template: `<div>
      <div class="font--regular">Regular</div>
      <div class="font--italic">Italic</div>
      <div class="font--bold">Bold</div>
      <div class="font--bold-italic">Bold italic</div>
    </div>`,
  }),
}

export const Superscript = {
  render: () => ({
    template: `<div>
      <p>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
    </div>`,
  }),
}

export const Subscript = {
  render: () => ({
    template: `<div>
      <p>H<sub>2</sub>SO<sub>4</sub> for sulphuric acid.</p>
    </div>`,
  }),
}

export const Example = {
  args: {
    label: 'Confoederatio helvetica',
    textStyle: 'bold',
    size: '3xl',
  },
}
