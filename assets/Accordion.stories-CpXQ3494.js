import{_ as c,a as m}from"./AccordionItem-DvOWFReZ.js";import{_ as p}from"./SvgIcon-2YXGQNRQ.js";const A={title:"Components/Accordion",component:c},o={render:e=>({setup:()=>({...e}),components:{Accordion:c,AccordionItem:m},template:`
      <Accordion id="1">
        <AccordionItem
          id="10"
          title="Accordion item one"
        >
          <h4 class="h5">The title of the accordion item is a h3, therefore, as a subtitle, I am a h4 with a .h5 css class</h4>
          <p>Description here</p>
        </AccordionItem>
        <AccordionItem
          id="11"
          title="Accordion item two"
        >
          AccordionItem Content here
        </AccordionItem>
      </Accordion>`}),args:{}},n={render:e=>({setup:()=>({...e}),components:{Accordion:c,AccordionItem:m,SvgIcon:p},template:`
      <Accordion id="2">
      <AccordionItem
        id="10"
        title="Accordion item one"
      >
        <SvgIcon  icon="Spinner" :spin="true" size="2xl" class="accordion__loading-icon" />
      </AccordionItem>
    </Accordion>`}),args:{}};var r,t,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    setup: () => ({
      ...args
    }),
    components: {
      Accordion,
      AccordionItem
    },
    template: \`
      <Accordion id="1">
        <AccordionItem
          id="10"
          title="Accordion item one"
        >
          <h4 class="h5">The title of the accordion item is a h3, therefore, as a subtitle, I am a h4 with a .h5 css class</h4>
          <p>Description here</p>
        </AccordionItem>
        <AccordionItem
          id="11"
          title="Accordion item two"
        >
          AccordionItem Content here
        </AccordionItem>
      </Accordion>\`
  }),
  args: {}
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var s,a,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    setup: () => ({
      ...args
    }),
    components: {
      Accordion,
      AccordionItem,
      SvgIcon
    },
    template: \`
      <Accordion id="2">
      <AccordionItem
        id="10"
        title="Accordion item one"
      >
        <SvgIcon  icon="Spinner" :spin="true" size="2xl" class="accordion__loading-icon" />
      </AccordionItem>
    </Accordion>\`
  }),
  args: {}
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const l=["Example","LoadingExample"],g=Object.freeze(Object.defineProperty({__proto__:null,Example:o,LoadingExample:n,__namedExportsOrder:l,default:A},Symbol.toStringTag,{value:"Module"}));export{g as A,o as E,n as L};
