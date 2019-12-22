importScripts('/_nuxt/workbox.6041bd81.js', 'custom-service-worker.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a615f7547c9b895ca8f.css",
    "revision": "74a3e8fa9ffc98c4abd4aeaaf7a4b349"
  },
  {
    "url": "/_nuxt/1c2f9cd2da7dd48bc8cb.css",
    "revision": "83e68ff561a738dec0617e04dc49926c"
  },
  {
    "url": "/_nuxt/1cfb477af9ca9a8d112e.js",
    "revision": "3d46376e67008bc8446b49db5042eb53"
  },
  {
    "url": "/_nuxt/227cc06a8022e93d6694.js",
    "revision": "6482105f12a2065bc835b993fda28875"
  },
  {
    "url": "/_nuxt/3997196d6ebd8aac3171.css",
    "revision": "fc9193480c929d4b0808e0210347e4df"
  },
  {
    "url": "/_nuxt/470717d0881d2df1e3d9.js",
    "revision": "d1814b2031f126922b789243bbec7ff9"
  },
  {
    "url": "/_nuxt/6b192442b795157ffaf9.js",
    "revision": "84ee440d8ad985a6da3eebcb14c5a6ae"
  },
  {
    "url": "/_nuxt/95e88b026312c44d4475.js",
    "revision": "007ad030c3f0a60ac57eafffdd83684f"
  },
  {
    "url": "/_nuxt/acc3b8ba1550c5a968a7.css",
    "revision": "e4d51be615c59b49968a6e1443ff40e6"
  },
  {
    "url": "/_nuxt/adfa3b5cf5ca51373809.js",
    "revision": "d319a50744c862f54db4f70ec084ca11"
  },
  {
    "url": "/_nuxt/b300319cd0c8f51ecfda.js",
    "revision": "bf75b5a487d942b6fc32ab2734f802eb"
  },
  {
    "url": "/_nuxt/e3b0e5c3de839a599300.js",
    "revision": "2f95b1d60cba8765b6a6bd11757b129c"
  },
  {
    "url": "/_nuxt/e4a9d9cf3f42e9e3c849.js",
    "revision": "b6cb908d369aced9ef7d78c2a2065897"
  },
  {
    "url": "/_nuxt/e8f8e91af8d421bab18a.js",
    "revision": "d09fd3d7ff2ffb6133e7276d4aba252e"
  },
  {
    "url": "/_nuxt/fd265cf80010e8c7f570.css",
    "revision": "128f013f146baed29146662c58e764b6"
  },
  {
    "url": "/_nuxt/ff79ca188e01016f6443.js",
    "revision": "151cc62dfc8843a80d9b1a23cc9782a1"
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
