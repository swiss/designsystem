import{_ as q}from"./Input-BG4Sdj6p.js";const N={title:"Components/Form/Input",component:q,argTypes:{type:{table:{type:{summary:["string: color, date, datetime-local, email, file, month, number, password, range, search, tel, text, time, url, week, submit"]}},options:["color","date","datetime-local","email","file","month","number","password","range","search","tel","text","time","url","week","submit"],control:{type:"select"}},required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},variant:{table:{type:{summary:["string: outline, negative"]}},options:["outline","negative"],control:{type:"select"}},label:{},hideLabel:{control:{type:"boolean"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:S=>({components:{Input:q},setup:()=>({args:S}),template:'<Input v-bind="args" />'}),args:{type:"outline",size:"base",label:"Label",hideLabel:!1,placeholder:"Placeholder",value:void 0,id:"my-id",min:void 0,max:void 0,step:void 0,message:void 0,messageType:"error"}},t={render:()=>({template:'<input class="input--negative input--base" value="Input text" />'})},n={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--outline input--base" disabled value="Input text" />
        <input class="input--negative input--base" disabled value="Input text" />
      </div>
    `})},s={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--outline input--sm" value="input--sm" />
        <input class="input--outline input--base" value="input--base" />
        <input class="input--outline input--lg" value="input--lg" />
      </div>
    `})},a={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--outline input--base" required />
      </div>
    `})},r={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--outline input--base input--error" required />
        <div class="badge badge--sm badge--error">This field is required</div>
      </div>
    `})};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Input
    },
    setup: () => ({
      args
    }),
    template: '<Input v-bind="args" />'
  }),
  args: {
    type: 'outline',
    size: 'base',
    label: 'Label',
    hideLabel: false,
    placeholder: 'Placeholder',
    value: undefined,
    id: 'my-id',
    min: undefined,
    max: undefined,
    step: undefined,
    message: undefined,
    messageType: 'error'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,o,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    template: '<input class="input--negative input--base" value="Input text" />'
  })
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,m,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--outline input--base" disabled value="Input text" />
        <input class="input--negative input--base" disabled value="Input text" />
      </div>
    \`
  })
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--outline input--sm" value="input--sm" />
        <input class="input--outline input--base" value="input--base" />
        <input class="input--outline input--lg" value="input--lg" />
      </div>
    \`
  })
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,x,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--outline input--base" required />
      </div>
    \`
  })
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var h,I,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--outline input--base input--error" required />
        <div class="badge badge--sm badge--error">This field is required</div>
      </div>
    \`
  })
}`,...(w=(I=r.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const P=["Example","NegativeInput","DisabledInput","SizesInput","RequiredInput","MessagesInput"],k=Object.freeze(Object.defineProperty({__proto__:null,DisabledInput:n,Example:e,MessagesInput:r,NegativeInput:t,RequiredInput:a,SizesInput:s,__namedExportsOrder:P,default:N},Symbol.toStringTag,{value:"Module"}));export{n as D,e as E,k as I,r as M,t as N,a as R,s as S};
