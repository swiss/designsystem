import TagItem from '../../ch/components/TagItem.vue'

export default {
  title: 'Components/TagItem',
  component: TagItem,
  argTypes: {
    variant: {
      options: ['default', 'primary', 'active'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'base'],
      control: {
        type: 'select',
      },
    },
    icon: {
      options: ['Cancel', 'Checkmark', undefined],
      control: {
        type: 'select',
      },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { TagItem },
    setup: () => ({ args }),
    template: `<TagItem v-bind="args" />`
  }),
  args: {
    variant: 'default',
    label: 'Button text',
    to: 'http://www.admin.ch',
    icon: undefined,
  },
}

export const List = {
  render: (args) => ({
    components: { TagItem },
    setup: () => ({ args }),
    template: `
      <div>
        <hr class="separator separator--xl" />
        <ul class="list list--flex list--wrap">
          <li v-for="item in content">
            <TagItem :variant="item.variant" :label="item.label" :to="item.to" />
          </li>
        </ul>
      </div>
      `,
  }),
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
  }
}

export const Filters = {
  render: (args) => ({
    components: { TagItem },
    setup: () => ({ args }),
    template: `
      <div>
        <hr class="separator separator--xl" />
        <ul class="list list--flex list--wrap">
          <li v-for="item in content">
            <TagItem v-bind="args" />
          </li>
        </ul>
      </div>
      `,
  }),
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
  }
}
