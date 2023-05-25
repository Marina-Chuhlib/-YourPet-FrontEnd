"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[346],{346:function(e,r,s){s.r(r),s.d(r,{default:function(){return B}});var t=s(2791),a=s(5861),o=s(9439),n=s(4687),i=s.n(n),l=s(1087),d=s(9434),u=s(7689),c=s(5705),m=s(6727),p=s(4554),x=s(8866),h=s(3400),f=s(3710),g=s(9569),b=s(427),_="loginFormDetails_form__LwEfY",w="loginFormDetails_title__T9-5m",j="loginFormDetails_questionText__n6Ojt",F="loginFormDetails_registerLink__jYgjs",v="loginFormDetails_buttonContainer__TyGgH",y="loginFormDetails_button__WhIag",Z=s(8724),D=s(3329),I=m.Ry({email:m.Z_().email("Invalid email").required("Enter a valid Email"),password:m.Z_().required("Password is required").min(6,"Password must be at least 6 characters").max(16,"Password must be at most 16 characters").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit")}),C={email:"",password:""},A=function(){var e=(0,u.s0)(),r=(0,t.useState)(!1),s=(0,o.Z)(r,2),n=s[0],m=s[1],A=function(){return m((function(e){return!e}))},M=(0,d.I0)(),k=function(){var r=(0,a.Z)(i().mark((function r(s){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={email:s.email,password:s.password},r.next=3,M((0,Z.x4)(t));case 3:e("/user");case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(c.J9,{initialValues:C,onSubmit:k,validationSchema:I,children:function(e){var r=e.values,s=e.errors,t=e.touched,a=e.handleSubmit,o=e.handleChange;return(0,D.jsxs)(c.l0,{className:_,onSubmit:a,children:[(0,D.jsx)("h2",{className:w,children:"Login"}),(0,D.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,D.jsx)(x.Z,{name:"email",type:"email",label:"Email",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"},"&:hover fieldset":{borderColor:"#54ADFF"},"&.Mui-focused fieldset":{borderColor:"#54ADFF",borderWidth:"2px"}}},onChange:o,value:r.email,error:t.email&&Boolean(s.email),helperText:t.email&&s.email})}),(0,D.jsx)(p.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,D.jsx)(x.Z,{name:"password",type:n?"text":"password",label:"Password",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid #54ADFF"},"&:hover fieldset":{borderColor:"#54ADFF"},"&.Mui-focused fieldset":{borderColor:"#54ADFF",borderWidth:"2px"}}},InputProps:{endAdornment:(0,D.jsx)(h.Z,{"aria-label":"toggle password visibility",onClick:A,edge:"end",size:"small",children:n?(0,D.jsx)(f.Z,{style:{color:b.Z[300]}}):(0,D.jsx)(g.Z,{style:{color:b.Z[300]}})})},onChange:o,value:r.password,error:t.password&&Boolean(s.password),helperText:t.password&&s.password})}),(0,D.jsx)("div",{className:v,children:(0,D.jsx)("button",{type:"submit",className:y,children:"Login"})}),(0,D.jsxs)("p",{className:j,children:["Don't have an account?"," ",(0,D.jsx)(l.rU,{to:"/register",className:F,children:"Register"})]})]})}})})},M=function(){return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(A,{})})},k="LoginPage_bodyBg__TrH8m",B=function(){return(0,t.useEffect)((function(){var e=document.querySelector("body");return e.classList.add(k),function(){e.classList.remove(k)}}),[]),(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(M,{})})}}}]);
//# sourceMappingURL=346.7426849c.chunk.js.map