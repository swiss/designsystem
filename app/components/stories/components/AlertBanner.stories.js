import AlertBanner from '../../ch/components/AlertBanner.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AlertBanner },
  template:
    '<AlertBanner :title="title" :topic="topic" :type="type" :lastUpdated="lastUpdated" :icon="icon" :text="text" :introLink="introLink" :link="link" :closeBtn="closeBtn" :isClosed="isClosed" />',
})

export default {
  title: 'Components/AlertBanner',
  component: AlertBanner,

  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'alert', 'error', 'success'],
      },
    },

    icon: {
      control: {
        type: 'select',
        options: [
          'InfoCircle',
          'WarningCircle',
          'CancelCircle',
          'HelpCircle',
          undefined,
        ],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    title: 'Warnungen des Bundes',
    topic: 'Hochwasser',
    type: 'alert',
    lastUpdated: 'Aktualisiert am: 11.09.2016, 11:13',
    icon: 'WarningCircle',
    text: 'Die Hochwassergefahr im Kanton Tessin geht ab Mittwoch 12 Uhr wieder zurück. Der Wasserstand sinkt allmählich und mit weiteren Überschwemmungen ist nicht zu rechnen. Beachten Sie jedoch weiterhin die Weisungen der Behörden und Einsatzkräfte vor Ort.',
    introLink: 'Weitere Informationen finden Sie unter:',

    link: {
      href: 'https://www.naturgefahren.ch/home.html?tab=actualdanger',
      label: 'naturgefahren.ch',
      icon: 'External',
    },

    closeBtn: true,
    isClosed: false,
  },
}
