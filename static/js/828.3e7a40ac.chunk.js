"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[828],{2828:function(e,r,o){o.r(r),o.d(r,{default:function(){return K}});var t=o(2791),a=o(9434),n=o(3625),s=function(e){return e.friends.items},i=function(e){return e.friends.isLoading},d=o(1413),c=o(9439),l=o(890),u="WorkDaysDropdown_customTypography__zd0pb",m="WorkDaysDropdown_timeBox__J92OR",h="WorkDaysDropdown_timeList__NYJBe",p="WorkDaysDropdown_timeItem__B5br4",f=o(3329),v=function(e){var r=e.workDays,o=(0,t.useState)(!1),a=(0,c.Z)(o,2),n=a[0],s=a[1],i=(0,t.useState)(function(){if(r&&r.length>0){var e=r[0],o=e.from?e.from:"11:00",t=e.to?e.to:"16:00";return"".concat(o," - ").concat(t)}return"Default time range"}()),d=(0,c.Z)(i,1)[0];var v=["MN","TU","WE","TH","FR","SA","SU"];return(0,f.jsxs)("div",{children:[(0,f.jsxs)(l.Z,{variant:"body1",component:"p",gutterBottom:!0,onClick:function(){s(!n)},className:u,sx:{"&:hover":{color:"#54ADFF",cursor:"pointer"}},children:[(0,f.jsx)("strong",{children:"Time:"})," ",(0,f.jsx)("br",{})," ",d]}),n&&(0,f.jsx)("div",{onClick:function(e){e.stopPropagation()},className:m,children:r.length>0?(0,f.jsx)("ul",{className:h,children:r.map((function(e,r){return(0,f.jsxs)("li",{className:p,children:[(0,f.jsx)("strong",{children:v[r]})," ",e.from,"-",e.to]},r)}))}):(0,f.jsx)("div",{children:"No working hours available"})})]})},x=o(4942),g=o(3366),Z=o(7462),y=o(8182),j=o(4419),b=o(1402),_=o(6934),N=o(5878),C=o(1217);function w(e){return(0,C.Z)("MuiCardHeader",e)}var k=(0,N.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),M=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],D=(0,_.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var o;return(0,Z.Z)((o={},(0,x.Z)(o,"& .".concat(k.title),r.title),(0,x.Z)(o,"& .".concat(k.subheader),r.subheader),o),r.root)}})({display:"flex",alignItems:"center",padding:16}),F=(0,_.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),T=(0,_.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),I=(0,_.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),P=t.forwardRef((function(e,r){var o=(0,b.Z)({props:e,name:"MuiCardHeader"}),t=o.action,a=o.avatar,n=o.className,s=o.component,i=void 0===s?"div":s,d=o.disableTypography,c=void 0!==d&&d,u=o.subheader,m=o.subheaderTypographyProps,h=o.title,p=o.titleTypographyProps,v=(0,g.Z)(o,M),x=(0,Z.Z)({},o,{component:i,disableTypography:c}),_=function(e){var r=e.classes;return(0,j.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},w,r)}(x),N=h;null==N||N.type===l.Z||c||(N=(0,f.jsx)(l.Z,(0,Z.Z)({variant:a?"body2":"h5",className:_.title,component:"span",display:"block"},p,{children:N})));var C=u;return null==C||C.type===l.Z||c||(C=(0,f.jsx)(l.Z,(0,Z.Z)({variant:a?"body2":"body1",className:_.subheader,color:"text.secondary",component:"span",display:"block"},m,{children:C}))),(0,f.jsxs)(D,(0,Z.Z)({className:(0,y.Z)(_.root,n),as:i,ref:r,ownerState:x},v,{children:[a&&(0,f.jsx)(F,{className:_.avatar,ownerState:x,children:a}),(0,f.jsxs)(I,{className:_.content,ownerState:x,children:[N,C]}),t&&(0,f.jsx)(T,{className:_.action,ownerState:x,children:t})]}))})),R=o(4554);function S(e){return(0,C.Z)("MuiCardMedia",e)}(0,N.Z)("MuiCardMedia",["root","media","img"]);var O=["children","className","component","image","src","style"],B=(0,_.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState,t=o.isMediaComponent,a=o.isImageComponent;return[r.root,t&&r.media,a&&r.img]}})((function(e){var r=e.ownerState;return(0,Z.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},r.isMediaComponent&&{width:"100%"},r.isImageComponent&&{objectFit:"cover"})})),U=["video","audio","picture","iframe","img"],A=["picture","img"],H=t.forwardRef((function(e,r){var o=(0,b.Z)({props:e,name:"MuiCardMedia"}),t=o.children,a=o.className,n=o.component,s=void 0===n?"div":n,i=o.image,d=o.src,c=o.style,l=(0,g.Z)(o,O),u=-1!==U.indexOf(s),m=!u&&i?(0,Z.Z)({backgroundImage:'url("'.concat(i,'")')},c):c,h=(0,Z.Z)({},o,{component:s,isMediaComponent:u,isImageComponent:-1!==A.indexOf(s)}),p=function(e){var r=e.classes,o={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,j.Z)(o,S,r)}(h);return(0,f.jsx)(B,(0,Z.Z)({className:(0,y.Z)(p.root,a),as:s,role:!u&&i?"img":void 0,ref:r,style:m,ownerState:h,src:u?i||d:void 0},l,{children:t}))})),L="OurFriendsItem_cardItem__fCoIU",W="OurFriendsItem_customTypography__3ufll",E="OurFriendsItem_customCardMedia__0oQSO",z="OurFriendsItem_friendLink__Td6T5",J=function(e){var r=e._id,o=e.url,t=e.title,a=e.imageUrl,n=e.workDays,s=e.address,i=e.addressUrl,c=e.email,u=e.phone;return(0,f.jsxs)("li",{className:L,children:[(0,f.jsx)(P,{sx:{padding:0},title:(0,f.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:z,children:t})}),(0,f.jsxs)(R.Z,{sx:{display:"flex",flexDirection:"row",flex:1},children:[(0,f.jsx)(H,{sx:{width:146,height:104,objectFit:"cover"},className:E,image:a,title:t}),(0,f.jsxs)(R.Z,{sx:{display:"flex",flexDirection:"column",flex:1},children:[!n&&(0,f.jsxs)(l.Z,{variant:"body1",component:"p",gutterBottom:!0,className:W,children:[(0,f.jsx)("strong",{children:"Time:"})," ",(0,f.jsx)("br",{})," day and night"]}),n&&(0,f.jsx)(v,{workDays:n}),(0,f.jsxs)(l.Z,{variant:"body1",component:"p",gutterBottom:!0,className:W,sx:(0,d.Z)({"&:hover":{color:"#54ADFF"}},s?{}:{"&:hover":{color:"inherit"}}),children:[(0,f.jsx)("strong",{children:"Address:"}),(0,f.jsx)("br",{}),s?(0,f.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:s}):"website only"]}),(0,f.jsxs)(l.Z,{variant:"body1",component:"p",gutterBottom:!0,className:W,sx:(0,d.Z)({"&:hover":{color:"#54ADFF"}},c?{}:{"&:hover":{color:"inherit"}}),children:[(0,f.jsx)("strong",{children:"Email:"})," ",(0,f.jsx)("br",{}),c?(0,f.jsx)("a",{href:"mailto:".concat(c),children:c}):"website only"]}),(0,f.jsxs)(l.Z,{variant:"body1",component:"p",gutterBottom:!0,className:W,sx:(0,d.Z)({"&:hover":{color:"#54ADFF"}},u?{}:{"&:hover":{color:"inherit"}}),children:[(0,f.jsx)("strong",{children:"Phone:"})," ",(0,f.jsx)("br",{}),u?(0,f.jsx)("a",{href:"tel:".concat(u),children:u}):"email only"]})]})]})]},r)},Q="OurFriendsList_container__fUSD3",X="OurFriendsList_cardList__DcpoE",Y=function(){var e=(0,a.v9)(s);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:"".concat(Q," ").concat(X," "),children:e.map((function(e){var r=e._id,o=e.url,t=e.title,a=e.imageUrl,n=e.workDays,s=e.address,i=e.addressUrl,d=e.email,c=e.phone;return(0,f.jsx)(J,{url:o,title:t,imageUrl:a,workDays:n,address:s,addressUrl:i,email:d,phone:c},r)}))})})},q=o(1107),G="OurFriendsPage_title__9QCXb",K=function(){var e=(0,a.v9)(i),r=(0,a.I0)();return(0,t.useEffect)((function(){r((0,n.n)())}),[r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:G,children:"Our friends"}),e&&(0,f.jsx)(q.Z,{}),(0,f.jsx)(Y,{})]})}},4554:function(e,r,o){o.d(r,{Z:function(){return g}});var t=o(7462),a=o(3366),n=o(2791),s=o(8182),i=o(3842),d=o(104),c=o(8519),l=o(418),u=o(3329),m=["className","component"];var h=o(5902),p=o(9311),f=o(988),v=(0,p.Z)(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.themeId,o=e.defaultTheme,h=e.defaultClassName,p=void 0===h?"MuiBox-root":h,f=e.generateClassName,v=(0,i.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(d.Z),x=n.forwardRef((function(e,n){var i=(0,l.Z)(o),d=(0,c.Z)(e),h=d.className,x=d.component,g=void 0===x?"div":x,Z=(0,a.Z)(d,m);return(0,u.jsx)(v,(0,t.Z)({as:g,ref:n,className:(0,s.Z)(h,f?f(p):p),theme:r&&i[r]||i},Z))}));return x}({themeId:f.Z,defaultTheme:v,defaultClassName:"MuiBox-root",generateClassName:h.Z.generate}),g=x}}]);
//# sourceMappingURL=828.3e7a40ac.chunk.js.map