import{_ as s}from"./NotificationBanner-Cw9OouCH.js";const i={title:"Components/NotificationBanner",component:s,argTypes:{type:{table:{type:{summary:["string: info, warning, error, success"]}},options:["info","warning","error","success"],control:{type:"select"}},isClosed:{table:{category:"props"},control:{type:"boolean"}}}},e={render:r=>({components:{NotificationBanner:s},setup:()=>({args:r}),template:`
    <div style="min-height: 100vh">
      <NotificationBanner v-bind="args" />
    </div>
    `}),args:{type:"info",isFixed:!1,isClosed:!1}};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NotificationBanner
    },
    setup: () => ({
      args
    }),
    template: \`
    <div style="min-height: 100vh">
      <NotificationBanner v-bind="args" />
    </div>
    \`
  }),
  args: {
    type: 'info',
    isFixed: false,
    isClosed: false
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const a=["Example"],p=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:a,default:i},Symbol.toStringTag,{value:"Module"}));export{e as E,p as N};
