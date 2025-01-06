import{_ as i}from"./Card-CvXM943v.js";import{_ as m}from"./Btn-CdzkYC8x.js";import{_ as n}from"./SvgIcon-CJ45lfp5.js";import{_ as w}from"./SubpagesSection-C-KPbvDx.js";const I=e=>({setup:()=>({...e}),components:{Card:i,Btn:m,SvgIcon:n},template:`
    <div>
      <div style="padding: 3em;" class="bg--secondary-50">
        <div style="max-width: 600px; margin: auto;">
          <Card :type="type">
            <template v-slot:image>
              <img src="https://picsum.photos/775/435" alt="cat">
            </template>
            <template v-slot:metaInfos>
              <p class="meta-info">
                <span class="meta-info__item">
                  Webartikel
                </span>
                <span class="meta-info__item">
                  23. Februar 2022
                </span>
              </p>
            </template>
            <template v-slot:title>
              <h3>Daten und Dienste online kostenlos als Open Government Data (OGD)</h3>
            </template>
            <template v-slot:description>
              <p>
                Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et ac-cusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem
              </p>
            </template>
            <template v-slot:footerInfo>
              Topic
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
        </div>
      </div>
    </div>`}),A=e=>({setup:()=>({...e}),components:{Card:i,Btn:m,SvgIcon:n},template:`
    <div>
      <div style="padding: 3em;" class="bg--secondary-50">
        <div style="max-width: 600px; margin: auto;">
          <Card type="default">
            <template v-slot:image>
              <img src="https://picsum.photos/775/350" alt="cat">
            </template>
            <template v-slot:metaInfos>
              <p class="meta-info">
                <span class="meta-info__item">
                  Konferenz
                </span>
                <span class="meta-info__item">
                  23. Februar 2022
                </span>
              </p>
            </template>
            <template v-slot:title>
              <h3>Event title</h3>
            </template>
            <template v-slot:description>
              <p>
                Hatten Sie schon immer eine Idee, die sie mit Geodaten umsetzen wollten?
                Wollten Sie schon immer ein Problem mit Hilfe von Karten und Luftbildern lösen?
              </p>
            </template>
            <template v-slot:eventInfos>
              <ul class="flex flex-wrap">
                <li class="flex items-center mr-6 mb-2">
                  <SvgIcon icon="Calendar" size="xl" class="-ml-1.5 mr-1" />
                  <div>10-12 Mai 2022</div>
                </li>
                <li class="flex items-center mr-6 mb-2">
                  <SvgIcon icon="Clock" size="xl" class="-ml-1.5 mr-1" />
                  <div>9 bis 11 Uhr</div>
                </li>
                <li class="flex items-center mr-6 mb-2">
                  <SvgIcon icon="MapMarker" size="xl" class="-ml-1.5 mr-1" />
                  <div>Zürich</div>
                </li>
              </ul>
            </template>
            <template v-slot:footerInfo>
              Topic
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
        </div>
      </div>
    </div>`}),T=e=>({setup:()=>({...e}),components:{Card:i,Btn:m,SvgIcon:n},template:`
    <div>
      <div style="padding: 3em;" class="bg--secondary-50">
        <div style="max-width: 600px; margin: auto;">
          <Card>
            <template v-slot:header>
              <SvgIcon icon="Instagram" size="xl" class="mr-2" />
              <div>Instagram insights</div>
            </template>
            <template v-slot:description>
              <div
                class="socials__instagram"
              >
                <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0"
                  src="https://www.instagram.com/p/Cd6KkQsOnOh/embed/?cr=1&amp;v=14&amp;wp=333&amp;rd=https%3A%2F%2Fstorybook.bund-ds.bedev.liip.ch&amp;rp=%2Fiframe.html%3Fid%3Dpages-homepage--example%26viewMode%3Ddocs#%7B%22ci%22%3A0%2C%22os%22%3A880315.3999999994%2C%22ls%22%3A879792.2999999998%2C%22le%22%3A880250.2000000002%7D"
                  allowtransparency="true" allowfullscreen="true" frameborder="0" height="588"
                  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"
                  style="background: white; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>
              </div>
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
        </div>
      </div>
    </div>`}),O=e=>({setup:()=>({...e}),components:{SubpagesSection:w},template:"<SubpagesSection />"}),k={title:"Components/Card/Cards variants",components:n},t={render:I,args:{type:"default"}},a={render:I,name:"News item, optional image",args:{type:"universal"}},s={render:A,args:{}},r={render:T,args:{}},o={render:O.bind({}),args:{}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: TemplateCardArticle,
  args: {
    type: 'default'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,v,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: TemplateCardArticle,
  name: 'News item, optional image',
  args: {
    type: 'universal'
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var u,f,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: TemplateCardEvent,
  args: {}
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,C,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: TemplateCardShare,
  args: {}
}`,...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var _,S,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: TemplateCardHub.bind({}),
  args: {}
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const z=["ArticleOrNewsItem","NewsItemOptionalImage","EventItem","SharingItem","HubPageItem"],N=Object.freeze(Object.defineProperty({__proto__:null,ArticleOrNewsItem:t,EventItem:s,HubPageItem:o,NewsItemOptionalImage:a,SharingItem:r,__namedExportsOrder:z,default:k},Symbol.toStringTag,{value:"Module"}));export{t as A,N as C,s as E,o as H,a as N,r as S};
