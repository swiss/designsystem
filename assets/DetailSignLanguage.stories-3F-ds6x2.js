import{_ as s}from"./detailSimpleLanguage-BWWSdA1T.js";const o={title:"Pages/Easy & Sign Language/Detail Sign Language",component:s},e={render:(t,{viewMode:g})=>({setup:()=>({args:t,viewMode:g}),components:{detailSimpleLanguage:s},template:`
      <detailSimpleLanguage
        v-bind="args"
        :useStickyNavigation="viewMode === 'docs' ? false : args.useStickyNavigation"
      />`}),args:{isEasyLanguage:!1,isSimpleLanguage:!1,isSignLanguage:!0,useStickyNavigation:!0}};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    isEasyLanguage: false,
    isSimpleLanguage: false,
    isSignLanguage: true,
    useStickyNavigation: true
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const r=["Example"],l=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:r,default:o},Symbol.toStringTag,{value:"Module"}));export{l as D,e as E};
