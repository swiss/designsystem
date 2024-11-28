import{_ as N}from"./Card-CvXM943v.js";import{_ as j}from"./Btn-DAP_qZ67.js";import{_ as x}from"./SvgIcon-BvWLCUtE.js";import{s as q,q as F,c as W,H as z,x as D,o as $}from"./vue.esm-bundler-8gVuwTo0.js";const c=q({__name:"CardGrid",props:{nItems:{type:Number,validator:a=>typeof a!="number"?!1:a>0&&a<6,default:()=>{}}},setup(a){const s=a,R=F(()=>{let t="grid gap--responsive ";return s.nItems===1?t+="grid--items-1 ":s.nItems===2?t+="grid--items-2 ":s.nItems===3?t+="grid--items-3 ":s.nItems===4?t+="grid--items-4 ":s.nItems===5&&(t+="grid--items-5 "),t});return(t,M)=>($(),W("div",{class:D(R.value)},[z(t.$slots,"default")],2))}});c.__docgenInfo={exportName:"default",displayName:"CardGrid",description:"",tags:{},props:[{name:"nItems",type:{name:"number"},defaultValue:{func:!0,value:"() => undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/demo/CardGrid.vue"]};const E={title:"Components/Card/Cards and grids",components:c},n={render:()=>({template:`
      <section class="section bg--secondary-50">
        <div class="container">
          <h2 class="section__title">Dynamic list</h2>

          <div class="grid grid--responsive-cols-3 gap--responsive">
            <div class="card">
              <div class="card__body">News 1</div>
            </div>

            <div class="card">
              <div class="card__body">News 2</div>
            </div>

            <div class="card">
              <div class="card__body">News 3</div>
            </div>
          </div>

          <div class="section__action">
            <a href="#" class="btn btn--bare btn--icon-right ">
              <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Alle News sehen</span>
            </a>
          </div>
        </div>

      </section>
    `})},o={render:()=>({template:`
    <section class="section bg--secondary-50">
      <div class="container">
        <h2 class="section__title">Section title</h2>

        <div class="grid grid--items-5 gap--responsive">
          <div class="card">
            <div class="card__body">Card 1</div>
          </div>

          <div class="card">
            <div class="card__body">Card 2</div>
          </div>

          <div class="card">
            <div class="card__body">Card 3</div>
          </div>

          <div class="card">
            <div class="card__body">Card 4</div>
          </div>

          <div class="card">
            <div class="card__body">Card 5</div>
          </div>
        </div>

        <div class="section__action">
          <a href="#" class="btn btn--bare btn--icon-right ">
            <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight ">
              <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
            </svg>

            <span class="btn__text">Alle News sehen</span>
          </a>
        </div>
      </div>
    </section>`})},e={render:a=>({setup:()=>({...a}),components:{Card:N,Btn:j,SvgIcon:x,CardGrid:c},template:`
      <section class="section bg--secondary-50">
        <div class="container">
          <h2 class="section__title">{{ sectionTitle }}</h2>
          <CardGrid v-if="nItems" :nItems="nItems">
            <Card
              type="default"
              :layout="(nItems === 1 || nItems === 3 || nItems === 4 ) ? 'image-left' : 'default' "
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 1</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>1"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 2</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>2"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 3</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>3"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 4</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>4"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 5</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
          </CardGrid>
        </div>
      </section>
    `}),args:{sectionTitle:"One Card",nItems:1}},r={...e,args:{sectionTitle:"Two Cards",nItems:2}},i={...e,args:{sectionTitle:"Three Cards",nItems:3}},d={...e,args:{sectionTitle:"Four Cards",nItems:4}},l={...e,args:{sectionTitle:"Five Cards",nItems:5}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section bg--secondary-50">
        <div class="container">
          <h2 class="section__title">Dynamic list</h2>

          <div class="grid grid--responsive-cols-3 gap--responsive">
            <div class="card">
              <div class="card__body">News 1</div>
            </div>

            <div class="card">
              <div class="card__body">News 2</div>
            </div>

            <div class="card">
              <div class="card__body">News 3</div>
            </div>
          </div>

          <div class="section__action">
            <a href="#" class="btn btn--bare btn--icon-right ">
              <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Alle News sehen</span>
            </a>
          </div>
        </div>

      </section>
    \`
  })
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,g,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`
    <section class="section bg--secondary-50">
      <div class="container">
        <h2 class="section__title">Section title</h2>

        <div class="grid grid--items-5 gap--responsive">
          <div class="card">
            <div class="card__body">Card 1</div>
          </div>

          <div class="card">
            <div class="card__body">Card 2</div>
          </div>

          <div class="card">
            <div class="card__body">Card 3</div>
          </div>

          <div class="card">
            <div class="card__body">Card 4</div>
          </div>

          <div class="card">
            <div class="card__body">Card 5</div>
          </div>
        </div>

        <div class="section__action">
          <a href="#" class="btn btn--bare btn--icon-right ">
            <svg viewBox="0 0 24 24" class="btn__icon icon icon--base icon--ArrowRight ">
              <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
            </svg>

            <span class="btn__text">Alle News sehen</span>
          </a>
        </div>
      </div>
    </section>\`
  })
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,_,C;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    setup: () => ({
      ...args
    }),
    components: {
      Card,
      Btn,
      SvgIcon,
      CardGrid
    },
    template: \`
      <section class="section bg--secondary-50">
        <div class="container">
          <h2 class="section__title">{{ sectionTitle }}</h2>
          <CardGrid v-if="nItems" :nItems="nItems">
            <Card
              type="default"
              :layout="(nItems === 1 || nItems === 3 || nItems === 4 ) ? 'image-left' : 'default' "
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 1</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>1"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 2</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>2"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 3</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>3"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 4</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
            <Card
              v-if="nItems>4"
              type="default"
            >
              <template v-slot:image>
                <img src="https://picsum.photos/775/350" alt="cat" />
              </template>
              <template v-slot:title>
                <h3>Card 5</h3>
              </template>
              <template v-slot:description>
                <p>
                  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem
                </p>
              </template>
              <template v-slot:footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Weiterlesen"
                />
              </template>
            </Card>
          </CardGrid>
        </div>
      </section>
    \`
  }),
  args: {
    sectionTitle: 'One Card',
    nItems: 1
  }
}`,...(C=(_=e.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var y,f,I;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...OneCard,
  args: {
    sectionTitle: 'Two Cards',
    nItems: 2
  }
}`,...(I=(f=r.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var A,S,w;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...OneCard,
  args: {
    sectionTitle: 'Three Cards',
    nItems: 3
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,L,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...OneCard,
  args: {
    sectionTitle: 'Four Cards',
    nItems: 4
  }
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var B,G,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...OneCard,
  args: {
    sectionTitle: 'Five Cards',
    nItems: 5
  }
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const H=["DynamicList","GridClasses","OneCard","TwoCards","ThreeCards","FourCards","FiveCards"],Q=Object.freeze(Object.defineProperty({__proto__:null,DynamicList:n,FiveCards:l,FourCards:d,GridClasses:o,OneCard:e,ThreeCards:i,TwoCards:r,__namedExportsOrder:H,default:E},Symbol.toStringTag,{value:"Module"}));export{Q as C,n as D,d as F,o as G,e as O,r as T,i as a,l as b};
