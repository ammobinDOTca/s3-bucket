/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{220:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const template={dependencies:{"@nuxt/ufo":"^0.5.0","node-fetch":"^2.6.1",unfetch:"^4.2.0",vue:"^2.6.12","vue-client-only":"^2.0.0","vue-meta":"^2.4.0","vue-no-ssr":"^1.1.1","vue-router":"^3.4.9","vue-template-compiler":"^2.6.12",vuex:"^3.6.0"},dir:o(n(144)).default.join(t,"..","template"),files:["App.js","client.js","index.js","jsonp.js","router.js","router.scrollBehavior.js","routes.json","server.js","utils.js","empty.js","mixins/fetch.server.js","mixins/fetch.client.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};e.template=template}).call(this,"/")},221:function(t,e,n){t.exports=n.p+"img/homepage - ammobin.0e99e22.png"},222:function(t,e,n){t.exports=n.p+"img/9mm ad - ammobin.e6c3d1d.png"},223:function(t,e,n){t.exports=n.p+"img/12 ga ad -1 - ammobin.b37e9ea.png"},224:function(t,e,n){t.exports=n.p+"img/12 ga ad - 2 - ammobin.34f698d.png"},225:function(t,e,n){t.exports=n.p+"img/Centerfire ad - ammobin.694cdfb.png"},226:function(t,e,n){t.exports=n.p+"img/Shotgun ad - ammobin.32807f5.png"},227:function(t,e,n){t.exports=n.p+"img/TEST_SIDE.d5445df.png"},228:function(t,e,n){t.exports=n.p+"img/TEST_TOP.c4ebc36.png"},229:function(t,e,n){"use strict";n(10),n(45),n(15);var o=n(24),r=t=>"utm_source=".concat("ammobin.ca","&utm_campaign=").concat(t);var c=n(9),m=n.n(c),l=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},f=class extends o.c{constructor(){super(...arguments),this.config=function(t,e){var{LANG:o,itemType:c,subType:m}=e,l="/".concat(o,"/sponsorship");if("LANG"===t||"index"===t)return{img:n(221),href:"https://canadafirstammo.ca/?".concat(r("homepage"))};switch(m){case"9MM":return{img:n(222),href:"https://canadafirstammo.ca/fh-munitions-reloads-9x19mm/?".concat(r(m))};case"12 GA":return Math.random()>.5?{img:n(223),href:"https://canadafirstammo.ca/score-12-ga-waterfowl-loads-bb-2-4/?".concat(r(m))}:{img:n(224),href:"https://canadafirstammo.ca/score-12-ga-waterfowl-loads-bb-2-4/?".concat(r(m))};case null:case void 0:switch(c){case"centerfire":return{img:n(225),href:"https://canadafirstammo.ca/ammunition/?".concat(r("centerfire"))};case"shotgun":return{img:n(226),href:"https://canadafirstammo.ca/ammunition/shotgun/?".concat(r("shotgun"))}}}return"LANG"===t||"index"===t?{img:n(227),href:l}:{img:n(228),href:l}}(this.$route.name,this.$route.params)}get href(){return this.config.href}get img(){return this.config.img}get linkToSponsorPage(){return this.config.href.startsWith("ammobin.ca")}trackClick(){if(!window.navigator.doNotTrack){var t="https://ammobin.ca/api/track-sponsor-click",data={href:window.location.href,target:this.href,ua:navigator.userAgent};navigator.sendBeacon?navigator.sendBeacon(t,JSON.stringify(data)):m.a.post(t,data)}}},h=f=l([Object(o.a)({})],f),d=n(29),component=Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return this.linkToSponsorPage?e("nuxt-link",{staticClass:"center",attrs:{to:this.href}},[e("img",{staticClass:"pure-u-1",attrs:{src:this.img}})]):e("a",{staticClass:"center",attrs:{href:this.href,rel:"sponsored",target:"_blank"},on:{click:this.trackClick}},[e("img",{staticClass:"pure-u-1",attrs:{src:this.img}})])}),[],!1,null,null,null);e.a=component.exports},230:function(t,e,n){var map={"./logo-medium-CA.png":231,"./logo-medium-US.png":232};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=230},231:function(t,e,n){t.exports=n.p+"img/logo-medium-CA.bad65a7.png"},232:function(t,e,n){t.exports=n.p+"img/logo-medium-US.7dd7833.png"},233:function(t,e,n){"use strict";n(220)},234:function(t,e,n){},236:function(t,e,n){t.exports=n.p+"img/aso-tfbtv2.eb5748f.svg"},237:function(t,e,n){"use strict";n(234)},247:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-y m-t-30"},[e("a",{attrs:{href:"https://www.thefirearmblog.com/blog/2017/08/13/%e2%9c%89tfbtv-mailbag-episode-4-new-hope?utm_src=ammobin.ca",target:"_blank",rel:"noopener",title:"TFBTV Mailbag Episode 4: A New Hope"}},[e("img",{attrs:{src:n(236),width:"100px",alt:"as seen on TFBTV"}})])])}],r=(n(10),n(15),n(5)),c=n(24),m=(n(233),n(44)),l=n(229),f=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},h=class extends c.c{constructor(){super(...arguments),this.getCountry=m.a,this.REGION="CA",this.DOMAIN="ammobin.ca",this.topCalibres=[...["9MM","7.62X39MM","5.56 NATO","7.62 NATO","6.5MM CREEDMOOR","7MM-08 REMINGTON",".300 WEATHERBY MAGNUM"].map(t=>({itemType:"centerfire",subType:t})),{itemType:"rimfire",subType:".22 LR"},{itemType:"shotgun",subType:"12 GA"}],this.altCountry="Canada"===Object(m.a)()?"USA":"Canada",this.altDomain="https://ammobin.".concat("Canada"===Object(m.a)()?"us":"ca")}},d=h=f([Object(c.a)({head(){return{title:this.$t("home.tagline",{country:Object(m.a)()})+" | ".concat("ammobin.ca"),meta:[{hid:"description",name:"description",content:this.$t("home.tagline",{country:Object(m.a)()})}]}},asyncData:t=>Object(r.a)((function*(){var{$axios:e}=t;try{return{vendorCount:(yield e.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{background}}",opName:"vendors"}})).data.data.vendors.length}}catch(t){console.error("landing error",t)}}))(),components:{Sponsorship:l.a}})],h),v=(n(237),n(29)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"left hide-mobile"},[o("sponsorship")],1),t._v(" "),o("div",{staticClass:"right hide-mobile"},[o("sponsorship")],1),t._v(" "),o("div",{staticClass:"container"},[o("img",{staticClass:"pure-img img",attrs:{src:n(230)("./logo-medium-"+t.REGION+".png"),alt:"ammobin logo"}}),t._v(" "),o("h1",{staticClass:"m-b-30"},[t._v(t._s(t.DOMAIN))]),t._v(" "),o("h4",[t._v(t._s(t.$t("home.tagline",{country:t.getCountry()})))]),t._v(" "),o("h4",[t._v("\n      "+t._s(t.$t("home.searching"))+"\n      "),o("nuxt-link",{attrs:{to:{path:"about#supportedRetailers"}}},[t._v(t._s(t.vendorCount)+" retailers")]),t._v("\n      "+t._s(t.$t("home.daily"))+"\n    ")],1),t._v(" "),o("h2",{staticClass:"m-t-30 cap"},[t._v(t._s(t.$t("home.currentlyPopular")))]),t._v(" "),o("div",{staticClass:"pure-g row"},t._l(t.topCalibres,(function(e){return o("div",{key:e.subType,staticClass:"pure-u-md-1-3 pure-u-1 margin-y"},[o("nuxt-link",{attrs:{to:{path:e.itemType+"/"+e.subType}}},[t._v(t._s(e.subType))])],1)})),0),t._v(" "),o("h4",[t._v("\n      "+t._s(t.$t("home.alternativeRegion",{country:t.altCountry}))+"\n      "),o("a",{attrs:{href:t.altDomain}},[t._v(t._s(t.altDomain))])]),t._v(" "),t._m(0)])])}),o,!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var o=n(247).default,r=n(29),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);