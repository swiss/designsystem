import{_ as t}from"./detailSimpleLanguage-7V2645Nq.js";const o={title:"Pages/Easy & Sign Language/Detail Easy Language",component:t},e={render:(i,{viewMode:g})=>({setup:()=>({args:i,viewMode:g}),components:{detailSimpleLanguage:t},template:`
      <detailSimpleLanguage
        v-bind="args"
        :useStickyNavigation="viewMode === 'docs' ? false : args.useStickyNavigation"
      />`}),args:{isEasyLanguage:!0,isSimpleLanguage:!1,useStickyNavigation:!0}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args, {
    viewMode
  }) => ({
    setup: () => ({
      args,
      viewMode
    }),
    components: {
      detailSimpleLanguage
    },
    template: \`
      <detailSimpleLanguage
        v-bind="args"
        :useStickyNavigation="viewMode === 'docs' ? false : args.useStickyNavigation"
      />\`
  }),
  args: {
    isEasyLanguage: true,
    isSimpleLanguage: false,
    useStickyNavigation: true
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const r=["Example"],l=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:r,default:o},Symbol.toStringTag,{value:"Module"}));export{l as D,e as E};
