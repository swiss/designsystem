const l={title:"Components/Separator"},e={render:()=>({template:`
      <div>
        <div>Content above</div>
          <hr class="separator sperator--negative" />
        <div>Content below</div>
      </div>
    `})},r={render:()=>({template:`
      <div>
        <div>Content above</div>
          <hr class="separator separator--xl" />
        <div>Content below</div>
      </div>
    `})},a={render:()=>({template:`
      <div class="text--negative">
        <div>Content above</div>
          <hr class="separator sperator--negative" />
        <div>Content below</div>
      </div>
    `})};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <div>Content above</div>
          <hr class="separator sperator--negative" />
        <div>Content below</div>
      </div>
    \`
  })
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <div>Content above</div>
          <hr class="separator separator--xl" />
        <div>Content below</div>
      </div>
    \`
  })
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var v,p,c;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="text--negative">
        <div>Content above</div>
          <hr class="separator sperator--negative" />
        <div>Content below</div>
      </div>
    \`
  })
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const m=["Separator","SeparatorSpacings","SeparatorNegative"],S=Object.freeze(Object.defineProperty({__proto__:null,Separator:e,SeparatorNegative:a,SeparatorSpacings:r,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{S,e as a,r as b,a as c};
