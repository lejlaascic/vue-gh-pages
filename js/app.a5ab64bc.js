(function(e){function t(t){for(var o,i,a=t[0],u=t[1],l=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-gh-pages/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1800:function(e,t,n){"use strict";n("3b9b")},2351:function(e,t,n){"use strict";n("759b")},"3b9b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"view"};function c(e,t,n,c,i,a){var u=Object(o["v"])("AppHeader"),l=Object(o["v"])("router-view"),s=Object(o["v"])("LoginModal");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(u,{isLoggedIn:i.isLoggedIn,onOpenLoginModal:t[1]||(t[1]=function(e){return i.isLoginOpen=!0})},null,8,["isLoggedIn"]),Object(o["h"])("div",r,[Object(o["h"])(l)]),i.isLoginOpen?(Object(o["q"])(),Object(o["e"])(s,{key:0,onCloseLogin:t[2]||(t[2]=function(e){return i.isLoginOpen=!1})})):Object(o["f"])("",!0)],64)}var i={class:"navbar navbar-dark bg-dark"};function a(e,t,n,r,c,a){var u=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["e"])("nav",i,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(c.list,(function(e){return Object(o["q"])(),Object(o["e"])(u,{key:e.to,class:"navbar-brand title",to:e.to},{default:Object(o["B"])((function(){return[Object(o["g"])(Object(o["x"])(e.title),1)]})),_:2},1032,["to"])})),128)),n.isLoggedIn?(Object(o["q"])(),Object(o["e"])("button",{key:0,onClick:t[1]||(t[1]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"login-btn"},"Logout")):(Object(o["q"])(),Object(o["e"])("button",{key:1,onClick:t[2]||(t[2]=function(t){return e.$emit("open-login-modal")}),class:"login-btn"}," Login "))])}var u=n("260b"),l=(n("ea7b"),n("66ce"),{apiKey:"AIzaSyD4jJaGW8-wkiyemccWBD1K1F5L4jcpmio",authDomain:"vue-project-7e13a.firebaseapp.com",projectId:"vue-project-7e13a",storageBucket:"vue-project-7e13a.appspot.com",messagingSenderId:"880962840341",appId:"1:880962840341:web:c462e0aa466b2f44902b1c"});u["a"].initializeApp(l);var s=u["a"],b={props:{isLoggedIn:Boolean},data:function(){return{list:[{title:"Home",to:"/"},{title:"My To-do",to:"/heroes-list"},{title:"Calendar",to:"/calendar"},{title:"Marcdown",to:"/marcdown"},{title:"Slider",to:"/slider"}]}},methods:{logout:function(){s.auth().signOut().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}};n("8d1c");b.render=a;var d=b,h={class:"login-content"},f={class:"login-content-item"},O={class:"login"},j=Object(o["h"])("h1",null,"Login",-1),p=Object(o["h"])("label",{for:"email"},"Email or Username",-1),g=Object(o["h"])("label",{for:"psw"},"Password",-1),m={type:"submit",class:"login-form-btn"},v={key:0},y={key:1,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function w(e,t,n,r,c,i){var a=Object(o["v"])("GoogleLogin");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])("section",{onClick:t[1]||(t[1]=function(){return i.close&&i.close.apply(i,arguments)}),id:"login"}),Object(o["h"])("div",h,[Object(o["h"])("div",f,[Object(o["h"])("div",O,[j,Object(o["h"])("form",{class:"login-form",onSubmit:t[4]||(t[4]=Object(o["D"])((function(){return i.submit&&i.submit.apply(i,arguments)}),["prevent"]))},[p,Object(o["C"])(Object(o["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.email=e}),type:"text",name:"email"},null,512),[[o["z"],c.email]]),g,Object(o["C"])(Object(o["h"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.password=e}),type:"password",name:"psw"},null,512),[[o["z"],c.password]]),Object(o["h"])("button",m,[c.isLoading?(Object(o["q"])(),Object(o["e"])("span",y)):(Object(o["q"])(),Object(o["e"])("span",v,"Login"))])],32),Object(o["h"])(a,{onCloseLoginFromGoogle:i.close},null,8,["onCloseLoginFromGoogle"])])])])],64)}var k={class:"google-login"},x={class:"google-login-content"},L=Object(o["h"])("p",null,"or",-1);function M(e,t,n,r,c,i){return Object(o["q"])(),Object(o["e"])("section",k,[Object(o["h"])("div",x,[L,Object(o["h"])("button",{onClick:t[1]||(t[1]=function(){return i.loginWithGoogle&&i.loginWithGoogle.apply(i,arguments)}),class:"google-login-btn"}," Login with Google ")])])}var q={methods:{loginWithGoogle:function(){var e=this,t=new s.auth.GoogleAuthProvider;s.auth().signInWithPopup(t).then((function(){e.$emit("close-login-from-google")}))}}};q.render=M;var S=q,D={components:{GoogleLogin:S},data:function(){return{email:"",password:"",isLoading:!1}},methods:{submit:function(){var e=this;this.isLoading=!0,s.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){e.email="",e.isLoading=!1,e.close()})).catch((function(){e.error="",e.isLoading=!1}))},close:function(){this.$emit("close-login")}}};n("e53b");D.render=w;var C=D,I={data:function(){return{isLoginOpen:!1,isLoggedIn:!1,authUser:{}}},mounted:function(){var e=this;s.auth().onAuthStateChanged((function(t){t?(e.isLoggedIn=!0,e.authUser=t):(e.isLoggedIn=!1,e.authUser={})}))},components:{AppHeader:d,LoginModal:C}};n("94f9");I.render=c;var T=I,H=(n("7d05"),n("6c02")),G={id:"home"},P=Object(o["h"])("h1",null,"Welcome",-1);function W(e,t,n,r,c,i){return Object(o["q"])(),Object(o["e"])("div",G,[Object(o["h"])("img",{src:c.background},null,8,["src"]),P])}var A={data:function(){return{background:"https://images.unsplash.com/photo-1612831197315-3e16a8fccd3c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1405&q=80"}}};n("2351");A.render=W;var Y=A,U=(n("b0c0"),{id:"wrapper"}),_=Object(o["g"])(" What do I need to do...Reminder "),B={class:"num-to-do"},F={class:"list-group"},z=Object(o["h"])("button",{class:"btn btn-warning add",type:"submit"},"Add New",-1);function N(e,t,n,r,c,i){return Object(o["q"])(),Object(o["e"])("div",U,[Object(o["h"])("h1",null,[_,Object(o["h"])("span",B,Object(o["x"])(i.herosCount),1)]),Object(o["h"])("ul",F,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(c.heroes,(function(n){return Object(o["q"])(),Object(o["e"])("li",{class:"list-group-item",key:n.name},[Object(o["h"])("div",null,Object(o["x"])(n.name),1),Object(o["h"])("button",{class:"btn btn-secondary",onClick:t[1]||(t[1]=function(t){return i.remove(e.index)})},"x")])})),128))]),Object(o["h"])("form",{onSubmit:t[3]||(t[3]=Object(o["D"])((function(){return i.addHero&&i.addHero.apply(i,arguments)}),["prevent"])),class:"hero-form"},[Object(o["C"])(Object(o["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.newHero=e}),placeholder:"Type new Hero"},null,512),[[o["z"],c.newHero]]),z],32)])}n("a434");var V={data:function(){return{newHero:"",heroes:[{name:"Make an appointment"},{name:"Go shopping"},{name:"Read a book"},{name:"Watch a movie"},{name:"Go to training"}]}},methods:{addHero:function(){""!==this.newHero&&(this.heroes.unshift({name:this.newHero}),this.newHero="")},remove:function(e){console.log(this.heroes.splice(e,1))}},computed:{herosCount:function(){return this.heroes.length}}};n("1800");V.render=N;var J=V,$={id:"calendar"},E=Object(o["h"])("h1",null,"Calendar",-1),K={class:"month"},R={class:"days"},X={class:"days-num"},Q={class:"calendar-btns"};function Z(e,t,n,r,c,i){return Object(o["q"])(),Object(o["e"])("div",$,[E,Object(o["h"])("section",K,[Object(o["h"])("h2",null,Object(o["x"])(i.currentMonthName),1),Object(o["h"])("h2",null,Object(o["x"])(c.currentYear),1)]),Object(o["h"])("section",R,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(c.days,(function(e){return Object(o["q"])(),Object(o["e"])("p",{class:"calendar-item",key:e},Object(o["x"])(e),1)})),128))]),Object(o["h"])("section",X,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(i.startDay(),(function(e){return Object(o["q"])(),Object(o["e"])("p",{class:"calendar-item",key:e})})),128)),(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(i.dayInMonth(c.currentYear,c.currentMonth),(function(e){return Object(o["q"])(),Object(o["e"])("p",{class:["calendar-item",i.currentDateClass(e)],key:e},Object(o["x"])(e),3)})),128))]),Object(o["h"])("section",Q,[Object(o["h"])("button",{class:"btn btn-dark",onClick:t[1]||(t[1]=function(){return i.prev&&i.prev.apply(i,arguments)})},"Prev"),Object(o["h"])("button",{class:"btn btn-dark",onClick:t[2]||(t[2]=function(){return i.next&&i.next.apply(i,arguments)})},"Next")])])}var ee={data:function(){return{currentDate:(new Date).getUTCDate(),currentMonth:(new Date).getMonth(),currentYear:(new Date).getFullYear(),days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}},methods:{dayInMonth:function(e,t){return new Date(e,t+1,0).getDate()},startDay:function(){return new Date(this.currentYear,this.currentMonth,1).getDay()},next:function(){11===this.currentMonth?(this.currentMonth=0,this.currentYear++):this.currentMonth++},prev:function(){0===this.currentMonth?(this.currentMonth=11,this.currentYear--):this.currentMonth--},currentDateClass:function(e){var t=new Date(this.currentYear,this.currentMonth,e).toDateString(),n=(new Date).toDateString();return t===n?"date-style":""}},computed:{currentMonthName:function(){return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month:"long"})}}};n("c0df");ee.render=Z;var te=ee,ne={id:"marcdown"},oe=Object(o["h"])("h1",null,"Marcdown app",-1),re={class:"marc"},ce={class:"article left"};function ie(e,t,n,r,c,i){return Object(o["q"])(),Object(o["e"])("div",ne,[oe,Object(o["h"])("section",re,[Object(o["h"])("article",ce,[Object(o["h"])("textarea",{class:"text-field",value:c.text,onInput:t[1]||(t[1]=function(){return i.update&&i.update.apply(i,arguments)})},null,40,["value"])]),Object(o["h"])("article",{class:"article right",innerHTML:i.markedText},null,8,["innerHTML"])])])}var ae=n("0e54"),ue=n.n(ae),le={data:function(){return{text:"",timeout:""}},computed:{markedText:function(){return ue()(this.text)}},methods:{update:function(e){var t=this,n=function(){return t.text=e.target.value};this.debounce(n,500)},debounce:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;clearTimeout(this.timeout),this.timeout=setTimeout(e,t)}}};n("8176");le.render=ie;var se=le,be={id:"slider"},de={class:"dots"},he={class:"dots-content"},fe={class:"slider-text"},Oe={class:"text-box"},je={key:0};function pe(e,t,n,r,c,i){return Object(o["q"])(),Object(o["e"])("div",be,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(c.sliders,(function(e,t){return Object(o["q"])(),Object(o["e"])("div",{key:e,class:"slider-content"},[Object(o["h"])(o["b"],{name:"fade"},{default:Object(o["B"])((function(){return[c.currentSlide===t?(Object(o["q"])(),Object(o["e"])("div",{key:0,class:e,style:{height:"600px"}},null,2)):Object(o["f"])("",!0)]})),_:2},1024)])})),128)),Object(o["h"])("div",de,[Object(o["h"])("div",he,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(c.sliders,(function(e,t){return Object(o["q"])(),Object(o["e"])("div",{onClick:function(e){return i.makeActive(t)},key:e,class:[c.currentSlide===t?"bg-dark":"bg-light","dot"]},null,10,["onClick"])})),128))])]),Object(o["h"])("div",fe,[Object(o["h"])("div",Oe,[Object(o["h"])(o["b"],{name:"fade"},{default:Object(o["B"])((function(){return[c.isTitleShowing?(Object(o["q"])(),Object(o["e"])("h3",je,"Slider color")):Object(o["f"])("",!0)]})),_:1}),Object(o["h"])("button",{onClick:t[1]||(t[1]=function(e){return c.isTitleShowing=!c.isTitleShowing}),class:"btn btn-dark"}," Toggle Text ")])])])}var ge={data:function(){return{currentSlide:0,sliders:["bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info ","bg-light","bg-dark"],interval:"",isTitleShowing:!0}},methods:{makeActive:function(e){this.currentSlide=e}},mounted:function(){var e=this;this.interval=setInterval((function(){e.currentSlide=7===e.currentSlide?0:e.currentSlide+1}),2e3)},beforeUnmount:function(){clearInterval(this.interval)}};n("f3b4");ge.render=pe;var me=ge,ve=[{path:"/",component:Y},{path:"/heroes-list",component:J},{path:"/calendar",component:te},{path:"/marcdown",component:se},{path:"/slider",component:me}],ye=Object(H["a"])({history:Object(H["b"])(),routes:ve}),we=ye,ke=Object(o["d"])(T);ke.use(we),ke.mount("#app")},7361:function(e,t,n){},"759b":function(e,t,n){},"7d05":function(e,t,n){},8176:function(e,t,n){"use strict";n("abaf")},"8d1c":function(e,t,n){"use strict";n("be93")},"94f9":function(e,t,n){"use strict";n("f923")},"95e1":function(e,t,n){},abaf:function(e,t,n){},be93:function(e,t,n){},c0df:function(e,t,n){"use strict";n("c24f")},c24f:function(e,t,n){},e53b:function(e,t,n){"use strict";n("7361")},f3b4:function(e,t,n){"use strict";n("95e1")},f923:function(e,t,n){}});
//# sourceMappingURL=app.a5ab64bc.js.map