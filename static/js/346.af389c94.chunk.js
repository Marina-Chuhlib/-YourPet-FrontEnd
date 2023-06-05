"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[346],{346:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var o=r(2791),a=r(1483),n=r(9434),i=r(9869),s=r(1107),l=r(5861),d=r(9439),u=r(4687),c=r.n(u),m=r(1087),p=r(7689),h=r(5705),x=r(6727),f=r(4554),g=r(8866),b=r(3400),_=r(3710),j=r(9569),F=r(427),v={form:"loginFormDetails_form__LwEfY",title:"loginFormDetails_title__T9-5m",questionText:"loginFormDetails_questionText__n6Ojt",registerLink:"loginFormDetails_registerLink__jYgjs",buttonContainer:"loginFormDetails_buttonContainer__TyGgH",button:"loginFormDetails_button__WhIag","my\u0421omponent":"loginFormDetails_my\u0421omponent__rPtb8",dark:"loginFormDetails_dark__Y3T6I"},w=r(8724),k=r(3329),y=x.Ry({email:x.Z_().email("Invalid email").required("Enter a valid Email"),password:x.Z_().required("Password is required").min(6,"Password must be at least 6 characters").max(16,"Password must be at most 16 characters").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit")}),I={email:"",password:""},M=function(){var e=(0,p.s0)(),t=(0,o.useState)(!1),r=(0,d.Z)(t,2),i=r[0],s=r[1],u=(0,o.useContext)(a.N).theme,x=function(){return s((function(e){return!e}))},M=(0,n.I0)(),D=function(){var t=(0,l.Z)(c().mark((function t(r){var o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={email:r.email,password:r.password},t.next=3,M((0,w.x4)(o));case 3:e("/user");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("div",{className:"".concat(v["my\u0421omponent"]," ").concat("light"===u?v.light:v.dark),children:(0,k.jsx)(h.J9,{initialValues:I,onSubmit:D,validationSchema:y,children:function(e){var t=e.values,r=e.errors,o=e.touched,a=e.handleSubmit,n=e.handleChange;return(0,k.jsxs)(h.l0,{className:v.form,onSubmit:a,children:[(0,k.jsx)("h2",{className:v.title,children:"Login"}),(0,k.jsx)(f.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,k.jsx)(g.Z,{name:"email",type:"email",label:"Email",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiInputLabel-root":{color:"dark"===u&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===u?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===u?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===u?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===u?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===u&&"#d9d2d2"}}},onChange:n,value:t.email,error:o.email&&Boolean(r.email),helperText:o.email&&r.email})}),(0,k.jsx)(f.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,k.jsx)(g.Z,{name:"password",type:i?"text":"password",label:"Password",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiInputLabel-root":{color:"dark"===u&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===u?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===u?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===u?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===u?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===u&&"#d9d2d2"}}},InputProps:{endAdornment:(0,k.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:x,edge:"end",size:"small",children:i?(0,k.jsx)(_.Z,{style:{color:"dark"===u?"#2f5a5f":F.Z[300]}}):(0,k.jsx)(j.Z,{style:{color:"dark"===u?"#2f5a5f":F.Z[300]}})})},onChange:n,value:t.password,error:o.password&&Boolean(r.password),helperText:o.password&&r.password})}),(0,k.jsx)("div",{className:v.buttonContainer,children:(0,k.jsx)("button",{type:"submit",className:v.button,children:"Login"})}),(0,k.jsxs)("p",{className:v.questionText,children:["Don't have an account?"," ",(0,k.jsx)(m.rU,{to:"/register",className:v.registerLink,children:"Register"})]})]})}})})})},D=function(){var e=(0,n.v9)(i.xU),t=(0,n.v9)(i.Qb);return(0,k.jsxs)(k.Fragment,{children:[e&&(0,k.jsx)(s.Z,{}),e&&t&&(0,k.jsx)(s.Z,{}),(0,k.jsx)(M,{})]})},Z={sectionMain:"LoginPage_sectionMain__QsrbE","my\u0421omponent":"LoginPage_my\u0421omponent__iJ-J3",dark:"LoginPage_dark__UXzbr"},C=function(){var e=(0,o.useContext)(a.N).theme;return(0,k.jsx)("div",{className:"".concat(Z["my\u0421omponent"]," ").concat("light"===e?Z.light:Z.dark),children:(0,k.jsx)("section",{className:Z.sectionMain,children:(0,k.jsx)("div",{className:"container",children:(0,k.jsx)(D,{})})})})}}}]);
//# sourceMappingURL=346.af389c94.chunk.js.map