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
    "url": "/_nuxt/227cc06a8022e93d6694.js",
    "revision": "6482105f12a2065bc835b993fda28875"
  },
  {
    "url": "/_nuxt/3997196d6ebd8aac3171.css",
    "revision": "fc9193480c929d4b0808e0210347e4df"
  },
  {
    "url": "/_nuxt/3f9780b04dfb709ee67d.js",
    "revision": "909e61bb1566b45472d0c4e2b9b3fcc2"
  },
  {
    "url": "/_nuxt/488cb8fcc57c39c9ad5c.js",
    "revision": "157602c43870147e23094b085722b2c4"
  },
  {
    "url": "/_nuxt/6b192442b795157ffaf9.js",
    "revision": "84ee440d8ad985a6da3eebcb14c5a6ae"
  },
  {
    "url": "/_nuxt/acc3b8ba1550c5a968a7.css",
    "revision": "e4d51be615c59b49968a6e1443ff40e6"
  },
  {
    "url": "/_nuxt/b63bf39703b2798b9b76.js",
    "revision": "6f70c346430bd68fd4faacb00748ccbb"
  },
  {
    "url": "/_nuxt/c1ee95bc7c8bc9179eaf.js",
    "revision": "5c0901bd57d017f7d5be468cf9f6ee9a"
  },
  {
    "url": "/_nuxt/c21a4509250f77602752.js",
    "revision": "cc2e6905b5f33d3c1a56092e75215b6b"
  },
  {
    "url": "/_nuxt/e3b0e5c3de839a599300.js",
    "revision": "2f95b1d60cba8765b6a6bd11757b129c"
  },
  {
    "url": "/_nuxt/e71ebaea5d42b85ab470.js",
    "revision": "5a9823ddf72044a0825f819f9254ebed"
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
