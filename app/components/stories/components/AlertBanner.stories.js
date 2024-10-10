import AlertBanner from '../../ch/components/AlertBanner.vue'

export default {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  argTypes: {
    type: {
      table: {
        type: { summary: ['string: info, warning, alert, error, success'] },
      },
      options: ['info', 'warning', 'alert', 'error', 'success'],
      control: { type: 'select' },
    },
    icon: {
      table: {
        type: {
          summary: [
            'string: InfoCircle, WarningCircle, CancelCircle, HelpCircle',
          ],
        },
      },
      options: [
        'InfoCircle',
        'WarningCircle',
        'CancelCircle',
        'HelpCircle',
        null,
      ],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  components: { AlertBanner },
  template: '<AlertBanner v-bind="args" />',
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
