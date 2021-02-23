/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6],{250:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const template={dependencies:{"@nuxt/ufo":"^0.5.0","node-fetch":"^2.6.1",unfetch:"^4.2.0",vue:"^2.6.12","vue-client-only":"^2.0.0","vue-meta":"^2.4.0","vue-no-ssr":"^1.1.1","vue-router":"^3.4.9","vue-template-compiler":"^2.6.12",vuex:"^3.6.0"},dir:r(n(173)).default.join(t,"..","template"),files:["App.js","client.js","index.js","jsonp.js","router.js","router.scrollBehavior.js","routes.json","server.js","utils.js","empty.js","mixins/fetch.server.js","mixins/fetch.client.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};e.template=template}).call(this,"/")},251:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(80);var o=n(124);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},252:function(t,e,n){t.exports=n.p+"img/TEST_SIDE.d5445df.png"},253:function(t,e,n){t.exports=n.p+"img/logo-medium.bad65a7.png"},254:function(t,e,n){"use strict";n(250)},255:function(t,e,n){},257:function(t,e,n){t.exports=n.p+"img/aso-tfbtv2.eb5748f.svg"},258:function(t,e,n){"use strict";n(255)},269:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-y m-t-30"},[e("a",{attrs:{href:"https://www.thefirearmblog.com/blog/2017/08/13/%e2%9c%89tfbtv-mailbag-episode-4-new-hope?utm_src=ammobin.ca",target:"_blank",rel:"noopener",title:"TFBTV Mailbag Episode 4: A New Hope"}},[e("img",{attrs:{src:n(257),width:"100px",alt:"as seen on TFBTV"}})])])}],o=(n(79),n(28),n(123),n(29),n(6)),c=n(251),l=n(34),f=n(57),m=n(58),d=n(35),v=n(8),h=n(31);n(254);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(m.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(f.a)(n,t);var e=y(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).DOMAIN="ammobin.ca",t.topCalibres=[].concat(Object(c.a)(["9MM","7.62X39MM","5.56 NATO","7.62 NATO","6.5MM CREEDMOOR","7MM-08 REMINGTON",".300 WEATHERBY MAGNUM"].map((function(t){return{itemType:"centerfire",subType:t}}))),[{itemType:"rimfire",subType:".22 LR"},{itemType:"shotgun",subType:"12 GA"}]),t}return n}(h.c),O=_=j([Object(h.a)({head:function(){return{title:this.$t("home.tagline")+" | ".concat("ammobin.ca"),meta:[{hid:"description",name:"description",content:this.$t("home.tagline")}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.prev=1,e.next=4,n.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{background}}",opName:"vendors"}});case 4:return r=e.sent,e.abrupt("return",{vendorCount:r.data.data.vendors.length});case 8:e.prev=8,e.t0=e.catch(1),console.error("landing error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}})],_),x=(n(258),n(33)),component=Object(x.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"left hide-mobile"},[r("nuxt-link",{attrs:{to:"/"+this.$i18n.locale+"/ads"}},[r("img",{attrs:{src:n(252)}})])],1),t._v(" "),r("div",{staticClass:"right hide-mobile"},[r("nuxt-link",{attrs:{to:"/"+this.$i18n.locale+"/ads"}},[r("img",{attrs:{src:n(252)}})])],1),t._v(" "),r("div",{staticClass:"container"},[r("img",{staticClass:"pure-img img",attrs:{src:n(253),alt:"ammobin logo"}}),t._v(" "),r("h1",{staticClass:"m-b-30"},[t._v(t._s(t.DOMAIN))]),t._v(" "),r("h4",[t._v(t._s(t.$t("home.tagline")))]),t._v(" "),r("h4",[t._v("\n      "+t._s(t.$t("home.searching"))+"\n      "),r("nuxt-link",{attrs:{to:{path:"about#supportedRetailers"}}},[t._v(t._s(t.vendorCount)+" retailers")]),t._v("\n      "+t._s(t.$t("home.daily"))+"\n    ")],1),t._v(" "),r("h2",{staticClass:"m-t-30 cap"},[t._v(t._s(t.$t("home.currentlyPopular")))]),t._v(" "),r("div",{staticClass:"pure-g row"},t._l(t.topCalibres,(function(e){return r("div",{key:e.subType,staticClass:"pure-u-md-1-3 pure-u-1 margin-y"},[r("nuxt-link",{attrs:{to:{path:e.itemType+"/"+e.subType}}},[t._v(t._s(e.subType))])],1)})),0),t._v(" "),t._m(0)])])}),r,!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r=n(269).default,o=n(33),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);