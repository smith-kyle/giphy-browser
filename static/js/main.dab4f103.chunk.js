(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(41),o=n.n(r),c=n(12),l=(n(91),n(44)),u=n.n(l),s=n(14),d=n(18),f=n(10),h=n(81),g=n(11),p=n(73),m=n(179),w=n(34),b=n(177),E=n(180),v=n(178),y=n(176),j=function(e,t){var n=new URL(e);return n.search=new URLSearchParams(t),n},O=function(e){return e.window},I=Object(g.a)(O,function(e){return e.width}),S=Object(g.a)(O,function(e){return e.height}),L=function(e){return e.gifs},_=Object(g.a)(L,function(e){return e.gifs}),C=Object(g.a)(_,p.a(function(e,t){var n=t.id,i=Object(h.a)(t,["id"]);return Object(f.a)({},e,Object(d.a)({},n,Object(f.a)({id:n},i)))},{})),k=Object(g.a)(C,function(e){return m.a(w.a,b.a(function(t){return e[t]}))(e)}),x=Object(g.a)(L,C,function(e,t){var n=e.selectedId;return null===n?null:t[n]}),N=Object(g.a)(L,function(e){return e.selectedUrl}),T=Object(g.a)(_,E.a),D=function(e){return e.forms},R=Object(g.a)(D,function(e){return e.query}),W=Object(g.a)(D,function(e){return e.isLoading}),G=Object(g.a)(R,m.a(v.a(""),y.a)),U={api_key:"QGD7tgrph7TOmMoTcoxuQVgzxLiYuERS"},F=Object(g.a)(T,G,R,function(e,t,n){return t?j("https://api.giphy.com/v1/gifs/search",Object(f.a)({},U,{q:n,offset:e})):j("https://api.giphy.com/v1/gifs/trending",Object(f.a)({},U,{offset:e}))}),H=n(53),q=n.n(H),z=function(e){return{type:"SET_IS_LOADING",payload:e}},A=function(e){return{type:"SET_SELECTED_GIF",payload:e}},M=function(e){return{type:"SET_SELECTED_GIF_URL",payload:e}},B=u()(function(e,t){var n=F(t());return q()(n).then(function(e){return e.json()}).then(function(t){var n=t.data;return e({type:"ADD_GIFS",payload:n})}).then(function(){return e(z(!1))}).catch(function(t){console.error(t),e(z(!1))})},400),P=n(74),Q=n.n(P),Y=n(75),J=n.n(Y),V=n(76),$=n.n(V),K=n(78),X=n.n(K),Z=n(46),ee=n(77),te=n.n(ee),ne=Object(s.withStyles)(function(e){return{root:{width:"100%"},bar:{height:64,position:"relative",zIndex:2},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(d.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Z.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Z.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(d.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var t=e.classes,n=e.query,i=e.onChange,r=e.children;return a.a.createElement("div",{className:t.root},a.a.createElement(Q.a,{className:t.bar,position:"static"},a.a.createElement(J.a,null,a.a.createElement($.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},"Giphy Search"),a.a.createElement("div",{className:t.grow}),a.a.createElement("div",{className:t.search},a.a.createElement("div",{className:t.searchIcon},a.a.createElement(te.a,null)),a.a.createElement(X.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:i,value:n})))),r)}),ie={onChange:function(e){var t=e.target.value;return function(e){return e({type:"SET_QUERY",payload:t}),e({type:"CLEAR_GIFS"}),e(z(!0)),e(B)}}},ae=Object(c.b)(function(e){return{query:R(e)}},ie)(function(e){return a.a.createElement(ne,e)}),re=n(79),oe=n.n(re),ce=Object(s.withStyles)({root:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginTop:10,minHeight:100}})(function(e){var t=e.classes,n=e.color,i=e.isLoading;return a.a.createElement("div",{className:t.root},i?a.a.createElement(oe.a,{color:n}):null)}),le=Object(c.b)(function(e){return{isLoading:W(e)}})(ce),ue=Object(s.withStyles)({root:{display:"flex",flexWrap:"wrap",overflow:"scroll",justifyContent:"flex-start"},li:{width:"31%",height:164,listStyle:"none",padding:"1%"},imageWrapper:{overflow:"hidden",cursor:"pointer",height:"100%",display:"block",position:"relative"},image:{top:"50%",position:"relative",transform:"translateY(-50%)",width:"100%"}})(function(e){var t=e.classes,n=e.gifs,r=e.getNextPage,o=e.onClickImage,c=e.windowHeight,l=e.windowWidth,u=Object(i.useRef)(null);return Object(i.useEffect)(function(){var e,t=function(e){var t=e.target,n=t.scrollTop,i=t.scrollHeight;n+t.clientHeight+100>=i&&r()};return u.current&&(e=u.current).addEventListener("scroll",t),function(){return e?e.removeEventListener("scroll",t):null}}),a.a.createElement("div",{className:t.root,ref:u,style:{width:l,height:c-64}},n.map(function(e){return a.a.createElement("li",{className:t.li,key:e.id},a.a.createElement("div",{className:t.imageWrapper,onClick:function(){return o(e.id)}},a.a.createElement("img",{className:t.image,src:e.images.fixed_height_small.url,style:{},alt:e.title})))}),a.a.createElement(le,null))}),se=Object(c.b)(function(e){return{gifs:k(e),windowHeight:S(e),windowWidth:I(e)}},function(e){return{getNextPage:function(){e(z(!0)),e(B)},onClickImage:function(t){return e(function(e){return function(t,n){t(A(e));var i=x(n());return q()(i.images.original.url).then(function(e){return e.blob()}).then(function(e){return t(M(URL.createObjectURL(e)))})}}(t))}}})(ue),de=Object(s.withStyles)({root:{position:"absolute",backgroundColor:"rgba(0,0,0, 0.7)",alignItems:"center",justifyContent:"center",display:"flex",height:"100%",width:"100%",top:0,zIndex:3},image:{display:"block",maxWidth:"80%",maxHeight:"90%",width:"auto",height:"auto"}})(function(e){var t=e.classes,n=e.gif,i=e.gifUrl,r=e.close;return n?a.a.createElement("div",{className:t.root,onClick:r},i?a.a.createElement("img",{alt:n.title,className:t.image,onClick:function(e){return e.stopPropagation()},src:i,width:n.images.original.width,height:n.images.original.height}):a.a.createElement(ce,{color:"secondary",isLoading:!0})):null}),fe=Object(c.b)(function(e){return{gif:x(e),gifUrl:N(e)}},function(e){return{close:function(){e(A(null)),e(M(null))}}})(de),he=Object(c.b)(null,function(e){return{onComponentDidMount:function(){var t=u()(function(){return e({type:"SET_WINDOW_DIMS",payload:{height:window.innerHeight,width:window.innerWidth}})},100);return e(z(!0)),e(B),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}})(Object(s.withStyles)({results:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:1}})(function(e){var t=e.classes,n=e.onComponentDidMount;return Object(i.useEffect)(n,[]),a.a.createElement("div",null,a.a.createElement(ae,null,a.a.createElement("div",{className:t.results},a.a.createElement(se,null))),a.a.createElement(fe,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=n(19),pe=n(80),me={gifs:[],selectedId:null,selectedUrl:null},we={query:"",isLoading:!1},be={height:window.innerHeight,width:window.innerWidth},Ee=Object(ge.c)({forms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return Object(f.a)({},e,{query:t.payload});case"SET_IS_LOADING":return Object(f.a)({},e,{isLoading:t.payload});default:return e}},gifs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GIFS":return Object(f.a)({},e,{gifs:e.gifs.concat(t.payload)});case"CLEAR_GIFS":return Object(f.a)({},e,{gifs:[]});case"SET_SELECTED_GIF":return Object(f.a)({},e,{selectedId:t.payload});case"SET_SELECTED_GIF_URL":return Object(f.a)({},e,{selectedUrl:t.payload});default:return e}},window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WINDOW_DIMS":return t.payload;default:return e}}}),ve=Object(ge.d)(Ee,Object(ge.a)(pe.a));o.a.render(a.a.createElement(c.a,{store:ve},a.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,n){e.exports=n(174)},91:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.dab4f103.chunk.js.map