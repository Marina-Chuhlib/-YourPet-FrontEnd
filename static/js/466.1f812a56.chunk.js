"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[466],{466:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var o=t(9439),r=t(2791),i=t(7689),a=t(9434),c=t(5160),s=t(8172),l=t(7078),u=t(3466),d=t(3400),f=t(890),g=t(2167),p=t(8940),x="NoticesSearch_placeholder__7c0Oy",h="NoticesSearch_inputContainer__q9qO2",m=t(3329),v=function(){var e=(0,a.I0)(),n=(0,r.useState)(""),t=(0,o.Z)(n,2),v=t[0],C=t[1],j=(0,i.TH)().pathname.split("/")[2],k=(0,a.v9)(s.uY),Z=(0,r.useCallback)((function(){C(""),P(!1)}),[]),y=(0,r.useCallback)((function(e){C(e.target.value),P(!1)}),[]),b=(0,r.useCallback)((function(n){n.preventDefault();var t=v.trim();if(""!==t)try{"own"===j?e((0,c.P)(t,1)):"favorite"===j?e((0,c.Fg)(t,1)):k&&e((0,c.T_)({categoryName:k,query:t,page:1}))}catch(o){console.log(o)}finally{Z()}else P(!0)}),[k,j,e,v,Z]),_=(0,r.useState)(!1),F=(0,o.Z)(_,2),N=F[0],P=F[1];return(0,m.jsx)("div",{className:h,children:(0,m.jsxs)("form",{onSubmit:b,children:[(0,m.jsx)(l.Z,{value:v,onChange:y,placeholder:"Search",disableUnderline:!0,style:{borderRadius:"20px",backgroundColor:"#FFFFFF",padding:"0px 14px 0px 20px",height:"43px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)"},inputProps:{className:x},endAdornment:(0,m.jsxs)(u.Z,{position:"end",children:[(0,m.jsx)(d.Z,{type:"submit",style:{color:"#54ADFF"},children:(0,m.jsx)(g.Z,{})}),v&&(0,m.jsx)(d.Z,{onClick:Z,style:{color:"#FFC107"},children:(0,m.jsx)(p.Z,{})})]}),fullWidth:!0}),N&&(0,m.jsx)(f.Z,{variant:"caption",color:"error",marginLeft:"20px",fontSize:"16px",children:"Please enter something."})]})})},C=r.memo(v),j=t(1087),k=t(9869),Z=t(3433),y=t(9311),b=t(4507),_=t(1481),F=t(9891),N=t(1889),P=t(9875),M=t(9174),w=t(708),S=t(6584),I="Filter_filterButton__hKRV2",L="Filter_filterButtonMobile__1ej9q",B="Filter_title__qSreO",q=t(1413);var E=function(e){return(0,m.jsx)("svg",(0,q.Z)((0,q.Z)({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,m.jsx)("path",{d:"M4.75781 4L9.75781 12V18L15.7578 21V12L20.7578 4H4.75781Z",stroke:e.color,strokeWidth:1.5,strokeLinecap:"round"})}))},O=(0,y.Z)({components:{MuiCheckbox:{styleOverrides:{root:{color:"#54adff","&.Mui-checked":{color:"#54adff"}}}}}}),R=function(){var e=(0,r.useState)(!1),n=(0,o.Z)(e,2),t=n[0],i=n[1],a=(0,r.useState)(null),c=(0,o.Z)(a,2),s=c[0],l=c[1],u=(0,r.useState)([]),d=(0,o.Z)(u,2),f=d[0],g=d[1],p=(0,r.useState)([]),x=(0,o.Z)(p,2),h=x[0],v=x[1],C=(0,r.useState)(!1),j=(0,o.Z)(C,2),k=j[0],y=j[1],q=(0,r.useState)(!1),R=(0,o.Z)(q,2),D=R[0],T=R[1],A=(0,r.useState)(!1),H=(0,o.Z)(A,2),z=H[0],W=H[1],J=function(e){l(e.currentTarget)},V=function(e){switch(e){case"age":y((function(e){return!e}));break;case"gender":T((function(e){return!e}))}},K=function(e,n,t){switch(t){case"age":g((function(e){return e.includes(n)?e.filter((function(e){return e!==n})):[].concat((0,Z.Z)(e),[n])}));break;case"gender":v((function(e){return e.includes(n)?e.filter((function(e){return e!==n})):[].concat((0,Z.Z)(e),[n])}))}};(0,r.useEffect)((function(){var e=function(){W(window.innerWidth<768)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var U=t?"#fef9f9":"#54adff";return(0,m.jsx)(b.Z,{theme:O,children:(0,m.jsxs)("div",{children:[z?(0,m.jsx)("button",{onClick:J,className:L,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:(0,m.jsx)(E,{color:U})}):(0,m.jsxs)("button",{onClick:J,className:I,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:["Filter ",(0,m.jsx)(E,{color:U})]}),(0,m.jsxs)(_.Z,{anchorEl:s,open:Boolean(s),onClose:function(){l(null)},children:[(0,m.jsx)("p",{className:B,children:"Filters"}),(0,m.jsx)(F.Z,{onClick:function(){return V("age")},style:{padding:"0",color:"#54ADFF",fontFamily:"Inter",fontSize:"14px",lineHeight:"130%"},children:(0,m.jsxs)(N.ZP,{container:!0,direction:"column",style:{backgroundColor:"#CCE4FB",borderRadius:"20px",padding:"8px 22px 8px 8px",marginBottom:"8px",width:"136px",marginRight:"8px",marginLeft:"8px"},children:[(0,m.jsxs)(N.ZP,{item:!0,style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,m.jsx)(P.Z,{component:k?w.Z:S.Z}),"By age"]}),k&&(0,m.jsxs)(N.ZP,{container:!0,item:!0,direction:"column",children:[(0,m.jsxs)(N.ZP,{item:!0,onClick:function(e){return e.stopPropagation()},children:[(0,m.jsx)(M.Z,{checked:f.includes("3-12 m"),onClick:function(e){return K(0,"3-12 m","age")},sx:{"& .MuiSvgIcon-root":{color:"#54adff"},"&.Mui-checked":{"& .MuiIconButton-root":{background:"transparent",borderColor:"#54adff"},"& .MuiIconButton-label":{color:"#54adff"}}}}),"3-12 m"]}),(0,m.jsxs)(N.ZP,{item:!0,onClick:function(e){return e.stopPropagation()},children:[(0,m.jsx)(M.Z,{checked:f.includes("1 year"),onClick:function(e){return K(0,"1 year","age")},sx:{"& .MuiSvgIcon-root":{color:"#54adff"},"&.Mui-checked":{"& .MuiIconButton-root":{background:"transparent",borderColor:"#54adff"},"& .MuiIconButton-label":{color:"#54adff"}}}}),"1 year"]}),(0,m.jsxs)(N.ZP,{item:!0,onClick:function(e){return e.stopPropagation()},children:[(0,m.jsx)(M.Z,{checked:f.includes("2 year"),onClick:function(e){return K(0,"2 year","age")},sx:{"& .MuiSvgIcon-root":{color:"#54adff"},"&.Mui-checked":{"& .MuiIconButton-root":{background:"transparent",borderColor:"#54adff"},"& .MuiIconButton-label":{color:"#54adff"}}}}),"2 year"]})]})]})}),(0,m.jsx)(F.Z,{onClick:function(){return V("gender")},style:{padding:"0",color:"#54ADFF",fontFamily:"Inter",fontSize:"14px",lineHeight:"130%"},children:(0,m.jsxs)(N.ZP,{container:!0,direction:"column",style:{backgroundColor:"#CCE4FB",borderRadius:"20px",padding:"8px 22px 8px 8px",width:"136px",marginRight:"8px",marginLeft:"8px"},children:[(0,m.jsxs)(N.ZP,{item:!0,style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,m.jsx)(P.Z,{component:D?w.Z:S.Z}),"By gender"]}),D&&(0,m.jsxs)(N.ZP,{container:!0,item:!0,direction:"column",children:[(0,m.jsxs)(N.ZP,{item:!0,onClick:function(e){return e.stopPropagation()},children:[(0,m.jsx)(M.Z,{checked:h.includes("Male"),onClick:function(e){return K(0,"Male","gender")},sx:{"& .MuiSvgIcon-root":{color:"#54adff"},"&.Mui-checked":{"& .MuiIconButton-root":{background:"transparent",borderColor:"#54adff"},"& .MuiIconButton-label":{color:"#54adff"}}}}),"Male"]}),(0,m.jsxs)(N.ZP,{item:!0,onClick:function(e){return e.stopPropagation()},children:[(0,m.jsx)(M.Z,{checked:h.includes("Female"),onClick:function(e){return K(0,"Female","gender")},sx:{"& .MuiSvgIcon-root":{color:"#54adff"},"&.Mui-checked":{"& .MuiIconButton-root":{background:"transparent",borderColor:"#54adff"},"& .MuiIconButton-label":{color:"#54adff"}}}}),"Female"]})]})]})})]})]})})},D=t(6432),T={navList:"NoticesCategoriesNav_navList__gDHKd",navLink:"NoticesCategoriesNav_navLink__D31Pg",active:"NoticesCategoriesNav_active__lp+RN",wrapper:"NoticesCategoriesNav_wrapper__TZJWJ",btnContainer:"NoticesCategoriesNav_btnContainer__ilOeR",btn:"NoticesCategoriesNav_btn__r-ijg","pulse-animation":"NoticesCategoriesNav_pulse-animation__a4lNI"},A=[{to:"sell",text:"Sell"},{to:"lost-found",text:"Lost/Found"},{to:"for-free",text:"In good hands"}],H=function(e){return e.isActive?"".concat(T.navLink," ").concat(T.active):T.navLink},z=function(e){var n=e.onOwnClick,t=e.onFavoriteClick,o=e.handleCategoryClick,r=(0,i.s0)(),c=(0,a.v9)(k.Qb);return(0,m.jsxs)("div",{className:T.wrapper,children:[(0,m.jsxs)("ul",{className:T.navList,children:[A.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)(j.OL,{to:e.to,className:H,onClick:function(){o(e.to)},children:e.text})},e.to)})),c&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(j.OL,{to:"own",className:H,onClick:function(){n()},children:"My ads"})},"own"),(0,m.jsx)("li",{children:(0,m.jsx)(j.OL,{to:"favorite",className:H,onClick:function(){t()},children:"Favorite ads"})},"favorite")]})]}),(0,m.jsxs)("div",{className:T.btnContainer,children:[(0,m.jsx)(R,{}),(0,m.jsxs)("button",{className:T.btn,onClick:function(){r("/add-pet")},children:["Add Pet ",(0,m.jsx)(D.Z,{color:"#FEF9F9",className:T.iconBtn})]})]})]})},W=t(1582),J=t(1333),V=t(6563),K=t(7394),U=t(8264),G=function(e){var n=e.totalPages,t=e.currentCategory,o=e.ownCurrentPage,r=e.favoriteCurrentPage,i=e.onPageChange,a=e.currentPage,c="own"===t?o:"favorite"===t?r:a,s=function(e,n){i(n)};return(0,m.jsx)(W.Z,{spacing:2,children:n>1&&(0,m.jsx)(J.Z,{count:n,page:c,color:"primary",variant:"outlined",onChange:s,sx:{marginX:"auto"},renderItem:function(e){return(0,m.jsx)(V.Z,(0,q.Z)({icon:"previous"===e.type?(0,m.jsx)(K.Z,{}):(0,m.jsx)(U.Z,{}),component:"button",onClick:function(n){return s(0,e.page)},selected:e.page===a},e))}})})},Q="NoticesPage_title__oGlUk",X=t(1107),Y=function(){var e=(0,a.I0)(),n=(0,a.v9)(s.Sv),t=(0,a.v9)(s.yJ),l=(0,a.v9)(s.hE),u=(0,a.v9)(s.rD),d=(0,i.TH)().pathname.split("/")[2],f=(0,r.useState)(1),g=(0,o.Z)(f,2),p=g[0],x=g[1],h=(0,r.useState)(1),v=(0,o.Z)(h,2),j=v[0],k=v[1],Z=function(n){e("own"!==d?"favorite"!==d?(0,c.T_)({categoryName:d,query:"",page:n}):(0,c.Fg)({query:"",page:n}):(0,c.P)({query:"",page:n}))};return(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h2",{className:Q,children:"Find your favorite pet"}),(0,m.jsx)(C,{}),(0,m.jsx)(z,{handleCategoryClick:function(n){e((0,c.T_)({categoryName:n,query:"",page:1}))},onPageChange:Z,onOwnClick:function(){e((0,c.P)({query:"",page:p}))},onFavoriteClick:function(){e((0,c.Fg)({query:"",page:j}))}}),t&&(0,m.jsx)(X.Z,{}),n&&(0,m.jsx)(i.j3,{}),(0,m.jsx)(G,{currentPage:u,totalPages:l,currentCategory:d,ownCurrentPage:p,favoriteCurrentPage:j,onPageChange:function(n){"own"===d?function(n){x(n),e((0,c.P)({query:"",page:n}))}(n):"favorite"===d?function(n){k(n),e((0,c.Fg)({query:"",page:n}))}(n):Z(n)}})]})}}}]);
//# sourceMappingURL=466.1f812a56.chunk.js.map