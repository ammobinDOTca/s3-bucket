(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){"use strict";var r=n(1),o=n(138);r.a.use(o.a),t.a=function(e){var t=e.app,r=e.store;t.i18n=new o.a({locale:r.state.locale,fallbackLocale:"en",messages:{en:n(286),fr:n(287)}})}},139:function(e,t,n){"use strict";var r=n(1),o=n(195);r.a.use(o.a,{error:n(198)})},140:function(e,t,n){"use strict";n(61),n(23)},141:function(e,t,n){"use strict";n(23)},185:function(e,t,n){e.exports={}},194:function(e,t,n){"use strict";var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"fork-me-hard-dady",attrs:{href:"https://github.com/ammobindotca",target:"_blank",rel:"noopener"}},[t("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:n(258),alt:"Fork me on GitHub",title:"Fork me on GitHub"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:"https://github.com/ammobindotca",target:"_blank",rel:"noopener"}},[e._v("github")]),e._v("\n      |\n      "),n("a",{attrs:{href:"https://stats.uptimerobot.com/XQOLXC1p2",target:"_blank",rel:"noopener"}},[e._v("status")])])}],o=(n(142),n(53)),c=n(81),l=n(78),d=n(79),m=n(54),f=n(12),h=(n(41),n(259),n(43)),v=n(82);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var k=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},C=function(e){Object(l.a)(n,e);var t=y(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).DOMAIN="ammobin.ca",e.REGION="CA",e.isCA=!0,e.isUS=!1,e.mail="mailto:contact@ammobin.ca",e}return Object(c.a)(n,[{key:"currentPage",get:function(){return this.$route.path}},{key:"path",value:function(e){return"/"+this.$i18n.locale+e}}]),n}(h.c),_=C=k([Object(h.a)({head:function(){return{title:"ammobin.ca",meta:[{hid:"description",name:"description",content:this.$t("home.tagline",{country:Object(v.a)()})}],htmlAttrs:{lang:this.$i18n.locale||"en"},__dangerouslyDisableSanitizers:["script"],script:[{innerHTML:JSON.stringify({"@context":"http://schema.org","@type":"Person",name:"ammobin.ca",url:"https://ammobin.ca",sameAs:["https://github.com/ammobindotca","https://www.instagram.com/ammobin.ca"]}),type:"application/ld+json"}]}}})],C),w=(n(263),n(52)),component=Object(w.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main",class:{ca:e.isCA,us:e.isUS}},[e._m(0),e._v(" "),n("div",{staticClass:"pure-menu pure-menu-horizontal pure-menu-scrollable light-grey"},[n("ul",{staticClass:"pure-menu-list"},[n("li",{staticClass:"pure-menu-item",class:{"pure-menu-selected":"/"===e.currentPage}},[n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:e.path("/")}},[e._v("\n          "+e._s(e.DOMAIN)+"\n        ")])],1),e._v(" "),n("li",{staticClass:"pure-menu-item",class:{"pure-menu-selected":"/centerfire"===e.currentPage}},[n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:e.path("/centerfire")}},[e._v(e._s(e.$t("default.centerfire")))])],1),e._v(" "),n("li",{staticClass:"pure-menu-item",class:{"pure-menu-selected":"/shotgun"===e.currentPage}},[n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:e.path("/shotgun")}},[e._v(e._s(e.$t("default.shotgun")))])],1),e._v(" "),n("li",{staticClass:"pure-menu-item",class:{"pure-menu-selected":"/rimfire"===e.currentPage}},[n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:e.path("/rimfire")}},[e._v(e._s(e.$t("default.rimfire")))])],1),e._v(" "),"CA"===e.REGION?n("li",{staticClass:"pure-menu-item",class:{"pure-menu-selected":"/reloading"===e.currentPage}},[n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:e.path("/reloading")}},[e._v(e._s(e.$t("default.reloading"))+" (BETA)")])],1):e._e(),e._v(" "),n("li",{staticClass:"pure-menu-item",class:{"pure-menu-selected":"/about"===e.currentPage}},[n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:e.path("/about")}},[e._v(e._s(e.$t("default.about")))])],1),e._v(" "),"CA"===e.REGION?n("li",{staticClass:"pure-menu-item"},["en"===e.$i18n.locale?n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:"/"===e.$route.fullPath?"/fr":e.$route.fullPath.replace("/en","/fr"),"active-class":"none",exact:""}},[e._v(e._s(e.$t("links.french")))]):n("nuxt-link",{staticClass:"pure-menu-link",attrs:{to:e.$route.fullPath.replace("/fr","/en"),"active-class":"none",exact:""}},[e._v(e._s(e.$t("links.english")))])],1):e._e()])]),e._v(" "),n("nuxt"),e._v(" "),n("footer",{staticClass:"footer"},[e._v("\n    "+e._s(e.DOMAIN)+" "+e._s((new Date).getFullYear())+"\n    "),n("a",{attrs:{href:e.mail}},[e._v("Contact")]),e._v(" "),n("div",[e._v("BTC: bc1q99354qy5n2pq7y8hqnsttql8crjs0eugx6upvh")]),e._v(" "),e._m(1)])],1)}),r,!1,null,null,null);t.a=component.exports},198:function(e,t,n){e.exports=n.p+"img/blank.f899f23.png"},199:function(e,t,n){e.exports=n(200)},219:function(e,t,n){"use strict";n.r(t);n(42),n(62),n(171),n(103);t.default=function(e){var t=e.isHMR,n=e.app,r=e.store,o=e.route,c=e.params,l=(e.error,e.redirect);e.req,e.res;if(!t&&!o.path.startsWith("/api")){c.LANG&&c.LANG;var d=o.path.startsWith("/fr")?"fr":"en";return-1===r.state.locales.indexOf(d)&&(d="en"),r.commit("SET_LANG",d),n.i18n.locale=r.state.locale,"en"!==d||o.fullPath.startsWith("/en")||"/"===o.fullPath?void 0:l("/en"+o.fullPath)}}},220:function(e,t,n){"use strict";n.r(t),function(e){n(197);var r=n(23),o=n.n(r);t.default=function(t){var n=t.route;if(!window.navigator.doNotTrack)try{var r=JSON.stringify({route:n.path}),c="track-pageview";"undefined"!=typeof navigator&&navigator.sendBeacon?navigator.sendBeacon("https://ammobin.ca/api/"+c,r):e((function(){return o.a.post("https://ammobin.ca/api/"+c,r).catch((function(e){return console.error("axios track page view failed",e)}))}))}catch(e){console.error("failed to track page change",e)}}}.call(this,n(145).setImmediate)},257:function(e,t,n){e.exports={}},258:function(e,t,n){e.exports=n.p+"img/fork.c820346.png"},263:function(e,t,n){"use strict";n(185)},264:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return d}));n(265),n(10),n(27),n(269),n(271),n(272),n(273),n(274),n(275),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(31),n(65),n(66);var r=n(82),o={isCrawler:void 0,locales:["en","fr"],locale:"en",graphql:{vendors:null,flatItems:new Map}},c=function(){return o},l={setCrawler:function(e,t){return e.isCrawler=t},SET_LANG:function(e,t){e.locales.includes(t)&&(e.locale=t)},setVendors:function(e,t){e.graphql.vendors=t},setFlatItems:function(e,t,n){e.graphql.flatItems.set(t,n)}},d={nuxtServerInit:function(e,t){var n=e.commit,o=t.req;n("setCrawler",Object(r.d)(o))}}},286:function(e){e.exports=JSON.parse('{"default":{"rimfire":"Rimfire","centerfire":"Centerfire","shotgun":"Shotgun","ammo":"Ammo","reloading":"Reloading","powder":"Powder","shot":"Shot","case":"Case","primer":"Primer","about":"About","contact":"Contact","failedToLoad":"failed to load ammo list","loading":"loading","betaWarning":"This page is still is in beta. Please be patient about any errors."},"home":{"title":"Welcome","tagline":"The place to view the best online ammo prices across {country}.","daily":"daily, with more to come.","gunsaleLink":"Looking for guns? Try","startingAt":"starting at","perRound":"per round","currentlyPopular":"currently popular","searching":"Searching","newBeta":"new features currently in beta","alternativeRegion":"Located in {country}? Try:"},"about":{"title":"About","description":"{domain} is THE place to find the best online ammo and reloading prices across {country}. Listings are refreshed multiple times per day. New retailers are added all the time.","supportedRetailers":"Supported Retailers","disclaimerTitle":"Disclaimer","disclaimer":"As of June 15, 2017, {domain}  has been entirely funded out of pocket. It does not receive any kick backs from any retailer listed on this site for preferred placement or inclusion on the site. All images, CSS, and JavaScript is selfhosted within ammobin.ca. Ammobin.ca does not make use of cookies or 3rd party analytics. All tracking occurs using sendbeacon/ajax requests in order to maintain the operations of the site. If you would like to opt-out of tracking, please set your browsers Do Not Track (DNT) setting to true.","sendEmail":"or send me an email at","submitIssue":"Submit an issue or PR at","contactInfo":"Contact Info","contactQuestions1":"Found an Issue?","contactQuestion2":"Want to review the source code?","contactQuestion3":"Feature suggestions?","contactQuestion4":"Need a retailer not yet listed here?","wikiamrsLink":"Looking for ammo/guns in the land of the free and the brave? Consider","main1":"retreives public ammo prices daily from {nationality} online retailers to aid in showing the best deals available.","main2":"Prices are updated throughout the day.","main3":"No ammo is sold through this site, it only links to retailer\'s product page.","moreRetailers":"more to come...","adsTitle":"Sponsoring/Advertising on {domain}","incorrectCountTitle":"Incorrect Unit Costs","incorrectCountText":"Since the start of Ammobin, unit costs have not been 100% correct. Part of this is due to retailers including blanks or multiple quantities in the title. Other times, ammobin-classifer parses other numbers in the title as the item count. Since Ammobin uses automated scraping, it is not possible to manually correct these errors (as much as it would be great to not have to see it)."},"links":{"french":"FR","english":"EN","spanish":"ES"},"table":{"brand":"brand","search":"Search","pageSize":"Page Size","calibre":"Calibre","province":"Province","state":"State","vendor":"Vendor","page":"Page","of":"of","name":"Name","price":"Price","unitCost":"Unit Cost*","link":"Link","noResult":"No Results","vendors":"vendors","perRound":"per round","buyFrom":"buy from","show":"Show","hide":"Hide","showFilters":"Show Filters","hideFilters":"Hide Filters","title":"{type} Prices","description":"The place to view the best {type} prices across {area}"},"itemTypes":{"title":"{type}","description":"All the {type} listed on {domain}. Refreshed multiple times per day."},"subType":{"title":"Best {subType} Prices Across {area}","description":"The place to view the best {subType} prices across {area}. Refreshed multiple times per day."},"ads":{}}')},287:function(e){e.exports=JSON.parse('{"default":{"rimfire":"Percussion annulaire","centerfire":"Percussion centrale","shotgun":"Fusil à pompe","ammo":"Munitions","reloading":"Rechargement","powder":"Poudre","shot":"Boulet","case":"Douille","primer":"Amorce","about":"À propos","contact":"Contact","failedToLoad":"échec du chargement de la liste des munitions","loading":"chargement","betaWarning":"Cette page est toujours en version bêta. S\'il vous plaît soyez patient concernant les erreurs."},"home":{"title":"Bienvenue","tagline":"L\'endroit pour trouver les meilleurs prix de munitions au Canada.","daily":"quotidiennement, et plus à venir prochainement.","gunsaleLink":"À la recherche d\'armes à feu? Essayez","startingAt":"À partir de","perRound":"par cartouche","currentlyPopular":"Populaire présentement","searching":"Recherche sur","newBeta":"nouvelles fonctionnalités actuellement en version bêta","alternativeRegion":"Je suis situe en {country}. Essayer"},"about":{"title":"À propos","description":"","supportedRetailers":"Détaillants supportés","disclaimerTitle":"Avertissement","disclaimer":"Depuis le 15 juin 2017, ammobin.ca a été entièrement financé de sa poche. Il ne reçoit aucuns pots-de-vin de la part des détaillants répertoriés sur ce site pour un placement préféré ou une inclusion sur le site. Toutes les images, CSS et JavaScript sont auto-hébergé sur ammobin.ca. Ammobin.ca n\'utilise pas de cookies ni d\'analyses tierces. Tout le suivi est effectué à l\'aide de requêtes sendbeacon / ajax afin de maintenir les opérations du site. Si vous souhaitez vous désinscrire du suivi, veuillez définissez le paramètre Do Not Track (DNT) de votre navigateur sur true.","submitIssue":"Créer un “Issue” ou un “Pull request” sur","contactInfo":"Informations de contact","contactQuestions1":"Vous avez trouvé un problème?","contactQuestion2":"Vous souhaitez examiner le code source?","contactQuestion3":"Vous avez une suggestion?","contactQuestion4":"Vous souhaitez l\'ajout d\'un détaillant qui n\'est pas encore sur le site?","wikiamrsLink":"Vous cherchez des munitions / armes à feu chez nos voisins du sud? Essayez","main1":"récupère quotidiennement les prix des munitions auprès des détaillants en ligne canadiens pour vous aider à trouver les meilleures offres disponibles.","main2":"Les prix sont mis à jour chaque matin.","main3":"Aucune munitions ne sont vendues sur le site, nous affichons uniquement de liens vers les sites des détaillants.","moreRetailers":"plus à venir...","incorrectCountTitle":"Coûts unitaires incorrects","incorrectCountText":"Depuis le début d’Ammobin, les coûts unitaires ne sont pas corrects à 100%. Cela est en partie dû aux détaillants, y compris les flans ou les quantités multiples dans le titre. D\'autres fois, ammobin-classifer analyse d\'autres nombres dans le titre en tant que nombre d\'éléments. Puisque ammobin utilise le déchiquetage automatisé, il n’est pas possible de corriger manuellement ces erreurs (il serait bien de ne pas avoir à les voir)."},"links":{"french":"FR","english":"EN"},"table":{"search":"Rechercher","pageSize":"Résultats par page","calibre":"Calibre","province":"Province","vendor":"Détaillant","page":"Page","of":"de","name":"Nom","price":"Prix","unitCost":"Coût unitaire*","link":"Lien","noResult":"Pas de résultats","vendors":"les détaillants","perRound":"par cartouche","buyFrom":"Acheter chez","show":"Afficher","hide":"Masquer","showFilters":"Afficher les Filtres","hideFilters":"Masquer  les Filtres","title":"{type} prix | Ammobin.ca","description":"L\'endroit pour trouver les meilleurs prix de {type} au {area}."},"itemTypes":{"title":"{type}","description":"{type} au ammobin.ca."},"subType":{"title":"Meilluers prix de {subType} au {area}","description":"L\'endroit pour trouver les meilleurs prix de {subType} au {area}.."}}')},40:function(e,t,n){"use strict";n(142);var r=n(53),o=n(78),c=n(79),l=n(54),d=n(12),m=(n(41),n(43)),f=n(23),h=n.n(f);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},k=function(e){Object(o.a)(n,e);var t=v(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return n}(m.c);y([Object(m.b)()],k.prototype,"error",void 0);var C=k=y([Object(m.a)({mounted:function(){try{var e=JSON.stringify({msg:this.error?this.error.message:"error page view",url:window.location.href,error:JSON.stringify(this.error)}),t="https://ammobin.ca/api/errors";navigator.sendBeacon?navigator.sendBeacon(t,e):h.a.post(t,e)}catch(e){console.error("failed to report error",e)}}})],k),_=n(52),component=Object(_.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[e.error&&404===e.error.statusCode?n("h1",[e._v("Page not found")]):n("h1",[e._v("An error occurred")]),e._v(" "),n("nuxt-link",{attrs:{to:"/"}},[e._v("Home page")])],1)])}),[],!1,null,null,null);t.a=component.exports},82:function(e,t,n){"use strict";function r(base,e,t){var n=base;return e>=1&&(n+="?page=".concat(e)),t&&(n+=e>=1?"&":"?",n+="calibre=".concat(t)),n}function o(e){var t=e?e.headers["user-agent"]:"undefined"!=typeof navigator?navigator.userAgent:"No user agent (generated)";return["Googlebot","Bingbot","Slurp","DuckDuckBot","Yandex","w3m"].some((function(e){return t.indexOf(e)>=0}))}function c(){return"Canada"}function l(){return"Canadian"}n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}))}},[[199,9,1,10]]]);