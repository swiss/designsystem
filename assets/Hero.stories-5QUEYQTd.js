import{_ as n}from"./Hero-BmZwS0gp.js";import{_ as w}from"./Btn-CoAQ1Snt.js";const P={title:"Sections/Content/Hero",components:n,render:I=>({setup:()=>({args:I}),components:{Hero:n,Btn:w},template:`
      <Hero :type="args.type" :meta-infos="args.metaInfos" :authors="args.authors">
        <template
          v-if="args.type == 'main-image' || args.type == 'default'"
          #image
        >
          <picture  v-if="args.type == 'main-image'">
            <source srcset="https://picsum.photos/1282/961/?image=29" media="(min-width: 1800px)">
            <source srcset="https://picsum.photos/1192/894/?image=28" media="(min-width: 1024px)">
            <source srcset="https://picsum.photos/800/600/?image=29" media="(min-width: 768px)">
            <source srcset="https://picsum.photos/680/510/?image=28" media="(min-width: 480px)">
            <img src="https://picsum.photos/480/360/?image=29" alt="ratio is 4/3">
          </picture>
          <picture v-if="args.type == 'default'">
            <source srcset="https://picsum.photos/1282/721/?image=29" media="(min-width: 1800px)">
            <source srcset="https://picsum.photos/1192/670/?image=28" media="(min-width: 1024px)">
            <source srcset="https://picsum.photos/800/450/?image=29" media="(min-width: 768px)">
            <source srcset="https://picsum.photos/680/382/?image=28" media="(min-width: 480px)">
            <img src="https://picsum.photos/480/270/?image=29" alt="ratio is 16/9">
          </picture>
        </template>
        <template #title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </template>
        <template #subtitle>
          Pellentesque dui dui, eleifend ac interdum eget, consectetur in odio.
        </template>
        <template v-if="args.type !== 'main-image'" #title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </template>
        <template
          v-if="args.type !== 'title-only'"
          #description
        >
          Pellentesque dui dui, eleifend ac interdum eget, consectetur in odio. Suspendisse potenti. Integer a mi ullamcorper, fermentum nisi quis, efficitur velit.
        </template>
        <template
          v-if="args.type == 'main-image' || args.type == 'main'"
          #cta
        >
          <Btn
            to="#"
            variant="outline"
            icon-pos="right"
            icon="ArrowRight"
            label="Unsere Dienstleistungen"
          />
        </template>
      </Hero>`}),argTypes:{type:{options:["default","main","main-image","hub","title-only","hidden"],control:{type:"select"}},metaInfos:{name:"MetaInfos",value:void 0},authors:{name:"Authors",value:void 0}}},e={args:{type:"main"}},t={args:{type:"main-image"}},a={args:{type:"hub"}},s={args:{type:"default",metaInfos:["Webartikel","23. Februar 2022"],authors:[{name:"Maria Muster",img:"https://picsum.photos/120/120/?image=29"},{name:"Jean-Jaques Langerename",img:"https://picsum.photos/120/120/?image=30",url:"#"},{name:"Hans Höllman",img:"https://picsum.photos/120/120/?image=31"},{name:"Katja Anna-Beerli",img:"https://picsum.photos/120/120/?image=32"}]}},i={name:"Detail page - title only",args:{type:"title-only"}},r={args:{type:"sr-only"}};var o,m,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'main'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'main-image'
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,d,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'hub'
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'default',
    metaInfos: ['Webartikel', '23. Februar 2022'],
    authors: [{
      name: 'Maria Muster',
      img: 'https://picsum.photos/120/120/?image=29'
    }, {
      name: 'Jean-Jaques Langerename',
      img: 'https://picsum.photos/120/120/?image=30',
      url: '#'
    }, {
      name: 'Hans Höllman',
      img: 'https://picsum.photos/120/120/?image=31'
    }, {
      name: 'Katja Anna-Beerli',
      img: 'https://picsum.photos/120/120/?image=32'
    }]
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,H,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Detail page - title only',
  args: {
    type: 'title-only'
  }
}`,...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var v,x,M;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'sr-only'
  }
}`,...(M=(x=r.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const D=["MainWithoutImage","MainWithImage","HubPage","DetailPage","DetailPageTitleOnly","ScreenReadersOnly"],q=Object.freeze(Object.defineProperty({__proto__:null,DetailPage:s,DetailPageTitleOnly:i,HubPage:a,MainWithImage:t,MainWithoutImage:e,ScreenReadersOnly:r,__namedExportsOrder:D,default:P},Symbol.toStringTag,{value:"Module"}));export{s as D,q as H,e as M,r as S,t as a,a as b,i as c};
