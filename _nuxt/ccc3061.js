/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{257:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const template={dependencies:{"@nuxt/ufo":"^0.5.0","node-fetch":"^2.6.1",unfetch:"^4.2.0",vue:"^2.6.12","vue-client-only":"^2.0.0","vue-meta":"^2.4.0","vue-no-ssr":"^1.1.1","vue-router":"^3.4.9","vue-template-compiler":"^2.6.12",vuex:"^3.6.0"},dir:r(n(179)).default.join(t,"..","template"),files:["App.js","client.js","index.js","jsonp.js","router.js","router.scrollBehavior.js","routes.json","server.js","utils.js","empty.js","mixins/fetch.server.js","mixins/fetch.client.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};e.template=template}).call(this,"/")},258:function(t,e,n){t.exports=n.p+"img/homepage - ammobin.0e99e22.png"},259:function(t,e,n){t.exports=n.p+"img/9mm ad - ammobin.e6c3d1d.png"},260:function(t,e,n){t.exports=n.p+"img/12 ga ad -1 - ammobin.b37e9ea.png"},261:function(t,e,n){t.exports=n.p+"img/12 ga ad - 2 - ammobin.34f698d.png"},262:function(t,e,n){t.exports=n.p+"img/Centerfire ad - ammobin.694cdfb.png"},263:function(t,e,n){t.exports=n.p+"img/Shotgun ad - ammobin.32807f5.png"},264:function(t,e,n){t.exports=n.p+"img/TEST_SIDE.d5445df.png"},265:function(t,e,n){t.exports=n.p+"img/TEST_TOP.c4ebc36.png"},266:function(t,e,n){"use strict";n(48),n(129),n(65);var r=n(36),o=n(63),c=n(61),f=n(62),l=n(37),m=n(8),h=n(30),d=(n(84),function(t){return"utm_source=".concat("ammobin.ca","&utm_campaign=").concat(t)});function v(t,e){var r=e.LANG,o=e.itemType,c=e.subType,f="/".concat(r,"/sponsorship");if("LANG"===t||"index"===t)return{img:n(258),href:"https://canadafirstammo.ca/?".concat(d("homepage"))};switch(c){case"9MM":return{img:n(259),href:"https://canadafirstammo.ca/fh-munitions-reloads-9x19mm/?".concat(d(c))};case"12 GA":return Math.random()>.5?{img:n(260),href:"https://canadafirstammo.ca/score-12-ga-waterfowl-loads-bb-2-4/?".concat(d(c))}:{img:n(261),href:"https://canadafirstammo.ca/score-12-ga-waterfowl-loads-bb-2-4/?".concat(d(c))};case null:case void 0:switch(o){case"centerfire":return{img:n(262),href:"https://canadafirstammo.ca/ammunition/?".concat(d("centerfire"))};case"shotgun":return{img:n(263),href:"https://canadafirstammo.ca/ammunition/shotgun/?".concat(d("shotgun"))}}}return"LANG"===t||"index"===t?{img:n(264),href:f}:{img:n(265),href:f}}var y=n(15),j=n.n(y);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=O(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).config=v(t.$route.name,t.$route.params),t}return Object(o.a)(n,[{key:"trackClick",value:function(){if(!window.navigator.doNotTrack){var t="https://ammobin.ca/api/track-sponsor-click",data={href:window.location.href,target:this.href,ua:navigator.userAgent};navigator.sendBeacon?navigator.sendBeacon(t,JSON.stringify(data)):j.a.post(t,data)}}},{key:"href",get:function(){return this.config.href}},{key:"img",get:function(){return this.config.img}},{key:"linkToSponsorPage",get:function(){return this.config.href.startsWith("ammobin.ca")}}]),n}(h.c),w=x=_([Object(h.a)({})],x),T=n(35),component=Object(T.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return this.linkToSponsorPage?e("nuxt-link",{staticClass:"center",attrs:{to:this.href}},[e("img",{staticClass:"pure-u-1",attrs:{src:this.img}})]):e("a",{staticClass:"center",attrs:{href:this.href,rel:"sponsored",target:"_blank"},on:{click:this.trackClick}},[e("img",{staticClass:"pure-u-1",attrs:{src:this.img}})])}),[],!1,null,null,null);e.a=component.exports},267:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(85);var o=n(130);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},268:function(t,e,n){var map={"./logo-medium-CA.png":269,"./logo-medium-US.png":270};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=268},269:function(t,e,n){t.exports=n.p+"img/logo-medium-CA.bad65a7.png"},270:function(t,e,n){t.exports=n.p+"img/logo-medium-US.972cbee.png"},271:function(t,e,n){"use strict";n(257)},272:function(t,e,n){},274:function(t,e,n){t.exports=n.p+"img/aso-tfbtv2.eb5748f.svg"},275:function(t,e,n){"use strict";n(272)},285:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-y m-t-30"},[e("a",{attrs:{href:"https://www.thefirearmblog.com/blog/2017/08/13/%e2%9c%89tfbtv-mailbag-episode-4-new-hope?utm_src=ammobin.ca",target:"_blank",rel:"noopener",title:"TFBTV Mailbag Episode 4: A New Hope"}},[e("img",{attrs:{src:n(274),width:"100px",alt:"as seen on TFBTV"}})])])}],o=(n(84),n(29),n(129),n(31),n(6)),c=n(267),f=n(36),l=n(61),m=n(62),h=n(37),d=n(8),v=n(30),y=(n(271),n(64)),j=n(266);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(m.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(l.a)(n,t);var e=O(n);function n(){var t;return Object(f.a)(this,n),(t=e.apply(this,arguments)).getCountry=y.a,t.REGION="CA",t.DOMAIN="ammobin.ca",t.topCalibres=[].concat(Object(c.a)(["9MM","7.62X39MM","5.56 NATO","7.62 NATO","6.5MM CREEDMOOR","7MM-08 REMINGTON",".300 WEATHERBY MAGNUM"].map((function(t){return{itemType:"centerfire",subType:t}}))),[{itemType:"rimfire",subType:".22 LR"},{itemType:"shotgun",subType:"12 GA"}]),t}return n}(v.c),w=x=_([Object(v.a)({head:function(){return{title:this.$t("home.tagline")+" | ".concat("ammobin.ca"),meta:[{hid:"description",name:"description",content:this.$t("home.tagline")}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.prev=1,e.next=4,n.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{background}}",opName:"vendors"}});case 4:return r=e.sent,e.abrupt("return",{vendorCount:r.data.data.vendors.length});case 8:e.prev=8,e.t0=e.catch(1),console.error("landing error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},components:{Sponsorship:j.a}})],x),T=(n(275),n(35)),component=Object(T.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"left hide-mobile"},[r("sponsorship")],1),t._v(" "),r("div",{staticClass:"right hide-mobile"},[r("sponsorship")],1),t._v(" "),r("div",{staticClass:"container"},[r("img",{staticClass:"pure-img img",attrs:{src:n(268)("./logo-medium-"+t.REGION+".png"),alt:"ammobin logo"}}),t._v(" "),r("h1",{staticClass:"m-b-30"},[t._v(t._s(t.DOMAIN))]),t._v(" "),r("h4",[t._v(t._s(t.$t("home.tagline",{country:t.getCountry()})))]),t._v(" "),r("h4",[t._v("\n      "+t._s(t.$t("home.searching"))+"\n      "),r("nuxt-link",{attrs:{to:{path:"about#supportedRetailers"}}},[t._v(t._s(t.vendorCount)+" retailers")]),t._v("\n      "+t._s(t.$t("home.daily"))+"\n    ")],1),t._v(" "),r("h2",{staticClass:"m-t-30 cap"},[t._v(t._s(t.$t("home.currentlyPopular")))]),t._v(" "),r("div",{staticClass:"pure-g row"},t._l(t.topCalibres,(function(e){return r("div",{key:e.subType,staticClass:"pure-u-md-1-3 pure-u-1 margin-y"},[r("nuxt-link",{attrs:{to:{path:e.itemType+"/"+e.subType}}},[t._v(t._s(e.subType))])],1)})),0),t._v(" "),t._m(0)])])}),r,!1,null,null,null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);var r=n(285).default,o=n(35),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);