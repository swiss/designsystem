import{_ as i,a as c}from"./AccordionItem-7C49Wvia.js";import{T as t}from"./TranscriptionExample-dezY_AUv.js";const a={title:"Components/Video/Transcript"},o={render:()=>({components:{Accordion:i,AccordionItem:c,TranscriptionExample:t},template:`
      <div>
        <figure>
          <div class="ratio ratio--16/9">
            <video
                controls
                src="/videos/demo.mp4"
              />
          </div>
          <figcaption>Video label — © Author Name</figcaption>
        </figure>
        <Accordion id="1" spaced>
          <AccordionItem
            id="10"
            title="Transcript"
          >
            <TranscriptionExample />
          </AccordionItem>
        </Accordion>
      </div>
      `})};var n,r,e;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion,
      AccordionItem,
      TranscriptionExample
    },
    template: \`
      <div>
        <figure>
          <div class="ratio ratio--16/9">
            <video
                controls
                src="/videos/demo.mp4"
              />
          </div>
          <figcaption>Video label — © Author Name</figcaption>
        </figure>
        <Accordion id="1" spaced>
          <AccordionItem
            id="10"
            title="Transcript"
          >
            <TranscriptionExample />
          </AccordionItem>
        </Accordion>
      </div>
      \`
  })
}`,...(e=(r=o.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const s=["Example"],m=Object.freeze(Object.defineProperty({__proto__:null,Example:o,__namedExportsOrder:s,default:a},Symbol.toStringTag,{value:"Module"}));export{o as E,m as V};
