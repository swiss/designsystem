const g={title:"Layouts/Sections"},n={render:()=>({template:`
      <section class="section section--default">
        <div class="container">
          Simple Section
        </div>
      </section>`})},e={render:()=>({template:`
      <section class="section bg--secondary-50">
        <div class="container">
          <h2 class="section__title">Section title</h2>
          <h2 class="section__subtitle">Section subtitle</h2>

          <div class="card">
            <div class="card__body">
              Content, Card example
            </div>
          </div>

          <div className="section__action">
            Section action, put a button here
          </div>
        </div>
      </section>`})},t={render:()=>({template:`
      <section class="section bg--secondary-500">
        <div class="container">
          <h2 class="section__title">Negative section title</h2>

          <div class="card card--highlight">
            <div class="card__content">
              <div class="card__body">
                Card example
              </div>
            </div>
          </div>

          <div className="section__action">
            <a href="#" title="alle Infos auf eine Blick" class="btn btn--bare btn--icon-right">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="btn__icon icon--ArrowRight icon icon--base ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Read more</span>
            </a>
          </div>
        </div>
      </section>`})},s={render:()=>({template:`
      <main>
        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--secondary-50">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--secondary-50">
          <div class="container">
            Section with padding bottom only (padding top is removed because previous section has the same background color)
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--secondary-100">
          <div class="container">
            Section with top and padding bottom
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with consecutive containers. Container 1.
          </div>

          <div class="container">
            Section with consecutive containers. Container 2. Padding top is added.
          </div>
        </section>
      </main>`})};var i,c,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section section--default">
        <div class="container">
          Simple Section
        </div>
      </section>\`
  })
}`,...(o=(c=n.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var a,d,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section bg--secondary-50">
        <div class="container">
          <h2 class="section__title">Section title</h2>
          <h2 class="section__subtitle">Section subtitle</h2>

          <div class="card">
            <div class="card__body">
              Content, Card example
            </div>
          </div>

          <div className="section__action">
            Section action, put a button here
          </div>
        </div>
      </section>\`
  })
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var l,v,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section bg--secondary-500">
        <div class="container">
          <h2 class="section__title">Negative section title</h2>

          <div class="card card--highlight">
            <div class="card__content">
              <div class="card__body">
                Card example
              </div>
            </div>
          </div>

          <div className="section__action">
            <a href="#" title="alle Infos auf eine Blick" class="btn btn--bare btn--icon-right">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="btn__icon icon--ArrowRight icon icon--base ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Read more</span>
            </a>
          </div>
        </div>
      </section>\`
  })
}`,...(p=(v=t.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var m,h,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--secondary-50">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--secondary-50">
          <div class="container">
            Section with padding bottom only (padding top is removed because previous section has the same background color)
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--secondary-100">
          <div class="container">
            Section with top and padding bottom
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with consecutive containers. Container 1.
          </div>

          <div class="container">
            Section with consecutive containers. Container 2. Padding top is added.
          </div>
        </section>
      </main>\`
  })
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const u=["MainContentExample","Titles","DarkSections","Paddings"],_=Object.freeze(Object.defineProperty({__proto__:null,DarkSections:t,MainContentExample:n,Paddings:s,Titles:e,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{t as D,n as M,s as P,_ as S,e as T};
