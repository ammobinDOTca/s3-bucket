importScripts('/_nuxt/workbox.6041bd81.js', 'custom-service-worker.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e9d44eb0c26b904f910.js",
    "revision": "3daa8425fa1540698bd300f824153072"
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
    "url": "/_nuxt/227cc06a8022e93d6694.js",
    "revision": "6482105f12a2065bc835b993fda28875"
  },
  {
    "url": "/_nuxt/3997196d6ebd8aac3171.css",
    "revision": "fc9193480c929d4b0808e0210347e4df"
  },
  {
    "url": "/_nuxt/5139a60b9ba50b352a4f.js",
    "revision": "2af5b27fccce0babf8016712fb6d01ee"
  },
  {
    "url": "/_nuxt/6b192442b795157ffaf9.js",
    "revision": "84ee440d8ad985a6da3eebcb14c5a6ae"
  },
  {
    "url": "/_nuxt/744ce7de433d3ba5c6c6.js",
    "revision": "c97408f348948da1be68179435645ebc"
  },
  {
    "url": "/_nuxt/7897aef57cb20c692ca0.js",
    "revision": "1c079c5ae6ec1cd9a182538a48e9b1c3"
  },
  {
    "url": "/_nuxt/acc3b8ba1550c5a968a7.css",
    "revision": "e4d51be615c59b49968a6e1443ff40e6"
  },
  {
    "url": "/_nuxt/ae9383b7c4a4051d1148.js",
    "revision": "572b75b716774af1cc0100ac9b5d8a8e"
  },
  {
    "url": "/_nuxt/b63bf39703b2798b9b76.js",
    "revision": "6f70c346430bd68fd4faacb00748ccbb"
  },
  {
    "url": "/_nuxt/e3b0e5c3de839a599300.js",
    "revision": "2f95b1d60cba8765b6a6bd11757b129c"
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
