importScripts('/_nuxt/workbox.6041bd81.js', 'custom-service-worker.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01e643fec7fe2da4eebc.js",
    "revision": "f12cf161a1a205f23d6f9ec0754e9d49"
  },
  {
    "url": "/_nuxt/0655ad99d8df12929dcd.js",
    "revision": "9a7f45c223faa0f6905dcbc9debf643a"
  },
  {
    "url": "/_nuxt/1a615f7547c9b895ca8f.css",
    "revision": "74a3e8fa9ffc98c4abd4aeaaf7a4b349"
  },
  {
    "url": "/_nuxt/1c2f9cd2da7dd48bc8cb.css",
    "revision": "83e68ff561a738dec0617e04dc49926c"
  },
  {
    "url": "/_nuxt/37949be3a8e39242f73a.js",
    "revision": "66504a83f212707d32f8b3f35ad955dd"
  },
  {
    "url": "/_nuxt/3997196d6ebd8aac3171.css",
    "revision": "fc9193480c929d4b0808e0210347e4df"
  },
  {
    "url": "/_nuxt/4498b17bf1bc5c3641f0.js",
    "revision": "0a4163aab53ddfed649a21893bb2d3d6"
  },
  {
    "url": "/_nuxt/46c1922915577ef090d0.js",
    "revision": "e2f89406ed5f17526d3349ecc6b206a8"
  },
  {
    "url": "/_nuxt/4ff91c2bf32cd53b3e27.js",
    "revision": "83e497551f5908114ba459cc8509a457"
  },
  {
    "url": "/_nuxt/644a48d500a40dc8b5c1.js",
    "revision": "d2701bfaabec591c5fbbf37a8b250ab6"
  },
  {
    "url": "/_nuxt/875e512b8bfae729ace1.js",
    "revision": "ebc392188146b0bd18bb6369d075567f"
  },
  {
    "url": "/_nuxt/acc3b8ba1550c5a968a7.css",
    "revision": "e4d51be615c59b49968a6e1443ff40e6"
  },
  {
    "url": "/_nuxt/b5b14323a1ac8de01635.js",
    "revision": "cc5b83dd115dcc1f3a32e0f2fe43906e"
  },
  {
    "url": "/_nuxt/bb64b61cd49c0471e296.js",
    "revision": "44f28ffd73ef8219c6a05dfde43a42cd"
  },
  {
    "url": "/_nuxt/custom-service-worker.js",
    "revision": "6964f5a28a28c7403e520238e36f45b8"
  },
  {
    "url": "/_nuxt/d343fed0f555cd512ef7.js",
    "revision": "a2889654ff126a59bf24bd9d68a1faa6"
  },
  {
    "url": "/_nuxt/fd265cf80010e8c7f570.css",
    "revision": "128f013f146baed29146662c58e764b6"
  }
], {
  "cacheId": "ammobin.ca",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
