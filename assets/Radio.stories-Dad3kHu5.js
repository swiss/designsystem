import{_ as q}from"./Radio-BgTyhhW1.js";const x={title:"Components/Form/Input Radio",component:q,argTypes:{variant:{table:{type:{summary:["string: outline, negative"]}},options:["outline","negative"],control:{type:"select"}},required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:k=>({components:{Radio:q},setup:()=>({args:k}),template:`
      <div>
        <Radio v-bind="args" />
      </div>
    `}),args:{variant:"outline",size:"base",label:"Label",name:"radio-name",id:"radio-id"}},a={render:()=>({template:'<input type="radio" class="input--negative input--base" />'})},i={render:()=>({template:`
      <input type="radio" class="input--outline input--base" disabled />
      <input type="radio" class="input--outline input--base" disabled checked />
      <input type="radio" class="input--negative input--base" disabled />
      <input type="radio" class="input--negative input--base" disabled checked />
    `})},n={render:()=>({template:`
      <input type="radio" class="input--outline input--sm" value="input--sm" />
      <input type="radio" class="input--outline input--base" value="input--base" />
      <input type="radio" class="input--outline input--lg" value="input--lg" />
    `})},r={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" class="input input--outline " value="value-0" />

          <label for="radio-0" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" class="input input--outline " value="value-1" />

          <label for="radio-1" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-2" name="radio-group-1" class="input input--outline " value="value-2" />

          <label for="radio-2" class="">
            Label for value three
          </label>
        </div>
      </fieldset>
    `})},o={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-10" name="radio-group-2" class="input input--outline input--error" value="value-0" />

          <label for="radio-10" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-11" name="radio-group-2" class="input input--outline input--error" value="value-1" />

          <label for="radio-11" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-12" name="radio-group-2" class="input input--outline input--error" value="value-2" />

          <label for="radio-12" class="">
            Label for value three
          </label>
        </div>

        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </fieldset>
    `})};var s,t,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Radio
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <Radio v-bind="args" />
      </div>
    \`
  }),
  args: {
    variant: 'outline',
    size: 'base',
    label: 'Label',
    name: 'radio-name',
    id: 'radio-id'
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    template: \`<input type="radio" class="input--negative input--base" />\`
  })
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,m,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="radio" class="input--outline input--base" disabled />
      <input type="radio" class="input--outline input--base" disabled checked />
      <input type="radio" class="input--negative input--base" disabled />
      <input type="radio" class="input--negative input--base" disabled checked />
    \`
  })
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,b,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="radio" class="input--outline input--sm" value="input--sm" />
      <input type="radio" class="input--outline input--base" value="input--base" />
      <input type="radio" class="input--outline input--lg" value="input--lg" />
    \`
  })
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var f,y,R;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" class="input input--outline " value="value-0" />

          <label for="radio-0" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" class="input input--outline " value="value-1" />

          <label for="radio-1" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-2" name="radio-group-1" class="input input--outline " value="value-2" />

          <label for="radio-2" class="">
            Label for value three
          </label>
        </div>
      </fieldset>
    \`
  })
}`,...(R=(y=r.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var L,S,h;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-10" name="radio-group-2" class="input input--outline input--error" value="value-0" />

          <label for="radio-10" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-11" name="radio-group-2" class="input input--outline input--error" value="value-1" />

          <label for="radio-11" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-12" name="radio-group-2" class="input input--outline input--error" value="value-2" />

          <label for="radio-12" class="">
            Label for value three
          </label>
        </div>

        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </fieldset>
    \`
  })
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const w=["Example","NegativeRadio","DisabledRadio","SizesRadio","RequiredRadio","MessageRadio"],T=Object.freeze(Object.defineProperty({__proto__:null,DisabledRadio:i,Example:e,MessageRadio:o,NegativeRadio:a,RequiredRadio:r,SizesRadio:n,__namedExportsOrder:w,default:x},Symbol.toStringTag,{value:"Module"}));export{i as D,e as E,o as M,a as N,T as R,n as S,r as a};
