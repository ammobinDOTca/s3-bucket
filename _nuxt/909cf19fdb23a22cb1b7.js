(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r;const template={dependencies:{"node-fetch":"^2.6.0",unfetch:"^4.1.0",vue:"^2.6.11","vue-client-only":"^2.0.0","vue-meta":"^2.3.1","vue-no-ssr":"^1.1.1","vue-router":"^3.1.3","vue-template-compiler":"^2.6.11",vuex:"^3.1.2"},dir:((r=n(85))&&"object"==typeof r&&"default"in r?r.default:r).join(e,"..","template"),files:["App.js","client.js","index.js","router.js","router.scrollBehavior.js","server.js","utils.js","empty.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};t.template=template}).call(this,"/")},155:function(e,t,n){},159:function(e,t,n){e.exports=n.p+"img/bad65a7.png"},160:function(e,t,n){"use strict";n(154)},176:function(e,t,n){e.exports=n.p+"img/eb5748f.svg"},177:function(e,t,n){"use strict";var r=n(155);n.n(r).a},220:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"margin-y m-t-30"},[t("a",{attrs:{href:"https://www.thefirearmblog.com/blog/2017/08/13/%e2%9c%89tfbtv-mailbag-episode-4-new-hope?utm_src=ammobin.ca",target:"_blank",rel:"noopener",title:"TFBTV Mailbag Episode 4: A New Hope"}},[t("img",{attrs:{src:n(176),width:"100px",alt:"as seen on TFBTV"}})])])}],o=n(2),c=n(42),l=(n(160),class extends c.c{constructor(){super(...arguments),this.topCalibres=[...["9MM","7.62X39MM","5.56 NATO","7.62 NATO","6.5MM CREEDMOOR","7MM-08 REMINGTON",".300 WEATHERBY MAGNUM"].map(e=>({itemType:"centerfire",subType:e})),{itemType:"rimfire",subType:".22 LR"},{itemType:"shotgun",subType:"12 GA"}]}}),m=l=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c}([Object(c.a)({head(){return{title:this.$t("home.tagline")+" | ammobin.ca",meta:[{hid:"description",name:"description",content:this.$t("home.tagline")}]}},asyncData:e=>Object(o.a)((function*(){var{$axios:t}=e;return{vendorCount:(yield t.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{background}}",opName:"vendors"}})).data.data.vendors.length}}))()})],l),v=(n(177),n(16)),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("img",{staticClass:"pure-img img",attrs:{src:n(159),alt:"ammobin.ca logo"}}),e._v(" "),r("h1",{staticClass:"m-b-30"},[e._v("AmmoBin.ca")]),e._v(" "),r("h4",[e._v(e._s(e.$t("home.tagline")))]),e._v(" "),r("h4",[e._v("\n    "+e._s(e.$t("home.searching"))+"\n    "),r("nuxt-link",{attrs:{to:{path:"about#supportedRetailers"}}},[e._v(e._s(e.vendorCount)+" retailers")]),e._v("\n    "+e._s(e.$t("home.daily"))+"\n  ")],1),e._v(" "),r("h2",{staticClass:"m-t-30 cap"},[e._v(e._s(e.$t("home.currentlyPopular")))]),e._v(" "),r("div",{staticClass:"pure-g row"},e._l(e.topCalibres,(function(t){return r("div",{key:t.subType,staticClass:"pure-u-md-1-3 pure-u-1 margin-y"},[r("nuxt-link",{attrs:{to:{path:t.itemType+"/"+t.subType}}},[e._v(e._s(t.subType))])],1)})),0),e._v(" "),e._m(0)])}),r,!1,null,null,null);t.default=component.exports}}]);