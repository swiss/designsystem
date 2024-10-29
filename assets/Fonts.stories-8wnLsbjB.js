import{s as O,q as C,c as V,A as k,x as q,o as I}from"./vue.esm-bundler-8gVuwTo0.js";const E=O({__name:"Fonts",props:{label:{type:String,required:!0},textStyle:{type:String,default:()=>"regular",validator:e=>["regular","italic","bold","bold-italic"].includes(e)},size:{type:String,default:()=>"base",validator:e=>["3xl","2xl","xl","lg","base","sm","xs"].includes(e)}},setup(e){const s=e,H=C(()=>{let t="";return s.textStyle&&(t+=`font--${s.textStyle} `),s.size&&(s.size.startsWith("h")?t+=`${s.size} `:t+=`text--${s.size} `),t});return(t,w)=>(I(),V("div",{class:q(H.value)},k(e.label),3))}});E.__docgenInfo={exportName:"default",displayName:"Fonts",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"textStyle",type:{name:"string"},defaultValue:{func:!0,value:"() => 'regular'"},values:["regular","italic","bold","bold-italic"]},{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => 'base'"},values:["3xl","2xl","xl","lg","base","sm","xs"]}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/foundations/Fonts.vue"]};const $={title:"Foundations/Fonts/Sizes and styles",component:E,argTypes:{textStyle:{name:"style and weight",options:["regular","italic","bold","bold-italic"],control:{type:"select"}},size:{options:["3xl","2xl","xl","lg","base","sm","xs"],control:{type:"select"}}}},i={render:()=>({template:`<div>
      <div class="h1">Title heading 1</div>
      <div class="h2">Title heading 2</div>
      <div class="h3">Title heading 3</div>
      <div class="h4">Title heading 4</div>
      <div class="h5">Title heading 5</div>
    </div>`})},a={render:()=>({template:`<div>
      <div class="text--3xl">Text size 3xl</div>
      <div class="text--2xl">Text size 2xl</div>
      <div class="text--xl">Text size xl</div>
      <div class="text--lg">Text size lg</div>
      <div class="text--base">Text size base</div>
      <div class="text--sm">Text size sm</div>
      <div class="text--xs">Text size xs</div>
    </div>`})},l={render:()=>({template:`<div>
      <div class="font--regular">Regular</div>
      <div class="font--italic">Italic</div>
      <div class="font--bold">Bold</div>
      <div class="font--bold-italic">Bold italic</div>
    </div>`})},r={render:()=>({template:`<div>
      <p>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
    </div>`})},d={render:()=>({template:`<div>
      <p>H<sub>2</sub>SO<sub>4</sub> for sulphuric acid.</p>
    </div>`})},n={args:{label:"Confoederatio helvetica",textStyle:"bold",size:"3xl"}};var o,c,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
      <div class="h1">Title heading 1</div>
      <div class="h2">Title heading 2</div>
      <div class="h3">Title heading 3</div>
      <div class="h4">Title heading 4</div>
      <div class="h5">Title heading 5</div>
    </div>\`
  })
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,u,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
      <div class="text--3xl">Text size 3xl</div>
      <div class="text--2xl">Text size 2xl</div>
      <div class="text--xl">Text size xl</div>
      <div class="text--lg">Text size lg</div>
      <div class="text--base">Text size base</div>
      <div class="text--sm">Text size sm</div>
      <div class="text--xs">Text size xs</div>
    </div>\`
  })
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,g,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
      <div class="font--regular">Regular</div>
      <div class="font--italic">Italic</div>
      <div class="font--bold">Bold</div>
      <div class="font--bold-italic">Bold italic</div>
    </div>\`
  })
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,f,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
      <p>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
    </div>\`
  })
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,z,y;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
      <p>H<sub>2</sub>SO<sub>4</sub> for sulphuric acid.</p>
    </div>\`
  })
}`,...(y=(z=d.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var _,F,B;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Confoederatio helvetica',
    textStyle: 'bold',
    size: '3xl'
  }
}`,...(B=(F=n.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const j=["Headings","TextSize","StyleVariations","Superscript","Subscript","Example"],R=Object.freeze(Object.defineProperty({__proto__:null,Example:n,Headings:i,StyleVariations:l,Subscript:d,Superscript:r,TextSize:a,__namedExportsOrder:j,default:$},Symbol.toStringTag,{value:"Module"}));export{n as E,R as F,i as H,l as S,a as T,r as a,d as b};
