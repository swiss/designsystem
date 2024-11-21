import{_ as w}from"./Textarea-D9dV1fdK.js";const D={title:"Components/Form/Textarea",component:w,argTypes:{variant:{table:{type:{summary:["string: outline, negative"]}},options:["outline","negative"],control:{type:"select"}},required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:q=>({components:{Textarea:w},setup:()=>({args:q}),template:'<Textarea v-bind="args" />'}),args:{variant:"outline",size:"base",label:"Label",name:"textarea-name",id:"textarea-id",placeholder:"Placeholder"}},a={render:()=>({template:'<textarea class="input--negative input--base" />'})},t={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 50%">
        <textarea class="input--outline input--base" disabled>Disabled</textarea>
        <textarea class="input--negative input--base" disabled>Disabled and negative</textarea>
      </div>
    `})},r={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 90%">
        <textarea class="input--outline input--sm">Small</textarea>
        <textarea class="input--outline input--base">Default</textarea>
        <textarea class="input--outline input--lg">Large</textarea>
      </div>
    `})},s={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--outline input--base" required />
      </div>
    `})},n={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--outline input--base input--error" required />
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    `})};var i,l,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Textarea
    },
    setup: () => ({
      args
    }),
    template: \`<Textarea v-bind="args" />\`
  }),
  args: {
    variant: 'outline',
    size: 'base',
    label: 'Label',
    name: 'textarea-name',
    id: 'textarea-id',
    placeholder: 'Placeholder'
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`<textarea class="input--negative input--base" />\`
  })
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,m,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 50%">
        <textarea class="input--outline input--base" disabled>Disabled</textarea>
        <textarea class="input--negative input--base" disabled>Disabled and negative</textarea>
      </div>
    \`
  })
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,g,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 90%">
        <textarea class="input--outline input--sm">Small</textarea>
        <textarea class="input--outline input--base">Default</textarea>
        <textarea class="input--outline input--lg">Large</textarea>
      </div>
    \`
  })
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,y,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--outline input--base" required />
      </div>
    \`
  })
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var T,S,h;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--outline input--base input--error" required />
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    \`
  })
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const z=["Example","NegativeTextarea","DisabledTextarea","SizesTextarea","RequiredTextarea","MessagesTextarea"],E=Object.freeze(Object.defineProperty({__proto__:null,DisabledTextarea:t,Example:e,MessagesTextarea:n,NegativeTextarea:a,RequiredTextarea:s,SizesTextarea:r,__namedExportsOrder:z,default:D},Symbol.toStringTag,{value:"Module"}));export{t as D,e as E,n as M,a as N,s as R,r as S,E as T};
