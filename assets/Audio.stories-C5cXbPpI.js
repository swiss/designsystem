import{_ as t}from"./AudioPlayer-DbmKV6fS.js";import{a as d,_ as p}from"./AccordionItem-C2X1f2v5.js";import{T as m}from"./TranscriptionExample-CwfCx90F.js";const l={title:"Components/AudioPlayer",component:t},e={components:{AudioPlayer:t,Accordion:p,AccordionItem:d,TranscriptionExample:m},args:{title:"First of August speech",description:"Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",copyright:"Reuters",url:"https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3",type:"audio/mp3",displayTranscript:!1}},i={render:u=>({components:{AudioPlayer:t,Accordion:p,AccordionItem:d,TranscriptionExample:m},setup:()=>({...u}),template:`
      <div>
        <AudioPlayer
          :url="url"
          :title="title"
          :description="description"
          :type="type"
          :copyright="copyright"
        />
        <Accordion v-if="displayTranscript" id="1">
          <AccordionItem
            id="10"
            title="Transcript"
          >
            <TranscriptionExample />
          </AccordionItem>
        </Accordion>
      </div>`}),args:{title:"First of August speech",description:"Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",copyright:"Reuters",url:"https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3",type:"audio/mp3",displayTranscript:!0}};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  components: {
    AudioPlayer,
    Accordion,
    AccordionItem,
    TranscriptionExample
  },
  args: {
    title: 'First of August speech',
    description: 'Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    copyright: 'Reuters',
    url: 'https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3',
    type: 'audio/mp3',
    displayTranscript: false
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,c,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AudioPlayer,
      Accordion,
      AccordionItem,
      TranscriptionExample
    },
    setup: () => ({
      ...args
    }),
    template: \`
      <div>
        <AudioPlayer
          :url="url"
          :title="title"
          :description="description"
          :type="type"
          :copyright="copyright"
        />
        <Accordion v-if="displayTranscript" id="1">
          <AccordionItem
            id="10"
            title="Transcript"
          >
            <TranscriptionExample />
          </AccordionItem>
        </Accordion>
      </div>\`
  }),
  args: {
    title: 'First of August speech',
    description: 'Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    copyright: 'Reuters',
    url: 'https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3',
    type: 'audio/mp3',
    displayTranscript: true
  }
}`,...(a=(c=i.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const A=["Example","Transcript"],b=Object.freeze(Object.defineProperty({__proto__:null,Example:e,Transcript:i,__namedExportsOrder:A,default:l},Symbol.toStringTag,{value:"Module"}));export{b as A,e as E,i as T};
