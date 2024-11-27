import{_ as w}from"./Notification-DeLq4jZJ.js";const _={title:"Components/Notification",component:w,argTypes:{isClosed:{table:{category:"props"}},type:{table:{type:{summary:["string: info, warning, error, success, alert, hint"]}},options:["info","warning","error","success","alert","hint"],control:{type:"select"}},icon:{options:["InfoCircle","WarningCircle","CancelCircle","HelpCircle","CheckmarkCircle",void 0],control:{type:"select"}}}},i={args:{type:"info",icon:"InfoCircle",text:'<p>This is a notification with an <a href="#" target="_blank"> external link</a>.</p>',closeBtn:!0,isClosed:!1}},n={render:()=>({template:`
        <div>
          <div class="notification notification--hint">
            Hint: A new software update is available.
          </div>
          <div class="notification notification--info">
            Info: A new software update is available.
          </div>
          <div class="notification notification--warning">
            Warning: A new software update is available.
          </div>
          <div class="notification notification--error">
            Error: A new software update is available.
          </div>
          <div class="notification notification--success">
            Success: A new software update is available.
          </div>
          <hr class="separator separator--xl" />
          <div class="notification notification--alert">
            Alert: An important incident happened.
          </div>
        </div>
      `})},a={render:()=>({template:`
        <div>
          <div class="notification notification--info">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m11.8042 10.05464h1.24121v7.26074h-1.24121z" />
              <path d="m12.43506 7.41108a.69272.69272 0 0 0 -.54688.208.74063.74063 0 0 0 -.18457.50977.71511.71511 0 0 0 .18457.50293.70351.70351 0 0 0 .54688.20214.6722.6722 0 0 0 .73779-.70507.73376.73376 0 0 0 -.1875-.50977.70459.70459 0 0 0 -.55029-.208z" />
              <path d="m12.375 4.079a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54106z" />
            </svg>
            <div class="notification__content">
              A new software update is available.
            </div>
          </div>
          <div class="notification notification--warning">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m12.39812 15.97119a.69225.69225 0 0 0 -.54688.207.74214.74214 0 0 0 -.18457.51172.66617.66617 0 0 0 .73145.70508.72171.72171 0 0 0 .55029-.20117.7061.7061 0 0 0 .1875-.50391.73529.73529 0 0 0 -.1875-.51172.70341.70341 0 0 0 -.55029-.207z" />
              <path d="m12.922 14.551.093-7.002h-1.301l.087 7.002z" />
              <path d="m12.37517 4.0835a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54101z" />
            </svg>
            <div class="notification__content">
              <p>
                A new software update is available.
                <a href="#" target="_blank">
                  Download
                </a>
              </p>
            </div>
          </div>
          <div class="notification notification--error">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m12.39812 15.97119a.69225.69225 0 0 0 -.54688.207.74214.74214 0 0 0 -.18457.51172.66617.66617 0 0 0 .73145.70508.72171.72171 0 0 0 .55029-.20117.7061.7061 0 0 0 .1875-.50391.73529.73529 0 0 0 -.1875-.51172.70341.70341 0 0 0 -.55029-.207z" />
              <path d="m12.922 14.551.093-7.002h-1.301l.087 7.002z" />
              <path d="m12.37517 4.0835a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54101z" />
            </svg>
            <div class="notification__content">
              A new software update is available.
            </div>
          </div>
          <div class="notification notification--success">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m10.772 16.443-3.303-3.302.531-.531 2.772 2.773 6.382-6.383.531.531z" />
              <path d="m12.3752 4.0835c-1.6401-.0002-3.24336.48595-4.6071 1.39696-1.36375.91102-2.42671 2.20598-3.05446 3.72113-.62776 1.51511-.79211 3.18241-.47228 4.79101.31984 1.6085 1.1095 3.0861 2.26911 4.2459 1.15962 1.1597 2.63711 1.9496 4.24563 2.2696 1.6085.32 3.2758.1559 4.791-.4717 1.5153-.6276 2.8104-1.6904 3.7215-3.054.9112-1.3636 1.3976-2.9669 1.3976-4.6069-.0025-2.1982-.8768-4.30577-2.4311-5.86026-1.5543-1.55448-3.6617-2.42901-5.8599-2.43174zm0 15.834c-1.4917.0001-2.94995-.4422-4.19029-1.2708-1.24034-.8287-2.2071-2.0065-2.77801-3.3847-.57091-1.3781-.72034-2.8945-.42939-4.3576.29096-1.46301 1.00922-2.80691 2.06397-3.86173 1.05475-1.05481 2.3986-1.77317 3.86162-2.06422 1.463-.29105 2.9795-.14172 4.3576.4291 1.3782.57082 2.5561 1.5375 3.3849 2.77778.8287 1.24029 1.2711 2.69847 1.2711 4.19017-.0024 1.9995-.7977 3.9164-2.2115 5.3302-1.4137 1.4139-3.3306 2.2093-5.33 2.2118z" />
            </svg>
            <div class="notification__content">
              A new software update is available.
            </div>
          </div>
          <hr class="separator separator--xl" />
          <div class="notification notification--alert">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m12.39812 15.97119a.69225.69225 0 0 0 -.54688.207.74214.74214 0 0 0 -.18457.51172.66617.66617 0 0 0 .73145.70508.72171.72171 0 0 0 .55029-.20117.7061.7061 0 0 0 .1875-.50391.73529.73529 0 0 0 -.1875-.51172.70341.70341 0 0 0 -.55029-.207z" />
              <path d="m12.922 14.551.093-7.002h-1.301l.087 7.002z" />
              <path d="m12.37517 4.0835a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54101z" />
            </svg>
            <div class="notification__content">
              Alert: An important incident happened.
            </div>
          </div>
        </div>
      `})},t={render:()=>({template:`
        <div>
          <div class="notification notification--info">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m11.8042 10.05464h1.24121v7.26074h-1.24121z" />
              <path d="m12.43506 7.41108a.69272.69272 0 0 0 -.54688.208.74063.74063 0 0 0 -.18457.50977.71511.71511 0 0 0 .18457.50293.70351.70351 0 0 0 .54688.20214.6722.6722 0 0 0 .73779-.70507.73376.73376 0 0 0 -.1875-.50977.70459.70459 0 0 0 -.55029-.208z" />
              <path d="m12.375 4.079a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54106z" />
            </svg>
            <div class="notification__content">
              <h6 class="font--bold">Brand new!</h6>
              <p>A new software update is available.</p>
              <p>
                <a class="link" href="javascript:void(0)">
                  Discover the new version
                </a>
              </p>
            </div>
          </div>
        </div>
      `})};var o,e,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'info',
    icon: 'InfoCircle',
    text: '<p>This is a notification with an <a href="#" target="_blank"> external link</a>.</p>',
    closeBtn: true,
    isClosed: false
  }
}`,...(s=(e=i.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};var c,r,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    template: \`
        <div>
          <div class="notification notification--hint">
            Hint: A new software update is available.
          </div>
          <div class="notification notification--info">
            Info: A new software update is available.
          </div>
          <div class="notification notification--warning">
            Warning: A new software update is available.
          </div>
          <div class="notification notification--error">
            Error: A new software update is available.
          </div>
          <div class="notification notification--success">
            Success: A new software update is available.
          </div>
          <hr class="separator separator--xl" />
          <div class="notification notification--alert">
            Alert: An important incident happened.
          </div>
        </div>
      \`
  })
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var l,v,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    template: \`
        <div>
          <div class="notification notification--info">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m11.8042 10.05464h1.24121v7.26074h-1.24121z" />
              <path d="m12.43506 7.41108a.69272.69272 0 0 0 -.54688.208.74063.74063 0 0 0 -.18457.50977.71511.71511 0 0 0 .18457.50293.70351.70351 0 0 0 .54688.20214.6722.6722 0 0 0 .73779-.70507.73376.73376 0 0 0 -.1875-.50977.70459.70459 0 0 0 -.55029-.208z" />
              <path d="m12.375 4.079a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54106z" />
            </svg>
            <div class="notification__content">
              A new software update is available.
            </div>
          </div>
          <div class="notification notification--warning">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m12.39812 15.97119a.69225.69225 0 0 0 -.54688.207.74214.74214 0 0 0 -.18457.51172.66617.66617 0 0 0 .73145.70508.72171.72171 0 0 0 .55029-.20117.7061.7061 0 0 0 .1875-.50391.73529.73529 0 0 0 -.1875-.51172.70341.70341 0 0 0 -.55029-.207z" />
              <path d="m12.922 14.551.093-7.002h-1.301l.087 7.002z" />
              <path d="m12.37517 4.0835a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54101z" />
            </svg>
            <div class="notification__content">
              <p>
                A new software update is available.
                <a href="#" target="_blank">
                  Download
                </a>
              </p>
            </div>
          </div>
          <div class="notification notification--error">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m12.39812 15.97119a.69225.69225 0 0 0 -.54688.207.74214.74214 0 0 0 -.18457.51172.66617.66617 0 0 0 .73145.70508.72171.72171 0 0 0 .55029-.20117.7061.7061 0 0 0 .1875-.50391.73529.73529 0 0 0 -.1875-.51172.70341.70341 0 0 0 -.55029-.207z" />
              <path d="m12.922 14.551.093-7.002h-1.301l.087 7.002z" />
              <path d="m12.37517 4.0835a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54101z" />
            </svg>
            <div class="notification__content">
              A new software update is available.
            </div>
          </div>
          <div class="notification notification--success">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m10.772 16.443-3.303-3.302.531-.531 2.772 2.773 6.382-6.383.531.531z" />
              <path d="m12.3752 4.0835c-1.6401-.0002-3.24336.48595-4.6071 1.39696-1.36375.91102-2.42671 2.20598-3.05446 3.72113-.62776 1.51511-.79211 3.18241-.47228 4.79101.31984 1.6085 1.1095 3.0861 2.26911 4.2459 1.15962 1.1597 2.63711 1.9496 4.24563 2.2696 1.6085.32 3.2758.1559 4.791-.4717 1.5153-.6276 2.8104-1.6904 3.7215-3.054.9112-1.3636 1.3976-2.9669 1.3976-4.6069-.0025-2.1982-.8768-4.30577-2.4311-5.86026-1.5543-1.55448-3.6617-2.42901-5.8599-2.43174zm0 15.834c-1.4917.0001-2.94995-.4422-4.19029-1.2708-1.24034-.8287-2.2071-2.0065-2.77801-3.3847-.57091-1.3781-.72034-2.8945-.42939-4.3576.29096-1.46301 1.00922-2.80691 2.06397-3.86173 1.05475-1.05481 2.3986-1.77317 3.86162-2.06422 1.463-.29105 2.9795-.14172 4.3576.4291 1.3782.57082 2.5561 1.5375 3.3849 2.77778.8287 1.24029 1.2711 2.69847 1.2711 4.19017-.0024 1.9995-.7977 3.9164-2.2115 5.3302-1.4137 1.4139-3.3306 2.2093-5.33 2.2118z" />
            </svg>
            <div class="notification__content">
              A new software update is available.
            </div>
          </div>
          <hr class="separator separator--xl" />
          <div class="notification notification--alert">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m12.39812 15.97119a.69225.69225 0 0 0 -.54688.207.74214.74214 0 0 0 -.18457.51172.66617.66617 0 0 0 .73145.70508.72171.72171 0 0 0 .55029-.20117.7061.7061 0 0 0 .1875-.50391.73529.73529 0 0 0 -.1875-.51172.70341.70341 0 0 0 -.55029-.207z" />
              <path d="m12.922 14.551.093-7.002h-1.301l.087 7.002z" />
              <path d="m12.37517 4.0835a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54101z" />
            </svg>
            <div class="notification__content">
              Alert: An important incident happened.
            </div>
          </div>
        </div>
      \`
  })
}`,...(p=(v=a.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var f,m,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
        <div>
          <div class="notification notification--info">
            <svg viewBox="0 0 24 24" class="notification__icon">
              <path d="m11.8042 10.05464h1.24121v7.26074h-1.24121z" />
              <path d="m12.43506 7.41108a.69272.69272 0 0 0 -.54688.208.74063.74063 0 0 0 -.18457.50977.71511.71511 0 0 0 .18457.50293.70351.70351 0 0 0 .54688.20214.6722.6722 0 0 0 .73779-.70507.73376.73376 0 0 0 -.1875-.50977.70459.70459 0 0 0 -.55029-.208z" />
              <path d="m12.375 4.079a8.29151 8.29151 0 1 0 8.291 8.292 8.30132 8.30132 0 0 0 -8.291-8.292zm0 15.833a7.54151 7.54151 0 1 1 7.5415-7.541 7.55 7.55 0 0 1 -7.5415 7.54106z" />
            </svg>
            <div class="notification__content">
              <h6 class="font--bold">Brand new!</h6>
              <p>A new software update is available.</p>
              <p>
                <a class="link" href="javascript:void(0)">
                  Discover the new version
                </a>
              </p>
            </div>
          </div>
        </div>
      \`
  })
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const g=["Example","NotificationTypes","NotificationTypesWithIcons","ComplexContent"],z=Object.freeze(Object.defineProperty({__proto__:null,ComplexContent:t,Example:i,NotificationTypes:n,NotificationTypesWithIcons:a,__namedExportsOrder:g,default:_},Symbol.toStringTag,{value:"Module"}));export{t as C,i as E,z as N,n as a,a as b};
