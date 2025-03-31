import{_ as p}from"./Popover-B1Jgz_UR.js";const a={title:"Components/Popover",component:p,argTypes:{color:{table:{type:{summary:["string: info, error, warning, success, gray, red, yellow, orange, green, blue, indigo, purple, pink"]}},options:["info","error","warning","success","gray","red","yellow","orange","green","blue","indigo","purple","pink"],control:{type:"select"}},icon:{control:{type:"boolean"}}}},e={render:t=>({components:{Popover:p},setup:()=>({args:t}),template:`
      <div style="padding: 60px 0;">
        <Popover v-bind="args" >
          <p>Popover content</p>
          <a href="#">Link</a>
        </Popover>
      </div>
    `}),args:{id:"1",color:"blue",label:"Click here to display the popover"}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Popover
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="padding: 60px 0;">
        <Popover v-bind="args" >
          <p>Popover content</p>
          <a href="#">Link</a>
        </Popover>
      </div>
    \`
  }),
  args: {
    id: '1',
    color: 'blue',
    label: 'Click here to display the popover'
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const s=["Example"],i=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:s,default:a},Symbol.toStringTag,{value:"Module"}));export{e as E,i as P};
