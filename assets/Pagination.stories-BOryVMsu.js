import{_ as o}from"./Pagination-Ctal0JNv.js";const r={title:"Components/Pagination",component:o,argTypes:{type:{table:{type:{summary:["string: outline, outline-negative"]}},options:["outline","outline-negative"],control:{type:"select"}},field:{control:{type:"boolean"}},currentPage:{table:{category:"props"}}}},e={render:i=>({components:{Pagination:o},setup:()=>({args:i}),template:'<div><Pagination v-bind="args" /></div>'}),args:{currentPage:"1",totalPages:"von 13 Seiten",paginationItems:[{icon:"ChevronLeft",label:"Previous Page",link:"#prev"},{icon:"ChevronRight",label:"Next Page",link:"#next"}]}};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Pagination
    },
    setup: () => ({
      args
    }),
    template: '<div><Pagination v-bind="args" /></div>'
  }),
  args: {
    currentPage: '1',
    totalPages: 'von 13 Seiten',
    paginationItems: [{
      icon: 'ChevronLeft',
      label: 'Previous Page',
      link: '#prev'
    }, {
      icon: 'ChevronRight',
      label: 'Next Page',
      link: '#next'
    }]
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const s=["Example"],g=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:s,default:r},Symbol.toStringTag,{value:"Module"}));export{e as E,g as P};
