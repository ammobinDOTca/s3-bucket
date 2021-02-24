/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{155:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r;const template={dependencies:{"node-fetch":"^2.6.0",unfetch:"^4.1.0",vue:"^2.6.11","vue-client-only":"^2.0.0","vue-meta":"^2.3.3","vue-no-ssr":"^1.1.1","vue-router":"^3.1.6","vue-template-compiler":"^2.6.11",vuex:"^3.1.3"},dir:((r=n(87))&&"object"==typeof r&&"default"in r?r.default:r).join(t,"..","template"),files:["App.js","client.js","index.js","router.js","router.scrollBehavior.js","server.js","utils.js","empty.js","mixins/fetch.server.js","mixins/fetch.client.js","components/nuxt-error.vue","components/nuxt-child.js","components/nuxt-link.server.js","components/nuxt-link.client.js","components/nuxt.js","views/app.template.html","views/error.html"]};e.template=template}).call(this,"/")},156:function(t,e,n){t.exports=n.p+"img/c4ebc36.png"},157:function(t,e,n){},158:function(t,e,n){t.exports=n.p+"img/d5445df.png"},159:function(t,e,n){t.exports=n.p+"img/bad65a7.png"},160:function(t,e,n){"use strict";n(155)},162:function(t,e,n){t.exports=n.p+"img/eb5748f.svg"},163:function(t,e,n){"use strict";var r=n(157);n.n(r).a},173:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-y m-t-30"},[e("a",{attrs:{href:"https://www.thefirearmblog.com/blog/2017/08/13/%e2%9c%89tfbtv-mailbag-episode-4-new-hope?utm_src=ammobin.ca",target:"_blank",rel:"noopener",title:"TFBTV Mailbag Episode 4: A New Hope"}},[e("img",{attrs:{src:n(162),width:"100px",alt:"as seen on TFBTV"}})])])}],o=n(2),c=n(14),l=(n(160),function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c}),m=class extends c.c{constructor(){super(...arguments),this.topCalibres=[...["9MM","7.62X39MM","5.56 NATO","7.62 NATO","6.5MM CREEDMOOR","7MM-08 REMINGTON",".300 WEATHERBY MAGNUM"].map(t=>({itemType:"centerfire",subType:t})),{itemType:"rimfire",subType:".22 LR"},{itemType:"shotgun",subType:"12 GA"}]}},v=m=l([Object(c.a)({head(){return{title:this.$t("home.tagline")+" | ammobin.ca",meta:[{hid:"description",name:"description",content:this.$t("home.tagline")}]}},asyncData:t=>Object(o.a)((function*(){var{$axios:e}=t;try{return{vendorCount:(yield e.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{background}}",opName:"vendors"}})).data.data.vendors.length}}catch(t){console.error("landing error",t)}}))()})],m),d=(n(163),n(17)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"left hide-mobile"},[r("nuxt-link",{attrs:{to:"/"+this.$i18n.locale+"/ads"}},[r("img",{attrs:{src:n(158)}})])],1),t._v(" "),r("div",{staticClass:"right hide-mobile"},[r("nuxt-link",{attrs:{to:"/"+this.$i18n.locale+"/ads"}},[r("img",{attrs:{src:n(158)}})])],1),t._v(" "),r("div",{staticClass:"container"},[r("img",{staticClass:"pure-img img",attrs:{src:n(159),alt:"ammobin.ca logo"}}),t._v(" "),r("h1",{staticClass:"m-b-30"},[t._v("AmmoBin.ca")]),t._v(" "),r("h4",[t._v(t._s(t.$t("home.tagline")))]),t._v(" "),r("h4",[t._v("\n      "+t._s(t.$t("home.searching"))+"\n      "),r("nuxt-link",{attrs:{to:{path:"about#supportedRetailers"}}},[t._v(t._s(t.vendorCount)+" retailers")]),t._v("\n      "+t._s(t.$t("home.daily"))+"\n    ")],1),t._v(" "),r("div",{staticClass:"pure-g row"},[r("nuxt-link",{staticClass:"center show-mobile",attrs:{to:"/"+this.$i18n.locale+"/ads"}},[r("img",{staticClass:"pure-u-1",attrs:{src:n(156)}})])],1),t._v(" "),r("h2",{staticClass:"m-t-30 cap"},[t._v(t._s(t.$t("home.currentlyPopular")))]),t._v(" "),r("div",{staticClass:"pure-g row"},t._l(t.topCalibres,(function(e){return r("div",{key:e.subType,staticClass:"pure-u-md-1-3 pure-u-1 margin-y"},[r("nuxt-link",{attrs:{to:{path:e.itemType+"/"+e.subType}}},[t._v(t._s(e.subType))])],1)})),0),t._v(" "),t._m(0)])])}),r,!1,null,null,null);e.default=component.exports}}]);