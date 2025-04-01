import Modal from '../../ch/components/Modal.vue'
import Card from '../../ch/components/Card.vue'
import Btn from '../../ch/components/Btn.vue'
import SvgIcon from '../../ch/components/SvgIcon.vue'
import Input from '../../ch/components/Input.vue'

export default {
  title: 'Components/Modal',
  component: Modal,

  argTypes: {
    triggerElements: {
      options: ['.trigger-1, #trigger-2', '.trigger-1', '#trigger-2'],
      control: {
        type: 'select',
      },
    },
    layout: {
      table: {
        type: {
          summary: ['string: auto, xs, sm, md, lg, xl, xs'],
        },
      },
      options: ['auto', 'sm', 'md', 'lg', 'xl', undefined],
      control: {
        type: 'select',
      },
    },
    body: {
      options: ['WithDemoText', 'WithDemoShare'],
      control: {
        type: 'select',
      },
    },
    footer: {
      options: ['NoFooter', 'WithFooter'],
      control: {
        type: 'select',
      },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { Modal, Card, Btn, SvgIcon, Input },
    setup: () => ({ args }),
    template: `
      <div>
        <main style="display: flex; flex-direction: row; gap: 5pt">
          <Btn
            variant="outline"
            size="base"
            label="Trigger 1"
            class="trigger-1"
          />
          <Btn
            variant="outline"
            size="base"
            label="Trigger 2"
            id="trigger-2"
          />
        </main>
        <Modal :uuid="args.uuid"  :title="args.title" :triggerElements="args.triggerElements" :layout="args.layout">
          <template v-slot:body>
            <Card type="default">
              <template v-if="args.body == 'WithDemoText'" v-slot:description>
                <p>
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </template>
              <template v-else="args.body == 'WithDemoShare'" v-slot:description>
                <div class="flex flex-wrap gap-6">
                  <a href="#" class="link" title="Share on Facebook">
                    <SvgIcon
                      size="2xl"
                      icon="Facebook"
                      label="Facebook"
                    />
                  </a>
                  <a href="#" class="link" title="Share on 𝕏">
                    <SvgIcon
                      size="2xl"
                      icon="XCorp"
                      label="X"
                    />
                  </a>
                  <a href="#" class="link" title="Share on LinkedIn">
                    <SvgIcon
                      size="2xl"
                      icon="LinkedIn"
                      label="LinkedIn"
                    />
                  </a>
                  <a href="#" class="link" title="Share on Xing">
                    <SvgIcon
                      size="2xl"
                      icon="Xing"
                      label="Xing"
                    />
                  </a>
                  <a href="#" class="link" title="Share on Whatsapp">
                    <SvgIcon
                      size="2xl"
                      icon="Phone"
                      label="Whatsapp"
                    />
                  </a>
                </div>
                <hr class="separator">
                <div class="pt-3">
                  <Input
                    size="base"
                    label="Label"
                    value="https://www.admin.ch/gov/de/start/departemente/departement-des-innern-edi.html"
                    id="my-id"
                  />
                  <Btn variant="outline" size="base" label="Copy URL" class="mt-3" />
                </div>
              </template>
            </Card>
          </template>
          <template v-if="args.footer == 'WithFooter'"  v-slot:footer>
            <Btn
              variant="outline"
              size="base"
              label="Call to action"
            />
          </template>
        </Modal>
      </div>
    `,
  }),
  args: {
    triggerElements: '.trigger-1, #trigger-2',
    layout: 'lg',
    uuid: '5f93d7d4-fba3-11ec',
    title: 'Modal title',
    body: 'WithDemoText',
    footer: 'WithFooter',
  },
}
