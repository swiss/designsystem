import TagItem from '../../ch/components/TagItem.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TagItem },
  template:
    '<TagItem :variant="variant" :label="label" :to="to" :icon="icon" :size="size" />',
})

const TemplateMultiple = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TagItem },
  template: `
    <div>
      <hr class="separator separator--xl" />
      <ul class="list list--flex list--wrap">
        <li v-for="item in content">
          <TagItem :variant="item.variant" :label="item.label" :to="item.to" :icon="icon" />
        </li>
      </ul>
    </div>
    `,
})

export default {
  title: 'Components/TagItem',
  component: TagItem,

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'active'],
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['sm', 'base'],
      },
    },

    icon: {
      control: {
        type: 'select',
        options: ['Cancel', 'Checkmark', undefined],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    variant: 'default',
    label: 'Button text',
    to: 'http://www.admin.ch',
    icon: undefined,
  },
}

export const List = {
  render: TemplateMultiple.bind({}),
  name: 'List',

  args: {
    content: [
      {
        variant: 'default',
        label: 'Tag one',
        to: '#',
      },
      {
        variant: 'default',
        label: 'Tag two',
        to: '#',
      },
      {
        variant: 'default',
        label: 'Tag three',
        to: '#',
      },
      {
        variant: 'default',
        label: 'Tag four',
        to: '#',
      },
    ],
  },
}

export const Filters = {
  render: TemplateMultiple.bind({}),
  name: 'Filters',

  args: {
    content: [
      {
        variant: 'active',
        label: 'All',
      },
      {
        variant: 'default',
        label: 'Filter one',
      },
      {
        variant: 'default',
        label: 'Filter two',
      },
      {
        variant: 'default',
        label: 'Filter three',
      },
    ],
  },
}
