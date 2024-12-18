import{_ as s}from"./DownloadItem-QnU00iIP.js";import{_ as c}from"./Btn-CAyJrJA_.js";const m={title:"Components/DownloadItem",component:s},e={render:t=>({components:{DownloadItem:s},setup:()=>({args:t}),template:'<DownloadItem v-bind="args" />'}),args:{filename:"dummy.pdf",title:"Information on the usage of websites",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"13.01.2022",headingLevel:"h3"}},n={render:t=>({components:{DownloadItem:s,Btn:c},setup:()=>({args:t}),template:`
      <div>
        <ul>
          <li v-for="item in args.content">
            <DownloadItem v-bind="item"  />
          </li>
        </ul>
        <div class="flex justify-end">
          <button type="button" class="btn btn--base btn--bare">
            <span class="btn__text">Alle Anzeigen</span>
            <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
              <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
            </svg>
          </button>
        </div>
      </div>
    `}),args:{content:[{filename:"dummy.pdf",title:"Information on the usage of websites",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"13.01.2022"},{filename:"image.png",title:"Information on the usage of websites",description:"",url:"../../../public/images/html-structure.png",type:"PNG",date:"22.01.2022"},{filename:"image.png",title:"Information on the usage of websites",description:"",url:"../../../public/images/html-structure.png",type:"",date:""}]}};var i,a,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DownloadItem
    },
    setup: () => ({
      args
    }),
    template: '<DownloadItem v-bind="args" />'
  }),
  args: {
    filename: 'dummy.pdf',
    title: 'Information on the usage of websites',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.',
    url: '../../../public/documents/dummy.pdf',
    type: 'PDF',
    date: '13.01.2022',
    headingLevel: 'h3'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var u,r,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DownloadItem,
      Btn
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <ul>
          <li v-for="item in args.content">
            <DownloadItem v-bind="item"  />
          </li>
        </ul>
        <div class="flex justify-end">
          <button type="button" class="btn btn--base btn--bare">
            <span class="btn__text">Alle Anzeigen</span>
            <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
              <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
            </svg>
          </button>
        </div>
      </div>
    \`
  }),
  args: {
    content: [{
      filename: 'dummy.pdf',
      title: 'Information on the usage of websites',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.',
      url: '../../../public/documents/dummy.pdf',
      type: 'PDF',
      date: '13.01.2022'
    }, {
      filename: 'image.png',
      title: 'Information on the usage of websites',
      description: '',
      url: '../../../public/images/html-structure.png',
      type: 'PNG',
      date: '22.01.2022'
    }, {
      filename: 'image.png',
      title: 'Information on the usage of websites',
      description: '',
      url: '../../../public/images/html-structure.png',
      type: '',
      date: ''
    }]
  }
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const d=["Example","ListExample"],b=Object.freeze(Object.defineProperty({__proto__:null,Example:e,ListExample:n,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{b as D,e as E,n as L};
