(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[29],{590:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(0),r=a.n(n),c=a(24),i=a.n(c),m=a(91),l=a(80),o=a(81),d=a(100),j=a(98),u=a(263),b=a(605),h=a(472),x=a(473),p=a(427),O=a(604),f=a(105),y=a(31),v=a(163),g=a(574),w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).avatarEndpoint="https://www.mocky.io/v2/5cc8019d300000980a055e76",e.state={avatarUrl:"/img/avatars/thumb-6.jpg",name:"".concat(e.props.name),email:"".concat(e.props.email),userName:"".concat(e.props.username),dateOfBirth:null,phoneNumber:"".concat(e.props.phone),website:"",address:"",city:"",postcode:""},e}return Object(o.a)(a,[{key:"getBase64",value:function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}},{key:"render",value:function(){var e=this,t=this.props.history,a=function(){var a=Object(m.a)(i.a.mark((function a(s){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n="updatable",u.b.loading({content:"Updating...",key:n}),a.next=4,new Promise((function(t){return setTimeout((function(){e.setState({name:s.name,email:s.email,userName:s.userName,dateOfBirth:s.dateOfBirth,phoneNumber:s.phoneNumber,website:s.website,address:s.address,city:s.city,postcode:s.postcode}),u.b.success({content:"Done!",key:n,duration:2}),t()}),1e3)}));case 4:t.goBack();case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),n=this.state,r=n.name,c=n.email,l=n.userName,o=n.dateOfBirth,d=n.phoneNumber,j=n.website,g=n.address,w=n.city,N=n.postcode;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v.a,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left"}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsx)(b.a,{name:"basicInformation",layout:"vertical",initialValues:{name:r,email:c,username:l,dateOfBirth:o,phoneNumber:d,website:j,address:g,city:w,postcode:N},onFinish:a,onFinishFailed:function(e){console.log("Failed:",e)},children:Object(s.jsx)(h.a,{children:Object(s.jsxs)(x.a,{xs:24,sm:24,md:24,lg:16,children:[Object(s.jsxs)(h.a,{gutter:y.c,children:[Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"Date of Birth",name:"dateOfBirth",children:Object(s.jsx)(O.a,{className:"w-100"})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"Phone Number",name:"phoneNumber",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"Website",name:"website",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:24,children:Object(s.jsx)(b.a.Item,{label:"Address",name:"address",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"City",name:"city",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(b.a.Item,{label:"Post code",name:"postcode",children:Object(s.jsx)(p.a,{})})})]}),Object(s.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})]})}}]),a}(n.Component),N=Object(g.withRouter)(w),I=a(42);t.default=function(){var e=function(){var e=Object(I.useLocation)().search;return r.a.useMemo((function(){return new URLSearchParams(e)}),[e])}(),t=e.get("name"),a=e.get("email"),n=e.get("phone"),c=e.get("username");return Object(s.jsx)(N,{name:t,email:a,phone:n,username:c})}}}]);
//# sourceMappingURL=29.ff27ccde.chunk.js.map