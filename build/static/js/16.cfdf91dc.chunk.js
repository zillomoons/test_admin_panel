(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[16],{265:function(e,t,c){"use strict";var r=c(3),a=c(4),n=c(22),s=c(0),i=c(6),o=c.n(i),l=c(452),j=c(70),d=function(e,t){var c={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(c[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(c[r[a]]=e[r[a]])}return c};var u=["xs","sm","md","lg","xl","xxl"],b=s.forwardRef((function(e,t){var c,i=s.useContext(j.b),b=i.getPrefixCls,h=i.direction,f=s.useContext(l.a),m=f.gutter,p=f.wrap,O=e.prefixCls,x=e.span,g=e.order,v=e.offset,y=e.push,w=e.pull,C=e.className,N=e.children,F=e.flex,E=e.style,M=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),z=b("col",O),P={};u.forEach((function(t){var c,s={},i=e[t];"number"===typeof i?s.span=i:"object"===Object(n.a)(i)&&(s=i||{}),delete M[t],P=Object(a.a)(Object(a.a)({},P),(c={},Object(r.a)(c,"".concat(z,"-").concat(t,"-").concat(s.span),void 0!==s.span),Object(r.a)(c,"".concat(z,"-").concat(t,"-order-").concat(s.order),s.order||0===s.order),Object(r.a)(c,"".concat(z,"-").concat(t,"-offset-").concat(s.offset),s.offset||0===s.offset),Object(r.a)(c,"".concat(z,"-").concat(t,"-push-").concat(s.push),s.push||0===s.push),Object(r.a)(c,"".concat(z,"-").concat(t,"-pull-").concat(s.pull),s.pull||0===s.pull),Object(r.a)(c,"".concat(z,"-rtl"),"rtl"===h),c))}));var L=o()(z,(c={},Object(r.a)(c,"".concat(z,"-").concat(x),void 0!==x),Object(r.a)(c,"".concat(z,"-order-").concat(g),g),Object(r.a)(c,"".concat(z,"-offset-").concat(v),v),Object(r.a)(c,"".concat(z,"-push-").concat(y),y),Object(r.a)(c,"".concat(z,"-pull-").concat(w),w),c),C,P),k=Object(a.a)({},E);return m&&(k=Object(a.a)(Object(a.a)(Object(a.a)({},m[0]>0?{paddingLeft:m[0]/2,paddingRight:m[0]/2}:{}),m[1]>0?{paddingTop:m[1]/2,paddingBottom:m[1]/2}:{}),k)),F&&(k.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(F),"auto"!==F||!1!==p||k.minWidth||(k.minWidth=0)),s.createElement("div",Object(a.a)({},M,{style:k,className:L,ref:t}),N)}));b.displayName="Col",t.a=b},266:function(e,t,c){"use strict";var r=c(4),a=c(3),n=c(22),s=c(8),i=c(0),o=c(6),l=c.n(o),j=c(70),d=c(452),u=c(56),b=c(164),h=function(e,t){var c={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(c[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(c[r[a]]=e[r[a]])}return c},f=(Object(u.a)("top","middle","bottom","stretch"),Object(u.a)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var c,o=e.prefixCls,u=e.justify,f=e.align,m=e.className,p=e.style,O=e.children,x=e.gutter,g=void 0===x?0:x,v=e.wrap,y=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=i.useContext(j.b),C=w.getPrefixCls,N=w.direction,F=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=Object(s.a)(F,2),M=E[0],z=E[1],P=i.useRef(g);i.useEffect((function(){var e=b.a.subscribe((function(e){var t=P.current||0;(!Array.isArray(t)&&"object"===Object(n.a)(t)||Array.isArray(t)&&("object"===Object(n.a)(t[0])||"object"===Object(n.a)(t[1])))&&z(e)}));return function(){return b.a.unsubscribe(e)}}),[]);var L=C("row",o),k=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,c){if("object"===Object(n.a)(t))for(var r=0;r<b.b.length;r++){var a=b.b[r];if(M[a]&&void 0!==t[a]){e[c]=t[a];break}}else e[c]=t||0})),e}(),B=l()(L,(c={},Object(a.a)(c,"".concat(L,"-no-wrap"),!1===v),Object(a.a)(c,"".concat(L,"-").concat(u),u),Object(a.a)(c,"".concat(L,"-").concat(f),f),Object(a.a)(c,"".concat(L,"-rtl"),"rtl"===N),c),m),I=Object(r.a)(Object(r.a)(Object(r.a)({},k[0]>0?{marginLeft:k[0]/-2,marginRight:k[0]/-2}:{}),k[1]>0?{marginTop:k[1]/-2,marginBottom:k[1]/2}:{}),p);return i.createElement(d.a.Provider,{value:{gutter:k,wrap:v}},i.createElement("div",Object(r.a)({},y,{className:B,style:I,ref:t}),O))})));f.displayName="Row",t.a=f},452:function(e,t,c){"use strict";var r=c(0),a=Object(r.createContext)({});t.a=a},457:function(e,t,c){"use strict";var r=c(466),a=c.n(r),n=c(18),s=c(467).a(),i=c(29),o=c(264),l=a.a.create({baseURL:n.a,timeout:6e4}),j="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(s.push(j),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),s.push(j),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));t.a=l},460:function(e,t,c){"use strict";c.d(t,"d",(function(){return a})),c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return s})),c.d(t,"c",(function(){return i}));var r=c(2),a=(c(0),function(){return Object(r.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(r.jsx)("path",{d:"M537.016,909.264c-7.034,0-14.006-2.372-19.671-6.97L18.508,496.986C11.232,491.055,7,482.161,7,472.781\r c0-9.374,4.232-18.267,11.508-24.204L517.345,43.272c9.318-7.551,22.258-9.104,33.064-3.959\r c10.871,5.175,17.785,16.135,17.785,28.162v219.277c243.388,16.107,436.483,219.246,436.483,466.625v62.353\r c0,12.18-7.097,23.235-18.147,28.314c-11.054,5.119-24.054,3.292-33.311-4.626l-52.55-45.027\r c-93.318-79.986-210.359-126.841-332.476-133.66v217.36c0,12.022-6.914,22.986-17.785,28.158\r C546.146,908.262,541.58,909.268,537.016,909.264L537.016,909.264z M125.715,472.781L506.65,782.309V614.776\r c0-15.697,12.702-28.401,28.399-28.401c134.946,0,265.707,48.367,368.18,136.193l0.972,0.834\r c-2.664-201.286-167.231-364.213-369.148-364.213c-15.699,0-28.4-12.704-28.4-28.399V163.258\r C506.65,163.258,125.715,472.781,125.715,472.781L125.715,472.781z"})})}),n=function(){return Object(r.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(r.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(r.jsx)("g",{id:"Connected_Home_1_",children:Object(r.jsx)("g",{children:Object(r.jsx)("g",{children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(r.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(r.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(r.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(r.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})})},s=function(){return Object(r.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(r.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(r.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})})},i=function(){return Object(r.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("g",{children:Object(r.jsx)("path",{fill:"#E5E1E5",d:"M163.033,1011.756L2.746,191.353c-4.863-24.879,11.365-48.991,36.245-53.852l124.042-24.234l194.642-42.82\r l279.663,941.308H163.033V1011.756z"})}),Object(r.jsx)("path",{fill:"#99E6FC",d:"M163.033,680.979L68.355,196.393l94.678-18.501l143.802-23.615l62.994,584.599L163.033,680.979z"}),Object(r.jsxs)("g",{id:"XMLID_159_",children:[Object(r.jsx)("g",{children:Object(r.jsx)("path",{fill:"#F9F7F8",d:"M1014.357,64.9v957.461c0,25.351-20.549,45.899-45.899,45.899H208.93\r c-25.351,0-45.901-20.549-45.901-45.899V64.9c0-25.35,20.551-45.9,45.901-45.9h759.528C993.809,19,1014.357,39.551,1014.357,64.9\r z"})}),Object(r.jsx)("path",{fill:"#EFEDEF",d:"M574.473,971.206c-90.848,0-164.495-73.646-164.495-164.493V19H208.93\r c-25.351,0-45.901,20.551-45.901,45.9v957.461c0,25.351,20.551,45.899,45.901,45.899h759.528\r c25.351,0,45.899-20.549,45.899-45.899v-51.155H574.473z"}),Object(r.jsx)("path",{fill:"#FEC165",d:"M950.933,737.554V234.861c0-7.122-5.774-12.896-12.897-12.896H239.354c-7.12,0-12.896,5.774-12.896,12.896\r v502.692H950.933z"}),Object(r.jsx)("path",{fill:"#FDB441",d:"M409.978,221.965H239.354c-7.12,0-12.896,5.774-12.896,12.896v502.692h183.52V221.965z"}),Object(r.jsx)("circle",{fill:"#FEE903",cx:"588.693",cy:"600.309",r:"246.948"}),Object(r.jsx)("path",{fill:"#F4D902",d:"M409.978,770.729V429.889c-42.274,44.316-68.229,104.339-68.229,170.419\r C341.748,666.391,367.703,726.41,409.978,770.729z"}),Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{fill:"#99E6FC",d:"M902.813,668.316c-57.591-25.393-122.604-28.267-182.203-8.034l-51.163,17.336\r c-52.369,17.759-109.135,17.759-161.505,0l-51.163-17.336c-59.602-20.232-124.611-17.358-182.182,8.034l-48.142,21.226v105.269\r l80.12,33.354h599.658l44.699-33.354V689.542L902.813,668.316z"}),Object(r.jsx)("path",{fill:"#62DBFB",d:"M409.978,828.165V649.264c-45.72-6.239-92.605,0.184-135.379,19.053l-48.141,21.226v105.269\r l80.119,33.354H409.978z"}),Object(r.jsx)("path",{fill:"#62DBFB",d:"M950.933,794.811v61.709c0,5.452-4.424,9.878-9.879,9.878H236.332c-5.453,0-9.877-4.426-9.877-9.878\r v-61.709l48.142-21.229c57.57-25.39,122.58-28.268,182.182-8.055l51.163,17.358c52.37,17.759,109.136,17.759,161.505,0\r l51.163-17.358c59.6-20.213,124.612-17.335,182.203,8.055L950.933,794.811z"}),Object(r.jsx)("path",{fill:"#01D0FB",d:"M236.332,866.397h184.86c-7.214-18.51-11.215-38.625-11.215-59.685v-52.188\r c-45.72-6.231-92.605,0.192-135.379,19.061l-48.141,21.226v61.71c-0.003,5.451,4.421,9.875,9.874,9.875V866.397z"})]})]})]})})}},461:function(e,t,c){"use strict";var r=c(2),a=c(0),n=c.n(a),s=c(483),i=n.a.forwardRef((function(e,t){return Object(r.jsx)(s.a,{component:e.svg,className:e.className})}));t.a=i},462:function(e,t,c){"use strict";var r=c(457),a={login:function(e){return Object(r.a)({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return Object(r.a)({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=a},471:function(e,t,c){"use strict";var r=c(2),a=c(0),n=c(38),s=c(491),i=c(105),o=c(607),l=c(605),j=c(427),d=c(441),u=c(611),b=c(460),h=c(461),f=c(53),m=c(462),p=c(42),O=c(480),x=function(e){var t=Object(p.useHistory)(),c=e.otherSignIn,n=e.showForgetPassword,f=e.hideAuthMessage,x=e.onForgetPasswordClick,g=e.showLoading,v=e.extra,y=e.loading,w=e.showMessage,C=e.message,N=e.authenticated,F=e.showAuthMessage,E=e.token,M=e.redirect,z=e.allowRedirect;Object(a.useEffect)((function(){null!==E&&z&&t.push(M),w&&setTimeout((function(){f()}),3e3)}));var P=Object(r.jsxs)("div",{children:[Object(r.jsx)(s.a,{children:Object(r.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(r.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(r.jsx)(i.a,{onClick:function(){g()},className:"mr-2",disabled:y,icon:Object(r.jsx)(h.a,{svg:b.b}),children:"Google"}),Object(r.jsx)(i.a,{onClick:function(){g()},icon:Object(r.jsx)(h.a,{svg:b.a}),disabled:y,children:"Facebook"})]})]});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:Object(r.jsx)(o.a,{type:"error",showIcon:!0,message:C})}),Object(r.jsxs)(l.a,{layout:"vertical",name:"login-form",onFinish:function(e){g();m.a.login(e).then((function(e){N("fakeToken")})).then((function(e){F(e)}))},children:[Object(r.jsx)(l.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(r.jsx)(j.a,{prefix:Object(r.jsx)(d.a,{className:"text-primary"})})}),Object(r.jsx)(l.a.Item,{name:"password",label:Object(r.jsxs)("div",{className:"".concat(n?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(r.jsx)("span",{children:"Password"}),n&&Object(r.jsx)("span",{onClick:function(){return x},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(r.jsx)(j.a.Password,{prefix:Object(r.jsx)(u.a,{className:"text-primary"})})}),Object(r.jsx)(l.a.Item,{children:Object(r.jsx)(i.a,{type:"primary",htmlType:"submit",block:!0,loading:y,children:"Sign In"})}),c?P:null,v]})]})};x.defaultProps={otherSignIn:!0,showForgetPassword:!1};var g={showAuthMessage:f.c,showLoading:f.d,hideAuthMessage:f.b,authenticated:f.a};t.a=Object(n.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),g)(x)},472:function(e,t,c){"use strict";var r=c(266);t.a=r.a},473:function(e,t,c){"use strict";var r=c(265);t.a=r.a},483:function(e,t,c){"use strict";var r=c(5),a=c(21),n=c(0),s=c(6),i=c.n(s),o=c(64),l=n.forwardRef((function(e,t){var c=e.className,s=e.component,l=e.viewBox,j=e.spin,d=e.rotate,u=e.tabIndex,b=e.onClick,h=e.children,f=Object(a.a)(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);Object(o.g)(Boolean(s||h),"Should have `component` prop or `children`."),Object(o.f)();var m=i()("anticon",c),p=i()({"anticon-spin":!!j}),O=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,x=Object(r.a)(Object(r.a)({},o.e),{},{className:p,style:O,viewBox:l});l||delete x.viewBox;var g=u;return void 0===g&&b&&(g=-1),n.createElement("span",Object.assign({role:"img"},f,{ref:t,tabIndex:g,onClick:b,className:m}),s?n.createElement(s,Object.assign({},x),h):h?(Object(o.g)(Boolean(l)||1===n.Children.count(h)&&n.isValidElement(h)&&"use"===n.Children.only(h).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),n.createElement("svg",Object.assign({},x,{viewBox:l}),h)):null)}));l.displayName="AntdIcon",t.a=l},491:function(e,t,c){"use strict";var r=c(4),a=c(3),n=c(0),s=c(6),i=c.n(s),o=c(70),l=function(e,t){var c={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(c[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(c[r[a]]=e[r[a]])}return c};t.a=function(e){return n.createElement(o.a,null,(function(t){var c,s=t.getPrefixCls,o=t.direction,j=e.prefixCls,d=e.type,u=void 0===d?"horizontal":d,b=e.orientation,h=void 0===b?"center":b,f=e.className,m=e.children,p=e.dashed,O=e.plain,x=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),g=s("divider",j),v=h.length>0?"-".concat(h):h,y=!!m,w=i()(g,"".concat(g,"-").concat(u),(c={},Object(a.a)(c,"".concat(g,"-with-text"),y),Object(a.a)(c,"".concat(g,"-with-text").concat(v),y),Object(a.a)(c,"".concat(g,"-dashed"),!!p),Object(a.a)(c,"".concat(g,"-plain"),!!O),Object(a.a)(c,"".concat(g,"-rtl"),"rtl"===o),c),f);return n.createElement("div",Object(r.a)({className:w},x,{role:"separator"}),m&&n.createElement("span",{className:"".concat(g,"-inner-text")},m))}))}},597:function(e,t,c){"use strict";c.r(t);var r=c(19),a=c(2),n=(c(0),c(471)),s=c(472),i=c(473),o=c(38),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(a.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(a.jsxs)(s.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(a.jsx)(i.a,{xs:20,sm:20,md:24,lg:16,children:Object(a.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(a.jsx)(s.a,{justify:"center",children:Object(a.jsxs)(i.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("p",{children:["Don't have an account yet? ",Object(a.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)(n.a,Object(r.a)({},e))})]})})})}),Object(a.jsx)(i.a,{xs:0,sm:0,md:0,lg:8,children:Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(a.jsx)("div",{className:"text-right",children:Object(a.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(a.jsx)(s.a,{justify:"center",children:Object(a.jsxs)(i.a,{xs:0,sm:0,md:0,lg:20,children:[Object(a.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(a.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(a.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(a.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(a.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(a.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=16.cfdf91dc.chunk.js.map