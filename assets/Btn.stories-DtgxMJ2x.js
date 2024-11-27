import{_ as P}from"./Btn-DJ0m0bXS.js";const R={title:"Components/Button",component:P,argTypes:{variant:{table:{type:{summary:["string: outline, bare, filled, outline-negative, bare-negative, link, link-negative"]}},options:["outline","bare","filled","outline-negative","bare-negative","link","link-negative"],control:{type:"select"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},icon:{table:{type:{summary:["string: ArrowRight, ArrowLeft, Checkmark"]}},options:["ArrowRight","ArrowLeft","Checkmark"],control:{type:"select"}},iconPos:{table:{type:{summary:["string: none, only, left, right"]}},options:["none","only","left","right"],control:{type:"select"}}}},t={render:l=>({setup:()=>({args:l}),components:{Btn:P},template:`
      <div id="root" style="padding: 3em" class="${l.variant.endsWith("-negative")?"bg--secondary-600":""}">
        <Btn v-bind="args" />
      </div>
    `}),args:{variant:"outline",size:"base",icon:"ArrowRight",iconPos:"none",label:"Button text"}},n={render:()=>({template:`
      <button type="button" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a button
        </span>
      </button>

      <a href="#" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a link
        </span>
      </a>`})},e={render:()=>({template:`
      <button type="button" class="btn btn--base btn--outline">
        <span class="btn__text">
          btn--outline
        </span>
      </button>

      <button type="button" class="btn btn--base btn--filled">
        <span class="btn__text">btn--filled</span>
      </button>

      <button type="button" class="btn btn--base btn--bare">
        <span class="btn__text">
          btn--bare
        </span>
      </button>`})},s={render:()=>({template:`
      <button type="button" class="btn btn--base btn--outline-negative">
        <span class="btn__text">
          btn--outline-negative
        </span>
      </button>

      <button type="button" class="btn btn--base btn--bare-negative">
        <span class="btn__text">
          btn--bare-negative
        </span>
      </button>`})},a={render:()=>({template:`
      <button type="button" class="btn btn--outline btn--sm">
        <span class="btn__text">
          btn--sm
        </span>
      </button>

    <button type="button" class="btn btn--outline btn--base">
      <span class="btn__text">btn--base</span>
    </button>

      <button type="button" class="btn btn--outline btn--lg">
        <span class="btn__text">
          btn--lg
        </span>
      </button>`})},o={render:()=>({template:`
      <button type="button" class="btn btn--outline btn--base btn--icon-only">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
        </svg>

        <span class="btn__text">Button text</span>
      </button>

      <button type="button" class="btn btn--outline btn--base btn--icon-left">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m8.306 5.116-4.066 7.044 4.066 7.044.65-.375-3.633-6.294h15.187v-.75h-15.187l3.633-6.294z" />
        </svg>

        <span class="btn__text">icon-left</span>
      </button>`})},b={render:()=>({template:`
      <div>
        <button type="button" class="btn btn--link">
          <span class="btn__text">Button link</span>
        </button>

        <hr />

        <button type="button" class="btn btn--link btn--icon-right">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Button link with right icon</span>
        </button>

      </div>`})},r={parameters:{backgrounds:{default:"Dark"}},render:()=>({template:`
      <div>
        <button type="button" class="btn btn--link-negative">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Negative button link with icon</span>
        </button>

      </div>`})};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    setup: () => ({
      args
    }),
    components: {
      Btn
    },
    template: \`
      <div id="root" style="padding: 3em" class="\${args.variant.endsWith('-negative') ? 'bg--secondary-600' : ''}">
        <Btn v-bind="args" />
      </div>
    \`
  }),
  args: {
    variant: 'outline',
    size: 'base',
    icon: 'ArrowRight',
    iconPos: 'none',
    label: 'Button text'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a button
        </span>
      </button>

      <a href="#" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a link
        </span>
      </a>\`
  })
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var _,g,v;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--base btn--outline">
        <span class="btn__text">
          btn--outline
        </span>
      </button>

      <button type="button" class="btn btn--base btn--filled">
        <span class="btn__text">btn--filled</span>
      </button>

      <button type="button" class="btn btn--base btn--bare">
        <span class="btn__text">
          btn--bare
        </span>
      </button>\`
  })
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--base btn--outline-negative">
        <span class="btn__text">
          btn--outline-negative
        </span>
      </button>

      <button type="button" class="btn btn--base btn--bare-negative">
        <span class="btn__text">
          btn--bare-negative
        </span>
      </button>\`
  })
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var k,B,z;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--outline btn--sm">
        <span class="btn__text">
          btn--sm
        </span>
      </button>

    <button type="button" class="btn btn--outline btn--base">
      <span class="btn__text">btn--base</span>
    </button>

      <button type="button" class="btn btn--outline btn--lg">
        <span class="btn__text">
          btn--lg
        </span>
      </button>\`
  })
}`,...(z=(B=a.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var f,w,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--outline btn--base btn--icon-only">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
        </svg>

        <span class="btn__text">Button text</span>
      </button>

      <button type="button" class="btn btn--outline btn--base btn--icon-left">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m8.306 5.116-4.066 7.044 4.066 7.044.65-.375-3.633-6.294h15.187v-.75h-15.187l3.633-6.294z" />
        </svg>

        <span class="btn__text">icon-left</span>
      </button>\`
  })
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var L,I,N;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <button type="button" class="btn btn--link">
          <span class="btn__text">Button link</span>
        </button>

        <hr />

        <button type="button" class="btn btn--link btn--icon-right">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Button link with right icon</span>
        </button>

      </div>\`
  })
}`,...(N=(I=b.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,O,E;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  render: () => ({
    template: \`
      <div>
        <button type="button" class="btn btn--link-negative">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Negative button link with icon</span>
        </button>

      </div>\`
  })
}`,...(E=(O=r.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const T=["Example","ButtonOrLink","ButtonVariations","NegativeTypes","Sizes","Icons","ButtonLinks","NegativeButtonLinks"],j=Object.freeze(Object.defineProperty({__proto__:null,ButtonLinks:b,ButtonOrLink:n,ButtonVariations:e,Example:t,Icons:o,NegativeButtonLinks:r,NegativeTypes:s,Sizes:a,__namedExportsOrder:T,default:R},Symbol.toStringTag,{value:"Module"}));export{j as B,t as E,o as I,s as N,a as S,n as a,e as b,b as c,r as d};
