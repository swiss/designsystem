const E={title:"Layouts/Containers"},n={render:()=>({template:`
      <section class="section section--default">
        <div class="container">
          <div>
            Container with horizontal padding and limited width on large viewport
          </div>
        </div>
      </section>`})},i={render:()=>({template:`
      <section class="section section--default">
        <div class="container">
          <div>Section with consecutive containers. Container 1.</div>
        </div>

        <div class="container">
          <div>Section with consecutive containers. Container 2. Padding top is added.</div>
        </div>
      </section>`})},s={render:()=>({template:`
      <section>
        <div class="container container--flex">
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </div>
      </section>`})},a={render:()=>({template:`
      <section>
        <div class="container container--grid gap--responsive">
          <div class="container__full">container__full</div>
          <div class="container__center--md">container__center--md</div>
          <div class="container__center--sm">container__center--sm</div>
          <div class="container__center--xs">container__center--xs</div>
        </div>
      </section>`})},e={render:z=>({template:`
      <section>
        <div class="container container--grid ${z.extraClasses} gap--responsive">
          <div class="container__main">container__main</div>
          <div class="container__aside">container__aside</div>
        </div>
      </section>`}),args:{extraClasses:""}},r={...e,args:{extraClasses:"container--reverse"}},t={...e,args:{extraClasses:"container--reverse-mobile"}};var o,c,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section section--default">
        <div class="container">
          <div>
            Container with horizontal padding and limited width on large viewport
          </div>
        </div>
      </section>\`
  })
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,v,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section section--default">
        <div class="container">
          <div>Section with consecutive containers. Container 1.</div>
        </div>

        <div class="container">
          <div>Section with consecutive containers. Container 2. Padding top is added.</div>
        </div>
      </section>\`
  })
}`,...(m=(v=i.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,_,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section>
        <div class="container container--flex">
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </div>
      </section>\`
  })
}`,...(u=(_=s.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};var C,g,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section>
        <div class="container container--grid gap--responsive">
          <div class="container__full">container__full</div>
          <div class="container__center--md">container__center--md</div>
          <div class="container__center--sm">container__center--sm</div>
          <div class="container__center--xs">container__center--xs</div>
        </div>
      </section>\`
  })
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,b,h;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    template: \`
      <section>
        <div class="container container--grid \${args.extraClasses} gap--responsive">
          <div class="container__main">container__main</div>
          <div class="container__aside">container__aside</div>
        </div>
      </section>\`
  }),
  args: {
    extraClasses: '' // 'container--reverse', 'container--reverse-mobile'
  }
}`,...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,M,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...MainAsideSubContainers,
  args: {
    extraClasses: 'container--reverse'
  }
}`,...(w=(M=r.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var A,R,y;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...MainAsideSubContainers,
  args: {
    extraClasses: 'container--reverse-mobile'
  }
}`,...(y=(R=t.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const O=["ContainerExample","ConsecutiveContainers","ContainerFlexbox","CenteredSubContainers","MainAsideSubContainers","MainAsideSubContainersReverse","MainAsideSubContainersReverseMobile"],P=Object.freeze(Object.defineProperty({__proto__:null,CenteredSubContainers:a,ConsecutiveContainers:i,ContainerExample:n,ContainerFlexbox:s,MainAsideSubContainers:e,MainAsideSubContainersReverse:r,MainAsideSubContainersReverseMobile:t,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{P as C,e as M,n as a,i as b,s as c,a as d,r as e,t as f};
