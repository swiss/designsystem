const z={title:"Components/Link"},e={render:()=>({template:`
      <div>
        <a>Link</a> without style
      </div>
    `})},a={render:()=>({template:`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a>metus tempor</a> at. Donec volutpat ex et enim gravida vehicula.</p>
      </main>
    `})},n={render:()=>({template:`
      <div>
        <a class="link">Link</a> with style
      </div>
    `})},t={parameters:{backgrounds:{default:"Dark"}},render:()=>({template:`
      <a class="link link--negative">Negative Link</a>
    `})},r={render:()=>({template:`
      <main>
        <p>
          <a href="#" class="btn btn--link" target="_blank">
            <svg viewBox="0 0 24 24" class="btn__icon">
              <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
            </svg>

            <span class="btn__text">
              Standort auf Karte anzeigen
            </span>
          </a>
        </p>
      </main>
    `})},s={render:()=>({template:`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a href="http://admin.ch" rel="external">sementical external</a> at. Donec volutpat ex et enim <a href="http://admin.ch" class="link--external">forced external</a> gravida vehicula.</p>
      </main>
    `})};var i,c,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <a>Link</a> without style
      </div>
    \`
  })
}`,...(o=(c=e.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a>metus tempor</a> at. Donec volutpat ex et enim gravida vehicula.</p>
      </main>
    \`
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <a class="link">Link</a> with style
      </div>
    \`
  })
}`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,v,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  render: () => ({
    template: \`
      <a class="link link--negative">Negative Link</a>
    \`
  })
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var L,x,f;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <p>
          <a href="#" class="btn btn--link" target="_blank">
            <svg viewBox="0 0 24 24" class="btn__icon">
              <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
            </svg>

            <span class="btn__text">
              Standort auf Karte anzeigen
            </span>
          </a>
        </p>
      </main>
    \`
  })
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var _,b,S;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a href="http://admin.ch" rel="external">sementical external</a> at. Donec volutpat ex et enim <a href="http://admin.ch" class="link--external">forced external</a> gravida vehicula.</p>
      </main>
    \`
  })
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const D=["DefaultLink","ParagraphLink","ForceLink","NegativeLink","IconLink","IconExternalLink"],w=Object.freeze(Object.defineProperty({__proto__:null,DefaultLink:e,ForceLink:n,IconExternalLink:s,IconLink:r,NegativeLink:t,ParagraphLink:a,__namedExportsOrder:D,default:z},Symbol.toStringTag,{value:"Module"}));export{e as D,n as F,r as I,w as L,t as N,a as P,s as a};
