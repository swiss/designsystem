import TagItem from '../../ch/components/TagItem.vue'

export default {
  title: 'Components/TagItem',
  component: TagItem,
  argTypes: {
    variant: {
      table: {
        type: {
          summary: ['string: default, primary, active'],
        },
      },
      options: ['default', 'primary', 'active'],
      control: {
        type: 'select',
      },
    },
    size: {
      table: {
        type: {
          summary: ['string: sm, base'],
        },
      },
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
    template: `<div>
      <hr class="separator separator--xl" />
      <div class="list list--flex list--wrap">
        <TagItem v-for="item in args.content" v-bind="item" />
      </div>
    </div>`,
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
  },
}

export const Filters = {
  render: (args) => ({
    components: { TagItem },
    setup: () => ({ args }),
    template: `
      <div>
        <hr class="separator separator--xl" />
        <div class="list list--flex list--wrap">
          <TagItem v-for="item in args.content" v-bind="item" />
        </div>
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
  },
}
