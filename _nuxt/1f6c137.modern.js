/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{220:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const template={dependencies:{"@nuxt/ufo":"^0.5.0","node-fetch":"^2.6.1",unfetch:"^4.2.0",vue:"^2.6.12","vue-client-only":"^2.0.0","vue-meta":"^2.4.0","vue-no-ssr":"^1.1.1","vue-router":"^3.4.9","vue-template-compiler":"^2.6.12",vuex:"^3.6.0"},dir:o(n(144)).default.join(t,"..","template"),files:["App.js","client.js","index.js","jsonp.js","router.js","router.scrollBehavior.js","routes.json","server.js","utils.js","empty.js","mixins/fetch.server.js","mixins/fetch.client.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};e.template=template}).call(this,"/")},230:function(t,e,n){var map={"./logo-medium-CA.png":231,"./logo-medium-US.png":232};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=230},231:function(t,e,n){t.exports=n.p+"img/logo-medium-CA.bad65a7.png"},232:function(t,e,n){t.exports=n.p+"img/logo-medium-US.972cbee.png"},233:function(t,e,n){"use strict";n(220)},242:function(t,e,n){},248:function(t,e,n){"use strict";n(242)},262:function(t,e,n){"use strict";n.r(e);n(10),n(15);var o=n(4),r=n(24),c=n(44),l=(n(233),function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c});var v=class extends r.c{constructor(){super(...arguments),this.DOMAIN="ammobin.ca",this.REGION="CA",this.country=Object(c.a)(),this.nationality=Object(c.b)(),this.email="contact@ammobin.ca",this.mail="mailto:contact@ammobin.ca"}get randomVendors(){return function(input){for(var t,e,n=[...input],o=n.length;0!==o;)e=Math.floor(Math.random()*o),t=n[o-=1],n[o]=n[e],n[e]=t;return n}(this.vendors||[]).map(t=>(t.link+="?utm_source=ammobin.ca",t))}},m=v=l([Object(r.a)({head(){return{title:"".concat(this.$t("about.title")," | ").concat("ammobin.ca"),meta:[{hid:"description",name:"description",content:this.$t("about.description")}]}},asyncData:t=>Object(o.a)((function*(){var{$axios:e,store:n}=t;try{var o=yield e.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{ name logo link background }}",opName:"vendors"}}),{vendors:r}=o.data.data;return{vendors:r}}catch(t){return console.error(t),{vendors:[]}}}))()})],v),_=(n(248),n(29)),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("img",{staticClass:"pure-img img",attrs:{src:n(230)("./logo-medium-"+t.REGION+".png"),alt:"ammobin logo"}}),t._v(" "),o("h1",[t._v(t._s(t.$t("default.about")))]),t._v(" "),o("div",[o("a",{attrs:{href:"/"}},[t._v(t._s(t.DOMAIN))]),t._v("\n    "+t._s(t.$t("about.main1",{nationality:t.nationality}))+"\n  ")]),t._v(" "),o("div",[t._v(t._s(t.$t("about.main2")))]),t._v(" "),o("div",[t._v(t._s(t.$t("about.main3")))]),t._v(" "),o("hr"),t._v(" "),o("h2",[t._v(t._s(t.$t("about.contactInfo")))]),t._v(" "),o("div",[t._v("\n    "+t._s(t.$t("about.contactQuestions1"))+"\n    "),o("div",[t._v(t._s(t.$t("about.contactQuestion2")))]),t._v(" "),o("div",[t._v(t._s(t.$t("about.contactQuestion3")))]),t._v(" "),o("div",[t._v(t._s(t.$t("about.contactQuestion4")))]),t._v(" "),o("div",{staticStyle:{"margin-top":"10px"}},[t._v("\n      "+t._s(t.$t("about.submitIssue"))+"\n      "),o("a",{attrs:{href:"https://github.com/ammobinDOTca",target:"_blank",rel:"noopener"}},[t._v("https://github.com/ammobindotca")])]),t._v(" "),o("div",[t._v("\n      "+t._s(t.$t("about.sendEmail"))+"\n      "),o("a",{attrs:{href:t.mail}},[t._v(t._s(t.email))])])]),t._v(" "),o("hr"),t._v(" "),o("h2",[t._v(t._s(t.$t("about.disclaimerTitle")))]),t._v(" "),o("p",[t._v(t._s(t.$t("about.disclaimer",{domain:t.DOMAIN})))]),t._v(" "),o("hr"),t._v(" "),o("h2",[t._v(t._s(t.$t("about.incorrectCountTitle")))]),t._v(" "),o("p",[t._v(t._s(t.$t("about.incorrectCountText")))]),t._v(" "),o("hr"),t._v(" "),o("h2",[t._v(t._s(t.$t("about.adsTitle",{domain:t.DOMAIN})))]),t._v(" "),o("p",[o("nuxt-link",{attrs:{to:"/"+this.$i18n.locale+"/sponsorship"}},[t._v("see here")])],1),t._v(" "),o("hr"),t._v(" "),o("h2",{attrs:{id:"supportedRetailers"}},[t._v(t._s(t.$t("about.supportedRetailers")))]),t._v(" "),t.vendors?o("div",{staticClass:"pure-g"},[t._l(t.randomVendors,(function(t){return o("div",{key:t.link,staticClass:"pure-u-1 pure-u-md-1-3 m-t-2 m-r-2"},[o("a",{attrs:{href:"https://"+t.link,target:"_blank",rel:"noopener"}},[o("img",{staticClass:"pure-img img",class:{"grey-background":t.background},attrs:{src:t.logo,alt:t.name,title:t.name}})])])})),t._v(" "),o("div",{staticClass:"pure-u-1 pure-u-md-1-3 m-t-2"},[o("h4",[t._v(t._s(t.$t("about.moreRetailers")))])])],2):t._e(),t._v(" "),o("hr")])}),[],!1,null,null,null);e.default=component.exports}}]);