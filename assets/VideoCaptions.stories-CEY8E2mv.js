const s={title:"Components/Video/Captions"},e={render:()=>({components:{},template:`
      <video controls src="/videos/demo.mp4">
        <track default kind="captions" srclang="en" src="/videos/demo.vtt" />
      </video>
  `})};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {},
    template: \`
      <video controls src="/videos/demo.mp4">
        <track default kind="captions" srclang="en" src="/videos/demo.vtt" />
      </video>
  \`
  })
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const r=["Example"],a=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:r,default:s},Symbol.toStringTag,{value:"Module"}));export{e as E,a as V};
