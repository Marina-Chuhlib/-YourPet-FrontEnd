"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[346],{346:function(e,r,s){s.r(r),s.d(r,{default:function(){return P}});var t=s(2791),a=s(5861),n=s(9439),i=s(4687),o=s.n(i),l=s(1087),u=s(9434),d=s(7689),c=s(5705),m=s(6727),p=s(4554),x=s(7997),h=s(3400),f=s(3710),g=s(9569),_=s(427),b="loginFormDetails_form__LwEfY",w="loginFormDetails_title__T9-5m",j="loginFormDetails_questionText__n6Ojt",v="loginFormDetails_registerLink__jYgjs",y="loginFormDetails_buttonContainer__TyGgH",Z="loginFormDetails_button__WhIag",F=s(8724),I=s(3329),D=m.Ry({email:m.Z_().email("Invalid email").required("Enter a valid Email"),password:m.Z_().required("Password is required").min(6,"Password must be at least 6 characters").max(16,"Password must be at most 16 characters").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit")}),k={email:"",password:""},B=function(){var e=(0,d.s0)(),r=(0,t.useState)(!1),s=(0,n.Z)(r,2),i=s[0],m=s[1],B=function(){return m((function(e){return!e}))},C=(0,u.I0)(),L=function(){var r=(0,a.Z)(o().mark((function r(s){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={email:s.email,password:s.password},r.next=3,C((0,F.x4)(t));case 3:e("/user");case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(c.J9,{initialValues:k,onSubmit:L,validationSchema:D,children:function(e){var r=e.values,s=e.errors,t=e.touched,a=e.handleSubmit,n=e.handleChange;return(0,I.jsxs)(c.l0,{className:b,onSubmit:a,children:[(0,I.jsx)("h2",{className:w,children:"Login"}),(0,I.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,I.jsx)(x.Z,{name:"email",type:"email",label:"Email",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"}}},onChange:n,value:r.email,error:t.email&&Boolean(s.email),helperText:t.email&&s.email})}),(0,I.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,I.jsx)(x.Z,{name:"password",type:i?"text":"password",label:"Password",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"}}},InputProps:{endAdornment:(0,I.jsx)(h.Z,{"aria-label":"toggle password visibility",onClick:B,edge:"end",size:"small",children:i?(0,I.jsx)(f.Z,{style:{color:_.Z[300]}}):(0,I.jsx)(g.Z,{style:{color:_.Z[300]}})})},onChange:n,value:r.password,error:t.password&&Boolean(s.password),helperText:t.password&&s.password})}),(0,I.jsx)("div",{className:y,children:(0,I.jsx)("button",{type:"submit",className:Z,children:"Login"})}),(0,I.jsxs)("p",{className:j,children:["Don't have an account?"," ",(0,I.jsx)(l.rU,{to:"/register",className:v,children:"Register"})]})]})}})})},C=function(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(B,{})})},L="LoginPage_bodyBg__TrH8m",P=function(){return(0,t.useEffect)((function(){var e=document.querySelector("body");return e.classList.add(L),function(){e.classList.remove(L)}}),[]),(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(C,{})})}}}]);
//# sourceMappingURL=346.4bc2e6b7.chunk.js.map