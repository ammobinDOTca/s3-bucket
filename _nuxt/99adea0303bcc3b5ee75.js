(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{211:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=["ammo","centerfire","rimfire","shotgun"],o=[].concat(n,["reloading","powder","shot","case","primer"])},216:function(t,e,r){t.exports=r.p+"img/c4ebc36.png"},221:function(t,e,r){"use strict";(function(t){r(17),r(18),r(11),r(94),r(54),r(55);var n=r(207),o=r(51),c=r(96),l=r(52),d=r(53),v=r(29),f=r(14),m=r(23),h=r(211),y=r(230);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(e){Object(l.a)(v,e);var d=_(v);function v(){var t;return Object(o.a)(this,v),(t=d.apply(this,arguments)).showFilters=!0,t.provinces=[null,"AB","BC","MB","NB","NS","NL","NT","NU","ON","PE","QC","SK","YT"],t.defaultImg=r(139),t.brands=[null].concat(Object(n.a)(y.brands.map((function(t){return t[0]})).sort()),["UNKNOWN"]),t}return Object(c.a)(v,[{key:"itemClicked",value:function(link,t){var e=JSON.stringify({link:link,index:t,href:window.location.href,query:{itemType:this.itemType,subType:this.subType,page:this.page,pageSize:this.pageSize,province:this.province,vendor:this.vendor,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,brand:this.brand},itemType:this.itemType,subType:this.subType,page:this.page});navigator.sendBeacon?navigator.sendBeacon("https://ammobin.ca/api/track-click",e):this.$axios.post("https://ammobin.ca/api/track-click",e)}},{key:"sortBy",value:function(t){var e;e=t===this.sortField&&"DES"===this.sortOrder?"ASC":"DES",this.$emit("update:sortOrder",e),this.$emit("update:sortField",t)}},{key:"updateBrand",value:function(t){this.$emit("update:brand",t)}},{key:"updatePage",value:function(e){this.$emit("update:page",e),t((function(){return window.scroll(0,0)}))}},{key:"updatePageSize",value:function(t){this.$emit("update:pageSize",parseInt(t))}},{key:"updateProvince",value:function(t){this.$emit("update:province",t||null)}},{key:"updateVendor",value:function(t){this.$emit("update:vendor",t)}},{key:"updateQuery",value:function(t){this.$emit("update:query",t)}},{key:"toggleFilters",value:function(){this.showFilters=!this.showFilters}},{key:"isAmmoType",get:function(){return h.a.includes(this.itemType)}}]),v}(m.c);w([Object(m.b)()],O.prototype,"rows",void 0),w([Object(m.b)()],O.prototype,"pages",void 0),w([Object(m.b)()],O.prototype,"itemType",void 0),w([Object(m.b)()],O.prototype,"vendors",void 0),w([Object(m.b)()],O.prototype,"loading",void 0),w([Object(m.b)()],O.prototype,"page",void 0),w([Object(m.b)()],O.prototype,"subType",void 0),w([Object(m.b)()],O.prototype,"pageSize",void 0),w([Object(m.b)()],O.prototype,"province",void 0),w([Object(m.b)()],O.prototype,"vendor",void 0),w([Object(m.b)()],O.prototype,"query",void 0),w([Object(m.b)()],O.prototype,"sortField",void 0),w([Object(m.b)()],O.prototype,"sortOrder",void 0),w([Object(m.b)()],O.prototype,"brand",void 0),O=w([Object(m.a)({mounted:function(){this.showFilters=window.outerWidth>=759}})],O),e.a=O}).call(this,r(97).setImmediate)},222:function(t,e,r){},223:function(t,e,r){},238:function(t,e,r){"use strict";var n=r(222);r.n(n).a},239:function(t,e,r){"use strict";var n=r(223);r.n(n).a},240:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(94),r(22),r(11),r(32);var n=r(49),o=(r(54),r(55),r(21),r(51)),c=r(96),l=r(52),d=r(53),v=r(29),f=r(4),m=r(14),h=r(221).a,y=(r(238),r(28)),_=Object(y.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"pure-form pure-form-stacked"},[r("div",{staticClass:"pure-g"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-3",attrs:{id:"search"}},[r("label",{attrs:{for:"query"}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),r("input",{staticClass:"pure-input-1",attrs:{id:"query",placeholder:"ie: Barnaul, surplus, 00 Buck",disabled:t.loading},domProps:{value:t.query},on:{change:function(e){return t.updateQuery(e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pure-u-1 show-on-mobile"},[r("div",{staticClass:"active pure-button button-xsmall",on:{click:function(e){return t.toggleFilters()}}},[t._v("\n          "+t._s(t.$t(t.showFilters?"table.hideFilters":"table.showFilters"))+"\n          "),r("span",{staticClass:"arrow",class:{DES:!t.showFilters,ASC:t.showFilters}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilters,expression:"showFilters"}],staticClass:"pure-u-1 pure-u-md-2-3"},[r("div",{staticClass:"pure-u-1 pure-u-md-1-4"},[r("label",{attrs:{for:"province"}},[t._v(t._s(t.$t("table.province")))]),t._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"province",disabled:t.loading},domProps:{value:t.province},on:{change:function(e){return t.updateProvince(e.target.value)}}},t._l(t.provinces,(function(e){return r("option",{key:e},[t._v(t._s(e))])})),0)]),t._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",{attrs:{for:"vendor"}},[t._v(t._s(t.$t("table.vendor")))]),t._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"vendor",disabled:t.loading},domProps:{value:t.vendor},on:{change:function(e){return t.updateVendor(e.target.value)}}},t._l(t.vendors,(function(e){return r("option",{key:e},[t._v(t._s(e))])})),0)]),t._v(" "),r("div",{staticClass:"pure-u-1 pure-u-md-1-3 capitalize"},[r("label",{attrs:{for:"brand"}},[t._v(t._s(t.$t("table.brand")))]),t._v(" "),r("select",{staticClass:"pure-input-1",attrs:{id:"brand",disabled:t.loading},domProps:{value:t.brand},on:{change:function(e){return t.updateBrand(e.target.value)}}},t._l(t.brands,(function(e){return r("option",{key:e,staticClass:"capitalize"},[t._v(t._s(e))])})),0)])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.pages>0,expression:"pages > 0"}],staticClass:"pure-u-1 pure-u-md-1-3"},[r("label",[t._v(t._s(t.$t("table.page")))]),t._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page<=1||t.loading},on:{click:function(e){return t.updatePage(1)}}},[t._v("|<<")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page<=1||t.loading},on:{click:function(e){return t.updatePage(t.page-1)}}},[t._v("\n          <\n        ")]),t._v("\n        "+t._s(t.page)+" "+t._s(t.$t("table.of"))+" "+t._s(t.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page>=t.pages||t.loading},on:{click:function(e){return t.updatePage(t.page+1)}}},[t._v("\n          >\n        ")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page>=t.pages||t.loading},on:{click:function(e){return t.updatePage(t.pages)}}},[t._v("\n          >>|\n        ")])])])]),t._v(" "),r("div",{staticClass:"pure-g row"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-1"}),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"name"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("name")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.name"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-4 title",class:{active:"price"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("price")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.price"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"unitCost"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("unitCost")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.unitCost"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-1-4 title",class:{active:"link"==t.sortField},attrs:{disabled:t.loading},on:{click:function(e){return t.sortBy("link")}}},[r("h4",[t._v("\n        "+t._s(t.$t("table.link"))+"\n        "),r("span",{staticClass:"arrow",class:t.sortOrder})])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!(t.loading||t.rows&&0!==t.rows.length),expression:"!loading && (!rows || rows.length === 0)"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[t._v(t._s(t.$t("table.noResult")))])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"pure-g row fix-row"},[r("div",{staticClass:"pure-u-1"},[t._v(t._s(t.$t("default.loading"))+"...")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},t._l(t.rows,(function(e,n){return r("div",{key:e.link+n,staticClass:"pure-g row fix-row item"},[r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1 pure-u-1"},[r("img",{directives:[{name:"img-fallback",rawName:"v-img-fallback",value:t.defaultImg,expression:"defaultImg"}],staticClass:"pure-img img-cell",attrs:{src:e.img||t.defaultImg,alt:e.name,decoding:"async",importance:"low"}})]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1 capitalize"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("div",[t._v("$"+t._s(e.price.toFixed(2)))])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[e.unitCost?r("div",[t._v("$"+t._s(e.unitCost.toFixed(2)))]):r("div",{attrs:{if:"!row.minUnitCost"}},[t._v("N/A")])]),t._v(" "),r("div",{staticClass:"pure-u-lg-1-5 pure-u-md-1-4 pure-u-1 m-b-1"},[r("a",{attrs:{href:e.link,target:"_blank",rel:"nofollow noopener"},on:{click:function(r){return t.itemClicked(e.link,n)}}},[t._v(t._s(t.$t("table.buyFrom"))+" "+t._s(e.vendor))])])])})),0),t._v(" "),r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.pages>0,expression:"pages > 0"}],staticClass:"pure-u-lg-1-2 pure-u-1"},[r("div",[t._v(t._s(t.$t("table.page")))]),t._v(" "),r("div",[r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===t.page||t.loading},on:{click:function(e){return t.updatePage(1)}}},[t._v("\n          |<<\n        ")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:1===t.page||t.loading},on:{click:function(e){return t.updatePage(t.page-1)}}},[t._v("\n          <\n        ")]),t._v("\n        "+t._s(t.page)+" "+t._s(t.$t("table.of"))+" "+t._s(t.pages)+"\n        "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page===t.pages||t.loading},on:{click:function(e){return t.updatePage(t.page+1)}}},[t._v("\n          >\n        ")]),t._v(" "),r("button",{staticClass:"pure-button button-xsmall",attrs:{disabled:t.page===t.pages||t.loading},on:{click:function(e){return t.updatePage(t.pages)}}},[t._v("\n          >>|\n        ")])])])])])}),[],!1,null,null,null).exports,w=r(98),O=r(211),C=(r(205),r(23));function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c};function F(t,e){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c,l,d,v,f,m,h,y,_,w,O,C,k,j,F,T,x,$,R,S;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x=function(s){return s?'"'+s+'"':"null"},n=r.itemType,o=r.subType,c=r.page,l=void 0===c?1:c,d=r.pageSize,v=void 0===d?25:d,f=r.brand,m=void 0===f?null:f,h=r.province,y=void 0===h?null:h,_=r.vendor,w=void 0===_?null:_,O=r.query,C=void 0===O?null:O,k=r.sortField,j=void 0===k?"unitCost":k,F=r.sortOrder,T=void 0===F?"ASC":F,t.next=4,e.get("https://ammobin.ca/api/graphql",{params:{query:"{\nitemsFlatListings(\n page: ".concat(l,"\n itemType: ").concat(n,'\n subType: "').concat(o,'"\n brand:').concat(x(m),"\n province:").concat(y,"\n vendor:").concat(x(w),"\n query:").concat(x(C),"\n sortField:").concat(j,"\n sortOrder:").concat(T,"\n) {\n pages\n items {\n  name\n  brand\n  img\n  price\n  link\n  unitCost\n  vendor\n  }\n }\n}"),opName:"getItemsFlatListings",variables:{itemType:n,subType:o,page:l,pageSize:v,brand:m,province:y,vendor:w,query:C,sortField:j,sortOrder:T}}});case 4:return $=t.sent,R=$.data.data,S=R.itemsFlatListings,R.errors,t.abrupt("return",S);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=function(t){Object(l.a)(n,t);var e,r=k(n);function n(){var t;return Object(o.a)(this,n),(t=r.apply(this,arguments)).error=null,t.itemsFlatListings=null,t.loading=!1,t.page=1,t.province=null,t.pageSize=25,t.vendor=null,t.query=null,t.sortOrder="ASC",t.sortField="unitCost",t.brand=null,t}return Object(c.a)(n,[{key:"onQueryChange",value:(e=Object(f.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$nuxt.$loading.start(),t.prev=1,this.loading=!0,t.next=5,F(this.$axios,this);case 5:this.itemsFlatListings=t.sent,this.page>this.itemsFlatListings.pages&&(this.page=this.itemsFlatListings.pages||1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),this.error=t.t0;case 12:this.loading=!1,this.$nuxt.$loading.finish();case 14:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return e.apply(this,arguments)})},{key:"area",get:function(){return this.province||"Canada"}},{key:"isAmmoType",get:function(){return O.a.includes(this.itemType)}},{key:"subType",get:function(){return this.$route.params.subType}},{key:"itemType",get:function(){return this.$route.params.itemType}}]),n}(C.c);j([Object(C.d)("page"),Object(C.d)("province"),Object(C.d)("pageSize"),Object(C.d)("vendor"),Object(C.d)("query"),Object(C.d)("sortOrder"),Object(C.d)("sortField"),Object(C.d)("brand")],x.prototype,"onQueryChange",null);var $=x=j([Object(C.a)({validate:function(t){var e=t.params;return O.b.includes(e.itemType)},asyncData:function(t){return Object(f.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,v,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.route.params,c=o.itemType,l=o.subType,e.next=3,Promise.all([F(r,{itemType:c,subType:l}),r.get("https://ammobin.ca/api/graphql",{params:{query:"{vendors{name}}",opName:"vendors"}}).then((function(t){return t.data.data.vendors}))]);case 3:return d=e.sent,v=Object(n.a)(d,2),f=v[0],m=v[1],e.abrupt("return",{vendors:m,itemsFlatListings:f});case 8:case"end":return e.stop()}}),e)})))()},components:{FlatList:_},head:function(){var link=[],t="https://ammobin.ca/".concat(this.$i18n.locale,"/").concat(this.itemType,"/").concat(this.subType);this.page>1&&link.push({rel:"prev",href:Object(w.a)(t,this.page-1,this.subType)}),this.itemsFlatListings&&this.itemsFlatListings.pages>this.page&&link.push({rel:"next",href:Object(w.a)(t,this.page+1,this.subType)});var area=this.area,e=this.subType;return{title:this.$t("subType.title",{area:area,subType:e})+" | ammobin.ca",meta:[{hid:"description",name:"description",content:this.$t("subType.description",{area:area,subType:e})}],link:link}}})],x),R=(r(239),Object(y.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.isAmmoType?t._e():n("div",[t._v(t._s(t.$t("default.betaWarning")))]),t._v(" "),n("h1",[t._v(t._s(t.$t("subType.title",{area:t.area,subType:t.subType})))]),t._v(" "),n("div",{staticClass:"pure-g row"},[n("nuxt-link",{staticClass:"center",attrs:{to:"/"+this.$i18n.locale+"/ads"}},[n("img",{staticClass:"pure-u-1",attrs:{src:r(216)}})])],1),t._v(" "),n("flat-list",{directives:[{name:"show",rawName:"v-show",value:!t.error,expression:"!error"}],attrs:{rows:t.itemsFlatListings?t.itemsFlatListings.items:[],pages:t.itemsFlatListings?t.itemsFlatListings.pages:0,"item-type":t.itemType,subType:t.subType,vendors:[null].concat((t.vendors||[]).map((function(i){return i.name}))),loading:!t.itemsFlatListings||t.loading,page:t.page,pageSize:t.pageSize,province:t.province,vendor:t.vendor,query:t.query,sortField:t.sortField,sortOrder:t.sortOrder,brand:t.brand},on:{"update:page":function(e){t.page=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"update:province":function(e){t.province=e},"update:vendor":function(e){t.vendor=e},"update:query":function(e){t.query=e},"update:sortField":function(e){t.sortField=e},"update:sort-field":function(e){t.sortField=e},"update:sortOrder":function(e){t.sortOrder=e},"update:sort-order":function(e){t.sortOrder=e},"update:brand":function(e){t.brand=e}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[t._v("ERROR "+t._s(t.error))])],1)}),[],!1,null,"6da739dd",null));e.default=R.exports}}]);