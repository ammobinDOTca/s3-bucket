(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{200:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r;const template={dependencies:{"node-fetch":"^2.6.0",unfetch:"^4.1.0",vue:"^2.6.10","vue-client-only":"^2.0.0","vue-meta":"^2.3.1","vue-no-ssr":"^1.1.1","vue-router":"~3.0.7","vue-template-compiler":"^2.6.10",vuex:"^3.1.1"},dir:((r=n(55))&&"object"==typeof r&&"default"in r?r.default:r).join(t,"..","template"),files:["App.js","client.js","index.js","router.js","router.scrollBehavior.js","server.js","utils.js","empty.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};e.template=template}).call(this,"/")},201:function(t,e,n){},202:function(t,e,n){t.exports=n.p+"img/bad65a7.png"},203:function(t,e,n){"use strict";n(200)},204:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return r}))},206:function(t,e,n){t.exports=n.p+"img/8f134b5.svg"},207:function(t,e,n){"use strict";var r=n(201);n.n(r).a},211:function(t,e,n){"use strict";n.r(e);var r,o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-y m-t-30"},[e("a",{attrs:{href:"https://www.thefirearmblog.com/blog/2017/08/13/%e2%9c%89tfbtv-mailbag-episode-4-new-hope?utm_src=ammobin.ca",target:"_blank",rel:"noopener",title:"TFBTV Mailbag Episode 4: A New Hope"}},[e("img",{attrs:{src:n(206),width:"100px",alt:"as seen on TFBTV"}})])])}],c=(n(30),n(5)),l=n(204),m=n(85),f=n(87),v=n(86),d=n(88),h=n(13),y=n(56),j=(n(203),function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c}),_=function(t){function e(){var t;return Object(m.a)(this,e),(t=Object(f.a)(this,Object(v.a)(e).apply(this,arguments))).topCalibres=[].concat(Object(l.a)(["9MM","7.62X39MM","5.56 NATO","7.62 NATO","6.5MM CREEDMOOR","7MM-08 REMINGTON",".300 WEATHERBY MAGNUM"].map((function(t){return{itemType:"centerfire",subType:t}}))),[{itemType:"rimfire",subType:".22 LR"},{itemType:"shotgun",subType:"12 GA"}]),t}return Object(d.a)(e,t),e}(y.c),w=_=j([Object(y.a)({head:function(){return{title:this.$t("home.tagline")+" | ammobin.ca",meta:[{hid:"description",name:"description",content:this.$t("home.tagline")}]}},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.get("https://aws.ammobin.ca/api/graphql",{params:{query:"{vendors{background}}"}});case 3:return r=t.sent,t.abrupt("return",{vendorCount:r.data.data.vendors.length});case 5:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})})],_),O=(n(207),n(23)),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("img",{staticClass:"pure-img img",attrs:{src:n(202),alt:"ammobin.ca logo"}}),t._v(" "),r("h1",{staticClass:"m-b-30"},[t._v("AmmoBin.ca")]),t._v(" "),r("h4",[t._v(t._s(t.$t("home.tagline")))]),t._v(" "),r("h4",[t._v("\n    "+t._s(t.$t("home.searching"))+"\n    "),r("nuxt-link",{attrs:{to:{path:"about#supportedRetailers"}}},[t._v(t._s(t.vendorCount)+" retailers")]),t._v("\n    "+t._s(t.$t("home.daily"))+"\n  ")],1),t._v(" "),r("h2",{staticClass:"m-t-30 cap"},[t._v(t._s(t.$t("home.currentlyPopular")))]),t._v(" "),r("div",{staticClass:"pure-g row"},t._l(t.topCalibres,(function(e){return r("div",{key:e.subType,staticClass:"pure-u-md-1-3 pure-u-1 margin-y"},[r("nuxt-link",{attrs:{to:{path:e.itemType+"/"+e.subType}}},[t._v(t._s(e.subType))])],1)})),0),t._v(" "),t._m(0)])}),o,!1,null,null,null);e.default=component.exports},222:function(t,e,n){"use strict";n.r(e);var r=n(211).default,o=n(23),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);