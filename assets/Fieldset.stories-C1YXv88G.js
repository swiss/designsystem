import{_ as s}from"./Fieldset-Dy7GSG5T.js";import{_ as f}from"./Checkbox-C4Qkqp9v.js";import{_ as q}from"./Radio-Cx27OjHl.js";const y={title:"Components/Form/Fieldset",component:s,argTypes:{variant:{table:{type:{summary:["string: outline, negative"]}},options:["outline","negative"],control:{type:"select"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},legend:{table:{category:"props"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}},required:{control:{type:"boolean"}}}},e={render:i=>({components:{Fieldset:s,Radio:q},setup:()=>({args:i}),template:`
      <Fieldset v-bind="args">
          <Radio id="radio-0" name="radio-group-1" label="Label for value one" value="value-1" :variant="args.variant" :size="args.size" :required="args.required" />
          <Radio id="radio-1" name="radio-group-1" label="Label for value two" value="value-2" :variant="args.variant" :size="args.size" :required="args.required" />
      </Fieldset>
    `}),args:{required:!1,legend:"Radio button group legend"}},r={render:i=>({components:{Fieldset:s,Checkbox:f},setup:()=>({args:i}),template:`
      <Fieldset v-bind="args" >
        <Checkbox id="checkbox-0" name="checkbox-group-1" label="Label for value one" value="value-1" :variant="args.variant" :size="args.size" :required="args.required" />
        <Checkbox id="checkbox-1" name="checkbox-group-1" label="Label for value two" value="value-2" :variant="args.variant" :size="args.size" :required="args.required" />
      </Fieldset>
    `}),args:{required:!1,legend:"Checkbox group legend"}},a={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" required="required" class="input input--outline" value="value-0" />
          <label for="radio-0">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" required="required" class="input input--outline" value="value-1" />
          <label for="radio-1">Label for value two</label>
        </div>
      </fieldset>
    `})},o={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-3" name="radio-group-2" required="required" class="input input--outline input--error" value="value-0" />
          <label for="radio-3">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-4" name="radio-group-2" required="required" class="input input--outline input--error" value="value-1" />
          <label for="radio-4">Label for value two</label>
        </div>
        <div class="badge badge--sm badge--error">Error message, after last radio item</div>
      </fieldset>
    `})};var n,l,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Fieldset,
      Radio
    },
    setup: () => ({
      args
    }),
    template: \`
      <Fieldset v-bind="args">
          <Radio id="radio-0" name="radio-group-1" label="Label for value one" value="value-1" :variant="args.variant" :size="args.size" :required="args.required" />
          <Radio id="radio-1" name="radio-group-1" label="Label for value two" value="value-2" :variant="args.variant" :size="args.size" :required="args.required" />
      </Fieldset>
    \`
  }),
  args: {
    required: false,
    legend: 'Radio button group legend'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var t,u,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Fieldset,
      Checkbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <Fieldset v-bind="args" >
        <Checkbox id="checkbox-0" name="checkbox-group-1" label="Label for value one" value="value-1" :variant="args.variant" :size="args.size" :required="args.required" />
        <Checkbox id="checkbox-1" name="checkbox-group-1" label="Label for value two" value="value-2" :variant="args.variant" :size="args.size" :required="args.required" />
      </Fieldset>
    \`
  }),
  args: {
    required: false,
    legend: 'Checkbox group legend'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,c,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" required="required" class="input input--outline" value="value-0" />
          <label for="radio-0">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" required="required" class="input input--outline" value="value-1" />
          <label for="radio-1">Label for value two</label>
        </div>
      </fieldset>
    \`
  })
}`,...(v=(c=a.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var m,b,_;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-3" name="radio-group-2" required="required" class="input input--outline input--error" value="value-0" />
          <label for="radio-3">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-4" name="radio-group-2" required="required" class="input input--outline input--error" value="value-1" />
          <label for="radio-4">Label for value two</label>
        </div>
        <div class="badge badge--sm badge--error">Error message, after last radio item</div>
      </fieldset>
    \`
  })
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const x=["WithRadio","WithCheckboxes","RequiredFieldset","MessagesFieldset"],z=Object.freeze(Object.defineProperty({__proto__:null,MessagesFieldset:o,RequiredFieldset:a,WithCheckboxes:r,WithRadio:e,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{z as F,o as M,a as R,e as W,r as a};
