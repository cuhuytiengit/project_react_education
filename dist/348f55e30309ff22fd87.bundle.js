(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{246:function(e,t,a){"use strict";a.r(t),function(e){var o,n,r=a(15),s=a.n(r),c=a(6),i=a.n(c),l=a(69),u=a.n(l),d=a(429),f=a(431),p=a(432),m=a(238),v=a(0),b=a.n(v),g=a(14),h=a(138),y=a(156),O=a(403);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach(function(t){s()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},L=y.a.login,j=function(){var e,t=Object(g.useHistory)(),a=Object(g.useLocation)(),n=Object(h.a)(L),r=u()(n,1)[0],s=Object(v.useState)(""),c=u()(s,2),l=c[0],y=c[1],w=Object(O.a)().formatMessage,x=Object(v.useMemo)(function(){return""!=l&&null!=l&&(e||(e=i()("div",{className:"error-status"},void 0,o||(o=i()(m.a,{})),i()("p",{},void 0,l))))},[l]);return b.a.createElement(b.a.Fragment,null,i()("div",{className:"main-form"},void 0,i()("h3",{className:"main-title"},void 0,w("login.page.title")),i()("div",{className:"content-form"},void 0,i()(d.a,{name:"loginByAccount",layout:"vertical",onFinish:function(e){var o=e.remember,n=void 0;""!==a.search&&(n=a.search.slice(1,a.search.length)),delete e.remember,e=k(k({},e),{},{applicationId:n}),document.cookie="remember_me=".concat(!0,"; SameSite=None; Secure"),r.execute(e,o).then(function(e){y(""),setTimeout(function(){t.push("/")},300)}).catch(function(e){y(w("login.page.account.error"))})},onFinishFailed:function(e){y("")},requiredMark:!1,initialValues:{remember:!1}},void 0,i()(d.a.Item,{label:w("login.page.userName"),name:"accountUserName",rules:[{required:!0,message:"".concat(w("login.page.form.required")," ").concat(w("login.page.userName"))}]},void 0,i()(f.a,{placeholder:w("login.page.userName")})),i()(d.a.Item,{label:w("login.page.password"),name:"accountPassword",rules:[{required:!0,message:"".concat(w("login.page.form.required")," ").concat(w("login.page.password"))}]},void 0,i()(f.a.Password,{placeholder:w("login.page.password")})),i()(d.a.Item,{name:"remember",valuePropName:"checked",className:"remember__login"},void 0,i()(p.a,{},void 0,w("login.page.remember"))),i()("div",{},void 0,x),i()(d.a.Item,{},void 0,i()("div",{className:"button-center__box"},void 0,i()("button",{type:"submit",className:"normal-button"},void 0,w("login.page.button.account"))))))))};x(j,'useHistory{history}\nuseLocation{location}\nuseAsync{[loginByAccount]}\nuseState{[checkError, setCheckError]("")}\nuseAltaIntl{{formatMessage}}\nuseMemo{renderError}',function(){return[g.useHistory,g.useLocation,h.a,O.a]});var H,C,N=j;t.default=N,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(L,"login","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\Login\\index.tsx"),H.register(j,"Login","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\Login\\index.tsx"),H.register(N,"default","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\Login\\index.tsx")),(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&C(e)}.call(this,a(9)(e))},395:function(e,t,a){"use strict";a.r(t),function(e){var o,n,r,s=a(6),c=a.n(s),i=a(69),l=a.n(i),u=a(429),d=a(431),f=a(238),p=a(0),m=a.n(p),v=a(204),b=a(14),g=a(138),h=a(156),y=a(409);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(){var e,t=Object(b.useHistory)(),a=Object(v.a)(),r=h.a.forgotPass,s=Object(g.a)(r),i=l()(s,1)[0],w=Object(p.useState)(""),k=l()(w,2),x=k[0],L=k[1],j=Object(p.useState)(!1),H=l()(j,2),C=H[0],N=H[1],P=function(e){return a.formatMessage({id:e})},G=Object(p.useMemo)(function(){return""!=x&&null!=x&&(e||(e=c()("div",{className:"error-status"},void 0,o||(o=c()(f.a,{})),c()("p",{},void 0,x))))},[x]);return m.a.createElement(m.a.Fragment,null,c()("div",{className:"main-form forgot-password-form"},void 0,c()("h3",{className:"main-title"},void 0,P("forgot.password.title")),C?c()("div",{className:"status__box"},void 0,c()("p",{},void 0,P("forgot.password.notification"))):m.a.createElement(m.a.Fragment,null,c()("p",{className:"description"},void 0,P("forgot.password.description")),c()("div",{className:"content-form"},void 0,c()(u.a,{name:"forgotPassword",layout:"vertical",onFinish:function(e){i.execute(e).then(function(e){N(!0)}).catch(O(function(e){L(P("forgot.password.email.not.exit"))},"useTranslate{}",function(){return[P]}))},onFinishFailed:function(e){L("")},requiredMark:!1},void 0,c()(u.a.Item,{label:P("forgot.password.email"),name:"email",rules:[{required:!0,message:"".concat(P("login.page.form.required")," ").concat(P("forgot.password.email"))},{type:"email",message:"".concat(P("forgot.password.email.invalid"))}]},void 0,n||(n=c()(d.a,{placeholder:"david@gmail.com"}))),c()("div",{},void 0,G),c()(u.a.Item,{},void 0,c()("div",{className:"button-center__box"},void 0,c()("button",{type:"submit",className:"normal-button"},void 0,P("forgot.password.button.accept")))))))),c()(y.a,{navLink:P("link.return.login"),onClick:function(){return t.push("/login")}}))};O(w,'useHistory{history}\nuseIntl{intl}\nuseAsync{[forgotPasscall]}\nuseState{[checkError, setCheckError]("")}\nuseState{[checkSuccessEmail, setCheckSuccessEmail](false)}\nuseMemo{renderError}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}',function(){return[b.useHistory,v.a,g.a]});var k,x,L=w;t.default=L,(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(w,"ForgotPassword","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\login\\ForgotPass\\index.tsx"),k.register(L,"default","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\login\\ForgotPass\\index.tsx")),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&x(e)}.call(this,a(9)(e))},396:function(e,t,a){"use strict";a.r(t),function(e){var o,n,r=a(6),s=a.n(r),c=a(69),i=a.n(c),l=a(429),u=a(431),d=a(238),f=a(0),p=a.n(f),m=a(204),v=a(14),b=a(156),g=a(138),h=a(409);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var y=function(){var e,t=Object(v.useHistory)(),a=Object(m.a)(),n=Object(f.useState)(!0),r=i()(n,2),c=r[0],y=r[1],O=Object(f.useState)(""),w=i()(O,2),k=w[0],x=w[1],L=b.a.resetPass,j=b.a.checkOtb,H=Object(g.a)(L),C=i()(H,1)[0].execute,N=Object(g.a)(j),P=i()(N,1)[0],G=Object(v.useParams)().otp;Object(f.useEffect)(function(){P.execute(G).then(function(e){}).catch(function(e){y(!1)})},[]);var E=function(e){return a.formatMessage({id:e})},_=Object(f.useMemo)(function(){return""!=k&&null!=k&&(e||(e=s()("div",{className:"error-status"},void 0,o||(o=s()(d.a,{})),s()("p",{},void 0,k))))},[k]);return p.a.createElement(p.a.Fragment,null,c?s()("div",{className:"main-form reset-password-form"},void 0,s()("h3",{className:"main-title"},void 0,E("reset.password.title")),s()("div",{className:"content-form"},void 0,s()(l.a,{name:"resetPassword",layout:"vertical",onFinish:function(e){C(e,G).then(function(e){t.push("/login")})},onFinishFailed:function(e){x("")},requiredMark:!1},void 0,s()(l.a.Item,{label:E("reset.password.newPassword"),name:"password",rules:[{required:!0,message:"".concat(E("login.page.form.required")," ").concat(E("reset.password.newPassword"))}]},void 0,s()(u.a.Password,{placeholder:E("reset.password.newPassword")})),s()(l.a.Item,{label:E("reset.password.confirm.newPassword"),name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"".concat(E("login.page.form.required")," ").concat(E("reset.password.confirm.newPassword"))},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject(new Error(E("reset.password.not.match"))):Promise.resolve()}}}]},void 0,s()(u.a.Password,{placeholder:E("reset.password.confirm.newPassword")})),s()("div",{},void 0,_),s()(l.a.Item,{},void 0,s()("div",{className:"button-center__box"},void 0,s()("button",{type:"submit",className:"normal-button"},void 0,E("common.button.accept"))))))):s()("div",{className:"main-form reset-password-form"},void 0,s()("div",{className:"error-token__box"},void 0,s()("h3",{className:"main-title"},void 0,E("reset.password.title.error")),s()("p",{},void 0,E("reset.password.notification")),s()("div",{className:"button-center__box"},void 0,s()("button",{onClick:function(){return t.push("/login")},className:"normal-button"},void 0,E("common.button.return"))))),s()(h.a,{navLink:E("link.return.login"),onClick:function(){return t.push("/login")}}))};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(y,'useHistory{history}\nuseIntl{intl}\nuseState{[checkOTP, setCheckOTP](true)}\nuseState{[checkError, setCheckError]("")}\nuseAsync{[{ execute: resetPasscall }]}\nuseAsync{[checkOtbCall]}\nuseParams{{ otp }}\nuseEffect{}\nuseMemo{renderError}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}',function(){return[v.useHistory,m.a,g.a,g.a,v.useParams]});var O,w,k=y;t.default=k,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(y,"Reset","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\login\\ResetPass\\index.tsx"),O.register(k,"default","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\login\\ResetPass\\index.tsx")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)}.call(this,a(9)(e))},398:function(e,t,a){"use strict";a.r(t),function(e){var o,n,r,s=a(6),c=a.n(s),i=a(69),l=a.n(i),u=a(429),d=a(431),f=a(238),p=a(0),m=a.n(p),v=a(204),b=a(14),g=a(138),h=a(156),y=a(400);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(){var e,t=Object(b.useHistory)(),a=Object(v.a)(),r=h.a.forgotPass,s=Object(g.a)(r),i=l()(s,1)[0],w=Object(p.useState)(""),k=l()(w,2),x=k[0],L=k[1],j=Object(p.useState)(!1),H=l()(j,2),C=H[0],N=H[1],P=function(e){return a.formatMessage({id:e})},G=Object(p.useMemo)(function(){return""!=x&&null!=x&&(e||(e=c()("div",{className:"error-status"},void 0,o||(o=c()(f.a,{})),c()("p",{},void 0,x))))},[x]);return m.a.createElement(m.a.Fragment,null,c()("div",{className:"main-form forgot-password-form"},void 0,c()("h3",{className:"main-title"},void 0,P("forgot.password.title")),C?c()("div",{className:"status__box"},void 0,c()("p",{},void 0,P("forgot.password.notification"))):m.a.createElement(m.a.Fragment,null,c()("p",{className:"description"},void 0,P("forgot.password.description")),c()("div",{className:"content-form"},void 0,c()(u.a,{name:"forgotPassword",layout:"vertical",onFinish:function(e){i.execute(e).then(function(e){N(!0)}).catch(O(function(e){L(P("forgot.password.email.not.exit"))},"useTranslate{}",function(){return[P]}))},onFinishFailed:function(e){L("")},requiredMark:!1},void 0,c()(u.a.Item,{label:P("forgot.password.email"),name:"email",rules:[{required:!0,message:"".concat(P("login.page.form.required")," ").concat(P("forgot.password.email"))},{type:"email",message:"".concat(P("forgot.password.email.invalid"))}]},void 0,n||(n=c()(d.a,{placeholder:"david@gmail.com"}))),c()("div",{},void 0,G),c()(u.a.Item,{},void 0,c()("div",{className:"button-center__box"},void 0,c()("button",{type:"submit",className:"normal-button"},void 0,P("forgot.password.button.accept")))))))),c()(y.a,{navLink:P("link.return.login"),onClick:function(){return t.push("/login")}}))};O(w,'useHistory{history}\nuseIntl{intl}\nuseAsync{[forgotPasscall]}\nuseState{[checkError, setCheckError]("")}\nuseState{[checkSuccessEmail, setCheckSuccessEmail](false)}\nuseMemo{renderError}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}\nuseTranslate{}',function(){return[b.useHistory,v.a,g.a]});var k,x,L=w;t.default=L,(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(w,"ForgotPassword","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\Login\\ForgotPass\\index.tsx"),k.register(L,"default","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\Login\\ForgotPass\\index.tsx")),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&x(e)}.call(this,a(9)(e))},400:function(e,t,a){"use strict";(function(e){var o,n=a(6),r=a.n(n);a(0);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,c,i=function(e){var t=e.navLink,a=e.onClick;return r()("div",{className:"nav-link__bottom"},void 0,r()("a",{onClick:a},void 0,t))},l=i;t.a=l,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"NavLinkBottom","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\Login\\components\\NavLinkBottom\\index.tsx"),s.register(l,"default","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\Login\\components\\NavLinkBottom\\index.tsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(9)(e))},403:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return c});var o,n=a(204);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var r,s,c=function(){var e=Object(n.a)();return{intl:e,formatMessage:function(t){return e.formatMessage({id:t})}}};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(c,"useIntl{intl}",function(){return[n.a]}),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(c,"useAltaIntl","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\shared\\hook\\useTranslate.ts"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,a(9)(e))},409:function(e,t,a){"use strict";(function(e){var o,n=a(6),r=a.n(n);a(0);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,c,i=function(e){var t=e.navLink,a=e.onClick;return r()("div",{className:"nav-link__bottom"},void 0,r()("a",{onClick:a},void 0,t))},l=i;t.a=l,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"NavLinkBottom","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\login\\components\\NavLinkBottom\\index.tsx"),s.register(l,"default","C:\\xampp\\htdocs\\tranning_cources\\create-template-react-app\\template\\src\\view\\login\\components\\NavLinkBottom\\index.tsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(9)(e))},432:function(e,t,a){"use strict";var o=a(3),n=a(2),r=a(0),s=a.n(r),c=a(5),i=a.n(c),l=a(8),u=a(1),d=a(16),f=a(19),p=a(20),m=a(21),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var o;Object(d.a)(this,a),(o=t.call(this,e)).handleChange=function(e){var t=o.props,a=t.disabled,n=t.onChange;a||("checked"in o.props||o.setState({checked:e.target.checked}),n&&n({target:Object(u.a)(Object(u.a)({},o.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},o.saveInput=function(e){o.input=e};var n="checked"in e?e.checked:e.defaultChecked;return o.state={checked:n},o}return Object(f.a)(a,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,r=t.className,c=t.style,u=t.name,d=t.id,f=t.type,p=t.disabled,m=t.readOnly,v=t.tabIndex,b=t.onClick,g=t.onFocus,h=t.onBlur,y=t.onKeyDown,O=t.onKeyPress,w=t.onKeyUp,k=t.autoFocus,x=t.value,L=t.required,j=Object(l.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),H=Object.keys(j).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=j[t]),e},{}),C=this.state.checked,N=i()(a,r,(e={},Object(o.a)(e,"".concat(a,"-checked"),C),Object(o.a)(e,"".concat(a,"-disabled"),p),e));return s.a.createElement("span",{className:N,style:c},s.a.createElement("input",Object(n.a)({name:u,id:d,type:f,required:L,readOnly:m,disabled:p,tabIndex:v,className:"".concat(a,"-input"),checked:!!C,onClick:b,onFocus:g,onBlur:h,onKeyUp:w,onKeyDown:y,onKeyPress:O,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:x},H)),s.a.createElement("span",{className:"".concat(a,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(u.a)(Object(u.a)({},t),{},{checked:e.checked}):null}}]),a}(r.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var b=v,g=a(7),h=a(4),y=a(49),O=a(66),w=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a},k=r.createContext(null),x=r.forwardRef(function(e,t){var a=e.defaultValue,s=e.children,c=e.options,l=void 0===c?[]:c,u=e.prefixCls,d=e.className,f=e.style,p=e.onChange,m=w(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),v=r.useContext(O.b),b=v.getPrefixCls,x=v.direction,L=r.useState(m.value||a||[]),j=Object(h.a)(L,2),H=j[0],C=j[1],P=r.useState([]),G=Object(h.a)(P,2),E=G[0],_=G[1];r.useEffect(function(){"value"in m&&C(m.value||[])},[m.value]);var M=function(){return l.map(function(e){return"string"==typeof e?{label:e,value:e}:e})},T=b("checkbox",u),F="".concat(T,"-group"),S=Object(y.a)(m,["value","disabled"]);l&&l.length>0&&(s=M().map(function(e){return r.createElement(N,{prefixCls:T,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:-1!==H.indexOf(e.value),onChange:e.onChange,className:"".concat(F,"-item"),style:e.style},e.label)}));var I={toggleOption:function(e){var t=H.indexOf(e.value),a=Object(g.a)(H);-1===t?a.push(e.value):a.splice(t,1),"value"in m||C(a);var o=M();null===p||void 0===p||p(a.filter(function(e){return-1!==E.indexOf(e)}).sort(function(e,t){return o.findIndex(function(t){return t.value===e})-o.findIndex(function(e){return e.value===t})}))},value:H,disabled:m.disabled,name:m.name,registerValue:function(e){_(function(t){return[].concat(Object(g.a)(t),[e])})},cancelValue:function(e){_(function(t){return t.filter(function(t){return t!==e})})}},q=i()(F,Object(o.a)({},"".concat(F,"-rtl"),"rtl"===x),d);return r.createElement("div",Object(n.a)({className:q,style:f},S,{ref:t}),r.createElement(k.Provider,{value:I},s))}),L=r.memo(x),j=a(55),H=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a},C=r.forwardRef(function(e,t){var a,s=e.prefixCls,c=e.className,l=e.children,u=e.indeterminate,d=void 0!==u&&u,f=e.style,p=e.onMouseEnter,m=e.onMouseLeave,v=e.skipGroup,g=void 0!==v&&v,h=H(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),y=r.useContext(O.b),w=y.getPrefixCls,x=y.direction,L=r.useContext(k),C=r.useRef(h.value);r.useEffect(function(){null===L||void 0===L||L.registerValue(h.value),Object(j.a)("checked"in h||!!L||!("value"in h),"Checkbox","`value` is not a valid prop, do you mean `checked`?")},[]),r.useEffect(function(){if(!g)return h.value!==C.current&&(null===L||void 0===L||L.cancelValue(C.current),null===L||void 0===L||L.registerValue(h.value)),function(){return null===L||void 0===L?void 0:L.cancelValue(h.value)}},[h.value]);var N=w("checkbox",s),P=Object(n.a)({},h);L&&!g&&(P.onChange=function(){h.onChange&&h.onChange.apply(h,arguments),L.toggleOption&&L.toggleOption({label:l,value:h.value})},P.name=L.name,P.checked=-1!==L.value.indexOf(h.value),P.disabled=h.disabled||L.disabled);var G=i()((a={},Object(o.a)(a,"".concat(N,"-wrapper"),!0),Object(o.a)(a,"".concat(N,"-rtl"),"rtl"===x),Object(o.a)(a,"".concat(N,"-wrapper-checked"),P.checked),Object(o.a)(a,"".concat(N,"-wrapper-disabled"),P.disabled),a),c),E=i()(Object(o.a)({},"".concat(N,"-indeterminate"),d));return r.createElement("label",{className:G,style:f,onMouseEnter:p,onMouseLeave:m},r.createElement(b,Object(n.a)({},P,{prefixCls:N,className:E,ref:t})),void 0!==l&&r.createElement("span",null,l))});C.displayName="Checkbox";var N=C,P=N;P.Group=L,P.__ANT_CHECKBOX=!0;t.a=P}}]);