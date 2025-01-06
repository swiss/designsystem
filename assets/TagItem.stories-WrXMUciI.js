import{_ as r}from"./TagItem-CpKOMcfC.js";const u={title:"Components/TagItem",component:r,argTypes:{variant:{table:{type:{summary:["string: default, primary, active"]}},options:["default","primary","active"],control:{type:"select"}},size:{table:{type:{summary:["string: sm, base"]}},options:["sm","base"],control:{type:"select"}},icon:{options:["Cancel","Checkmark",void 0],control:{type:"select"}}}},e={args:{variant:"default",label:"Button text",to:"http://www.admin.ch",icon:void 0}},t={render:n=>({components:{TagItem:r},setup:()=>({args:n}),template:`<div>
      <hr class="separator separator--xl" />
      <div class="list list--flex list--wrap">
        <TagItem v-for="item in args.content" v-bind="item" />
      </div>
    </div>`}),args:{content:[{variant:"default",label:"Tag one",to:"#"},{variant:"default",label:"Tag two",to:"#"},{variant:"default",label:"Tag three",to:"#"},{variant:"default",label:"Tag four",to:"#"}]}},a={render:n=>({components:{TagItem:r},setup:()=>({args:n}),template:`
      <div>
        <hr class="separator separator--xl" />
        <div class="list list--flex list--wrap">
          <TagItem v-for="item in args.content" v-bind="item" />
        </div>
      </div>
      `}),args:{content:[{variant:"active",label:"All"},{variant:"default",label:"Filter one"},{variant:"default",label:"Filter two"},{variant:"default",label:"Filter three"}]}};var s,l,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    label: 'Button text',
    to: 'http://www.admin.ch',
    icon: undefined
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TagItem
    },
    setup: () => ({
      args
    }),
    template: \`<div>
      <hr class="separator separator--xl" />
      <div class="list list--flex list--wrap">
        <TagItem v-for="item in args.content" v-bind="item" />
      </div>
    </div>\`
  }),
  args: {
    content: [{
      variant: 'default',
      label: 'Tag one',
      to: '#'
    }, {
      variant: 'default',
      label: 'Tag two',
      to: '#'
    }, {
      variant: 'default',
      label: 'Tag three',
      to: '#'
    }, {
      variant: 'default',
      label: 'Tag four',
      to: '#'
    }]
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TagItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <hr class="separator separator--xl" />
        <div class="list list--flex list--wrap">
          <TagItem v-for="item in args.content" v-bind="item" />
        </div>
      </div>
      \`
  }),
  args: {
    content: [{
      variant: 'active',
      label: 'All'
    }, {
      variant: 'default',
      label: 'Filter one'
    }, {
      variant: 'default',
      label: 'Filter two'
    }, {
      variant: 'default',
      label: 'Filter three'
    }]
  }
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const g=["Example","List","Filters"],b=Object.freeze(Object.defineProperty({__proto__:null,Example:e,Filters:a,List:t,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{e as E,a as F,t as L,b as T};
