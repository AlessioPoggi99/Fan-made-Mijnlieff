(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{4504:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play-online",function(){return i(9651)}])},9651:function(e,n,i){"use strict";i.r(n);var t=i(1799),s=i(797),o=i(5893),r=i(7294),l=i(3747),a=i(1163),c=i(3658),u=i(6254),h=i(8008),d=i(8029),p=i(5490),f=i(4614),x=i(4319),g=i(7391),j=i(10),m=i(92),b=i(753),y=i(8491),v=i(3364),C=i(2857),E=i(725),P=i(2710),S=i(4482),k=i(8083),_=i(7642).ZP.connect("http://192.168.1.124:8000"),w=function(e){var n,i=e.isVisible,t=e.bg;return n=i?{opacity:1}:{opacity:0},(0,o.jsx)(d.x,{as:l.E.div,width:"100%",height:1,bg:t,borderRadius:"xl",animate:n})},O=function(e){var n=e.isOpen,i=(e.onClose,e.router),t=e.joinRoom,s=e.roomCode,r=e.setRoomCode;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(p.u_,{size:{md:"sm",base:"xs"},isCentered:!0,isOpen:n,children:[(0,o.jsx)(f.Z,{}),(0,o.jsxs)(x.h,{children:[(0,o.jsx)(g.x,{textAlign:"center",children:"Online room"}),(0,o.jsx)(j.f,{children:(0,o.jsxs)(h.g,{spacing:3,children:[(0,o.jsxs)(m.x,{fontWeight:"bold",children:["Create or join a game",(0,o.jsx)(m.x,{fontWeight:"thin",textAlign:"center",fontSize:14,children:"Insert a 4 digits code"})]}),(0,o.jsxs)(h.g,{width:"100%",spacing:6,children:[(0,o.jsxs)(h.g,{width:"100%",children:[(0,o.jsx)(b.Y2,{width:"70%",min:1e3,max:9999,keepWithinRange:!1,clampValueOnBlur:!1,value:s,onChange:function(e){"E"!==e[e.length-1]&&"e"!==e[e.length-1]&&"+"!==e[e.length-1]&&"-"!==e[e.length-1]&&"."!==e[e.length-1]&&r(e)},children:(0,o.jsx)(b.zu,{placeholder:"1234",textAlign:"center"})}),(0,o.jsx)(y.z,{width:"70%",colorScheme:"teal",variant:"solid",onClick:t,children:"Join game"})]}),(0,o.jsx)(y.z,{width:"70%",colorScheme:"teal",variant:"outline",onClick:function(){return i.push("/")},children:"Back to home"})]})]})}),(0,o.jsx)(v.m,{})]})]})})};n.default=function(){var e=(0,r.useState)(-1),n=e[0],i=e[1],l=(0,r.useState)(),d=l[0],p=l[1],f=(0,r.useState)(),x=f[0],g=f[1],j=(0,r.useState)(),m=j[0],b=j[1],y=(0,r.useState)(),v=y[0],Z=y[1],R=(0,r.useState)(!1),N=R[0],T=R[1],V=(0,r.useState)([0,0]),z=V[0],W=V[1],A=(0,r.useState)(""),B=A[0],I=A[1],L=(0,a.useRouter)(),X=(0,c.q)(),q=X.isOpen,F=X.onOpen,G=X.onClose;(0,r.useEffect)((function(){H(),F()}),[]),(0,r.useEffect)((function(){_.on("error",(function(e){console.log(e,sdata.message)}))}),[_]);var H=function(){i(-1),Z(),J(),Y(),T(!1),W([0,0]),G(),i(0)},J=function(){for(var e=[],n=0;n<16;n++)e.push({position:n,isEmpty:!0,isLastPlayed:!1,isPlayable:5!==n&&6!==n&&9!==n&&10!==n,type:"",color:""});p(e)},Y=function(){for(var e=[{},{}],n=0;n<2;n++){e[n].number=n+1,e[n].color=n?"pink":"blue";for(var i=[],t=0;t<8;t++)i.push({position:t,isPlayed:!1,isSelected:!1,type:t<2?"pusher":t<4?"puller":t<6?"straight":"diagonal",color:n?"pink":"blue"});e[n].tiles=i}g(e[0]),b(e[1])},D=function(e){var i=!e.isSelected,t=n%2===0?x:m;t.tiles.forEach((function(e){return e.isSelected=!1})),t.tiles[e.position].isSelected=i,Z(i?e:null),n%2===0?g(t):b(t)},K=function(){var e=n%2===0?x:m;e.tiles.forEach((function(e,n){e.isSelected=!1,n===v.position&&(e.isPlayed=!0)})),n%2===0?g(e):b(e),Z(null)};return(0,o.jsx)(C.Z,{title:"Play",children:(0,o.jsxs)(u.W,{minH:"calc(100vh - 56px - 32px)",display:"flex",alignItems:"center",justifyContent:"center",children:[(0,o.jsxs)(h.g,{spacing:10,children:[(0,o.jsxs)(h.g,{spacing:2,children:[(0,o.jsx)(w,{isVisible:!N&&!!(n%2),bg:"pink.600"}),(0,o.jsx)(P.Z,{player:m,turn:n,onPlayerTileClick:D}),(0,o.jsx)(w,{isVisible:!N&&!!(n%2),bg:"pink.600"})]}),(0,o.jsx)(E.Z,{board:d,turn:n,onBoardTileClick:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(v||o){v=v||o;var r=(0,s.Z)(d),l=(0,t.Z)({},r[e.position]);l.type=v.type,l.color=v.color,l.isEmpty=!1,l.isLastPlayed=!0,r[e.position]=l;var a=(0,S.Zr)(v.type,e.position);r.forEach((function(n,i){i!==e.position&&(n.isLastPlayed=!1,n.isPlayable=!1)}));var c=!1;a.forEach((function(e){r[e].isEmpty&&(c=!0),r[e].isPlayable=!0})),K(),(0,S.f0)(c,n,x,m)?(r.forEach((function(e){return e.isPlayable=!1})),W((0,S.jX)(r)),setTimeout((function(){T(!0)}),750)):c?i(n+1):(i(n+2),r.forEach((function(e){return e.isPlayable=!0}))),p(r)}}}),(0,o.jsxs)(h.g,{spacing:2,children:[(0,o.jsx)(w,{isVisible:!N&&!(n%2),bg:"blue.600"}),(0,o.jsx)(P.Z,{player:x,turn:n,onPlayerTileClick:D}),(0,o.jsx)(w,{isVisible:!N&&!(n%2),bg:"blue.600"})]})]}),(0,o.jsx)(O,{isOpen:q,onClose:G,router:L,joinRoom:function(){var e=Number(B);Number.isInteger(e)&&e>=1e3&&e<=9999&&_.emit("joinRoom",B)},roomCode:B,setRoomCode:I}),(0,o.jsx)(k.Z,{gameOver:N,points:z,resetGame:H,board:d})]})})}}},function(e){e.O(0,[866,257,371,912,774,888,179],(function(){return n=4504,e(e.s=n);var n}));var n=e.O();_N_E=n}]);