import{_ as q}from"./Checkbox-C4Qkqp9v.js";const z={title:"Components/Form/Input Checkbox",component:q,argTypes:{variant:{table:{type:{summary:["string: outline, negative"]}},options:["outline","negative"],control:{type:"select"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:S=>({components:{Checkbox:q},setup:()=>({args:S}),template:`
      <div>
        <Checkbox v-bind="args" />
      </div>
    `}),args:{variant:"outline",size:"base",label:"Label",name:"checkbox-name",id:"checkbox-id"}},s={render:()=>({template:`
      <input type="checkbox" class="input--negative input--base" />
    `})},n={render:()=>({template:`
      <input type="checkbox" class="input--outline input--base" disabled />
      <input type="checkbox" class="input--outline input--base" disabled checked />
      <input type="checkbox" class="input--negative input--base" disabled />
      <input type="checkbox" class="input--negative input--base" disabled checked />
    `})},a={render:()=>({template:`
      <input type="checkbox" class="input--outline input--sm" value="input--sm" />
      <input type="checkbox" class="input--outline input--base" value="input--base" />
      <input type="checkbox" class="input--outline input--lg" value="input--lg" />
    `})},t={render:()=>({template:`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--outline input--base" value="" />
        <label for="checkbox-id1" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
      </div>
    `})},r={render:()=>({template:`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--outline input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    `})};var i,c,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <Checkbox v-bind="args" />
      </div>
    \`
  }),
  args: {
    variant: 'outline',
    size: 'base',
    label: 'Label',
    name: 'checkbox-name',
    id: 'checkbox-id'
  }
}`,...(o=(c=e.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var p,u,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--negative input--base" />
    \`
  })
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,d,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--outline input--base" disabled />
      <input type="checkbox" class="input--outline input--base" disabled checked />
      <input type="checkbox" class="input--negative input--base" disabled />
      <input type="checkbox" class="input--negative input--base" disabled checked />
    \`
  })
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,k,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--outline input--sm" value="input--sm" />
      <input type="checkbox" class="input--outline input--base" value="input--base" />
      <input type="checkbox" class="input--outline input--lg" value="input--lg" />
    \`
  })
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var g,v,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--outline input--base" value="" />
        <label for="checkbox-id1" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
      </div>
    \`
  })
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var _,C,f;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--outline input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    \`
  })
}`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const E=["Example","NegativeCheckbox","DisabledInput","SizesCheckbox","RequiredCheckbox","MessagesCheckbox"],M=Object.freeze(Object.defineProperty({__proto__:null,DisabledInput:n,Example:e,MessagesCheckbox:r,NegativeCheckbox:s,RequiredCheckbox:t,SizesCheckbox:a,__namedExportsOrder:E,default:z},Symbol.toStringTag,{value:"Module"}));export{M as C,n as D,e as E,r as M,s as N,t as R,a as S};
