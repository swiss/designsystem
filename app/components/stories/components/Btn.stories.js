import Btn from '../../ch/components/Btn.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Btn },
  template: `
    <div style="padding: 3em;" class="${args.variant.endsWith('-negative') ? 'bg--secondary-600' : ''}">
      <Btn :variant="variant" :size="size" :icon="icon" :iconPos="iconPos" :label="label" />
    </div>
    `,
})

export default {
  title: 'Components/Button',
  component: Btn,

  argTypes: {
    variant: {
      control: {
        type: 'select',

        options: [
          'outline',
          'bare',
          'filled',
          'outline-negative',
          'bare-negative',
          'link',
          'link-negative',
        ],
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['sm', 'base', 'lg'],
      },
    },

    icon: {
      control: {
        type: 'select',
        options: ['ArrowRight', 'ArrowLeft', 'Checkmark'],
      },
    },

    iconPos: {
      control: {
        type: 'select',
        options: ['none', 'only', 'left', 'right'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    variant: 'outline',
    size: 'base',
    icon: 'ArrowRight',
    iconPos: 'none',
    label: 'Button text',
  },
}
