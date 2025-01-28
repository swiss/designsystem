import{_ as s}from"./Newsletter-CFSojSxx.js";const g={title:"Components/Newsletter",component:s,argTypes:{type:{table:{type:{summary:["string: default, inline"]}},options:["default","inline"],control:{type:"select"}},state:{table:{category:"props",type:{summary:["string: default, sent"]}},options:["default","sent"],control:{type:"select"}}}},e={render:n=>({components:{Newsletter:s},setup:()=>({args:n}),template:`
      <main style="max-width: 600px; margin: auto">
        <Newsletter v-bind="args" />
      </main>
    `}),args:{type:"default",state:"default",title:"Abonnieren Sie unseren Newsletter",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo",inputLabel:"E-Mail",buttonLabel:"Newsletter abonnieren",successText:"Danke für Ihre Anmeldung. Sie sollten gerade eine Email bekommen haben.  <strong>Bitte klicken sie den enthaltenen Link um die Anmeldung zu abschliessen.</strong>"}},t={render:n=>({components:{Newsletter:s},setup:()=>({args:n}),template:`
      <main style="max-width: 600px; margin: auto">
        <Newsletter v-bind="args"/>
      </main>
    `}),args:{...e.args,type:"inline"}},a={render:n=>({components:{Newsletter:s},setup:()=>({args:n}),template:`
      <main>
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            <Newsletter v-bind="args" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          </div>
        </div>
      </main>
    `}),args:{...e.args,type:"inline"}};var r,i,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Newsletter
    },
    setup: () => ({
      args
    }),
    template: \`
      <main style="max-width: 600px; margin: auto">
        <Newsletter v-bind="args" />
      </main>
    \`
  }),
  args: {
    type: 'default',
    state: 'default',
    title: 'Abonnieren Sie unseren Newsletter',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
    inputLabel: 'E-Mail',
    buttonLabel: 'Newsletter abonnieren',
    successText: 'Danke für Ihre Anmeldung. Sie sollten gerade eine Email bekommen haben.  <strong>Bitte klicken sie den enthaltenen Link um die Anmeldung zu abschliessen.</strong>'
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Newsletter
    },
    setup: () => ({
      args
    }),
    template: \`
      <main style="max-width: 600px; margin: auto">
        <Newsletter v-bind="args"/>
      </main>
    \`
  }),
  args: {
    ...Example.args,
    type: 'inline'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Newsletter
    },
    setup: () => ({
      args
    }),
    template: \`
      <main>
        <div class="container container--grid gap--responsive">
          <div class="container__center--xs vertical-spacing">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            <Newsletter v-bind="args" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          </div>
        </div>
      </main>
    \`
  }),
  args: {
    ...Example.args,
    type: 'inline'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const b=["Example","ExampleInlineForm","ExampleDetailPage"],x=Object.freeze(Object.defineProperty({__proto__:null,Example:e,ExampleDetailPage:a,ExampleInlineForm:t,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{e as E,x as N,t as a,a as b};
