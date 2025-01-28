import{s as $,c as i,b as x,a3 as V,B as w,A as v,o as a,f as G,K,F as k,C,D as Y,u as J}from"./vue.esm-bundler-BrbFzUHq.js";import{g as Q}from"./_commonjsHelpers-CqkleIqs.js";const X={class:"storybook-color"},Z={class:"storybook-color__text"},y=$({__name:"ColorListItem",props:{color:{type:String,required:!0},name:{type:String,required:!0}},setup(e){return(o,r)=>(a(),i("div",X,[x("div",{class:"storybook-color__palette",style:V(`background-color: ${e.color} `)},null,4),x("div",Z,[w(v(e.name)+" ",1),r[0]||(r[0]=x("br",null,null,-1)),w(" "+v(e.color),1)])]))}});y.__docgenInfo={exportName:"default",displayName:"ColorListItem",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!0},{name:"name",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/demo/ColorListItem.vue"]};var f={},u={},_;function ee(){return _||(_=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"cloneDeep",{enumerable:!0,get:function(){return o}});function o(r){return Array.isArray(r)?r.map(s=>o(s)):typeof r=="object"&&r!==null?Object.fromEntries(Object.entries(r).map(([s,n])=>[s,o(n)])):r}}(u)),u}var g,z;function re(){return z||(z=1,g={content:[],presets:[],darkMode:"media",theme:{accentColor:({theme:e})=>({...e("colors"),auto:"auto"}),animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},aria:{busy:'busy="true"',checked:'checked="true"',disabled:'disabled="true"',expanded:'expanded="true"',hidden:'hidden="true"',pressed:'pressed="true"',readonly:'readonly="true"',required:'required="true"',selected:'selected="true"'},aspectRatio:{auto:"auto",square:"1 / 1",video:"16 / 9"},backdropBlur:({theme:e})=>e("blur"),backdropBrightness:({theme:e})=>e("brightness"),backdropContrast:({theme:e})=>e("contrast"),backdropGrayscale:({theme:e})=>e("grayscale"),backdropHueRotate:({theme:e})=>e("hueRotate"),backdropInvert:({theme:e})=>e("invert"),backdropOpacity:({theme:e})=>e("opacity"),backdropSaturate:({theme:e})=>e("saturate"),backdropSepia:({theme:e})=>e("sepia"),backgroundColor:({theme:e})=>e("colors"),backgroundImage:{none:"none","gradient-to-t":"linear-gradient(to top, var(--tw-gradient-stops))","gradient-to-tr":"linear-gradient(to top right, var(--tw-gradient-stops))","gradient-to-r":"linear-gradient(to right, var(--tw-gradient-stops))","gradient-to-br":"linear-gradient(to bottom right, var(--tw-gradient-stops))","gradient-to-b":"linear-gradient(to bottom, var(--tw-gradient-stops))","gradient-to-bl":"linear-gradient(to bottom left, var(--tw-gradient-stops))","gradient-to-l":"linear-gradient(to left, var(--tw-gradient-stops))","gradient-to-tl":"linear-gradient(to top left, var(--tw-gradient-stops))"},backgroundOpacity:({theme:e})=>e("opacity"),backgroundPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{0:"0",none:"",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},borderColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.gray.200","currentColor")}),borderOpacity:({theme:e})=>e("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},borderSpacing:({theme:e})=>({...e("spacing")}),borderWidth:{DEFAULT:"1px",0:"0px",2:"2px",4:"4px",8:"8px"},boxShadow:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",DEFAULT:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",none:"none"},boxShadowColor:({theme:e})=>e("colors"),brightness:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",200:"2"},caretColor:({theme:e})=>e("colors"),colors:({colors:e})=>({inherit:e.inherit,current:e.current,transparent:e.transparent,black:e.black,white:e.white,slate:e.slate,gray:e.gray,zinc:e.zinc,neutral:e.neutral,stone:e.stone,red:e.red,orange:e.orange,amber:e.amber,yellow:e.yellow,lime:e.lime,green:e.green,emerald:e.emerald,teal:e.teal,cyan:e.cyan,sky:e.sky,blue:e.blue,indigo:e.indigo,violet:e.violet,purple:e.purple,fuchsia:e.fuchsia,pink:e.pink,rose:e.rose}),columns:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},container:{},content:{none:"none"},contrast:{0:"0",50:".5",75:".75",100:"1",125:"1.25",150:"1.5",200:"2"},cursor:{auto:"auto",default:"default",pointer:"pointer",wait:"wait",text:"text",move:"move",help:"help","not-allowed":"not-allowed",none:"none","context-menu":"context-menu",progress:"progress",cell:"cell",crosshair:"crosshair","vertical-text":"vertical-text",alias:"alias",copy:"copy","no-drop":"no-drop",grab:"grab",grabbing:"grabbing","all-scroll":"all-scroll","col-resize":"col-resize","row-resize":"row-resize","n-resize":"n-resize","e-resize":"e-resize","s-resize":"s-resize","w-resize":"w-resize","ne-resize":"ne-resize","nw-resize":"nw-resize","se-resize":"se-resize","sw-resize":"sw-resize","ew-resize":"ew-resize","ns-resize":"ns-resize","nesw-resize":"nesw-resize","nwse-resize":"nwse-resize","zoom-in":"zoom-in","zoom-out":"zoom-out"},divideColor:({theme:e})=>e("borderColor"),divideOpacity:({theme:e})=>e("borderOpacity"),divideWidth:({theme:e})=>e("borderWidth"),dropShadow:{sm:"0 1px 1px rgb(0 0 0 / 0.05)",DEFAULT:["0 1px 2px rgb(0 0 0 / 0.1)","0 1px 1px rgb(0 0 0 / 0.06)"],md:["0 4px 3px rgb(0 0 0 / 0.07)","0 2px 2px rgb(0 0 0 / 0.06)"],lg:["0 10px 8px rgb(0 0 0 / 0.04)","0 4px 3px rgb(0 0 0 / 0.1)"],xl:["0 20px 13px rgb(0 0 0 / 0.03)","0 8px 5px rgb(0 0 0 / 0.08)"],"2xl":"0 25px 25px rgb(0 0 0 / 0.15)",none:"0 0 #0000"},fill:({theme:e})=>({none:"none",...e("colors")}),flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({auto:"auto",...e("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%"}),flexGrow:{0:"0",DEFAULT:"1"},flexShrink:{0:"0",DEFAULT:"1"},fontFamily:{sans:["ui-sans-serif","system-ui","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"]},fontSize:{xs:["0.75rem",{lineHeight:"1rem"}],sm:["0.875rem",{lineHeight:"1.25rem"}],base:["1rem",{lineHeight:"1.5rem"}],lg:["1.125rem",{lineHeight:"1.75rem"}],xl:["1.25rem",{lineHeight:"1.75rem"}],"2xl":["1.5rem",{lineHeight:"2rem"}],"3xl":["1.875rem",{lineHeight:"2.25rem"}],"4xl":["2.25rem",{lineHeight:"2.5rem"}],"5xl":["3rem",{lineHeight:"1"}],"6xl":["3.75rem",{lineHeight:"1"}],"7xl":["4.5rem",{lineHeight:"1"}],"8xl":["6rem",{lineHeight:"1"}],"9xl":["8rem",{lineHeight:"1"}]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:({theme:e})=>e("spacing"),gradientColorStops:({theme:e})=>e("colors"),gradientColorStopPositions:{"0%":"0%","5%":"5%","10%":"10%","15%":"15%","20%":"20%","25%":"25%","30%":"30%","35%":"35%","40%":"40%","45%":"45%","50%":"50%","55%":"55%","60%":"60%","65%":"65%","70%":"70%","75%":"75%","80%":"80%","85%":"85%","90%":"90%","95%":"95%","100%":"100%"},grayscale:{0:"0",DEFAULT:"100%"},gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridColumn:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridColumnEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridColumnStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridRow:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridRowEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridRowStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridTemplateColumns:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))"},gridTemplateRows:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))"},height:({theme:e})=>({auto:"auto",...e("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content"}),hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},inset:({theme:e})=>({auto:"auto",...e("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%"}),invert:{0:"0",DEFAULT:"100%"},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},listStyleType:{none:"none",disc:"disc",decimal:"decimal"},listStyleImage:{none:"none"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),lineClamp:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6"},maxHeight:({theme:e})=>({...e("spacing"),none:"none",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content"}),maxWidth:({theme:e,breakpoints:o})=>({...e("spacing"),none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch",...o(e("screens"))}),minHeight:({theme:e})=>({...e("spacing"),full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content"}),minWidth:({theme:e})=>({...e("spacing"),full:"100%",min:"min-content",max:"max-content",fit:"fit-content"}),objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},opacity:{0:"0",5:"0.05",10:"0.1",15:"0.15",20:"0.2",25:"0.25",30:"0.3",35:"0.35",40:"0.4",45:"0.45",50:"0.5",55:"0.55",60:"0.6",65:"0.65",70:"0.7",75:"0.75",80:"0.8",85:"0.85",90:"0.9",95:"0.95",100:"1"},order:{first:"-9999",last:"9999",none:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12"},outlineColor:({theme:e})=>e("colors"),outlineOffset:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},outlineWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},padding:({theme:e})=>e("spacing"),placeholderColor:({theme:e})=>e("colors"),placeholderOpacity:({theme:e})=>e("opacity"),ringColor:({theme:e})=>({DEFAULT:e("colors.blue.500","#3b82f6"),...e("colors")}),ringOffsetColor:({theme:e})=>e("colors"),ringOffsetWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},ringOpacity:({theme:e})=>({DEFAULT:"0.5",...e("opacity")}),ringWidth:{DEFAULT:"3px",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},rotate:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",45:"45deg",90:"90deg",180:"180deg"},saturate:{0:"0",50:".5",100:"1",150:"1.5",200:"2"},scale:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5"},screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},scrollMargin:({theme:e})=>({...e("spacing")}),scrollPadding:({theme:e})=>e("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg"},space:({theme:e})=>({...e("spacing")}),spacing:{px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},stroke:({theme:e})=>({none:"none",...e("colors")}),strokeWidth:{0:"0",1:"1",2:"2"},supports:{},data:{},textColor:({theme:e})=>e("colors"),textDecorationColor:({theme:e})=>e("colors"),textDecorationThickness:{auto:"auto","from-font":"from-font",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},textIndent:({theme:e})=>({...e("spacing")}),textOpacity:({theme:e})=>e("opacity"),textUnderlineOffset:{auto:"auto",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},transformOrigin:{center:"center",top:"top","top-right":"top right",right:"right","bottom-right":"bottom right",bottom:"bottom","bottom-left":"bottom left",left:"left","top-left":"top left"},transitionDelay:{0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionDuration:{DEFAULT:"150ms",0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionProperty:{none:"none",all:"all",DEFAULT:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"color, background-color, border-color, text-decoration-color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},translate:({theme:e})=>({...e("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%"}),size:({theme:e})=>({auto:"auto",...e("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"}),width:({theme:e})=>({auto:"auto",...e("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vw",svw:"100svw",lvw:"100lvw",dvw:"100dvw",min:"min-content",max:"max-content",fit:"fit-content"}),willChange:{auto:"auto",scroll:"scroll-position",contents:"contents",transform:"transform"},zIndex:{auto:"auto",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50"}},plugins:[]}),g}var F;function oe(){return F||(F=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n}});const o=ee(),r=s(re());function s(t){return t&&t.__esModule?t:{default:t}}const n=(0,o.cloneDeep)(r.default.theme)}(f)),f}var b,T;function te(){if(T)return b;T=1;let e=oe();return b=(e.__esModule?e:{default:e}).default,b}var ae=te();const ne=Q(ae),ie={content:["./safelist.txt","./app/pages/**/*.vue","./app/components/ch/**/*.vue","./app/components/stories/layout/*.stories.mdx"],corePlugins:{container:!1},theme:{extend:{animation:{"spin-fast":"spin 0.5s linear infinite"}},screens:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1544px","3xl":"1920px"},container:{"2xl":"1544px","3xl":"1676px"},scale:{102:"1.02",...ne.scale},colors:{current:"currentColor",inherit:"inherit",primary:{50:"var(--color-primary-50)",100:"var(--color-primary-100)",200:"var(--color-primary-200)",300:"var(--color-primary-300)",400:"var(--color-primary-400)",500:"var(--color-primary-500)",600:"var(--color-primary-600)",700:"var(--color-primary-700)",800:"var(--color-primary-800)",900:"var(--color-primary-900)"},secondary:{50:"var(--color-secondary-50)",100:"var(--color-secondary-100)",200:"var(--color-secondary-200)",300:"var(--color-secondary-300)",400:"var(--color-secondary-400)",500:"var(--color-secondary-500)",600:"var(--color-secondary-600)",700:"var(--color-secondary-700)",800:"var(--color-secondary-800)",900:"var(--color-secondary-900)"},text:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},green:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},purple:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8655F6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},red:{50:"#ffedee",100:"#fae1e2",200:"#ffccce",300:"#fa9da1",400:"#fc656b",500:"#e53940",600:"#d8232a",700:"#bf1f25",800:"#99191e",900:"#801519"},teal:{50:"#f2fdfc",100:"#cbfbf8",200:"#98f6f3",300:"#5de8ea",400:"#2bced4",500:"#14afb8",600:"#0d8b96",700:"#0f6b75",800:"#11575f",900:"#13474e"},yellow:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},white:"#ffffff",black:"#000000",transparent:"transparent"},fontWeight:{normal:400,bold:400},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.375rem","3xl":"1.625rem","4xl":"2rem","5xl":"2.5rem","6xl":"3rem","7xl":"3.5rem","8xl":"4rem","9xl":"5rem"},fontFamily:{regular:["Font-Regular","Hind","Fallback-font","Sans-Serif"],italic:["Font-Italic","Hind","Fallback-font"],bold:["Font-Bold","Hind","Fallback-font"],"bold-italic":["Font-Bold-Italic","Hind","Fallback-font"]},boxShadow:{sm:"0px 1px 2px 0px rgba(0,0,0,0.05)",DEFAULT:"0px 1px 2px 0px rgba(0,0,0,0.06), 0px 1px 5px 0px rgba(0,0,0,0.08)",md:"0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 10px -1px rgba(0,0,0,0.08)",lg:"0px 2px 6px -1px rgba(0,0,0,0.06), 0px 5px 20px -3px rgba(0,0,0,0.08)",xl:"0px 6px 10px -5px rgba(0,0,0,0.06), 0px 15px 25px -3px rgba(0,0,0,0.09)","2xl":"0px 10px 20px 0px rgba(0,0,0,0.06), 1px 10px 70px -8px rgba(0,0,0,0.13)",none:"0px 0px 0px 0px rgba(0,0,0,0)"},borderRadius:{none:"0",xs:"0.0625rem",sm:"0.125rem",DEFAULT:"0.1875rem",lg:"0.3125rem",xl:"0.375rem","2xl":"0.5rem","3xl":"0.625rem","4xl":"0.75rem","5xl":"0.9375rem","6xl":"1.5rem",full:"9999px"},listStyleType:{none:"none",disc:"disc",decimal:"decimal",square:"square",roman:"upper-roman"}},variants:{extend:{}}},se={key:0,class:"storybook-color-list"},le={class:"storybook-color-list__title"},W=$({__name:"ColorList",setup(e){const o=G({});return K(()=>{var r;Object.assign(o,(r=ie.theme)==null?void 0:r.colors)}),(r,s)=>(a(),i("div",null,[x("ul",null,[(a(!0),i(k,null,C(o,(n,t)=>(a(),i("li",{key:`${t}`,class:"flex"},[typeof n=="object"?(a(),i("ul",se,[x("h3",le,v(t)+" colors",1),(a(!0),i(k,null,C(n,(B,h)=>(a(),i("li",{key:`${t}-${h}`,class:"storybook-color-list__item"},[Y(y,{name:`${t}-${h}`,color:B},null,8,["name","color"])]))),128))])):(a(),J(y,{key:1,name:t,color:n},null,8,["name","color"]))]))),128))])]))}});W.__docgenInfo={exportName:"default",displayName:"ColorList",description:"",tags:{},sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/demo/ColorList.vue"]};const ce={title:"Foundations/Fonts/Colors",component:W},l={render:()=>({template:`<div>
      <div class="color--default">color--default</div>
      <div class="color--light">color--light</div>
      <div class="color--link">color--link</div>
    </div>`})},c={render:()=>({template:`<div>
      <div class="color--negative">color--negative</div>
    </div>`})},p={render:()=>({template:`<div class="storybook-backgrounds">
      <div class="color--text-900">color--text-900</div>
      <div class="color--text-800">color--text-800 – default text color</div>
      <div class="color--text-700">color--text-700</div>
      <div class="color--text-600">color--text-600</div>
      <div class="color--text-500">color--text-500 – still AA Accessible on white backgrounds</div>
      <div class="color--text-400  bg--secondary-900">color--text-400</div>
      <div class="color--text-300  bg--secondary-800">color--text-300</div>
      <div class="color--text-200  bg--secondary-700">color--text-200</div>
      <div class="color--text-100  bg--secondary-600">color--text-100</div>
      <div class="color--text-50   bg--secondary-500">color--text-50</div>
      <div class="color--white     bg--secondary-400">color--white</div>
    </div>`})},d={render:()=>({template:`<div class="storybook-backgrounds">
      <div class="color--primary-900">color--primary-900</div>
      <div class="color--primary-800">color--primary-800</div>
      <div class="color--primary-700">color--primary-700</div>
      <div class="color--primary-600">color--primary-600 – default link color</div>
      <div class="color--primary-500">color--primary-500</div>
      <div class="color--primary-400  bg--secondary-900">color--primary-400</div>
      <div class="color--primary-300  bg--secondary-800">color--primary-300</div>
      <div class="color--primary-200  bg--secondary-700">color--primary-200</div>
      <div class="color--primary-100  bg--secondary-600">color--primary-100</div>
      <div class="color--primary-50   bg--secondary-500">color--primary-50</div>
      <div class="color--white    bg--secondary-400">color--white</div>
    </div>`})},m={};var D,S,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
      <div class="color--default">color--default</div>
      <div class="color--light">color--light</div>
      <div class="color--link">color--link</div>
    </div>\`
  })
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var E,L,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
      <div class="color--negative">color--negative</div>
    </div>\`
  })
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var U,H,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div class="storybook-backgrounds">
      <div class="color--text-900">color--text-900</div>
      <div class="color--text-800">color--text-800 – default text color</div>
      <div class="color--text-700">color--text-700</div>
      <div class="color--text-600">color--text-600</div>
      <div class="color--text-500">color--text-500 – still AA Accessible on white backgrounds</div>
      <div class="color--text-400  bg--secondary-900">color--text-400</div>
      <div class="color--text-300  bg--secondary-800">color--text-300</div>
      <div class="color--text-200  bg--secondary-700">color--text-200</div>
      <div class="color--text-100  bg--secondary-600">color--text-100</div>
      <div class="color--text-50   bg--secondary-500">color--text-50</div>
      <div class="color--white     bg--secondary-400">color--white</div>
    </div>\`
  })
}`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var R,I,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div class="storybook-backgrounds">
      <div class="color--primary-900">color--primary-900</div>
      <div class="color--primary-800">color--primary-800</div>
      <div class="color--primary-700">color--primary-700</div>
      <div class="color--primary-600">color--primary-600 – default link color</div>
      <div class="color--primary-500">color--primary-500</div>
      <div class="color--primary-400  bg--secondary-900">color--primary-400</div>
      <div class="color--primary-300  bg--secondary-800">color--primary-300</div>
      <div class="color--primary-200  bg--secondary-700">color--primary-200</div>
      <div class="color--primary-100  bg--secondary-600">color--primary-100</div>
      <div class="color--primary-50   bg--secondary-500">color--primary-50</div>
      <div class="color--white    bg--secondary-400">color--white</div>
    </div>\`
  })
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var N,P,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const pe=["TextColors","NegativeColor","AllColorVariantsDefault","AllColorVariantsPrimary","FlexibleColors"],xe=Object.freeze(Object.defineProperty({__proto__:null,AllColorVariantsDefault:p,AllColorVariantsPrimary:d,FlexibleColors:m,NegativeColor:c,TextColors:l,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{p as A,xe as C,m as F,c as N,l as T,d as a};
