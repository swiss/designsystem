import{_ as f}from"./Badge-Bz7MAZ3K.js";const x={title:"Components/Badge",component:f,argTypes:{color:{table:{type:{summary:["string: info, error, warning, success, gray, red, yellow, orange, green, blue, indigo, purple, pink"]}},options:["info","error","warning","success","gray","red","yellow","orange","green","blue","indigo","purple","pink"],control:{type:"select"}},size:{table:{type:{summary:["string: base, sm"]}},options:["base","sm"],control:{type:"select"}},icon:{table:{type:{summary:["string: Cancel, Checkmark, undefined"]}},options:["Cancel","Checkmark",null],control:{type:"select"}}}},e={render:S=>({setup:()=>({args:S}),components:{Badge:f},template:`
    <div id="root">
      <Badge v-bind="args" />
    </div>
  `}),args:{color:"blue",size:"base",icon:void 0,label:"Badge"}},a={render:()=>({template:`
      <button class="badge badge--info">info</button>
      <button class="badge badge--warning">warning</button>
      <button class="badge badge--error">error</button>
      <button class="badge badge--success">success</button>
    `})},n={render:()=>({template:`
      <button class="badge badge--gray">gray</button>
      <button class="badge badge--red">red</button>
      <button class="badge badge--yellow">yellow</button>
      <button class="badge badge--orange">orange</button>
      <button class="badge badge--green">green</button>
      <button class="badge badge--blue">blue</button>
      <button class="badge badge--indigo">indigo</button>
      <button class="badge badge--purple">purple</button>
      <button class="badge badge--pink">pink</button>
    `})},t={render:()=>({template:`
      <button class="badge badge--base badge--gray">badge--base</button>
      <button class="badge badge--sm badge--gray">badge--sm</button>
    `})},s={render:()=>({template:`
      <div class="badge badge--gray badge--icon">
        <span class="badge__text">badge--icon</span>

        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="badge__icon icon icon--base">
          <path xmlns="http://www.w3.org/2000/svg" d="m17.153 7.066-4.8 4.801-4.779-4.779-.53.531 4.779 4.778-4.757 4.756.531.531 4.756-4.757 4.778 4.779.531-.53-4.779-4.779 4.801-4.8z" />
        </svg>

      </div>
    `})};var o,r,b;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    setup: () => ({
      args
    }),
    components: {
      Badge
    },
    template: \`
    <div id="root">
      <Badge v-bind="args" />
    </div>
  \`
  }),
  args: {
    color: 'blue',
    size: 'base',
    icon: undefined,
    label: 'Badge'
  }
}`,...(b=(r=e.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var g,d,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button class="badge badge--info">info</button>
      <button class="badge badge--warning">warning</button>
      <button class="badge badge--error">error</button>
      <button class="badge badge--success">success</button>
    \`
  })
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button class="badge badge--gray">gray</button>
      <button class="badge badge--red">red</button>
      <button class="badge badge--yellow">yellow</button>
      <button class="badge badge--orange">orange</button>
      <button class="badge badge--green">green</button>
      <button class="badge badge--blue">blue</button>
      <button class="badge badge--indigo">indigo</button>
      <button class="badge badge--purple">purple</button>
      <button class="badge badge--pink">pink</button>
    \`
  })
}`,...(i=(u=n.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,m,w;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button class="badge badge--base badge--gray">badge--base</button>
      <button class="badge badge--sm badge--gray">badge--sm</button>
    \`
  })
}`,...(w=(m=t.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var y,v,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="badge badge--gray badge--icon">
        <span class="badge__text">badge--icon</span>

        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="badge__icon icon icon--base">
          <path xmlns="http://www.w3.org/2000/svg" d="m17.153 7.066-4.8 4.801-4.779-4.779-.53.531 4.779 4.778-4.757 4.756.531.531 4.756-4.757 4.778 4.779.531-.53-4.779-4.779 4.801-4.8z" />
        </svg>

      </div>
    \`
  })
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const B=["Example","ColorsStates","ColorsOther","Sizes","Icons"],k=Object.freeze(Object.defineProperty({__proto__:null,ColorsOther:n,ColorsStates:a,Example:e,Icons:s,Sizes:t,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{k as B,a as C,e as E,s as I,t as S,n as a};
