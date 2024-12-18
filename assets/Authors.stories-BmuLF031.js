import{_ as M}from"./Authors-bd_PiVvt.js";const A={title:"Components/Authors",component:M,argTypes:{bare:{control:{type:"boolean"}}}},a={args:{authors:[{name:"Maria Muster",img:"https://picsum.photos/120/120/?image=29"},{name:"Hans Höllman",initials:"HH"},{name:"Jean-Jaques Langerename",img:"https://picsum.photos/120/120/?image=30",url:"#"},{name:"Sofia de Souza"},{name:"Katja Anna-Beerli",img:"https://picsum.photos/120/120/?image=32"}]}},e={name:"Example w/o pictures",args:{authors:[{name:"Maria Muster"},{name:"Jean-Jaques Langerename",url:"#"},{name:"Hans Höllman"},{name:"Katja Anna-Beerli"}]}},n={args:{authors:[{name:"Jean-Marie Rolf-Arnaud-Peterson",img:"https://picsum.photos/120/120/?image=29"}]}},r={name:"One author w/o picture",args:{authors:[{name:"Maria Muster"}]}};var s,t,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    authors: [{
      name: 'Maria Muster',
      img: 'https://picsum.photos/120/120/?image=29'
    }, {
      name: 'Hans Höllman',
      initials: 'HH'
    }, {
      name: 'Jean-Jaques Langerename',
      img: 'https://picsum.photos/120/120/?image=30',
      url: '#'
    }, {
      name: 'Sofia de Souza'
    }, {
      name: 'Katja Anna-Beerli',
      img: 'https://picsum.photos/120/120/?image=32'
    }]
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var m,i,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example w/o pictures',
  args: {
    authors: [{
      name: 'Maria Muster'
    }, {
      name: 'Jean-Jaques Langerename',
      url: '#'
    }, {
      name: 'Hans Höllman'
    }, {
      name: 'Katja Anna-Beerli'
    }]
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    authors: [{
      name: 'Jean-Marie Rolf-Arnaud-Peterson',
      img: 'https://picsum.photos/120/120/?image=29'
    }]
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,h,d;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'One author w/o picture',
  args: {
    authors: [{
      name: 'Maria Muster'
    }]
  }
}`,...(d=(h=r.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const O=["Example","ExampleWOPictures","OneAuthor","OneAuthorWOPicture"],S=Object.freeze(Object.defineProperty({__proto__:null,Example:a,ExampleWOPictures:e,OneAuthor:n,OneAuthorWOPicture:r,__namedExportsOrder:O,default:A},Symbol.toStringTag,{value:"Module"}));export{S as A,a as E,n as O,e as a,r as b};
