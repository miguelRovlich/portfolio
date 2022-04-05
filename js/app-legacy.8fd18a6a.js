(function(){"use strict";var e={945:function(e,t,a){a(6992),a(8674),a(9601),a(7727);var n=a(144),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("v-container",{attrs:{"align-center":""}},[a("TheHeader"),a("transition",{attrs:{name:"router-animation",mode:"out-in","enter-active-class":"animated fadeIn fast","leave-active-class":"animated fadeOut faster"}},[a("router-view")],1)],1)],1),a("TheFooter")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:"",width:"150",height:"340"}},[a("v-list",{staticClass:"pt-4"},[a("v-list-tile",{attrs:{"active-class":"green--text",to:"/"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("HOME")])],1)],1),a("v-list-tile",{attrs:{"active-class":"green--text",to:"/resume"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("RESUME")])],1)],1),a("v-list-tile",{attrs:{"active-class":"green--text",to:"/about"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("ABOUT")])],1)],1),a("v-list-tile",{attrs:{"active-class":"green--text",to:"/contact"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("CONTACT")])],1)],1)],1)],1),a("v-toolbar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[a("span",{staticClass:"font-weight-light"},[e._v("Miguel")]),a("span",{staticClass:"green--text"},[e._v("Rovlich")])]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{text:"",to:"/","active-class":"green--text headline"}},[e._v("Home")]),a("v-btn",{attrs:{text:"",to:"/resume","active-class":"green--text headline"}},[e._v("Resume")]),a("v-btn",{attrs:{text:"",to:"/about","active-class":"green--text headline"}},[e._v("About")]),a("v-btn",{attrs:{text:"",to:"/contact","active-class":"green--text headline"}},[e._v("Contact")])],1)],1)],1)},s=[],l={},c=l,u=a(1001),d=a(3453),m=a.n(d),v=a(1565),p=a(6816),f=a(4216),h=a(9762),g=a(6656),b=a(7921),_=(0,u.Z)(c,o,s,!1,null,null,null),x=_.exports;m()(_,{VBtn:v.Z,VList:p.Z,VNavigationDrawer:f.Z,VSpacer:h.Z,VToolbar:g.Z,VToolbarItems:b.lj,VToolbarTitle:b.qW});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"pa-3"},[e._v(" Developed with "),a("v-icon",{attrs:{small:"",color:"red"}},[e._v("fas fa-heart")]),e._v(" , by "),a("v-icon",{attrs:{small:"",color:"red"}},[e._v("fas fa-coffee")]),e._v(" and "),a("v-icon",{attrs:{small:"",color:"green"}},[e._v("fab fa-vuejs")]),a("v-spacer"),a("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)},k=[],C={},S=C,V=a(899),Z=a(6428),w=(0,u.Z)(S,y,k,!1,null,"61bcf8fe",null),T=w.exports;m()(w,{VFooter:V.Z,VIcon:Z.Z,VSpacer:h.Z});var E={name:"App",components:{TheHeader:x,TheFooter:T},data:function(){return{drawer:null}}},$=E,O=a(7524),I=a(4228),j=a(7877),q=(0,u.Z)($,i,r,!1,null,null,null),D=q.exports;m()(q,{VApp:O.Z,VContainer:I.Z,VMain:j.Z});var A=a(858);n["default"].use(A.Z);var F=new A.Z({}),P=a(8345),M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"mt-4 pt-2",attrs:{column:"","justify-center":"","align-center":""}},[a("VueCompareImage",{staticClass:"hidden-md-and-down",style:{minWidth:"800px",maxWidth:"600px",minHeight:"800px",maxHeight:"800px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.leftImage,rightImage:e.rightImage,sliderPositionPercentage:e.sliderPosition}}),a("VueCompareImage",{staticClass:"hidden-lg-and-up",style:{maxWidth:"400px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.leftImage2,rightImage:e.rightImage2,sliderPositionPercentage:e.sliderPosition}}),a("br"),a("vue-typer",{staticClass:"headline",attrs:{repeat:0,text:"Miguel Rovlich"}}),a("vue-typer",{attrs:{text:e.text1,repeat:1/0,shuffle:!1,"initial-action":"erasing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":1980,"erase-delay":100,"erase-style":"select-back","erase-on-complete":!1,"caret-animation":"smooth"}}),a("br"),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:"",xl4:""}},[a("v-card",{attrs:{flat:"",color:"transparent","max-width":"520"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h2",{staticClass:"headline mb-0"},[a("span",[e._v("Sobre ")]),a("span",{staticClass:"green--text"},[e._v("Mi")])]),a("br"),a("div",[a("h3",[e._v("Hola! Encantado de conocerte.")]),a("p",[e._v(" Desarrollador Full Stack "),a("span",{staticClass:"green--text font-weight-bold"},[e._v("VUE.JS")])]),a("p",[e._v(" Me considero una persona muy creativa, con una gran capacidad de trabajo en equipo, con una gran capacidad de comunicación y una gran capacidad de adaptación a los cambios. ")])])])]),a("v-card-actions",{staticClass:"hidden-sm-and-down justify-center"},e._l(e.icons,(function(t){return a("v-btn",{key:t.icon,attrs:{fab:"",dark:"",outlined:"",color:"green",href:t.href,target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1)})),1),a("v-card-actions",{staticClass:"hidden-md-and-up justify-center"},e._l(e.icons,(function(t){return a("v-btn",{key:t.icon,attrs:{small:"",fab:"",dark:"",outlined:"",color:"green",href:t.href,target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1)})),1)],1)],1)],1)},B=[],L=a(3354),z=a(7504),H=a.n(z),U={components:{"vue-typer":L.VueTyper,VueCompareImage:H()},data:function(){return{icons:[{href:"https://github.com/miguelRovlich",icon:"fab fa-github"},{href:"https://www.linkedin.com/in/miguelrovlich",icon:"fab fa-linkedin-in"},{href:"https://www.facebook.com/ezalortop",icon:"fab fa-facebook-f"},{href:"https://www.instagram.com/zivot_i_moc",icon:"fab fa-instagram"}],text1:["Front-End Developer","Web Developer","Back-End Developer","Full-Stack Developer"],leftImage:a(7262),rightImage:a(4670),leftImage2:a(7262),rightImage2:a(4670),sliderLine:1,hSize:20,sliderPosition:2.5}}},W=U,R=a(3237),N=a(7118),G=a(5972),J=a(4470),Y=(0,u.Z)(W,M,B,!1,null,null,null),Q=Y.exports;m()(Y,{VBtn:v.Z,VCard:R.Z,VCardActions:N.h7,VCardTitle:N.EB,VFlex:G.Z,VIcon:Z.Z,VLayout:J.Z});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",[e._v("About")]),a("v-row",{staticClass:"about"},[a("v-col",[a("h3",{staticClass:"text-left"},[e._v("Thecnical Skills")]),a("v-timeline",{attrs:{dense:""}},[a("v-timeline-item",{staticClass:"text-left"},[a("h4",[a("strong",[e._v("Universidad Tecnica Federico Santa Maria")])]),a("p",[e._v("Tecnico Universitario en Informatica")])]),a("v-timeline-item",{staticClass:"text-left"},[a("h4",[a("strong",[e._v("UiPath Foundation Academy")])]),a("p",[e._v("RPA Foundation Course")])]),a("v-timeline-item",{staticClass:"text-left"},[a("h4",[a("strong",[e._v("Globant")])]),a("p",[e._v(".NET Crash Course")])])],1)],1),a("v-col",[a("h3",[e._v("Soft Skills")]),a("v-timeline",{attrs:{dense:""}},[a("v-timeline-item",{staticClass:"text-left"},[e._v("Trabajo en equipo")]),a("v-timeline-item",{staticClass:"text-left"},[e._v(" Gestion del tiempo ")]),a("v-timeline-item",{staticClass:"text-left"},[e._v("Comunicacion efectiva")])],1)],1)],1),a("v-row",[a("VueApexCharts",{attrs:{type:"bar",options:e.chartOptions,series:e.series}})],1),a("v-btn",{staticClass:"ma-2 white--text",attrs:{loading:e.loading5,disabled:e.loading5,color:"blue-grey",fab:"",href:"https://drive.google.com/uc?export=download&id=1anArYOWO51UoQnYSUNd5GjSoQOg8Ieq6"},on:{click:function(t){e.loader="loading5"}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-cloud-download ")])],1)],1)},X=[],ee=a(7166),te=a.n(ee),ae={components:{VueApexCharts:te()},data:function(){return{series:[{name:"Series 1",data:[30,40,45,50,49]}],chartOptions:{labels:["Python","Sql","Javascript","C#","CSS"],responsive:[{breakpoint:480,options:{chart:{width:400},legend:{position:"bottom"}}}]}}}},ne=ae,ie=a(2102),re=a(2877),oe=a(2865),se=a(6996),le=(0,u.Z)(ne,K,X,!1,null,null,null),ce=le.exports;m()(le,{VBtn:v.Z,VCol:ie.Z,VContainer:I.Z,VIcon:Z.Z,VRow:re.Z,VTimeline:oe.Z,VTimelineItem:se.Z});var ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TimeLine")},de=[],me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-timeline",{attrs:{"align-top":"",dense:e.$vuetify.breakpoint.smAndDown}},e._l(e.laboralData,(function(t,n){return a("v-timeline-item",{key:n,attrs:{color:t.color,icon:t.icon,"fill-dot":""}},[a("v-card",{attrs:{color:t.color,dark:""}},[a("v-card-title",{staticClass:"text-h6"},[e._v(" "+e._s(t.title)+" ")]),a("v-card-text",{staticClass:"white text--primary"},[a("h3",[e._v(e._s(t.subtitle))]),a("br"),a("p",[e._v(e._s(t.description))]),a("v-btn",{staticClass:"mx-0",attrs:{color:t.color,outlined:"",href:"https://vinken.cl/vinken/#nosotros"}},[e._v(" Ir a la pagina ")])],1)],1)],1)})),1)},ve=[],pe={data:function(){return{laboralData:[{color:"red lighten-2",icon:"mdi-star",title:"2021 - Actualidad Vinken Solar S.p.A.",subtitle:"Desarrollador Full Stack",description:"Diseñar y desarrollar un sistema de monitoreo para parques solares, graficar series de tiempo e indicadores claves de rendimiento, refactorizar componentes e implementar metodologias agiles dentro del equipo de investigación y desarrollo.",link:"https://vinken.cl/vinken/#nosotros"},{color:"purple darken-1",icon:"mdi-book-variant",title:"2021 Matchbook.cl",subtitle:"Desarrollador backend",description:"Diseñar y desarrollar la API de Matchbook.cl.",link:"https://vinken.cl/vinken/#nosotros"},{title:"2021 Vinken Solar S.p.A.",subtitle:"Desarrollador Full Stack",description:"Diseñar y desarrollar un sistema de monitoreo para parques solares, graficar series de tiempo e indicadores claves de rendimiento, refactorizar componentes e implementar metodologias agiles dentro del equipo de investigación y desarrollo.",color:"green lighten-1",icon:"mdi-airballoon",link:"https://vinken.cl/vinken/#nosotros"},{title:"2021 Vinken Solar S.p.A.",subtitle:"Desarrollador Full Stack",description:"Diseñar y desarrollar un sistema de monitoreo para parques solares, graficar series de tiempo e indicadores claves de rendimiento, refactorizar componentes e implementar metodologias agiles dentro del equipo de investigación y desarrollo.",color:"indigo",icon:"mdi-buffer",link:"https://vinken.cl/vinken/#nosotros"}]}}},fe=pe,he=(0,u.Z)(fe,me,ve,!1,null,null,null),ge=he.exports;m()(he,{VBtn:v.Z,VCard:R.Z,VCardText:N.ZB,VCardTitle:N.EB,VTimeline:oe.Z,VTimelineItem:se.Z});var be={components:{TimeLine:ge}},_e=be,xe=(0,u.Z)(_e,ue,de,!1,null,null,null),ye=xe.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Estemos en contacto")]),a("form",[a("v-text-field",{attrs:{"error-messages":e.nameErrors,counter:10,label:"Name",required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-textarea",{attrs:{name:"input-7-1",label:"Message",required:"",value:"Default style",hint:"Hint text"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("v-btn",{staticClass:"mr-4",attrs:{color:"green"},on:{click:e.submit}},[e._v(" Send message ")]),a("v-btn",{on:{click:e.clear}},[e._v(" Clear ")]),e.isSended?a("v-alert",{attrs:{dense:"",dismissible:"",elevation:"7",outlined:"",prominent:"",text:"",type:e.type}},[e._v(e._s(e.submitStatus))]):e._e()],1)])},Ce=[],Se=(a(8309),a(1539),a(8862),a(6314),a(9600),a(1249),a(8620)),Ve=a(379),Ze={mixins:[Se.oE],validations:{name:{required:Ve.C1,maxLength:(0,Ve.BS)(20)},email:{required:Ve.C1,email:Ve.Do},message:{required:Ve.C1}},data:function(){return{name:"",email:"",message:"",submitStatus:"",isSend:!1,type:"success"}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&e.push("El nombre no puede tener mas de 20 caracteres"),!this.$v.name.required&&e.push("El nombre es requerido."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("E-mail debe ser válido."),!this.$v.email.required&&e.push("E-mail es requerido"),e):e},messageErrors:function(){var e=[];return this.$v.message.$dirty?(!this.$v.message.required&&e.push("El mensaje es requerido."),e):e}},methods:{submit:function(){var e=this;this.$v.$touch(),fetch("https://formspree.io/f/mrgjlyyn",{method:"POST",body:JSON.stringify({name:this.name,email:this.email,message:this.message}),headers:{Accept:"application/json"}}).then((function(t){t.ok?(e.submitStatus="Enviado con exito",e.type="success",e.isSend=!0):t.json().then((function(t){Object.hasOwn(t,"errors")?(e.submitStatus=t["errors"].map((function(e){return e["message"]})).join(", "),e.type="error",e.isSend=!0):(e.submitStatus="Oops! hubo un problema enviando tu formulario",e.type="error",e.isSend=!0)}))})).catch((function(t){e.submitStatus="Oops! hubo un problema enviando tu formulario",e.type="error",e.isSend=!0,console.error(t)}))},clear:function(){this.$v.$reset(),this.name="",this.email="",this.message="",this.isSend=!1}}},we=Ze,Te=a(3401),Ee=a(1347),$e=a(4350),Oe=(0,u.Z)(we,ke,Ce,!1,null,null,null),Ie=Oe.exports;m()(Oe,{VAlert:Te.Z,VBtn:v.Z,VTextField:Ee.Z,VTextarea:$e.Z}),n["default"].use(P.Z);var je=new P.Z({mode:"history",base:"/portfolio/",routes:[{path:"/",name:"home",component:Q},{path:"/resume",name:"resume",component:ye},{path:"/about",name:"about",component:ce},{path:"/contact",name:"contact",component:Ie}]});n["default"].config.productionTip=!1,new n["default"]({vuetify:F,router:je,render:function(e){return e(D)}}).$mount("#app")},7262:function(e,t,a){e.exports=a.p+"img/blanco-negro.ced35420.jpg"},4670:function(e,t,a){e.exports=a.p+"img/color.18468a21.jpg"}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,r){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<o&&(o=r));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,i,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/portfolio/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,o=n[0],s=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var u=l(a)}for(t&&t(n);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(945)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.8fd18a6a.js.map