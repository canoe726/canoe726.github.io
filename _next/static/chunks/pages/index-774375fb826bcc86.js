(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1339)}])},1339:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return v},default:function(){return Z}});var r=n(5944),i=n(7294),o=n(2804),l=n(8527),a=(0,o.cn)({key:"postsDataState",default:[]}),c=function(t,e){return t.frontmatter.date<e.frontmatter.date?1:t.frontmatter.date>e.frontmatter.date?-1:0},u=(0,o.nZ)({key:"postsDataSelector",get:function(t){var e=(0,t.get)(a);return{categories:e.map((function(t){return t.category})),files:e.map((function(t){return t.files})).flat().sort(c)}}}),s=n(5675),f=n(1664),m=n(5299),d=function(t){var e=t.data,n=(0,i.useRef)(null);return(0,r.tZ)(f.default,{href:"/post/".concat(e.frontmatter.category,"/").concat(e.slug),passHref:!0,children:(0,r.tZ)(l.P4,{w:"100%",h:"480px",overflow:"hidden",cursor:"pointer",margin:"0 0 2em 0",onMouseOver:function(){n.current&&(n.current.style.textDecoration="underline")},onMouseOut:function(){n.current&&(n.current.style.textDecoration="none")},children:(0,r.BX)(l.W2,{width:"100%",height:"100%",padding:"0",children:[(0,r.tZ)(l.xu,{width:"100%",height:"300px",borderRadius:"16px",position:"relative",children:(0,r.tZ)(s.default,{alt:"".concat(e.frontmatter.category,"-").concat(e.slug),src:"/post/".concat(e.frontmatter.category,"/").concat(e.slug,"/").concat(e.frontmatter.coverImage),layout:"fill",objectFit:"cover",loader:m.X})}),(0,r.BX)(l.xu,{width:"100%",height:"120px",children:[(0,r.tZ)(l.LZ,{height:"0.5em"}),(0,r.tZ)(l.xv,{className:"title",ref:n,fontSize:"2xl",color:"black",fontWeight:"normal",children:e.frontmatter.title}),(0,r.tZ)(l.LZ,{height:"0.1em"}),(0,r.tZ)(l.xv,{className:"summary",fontSize:"md",color:"gray.600",fontWeight:"light",textOverflow:"ellipsis",children:e.frontmatter.summary?e.frontmatter.summary:""}),(0,r.tZ)(l.LZ,{height:"0.3em"}),(0,r.tZ)(l.xv,{fontSize:"sm",fontWeight:"light",color:"gray.400",children:e.frontmatter.date})]})]})})})},h=function(){var t=(0,o.sJ)(u).files;return(0,r.BX)(l.kC,{flexDirection:"column",padding:["0 1.5em 0 1.5em","0 2.5em 0 2.5em","0 4em 0 4em"],children:[(0,r.tZ)(l.xv,{fontSize:["4xl","4xl","5xl"],textAlign:"center",fontWeight:"normal",margin:"1em 0 0em 0",children:"Recent Articles"}),(0,r.tZ)(l.xv,{fontSize:["xl","xl","2xl"],color:"gray.400",fontWeight:"light",textAlign:"center",margin:"0em 0 4em 0",children:"Various Articles"}),(0,r.tZ)(l.rj,{templateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"],gap:6,children:t.map((function(t,e){return(0,r.tZ)(d,{data:t},e)}))})]})},p=n(4578),g=function(){var t=(0,o.sJ)(u).files.slice(0,10),e=(0,i.useRef)(null),n=(0,i.useRef)(null),a=(0,i.useState)(!1),c=a[0],d=a[1],h=(0,i.useState)(!0),g=h[0],x=h[1],v=function(t){if(e.current&&n.current){var r=n.current.offsetWidth,i=e.current.scrollLeft+1.3*r*t;i>0&&d(!0),i<e.current.scrollWidth-e.current.clientWidth&&x(!0),i<=0?(i=0,d(!1)):i>=e.current.scrollWidth-e.current.clientWidth&&(i=e.current.scrollWidth-e.current.clientWidth,x(!1)),e.current.scrollLeft=i}};return(0,r.BX)(l.kC,{position:"relative",margin:"0 0 4em 0",children:[(0,r.tZ)(l.kC,{id:"image-slider",ref:e,width:"100%",padding:["0 1.5em 0 1.5em","0 2.5em 0 2.5em","0 4em 0 4em"],overflow:"hidden",position:"relative",scrollBehavior:"smooth",children:t.map((function(t,e){return(0,r.tZ)(f.default,{href:"/post/".concat(t.frontmatter.category,"/").concat(t.slug),passHref:!0,children:(0,r.BX)(l.xu,{id:"image-box",ref:n,width:["240px","360px","480px"],height:["320px","400px","520px"],position:"relative",overflow:"hidden",flexShrink:"0",cursor:"pointer",children:[(0,r.tZ)(l.xu,{position:"relative",width:"100%",height:"100%",transition:"1s ease",opacity:"1.0",_hover:{opacity:"0.8",transform:"scale(1.3)",background:"blackAlpha.600"},children:(0,r.tZ)(s.default,{alt:"".concat(t.frontmatter.category,"-").concat(t.slug),src:"/post/".concat(t.frontmatter.category,"/").concat(t.slug,"/").concat(t.frontmatter.coverImage),layout:"fill",objectFit:"cover",loader:m.X})}),(0,r.tZ)(l.xu,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",background:"blackAlpha.500",pointerEvents:"none"}),(0,r.tZ)(l.xv,{className:"title",fontSize:["2xl","3xl","4xl"],fontWeight:"normal",textAlign:"center",position:"absolute",width:"100%",padding:"0 1em 0 1em",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",pointerEvents:"none",children:t.frontmatter.title})]})},e)}))}),(0,r.BX)("div",{children:[(0,r.tZ)(l.xu,{cursor:"pointer","aria-label":"prev",display:c?"flex":"none",onClick:function(){return v(-1)},width:["1.5em","2em","2em","3em","3em"],height:["1.5em","2em","2em","3em","3em"],fontSize:"42px",position:"absolute",borderRadius:"50%",padding:"20px",top:"50%",left:["1%","2%","4%"],outline:"none",transform:"translate(-4%, -50%)",background:"white",opacity:"0.8",children:(0,r.tZ)(l.xu,{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",children:(0,r.tZ)(p.gGS,{opacity:"0.7","aria-label":"prev"})})}),(0,r.tZ)(l.xu,{cursor:"pointer","aria-label":"next",display:g?"flex":"none",onClick:function(){return v(1)},width:["1.5em","2em","2em","3em","3em"],height:["1.5em","2em","2em","3em","3em"],fontSize:"42px",position:"absolute",borderRadius:"50%",padding:"20px",top:"50%",right:["1%","2%","4%"],outline:"none",transform:"translate(-4%, -50%)",background:"white",opacity:"0.8",children:(0,r.tZ)(l.xu,{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",children:(0,r.tZ)(p.bTI,{opacity:"0.7","aria-label":"next"})})})]})]})},x=n(9008),v=!0,Z=function(t){var e=t.posts,n=(0,o.Zl)(a);return(0,i.useEffect)((function(){n(e)}),[e,n]),(0,r.BX)(r.HY,{children:[(0,r.tZ)(x.default,{children:(0,r.tZ)("meta",{name:"description",content:"This is Blog"})}),(0,r.BX)(l.xu,{padding:"84px 0em 4em 0em",children:[(0,r.BX)(l.kC,{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",padding:["1em 1.5em 4em 1.5em","1em 2.5em 4em 2.5em","1em 4em 4em 4em"],children:[(0,r.tZ)(l.xv,{fontSize:["5xl","5xl","6xl"],color:"black",fontWeight:"normal",padding:"0",children:"This is Blog"}),(0,r.tZ)(l.xv,{fontSize:["4xl","4xl","5xl"],color:"gray.600",fontWeight:"light",children:"Anything you can write"}),(0,r.tZ)(l.xv,{fontSize:["4xl","4xl","5xl"],color:"gray.300",fontWeight:"light",children:"Hello World!"})]}),(0,r.tZ)(g,{}),(0,r.tZ)(h,{})]})]})}}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);