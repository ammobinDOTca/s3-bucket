(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{258:function(t,e,r){t.exports=r.p+"img/homepage - ammobin.0e99e22.png"},259:function(t,e,r){t.exports=r.p+"img/9mm ad - ammobin.e6c3d1d.png"},260:function(t,e,r){t.exports=r.p+"img/12 ga ad -1 - ammobin.b37e9ea.png"},261:function(t,e,r){t.exports=r.p+"img/12 ga ad - 2 - ammobin.34f698d.png"},262:function(t,e,r){t.exports=r.p+"img/Centerfire ad - ammobin.694cdfb.png"},263:function(t,e,r){t.exports=r.p+"img/Shotgun ad - ammobin.32807f5.png"},264:function(t,e,r){t.exports=r.p+"img/TEST_SIDE.d5445df.png"},265:function(t,e,r){t.exports=r.p+"img/TEST_TOP.c4ebc36.png"},266:function(t,e,r){"use strict";r(48),r(129),r(65);var n=r(35),o=r(63),c=r(61),l=r(62),d=r(36),v=r(8),f=r(30),m=(r(84),function(t){return"utm_source=".concat("ammobin.ca","&utm_campaign=").concat(t)});function h(t,e){var n=e.LANG,o=e.itemType,c=e.subType,l="/".concat(n,"/sponsorship");if("LANG"===t||"index"===t)return{img:r(258),href:"https://canadafirstammo.ca/?".concat(m("homepage"))};switch(c){case"9MM":return{img:r(259),href:"https://canadafirstammo.ca/fh-munitions-reloads-9x19mm/?".concat(m(c))};case"12 GA":return Math.random()>.5?{img:r(260),href:"https://canadafirstammo.ca/score-12-ga-waterfowl-loads-bb-2-4/?".concat(m(c))}:{img:r(261),href:"https://canadafirstammo.ca/score-12-ga-waterfowl-loads-bb-2-4/?".concat(m(c))};case null:case void 0:switch(o){case"centerfire":return{img:r(262),href:"https://canadafirstammo.ca/ammunition/?".concat(m("centerfire"))};case"shotgun":return{img:r(263),href:"https://canadafirstammo.ca/ammunition/shotgun/?".concat(m("shotgun"))}}}return"LANG"===t||"index"===t?{img:r(264),href:l}:{img:r(265),href:l}}var y=r(15),_=r.n(y);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=O(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).config=h(t.$route.name,t.$route.params),t}return Object(o.a)(r,[{key:"trackClick",value:function(){if(!window.navigator.doNotTrack){var t="https://ammobin.ca/api/track-sponsor-click",data={href:window.location.href,target:this.href,ua:navigator.userAgent};navigator.sendBeacon?navigator.sendBeacon(t,JSON.stringify(data)):_.a.post(t,data)}}},{key:"href",get:function(){return this.config.href}},{key:"img",get:function(){return this.config.img}},{key:"linkToSponsorPage",get:function(){return this.config.href.startsWith("ammobin.ca")}}]),r}(f.c),k=j=w([Object(f.a)({})],j),C=r(34),component=Object(C.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return this.linkToSponsorPage?e("nuxt-link",{staticClass:"center",attrs:{to:this.href}},[e("img",{staticClass:"pure-u-1",attrs:{src:this.img}})]):e("a",{staticClass:"center",attrs:{href:this.href,rel:"sponsored",target:"_blank"},on:{click:this.trackClick}},[e("img",{staticClass:"pure-u-1",attrs:{src:this.img}})])}),[],!1,null,null,null);e.a=component.exports},273:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));r(84);var n=["ammo","centerfire","rimfire","shotgun"],o=[].concat(n,["reloading","powder","shot","case","primer"])},279:function(t,e,r){"use strict";(function(t){r(84),r(49),r(29),r(129),r(50),r(180);var n=r(27),o=r(267),c=r(35),l=r(63),d=r(61),v=r(62),f=r(36),m=r(8),h=r(30),y=r(273),_=r(292);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(v.a)(this,r)}}var k=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},C=function(e){Object(d.a)(v,e);var n=j(v);function v(){var t;return Object(c.a)(this,v),(t=n.apply(this,arguments)).showFilters=!0,t.provinces=[null,"AB","BC","MB","NB","NS","NL","NT","NU","ON","PE","QC","SK","YT"],t.defaultImg=r(181),t.brands=[null].concat(Object(o.a)(_.brands.map((function(t){return t[0]})).sort()),["UNKNOWN"]),t}return Object(l.a)(v,[{key:"itemClicked",value:function(link,t){if(!window.navigator.doNotTrack){var e=JSON.stringify({link:link,index:t,href:window.location.href,query:{itemType:this.itemType,subType:this.subType,page:this.page,pageSize:this.pageSize,province:this.province,vendor:this.vendor,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,brand:this.brand},itemType:this.itemType,subType:this.subType,page:this.page,record:w({subType:this.subType,itemType:this.itemType},this.rows[t])});navigator.sendBeacon?navigator.sendBeacon("https://ammobin.ca/api/track-click",e):this.$axios.post("https://ammobin.ca/api/track-click",e)}}},{key:"sortBy",value:function(t){var e;e=t===this.sortField&&"DES"===this.sortOrder?"ASC":"DES",this.$emit("update:sortOrder",e),this.$emit("update:sortField",t)}},{key:"updateBrand",value:function(t){this.$emit("update:brand",t)}},{key:"updatePage",value:function(e){this.$emit("update:page",e),t((function(){return window.scroll(0,0)}))}},{key:"updatePageSize",value:function(t){this.$emit("update:pageSize",parseInt(t))}},{key:"updateProvince",value:function(t){this.$emit("update:province",t||null)}},{key:"updateVendor",value:function(t){this.$emit("update:vendor",t)}},{key:"updateQuery",value:function(t){this.$emit("update:query",t)}},{key:"toggleFilters",value:function(){this.showFilters=!this.showFilters}},{key:"isAmmoType",get:function(){return y.a.includes(this.itemType)}}]),v}(h.c);k([Object(h.b)()],C.prototype,"rows",void 0),k([Object(h.b)()],C.prototype,"pages",void 0),k([Object(h.b)()],C.prototype,"itemType",void 0),k([Object(h.b)()],C.prototype,"vendors",void 0),k([Object(h.b)()],C.prototype,"loading",void 0),k([Object(h.b)()],C.prototype,"page",void 0),k([Object(h.b)()],C.prototype,"subType",void 0),k([Object(h.b)()],C.prototype,"pageSize",void 0),k([Object(h.b)()],C.prototype,"province",void 0),k([Object(h.b)()],C.prototype,"vendor",void 0),k([Object(h.b)()],C.prototype,"query",void 0),k([Object(h.b)()],C.prototype,"sortField",void 0),k([Object(h.b)()],C.prototype,"sortOrder",void 0),k([Object(h.b)()],C.prototype,"brand",void 0),C=k([Object(h.a)({mounted:function(){this.showFilters=window.outerWidth>=759}})],C),e.a=C}).call(this,r(131).setImmediate)},283:function(t,e,r){},284:function(t,e,r){},300:function(t,e,r){"use strict";r(283)},301:function(t,e,r){"use strict";r(284)},302:function(t,e,r){"use strict";r.r(e);r(84),r(49),r(129),r(10),r(50),r(38),r(51);var n=r(16),o=(r(37),r(35)),c=r(63),l=r(61),d=r(62),v=r(36),f=r(6),m=r(8),h=r(279).a,y=(r(300),r(34)),_=Object(y.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"pure-form pure-form-stacked"},[r("div",{staticClass:"pure-g"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-3",attrs:{id:"search"}},[r("label",{attrs:{for:"query"}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),r("input",{staticClass:"pure-input-1",attrs:{id:"query",placeholder:"ie: Barnaul, surplus, 00 Buck",disabled:t.loading},domProps:{value:t.query},on:{change:function(e){return t.updateQuery(e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pure-u-1 show-on-mobile"},[r("div",{staticClass:"active pure-button button-xsmall",on:{click:function(e){return t.toggleFilters()}}},[t._v("\n          "+t._s(t.$t(t.showFilters?"table.hideFilters":"table.showFilters"))+"\n          "),r("span",{staticClass:"arrow",class:{DES:!t.showFilters,ASC:t.showFilters}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilters,expression:"showFilters"}],staticClass:"pure-u-1 pure-u-md-2-3"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-4"},[r("label",{attrs:{for:"province"}},[t._v(t._s(t.$t("table.province")))]),t._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"province",disabled:t.loading},domProps:{value:t.province},on:{change:function(e){return t.updateProvince(e.target.value)}}},t._l(t.provinces,(function(e){return r("option",{key:e},[t._v(t._s(e))])})),0)]),t._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",{attrs:{for:"vendor"}},[t._v(t._s(t.$t("table.vendor")))]),t._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"vendor",disabled:t.loading},domProps:{value:t.vendor},on:{change:function(e){return t.updateVendor(e.target.value)}}},t._l(t.vendors,(function(e){return r("option",{key:e},[t._v(t._s(e))])})),0)]),t._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3 capitalize"},[r("label",{attrs:{for:"brand"}},[t._v(t._s(t.$t("table.brand")))]),t._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"brand",disabled:t.loading},domProps:{value:t.brand},on:{change:function(e){return t.updateBrand(e.target.value)}}},t._l(t.brands,(function(e){return r("option",{key:e,staticClass:"capitalize"},[t._v("\n              "+t._s(e)+"\n            ")])})),0)])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.pages>0,expression:"pages > 0"}],staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",[t._v(t._s(t.$t("table.page")))]),t._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page<=1||t.loading},on:{click:function(e){return t.updatePage(1)}}},[t._v("\n          |<<\n        ")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page<=1||t.loading},on:{click:function(e){return t.updatePage(t.page-1)}}},[t._v("\n          <\n        ")]),t._v("\n        "+t._s(t.page)+" "+t._s(t.$t("table.of"))+" "+t._s(t.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page>=t.pages||t.loading},on:{click:function(e){return t.updatePage(t.page+1)}}},[t._v("\n          >\n        ")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page>=t.pages||t.loading},on:{click:function(e){return t.updatePage(t.pages)}}},[t._v("\n          >>|\n        ")])])])]),t._v(" "),r("div",{staticClass:"pure-g row"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-1"}),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"name"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("name")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.name"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"price"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("price")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.price"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"unitCost"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("unitCost")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.unitCost"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"link"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("link")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.link"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!(t.loading||t.rows&&0!==t.rows.length),expression:"!loading && (!rows || rows.length === 0)"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[t._v(t._s(t.$t("table.noResult")))])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[t._v(t._s(t.$t("default.loading"))+"...")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},t._l(t.rows,(function(e,n){return r("div",{key:e.link+n,staticClass:"pure-g row fix-row item"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1 pure-u-1"},[r("img",{directives:[{name:"img-fallback",rawName:"v-img-fallback",value:t.defaultImg,expression:"defaultImg"}],staticClass:"pure-img img-cell",attrs:{src:e.img||t.defaultImg,alt:e.name,loading:"lazy",referrerpolicy:"origin",decoding:"async",importance:"low"}})]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1 capitalize"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("div",[t._v("$"+t._s(e.price.toFixed(2)))])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[e.unitCost?r("div",[t._v("$"+t._s(e.unitCost.toFixed(2)))]):r("div",{attrs:{if:"!row.minUnitCost"}},[t._v("N/A")])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("a",{attrs:{href:e.link,target:"_blank",rel:"nofollow noopener"},on:{click:function(r){return t.itemClicked(e.link,n)}}},[t._v(t._s(t.$t("table.buyFrom"))+" "+t._s(e.vendor))])])])})),0),t._v(" "),r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.pages>0,expression:"pages > 0"}],staticClass:"pure-u-lg-1-2 pure-u-1"},[r("div",[t._v(t._s(t.$t("table.page")))]),t._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===t.page||t.loading},on:{click:function(e){return t.updatePage(1)}}},[t._v("\n          |<<\n        ")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===t.page||t.loading},on:{click:function(e){return t.updatePage(t.page-1)}}},[t._v("\n          <\n        ")]),t._v("\n        "+t._s(t.page)+" "+t._s(t.$t("table.of"))+" "+t._s(t.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page===t.pages||t.loading},on:{click:function(e){return t.updatePage(t.page+1)}}},[t._v("\n          >\n        ")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page===t.pages||t.loading},on:{click:function(e){return t.updatePage(t.pages)}}},[t._v("\n          >>|\n        ")])])])])])}),[],!1,null,null,null).exports,O=r(266),w=r(64),j=r(273),k=(r(257),r(30));function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var T=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c};function x(t,e){return F.apply(this,arguments)}function F(){return(F=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c,l,d,v,f,m,h,y,_,O,w,j,k,C,T,x,F,$,P,R;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F=function(s){return s?'"'+s+'"':"null"},n=r.itemType,o=r.subType,c=r.page,l=void 0===c?1:c,d=r.pageSize,v=void 0===d?25:d,f=r.brand,m=void 0===f?null:f,h=r.province,y=void 0===h?null:h,_=r.vendor,O=void 0===_?null:_,w=r.query,j=void 0===w?null:w,k=r.sortField,C=void 0===k?"unitCost":k,T=r.sortOrder,x=void 0===T?"ASC":T,t.next=4,e.get("https://ammobin.ca/api/graphql",{params:{query:"{\nitemsFlatListings(\n page: ".concat(l,"\n itemType: ").concat(n,'\n subType: "').concat(o,'"\n brand:').concat(F(m),"\n province:").concat(y,"\n vendor:").concat(F(O),"\n query:").concat(F(j),"\n sortField:").concat(C,"\n sortOrder:").concat(x,"\n) {\n pages\n items {\n  name\n  brand\n  img\n  price\n  link\n  unitCost\n  vendor\n  }\n }\n}"),opName:"getItemsFlatListings",variables:{itemType:n,subType:o,page:l,pageSize:v,brand:m,province:y,vendor:O,query:j,sortField:C,sortOrder:x}}});case 4:return $=t.sent,P=$.data.data,R=P.itemsFlatListings,P.errors,t.abrupt("return",R);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var $=function(t){Object(l.a)(n,t);var e,r=C(n);function n(){var t;return Object(o.a)(this,n),(t=r.apply(this,arguments)).error=null,t.itemsFlatListings=null,t.loading=!1,t.page=1,t.province=null,t.pageSize=25,t.vendor=null,t.query=null,t.sortOrder="ASC",t.sortField="unitCost",t.brand=null,t}return Object(c.a)(n,[{key:"onQueryChange",value:(e=Object(f.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$nuxt.$loading.start(),t.prev=1,this.loading=!0,t.next=5,x(this.$axios,this);case 5:this.itemsFlatListings=t.sent,this.page>this.itemsFlatListings.pages&&(this.page=this.itemsFlatListings.pages||1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),this.error=t.t0;case 12:this.loading=!1,this.$nuxt.$loading.finish();case 14:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return e.apply(this,arguments)})},{key:"area",get:function(){return this.province||Object(w.a)()}},{key:"isAmmoType",get:function(){return j.a.includes(this.itemType)}},{key:"subType",get:function(){return this.$route.params.subType}},{key:"itemType",get:function(){return this.$route.params.itemType}}]),n}(k.c);T([Object(k.d)("page"),Object(k.d)("province"),Object(k.d)("pageSize"),Object(k.d)("vendor"),Object(k.d)("query"),Object(k.d)("sortOrder"),Object(k.d)("sortField"),Object(k.d)("brand")],$.prototype,"onQueryChange",null);var P=$=T([Object(k.a)({validate:function(t){var e=t.params;return j.b.includes(e.itemType)},asyncData:function(t){return Object(f.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,v,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.route.params,c=o.itemType,l=o.subType,e.next=3,Promise.all([x(r,{itemType:c,subType:l}),r.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{name}}",opName:"vendors"}}).then((function(t){return t.data.data.vendors}))]);case 3:return d=e.sent,v=Object(n.a)(d,2),f=v[0],m=v[1],e.abrupt("return",{vendors:m,itemsFlatListings:f});case 8:case"end":return e.stop()}}),e)})))()},components:{FlatList:_,Sponsorship:O.a},head:function(){var link=[],t="".concat("https://ammobin.ca","/").concat(this.$i18n.locale,"/").concat(this.itemType,"/").concat(this.subType);this.page>1&&link.push({rel:"prev",href:Object(w.c)(t,this.page-1,this.subType)}),this.itemsFlatListings&&this.itemsFlatListings.pages>this.page&&link.push({rel:"next",href:Object(w.c)(t,this.page+1,this.subType)});var area=this.area,e=this.subType;return{title:this.$t("subType.title",{area:area,subType:e})+" | ".concat("ammobin.ca"),meta:[{hid:"description",name:"description",content:this.$t("subType.description",{area:area,subType:e})}],link:link}}})],$),R=(r(301),Object(y.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.isAmmoType?t._e():r("div",[t._v(t._s(t.$t("default.betaWarning")))]),t._v(" "),r("h1",[t._v(t._s(t.$t("subType.title",{area:t.area,subType:t.subType})))]),t._v(" "),r("div",{staticClass:"pure-g row"},[r("sponsorship")],1),t._v(" "),r("flat-list",{directives:[{name:"show",rawName:"v-show",value:!t.error,expression:"!error"}],attrs:{rows:t.itemsFlatListings?t.itemsFlatListings.items:[],pages:t.itemsFlatListings?t.itemsFlatListings.pages:0,"item-type":t.itemType,subType:t.subType,vendors:[null].concat((t.vendors||[]).map((function(i){return i.name}))),loading:!t.itemsFlatListings||t.loading,page:t.page,pageSize:t.pageSize,province:t.province,vendor:t.vendor,query:t.query,sortField:t.sortField,sortOrder:t.sortOrder,brand:t.brand},on:{"update:page":function(e){t.page=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"update:province":function(e){t.province=e},"update:vendor":function(e){t.vendor=e},"update:query":function(e){t.query=e},"update:sortField":function(e){t.sortField=e},"update:sort-field":function(e){t.sortField=e},"update:sortOrder":function(e){t.sortOrder=e},"update:sort-order":function(e){t.sortOrder=e},"update:brand":function(e){t.brand=e}}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[t._v("ERROR "+t._s(t.error))])],1)}),[],!1,null,"1871f703",null));e.default=R.exports}}]);