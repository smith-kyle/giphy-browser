(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(37),o=n.n(r),c=(n(84),n(13)),l=n(17),u=n(9),s=n(78),d=n(12),h=n(77),g=n(176),f=n(175),p=n(174),m=n(173),w=function(e,t){var n=new URL(e);return n.search=new URLSearchParams(t),n},b=function(e){return e.window},v=Object(d.a)(b,function(e){return e.width}),E=Object(d.a)(b,function(e){return e.height}),y=function(e){return e.gifs},O=Object(d.a)(y,function(e){return e.gifs}),j=Object(d.a)(O,h.a(function(e,t){var n=t.id,a=Object(s.a)(t,["id"]);return Object(u.a)({},e,Object(l.a)({},n,Object(u.a)({id:n},a)))},{})),I=Object(d.a)(y,j,function(e,t){var n=e.selectedId;return null===n?null:t[n]}),S=Object(d.a)(O,g.a),L=function(e){return e.forms},_=Object(d.a)(L,function(e){return e.query}),k=Object(d.a)(L,function(e){return e.isLoading}),N=Object(d.a)(_,f.a(p.a(""),m.a)),C={api_key:"QGD7tgrph7TOmMoTcoxuQVgzxLiYuERS"},x=Object(d.a)(S,N,_,function(e,t,n){return t?w("https://api.giphy.com/v1/gifs/search",Object(u.a)({},C,{q:n,offset:e})):w("https://api.giphy.com/v1/gifs/trending",Object(u.a)({},C,{offset:e}))}),W=n(69),D=n.n(W),R=n(43),T=n.n(R),G=function(e){return{type:"SET_IS_LOADING",payload:e}},H=function(e){return{type:"SET_SELECTED_GIF",payload:e}},q=T()(function(e,t){var n=x(t());return D()(n).then(function(e){return e.json()}).then(function(t){var n=t.data;return e({type:"ADD_GIFS",payload:n})}).then(function(){return e(G(!1))}).catch(function(t){console.error(t),e(G(!1))})},400),A=n(70),F=n.n(A),B=n(71),P=n.n(B),Q=n(72),U=n.n(Q),Y=n(74),z=n.n(Y),M=n(44),J=n(16),V=n(73),$=n.n(V),K=Object(J.withStyles)(function(e){return{root:{width:"100%"},bar:{height:64},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(M.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(M.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(l.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var t=e.classes,n=e.query,a=e.onChange,r=e.children;return i.a.createElement("div",{className:t.root},i.a.createElement(F.a,{className:t.bar,position:"static"},i.a.createElement(P.a,null,i.a.createElement(U.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},"Giphy Search"),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",{className:t.search},i.a.createElement("div",{className:t.searchIcon},i.a.createElement($.a,null)),i.a.createElement(z.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:a,value:n})))),r)}),X={onChange:function(e){var t=e.target.value;return function(e){return e({type:"SET_QUERY",payload:t}),e({type:"CLEAR_GIFS"}),e(G(!0)),e(q)}}},Z=Object(c.b)(function(e){return{query:_(e)}},X)(function(e){return i.a.createElement(K,e)}),ee=n(75),te=n.n(ee),ne=function(e){var t=e.isLoading;return i.a.createElement("div",null,t?i.a.createElement(te.a,null):null)},ae=Object(c.b)(function(e){return{isLoading:k(e)}})(function(e){return i.a.createElement(ne,e)}),ie=Object(J.withStyles)({root:{display:"flex",flexWrap:"wrap",overflow:"scroll",justifyContent:"center"},li:{width:"31%",height:164,listStyle:"none",padding:"1%"},imageWrapper:{overflow:"hidden",cursor:"pointer",height:"100%",display:"block",position:"relative"},image:{top:"50%",position:"relative",transform:"translateY(-50%)",width:"100%"}})(function(e){var t=e.classes,n=e.gifs,r=e.getNextPage,o=e.onClickImage,c=e.windowHeight,l=e.windowWidth,u=Object(a.useRef)(null);return Object(a.useEffect)(function(){var e,t=function(e){var t=e.target,n=t.scrollTop,a=t.scrollHeight;n+t.clientHeight>=a&&r()};return u.current&&(e=u.current).addEventListener("scroll",t),function(){return e.removeEventListener("scroll",t)}}),i.a.createElement("div",{className:"Gallery ".concat(t.root),ref:u,style:{width:l,height:c-64}},n.map(function(e){return i.a.createElement("li",{className:t.li,key:e.id},i.a.createElement("div",{className:t.imageWrapper,onClick:function(){return o(e.id)}},i.a.createElement("img",{className:t.image,src:e.images.fixed_height_small.url,style:{},alt:e.title})))}))}),re=Object(c.b)(function(e){return{gifs:O(e),windowHeight:E(e),windowWidth:v(e)}},function(e){return{getNextPage:function(){e(G(!0)),e(q)},onClickImage:function(t){return e(H(t))}}})(function(e){return e.gifs.length>0?i.a.createElement(ie,e):null}),oe=n(18),ce={gifs:[],selectedId:null},le={query:"",isLoading:!1},ue={height:window.innerHeight,width:window.innerWidth},se=Object(oe.c)({forms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return Object(u.a)({},e,{query:t.payload});case"SET_IS_LOADING":return Object(u.a)({},e,{isLoading:t.payload});default:return e}},gifs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GIFS":return Object(u.a)({},e,{gifs:e.gifs.concat(t.payload)});case"CLEAR_GIFS":return Object(u.a)({},e,{gifs:[]});case"SET_SELECTED_GIF":return Object(u.a)({},e,{selectedId:t.payload});default:return e}},window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WINDOW_DIMS":return t.payload;default:return e}}}),de=n(76),he=Object(oe.d)(se,Object(oe.a)(de.a)),ge=Object(J.withStyles)({root:{position:"absolute",backgroundColor:"rgba(0,0,0, 0.7)",alignItems:"center",justifyContent:"center",display:"flex",height:"100%",width:"100%",top:0},image:{display:"block",maxWidth:"80%",maxHeight:"90%",width:"auto",height:"auto"}})(function(e){var t=e.classes,n=e.gif,a=e.close;return n?i.a.createElement("div",{className:t.root,onClick:a},i.a.createElement("img",{alt:n.title,className:t.image,onClick:function(e){return e.stopPropagation()},src:n.images.original.url,width:n.images.original.width,height:n.images.original.height})):null}),fe=Object(c.b)(function(e){return{gif:I(e)}},function(e){return{close:function(){return e(H(null))}}})(function(e){return i.a.createElement(ge,e)}),pe=function(){var e=T()(function(){return he.dispatch({type:"SET_WINDOW_DIMS",payload:{height:window.innerHeight,width:window.innerWidth}})},100);return he.dispatch(q),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},me=Object(J.withStyles)({results:{display:"flex",flexDirection:"column",alignItems:"center"}})(function(e){var t=e.classes;return Object(a.useEffect)(pe,[]),i.a.createElement("div",null,i.a.createElement(Z,null,i.a.createElement("div",{className:t.results},i.a.createElement(re,null),i.a.createElement(ae,null))),i.a.createElement(fe,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(c.a,{store:he},i.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){e.exports=n(171)},84:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.980c6bbb.chunk.js.map