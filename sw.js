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
    "url": "/_nuxt/36d565826609a7d9154f.js",
    "revision": "2d6c41e1c2c54e65c54772a85401c5b1"
  },
  {
    "url": "/_nuxt/4f9d1df0fab7a00ce8a6.js",
    "revision": "68483f6f351c7c6e9a94cb134461e488"
  },
  {
    "url": "/_nuxt/533393af7e16502ffdcd.js",
    "revision": "c6a1314451897c432c5b1d7e0f992d4a"
  },
  {
    "url": "/_nuxt/826d1fe80b95bf603817.js",
    "revision": "4f72857e4881afd6413411f185e34f6e"
  },
  {
    "url": "/_nuxt/9180fb95ad03ba4142ba.js",
    "revision": "80fd5545d7ef9db970e75362c47320fc"
  },
  {
    "url": "/_nuxt/a34b04e8f489ac49ff97.js",
    "revision": "375d01526d3dd6f703650f5d204d5919"
  },
  {
    "url": "/_nuxt/acc3b8ba1550c5a968a7.css",
    "revision": "e4d51be615c59b49968a6e1443ff40e6"
  },
  {
    "url": "/_nuxt/b2e5c63235d3755d997a.js",
    "revision": "73f56f919c0190b1f994a3798a604120"
  },
  {
    "url": "/_nuxt/b54024f214118c9df6ac.js",
    "revision": "fc4b5381abd1f9ddc292ec08faf1abd7"
  },
  {
    "url": "/_nuxt/d0b211e573d9fe506189.js",
    "revision": "03d37907c86047e439693d02cab8febf"
  },
  {
    "url": "/_nuxt/d8a2850bdbffd14f0b0a.js",
    "revision": "717b3b629c9e2d41c785c500787aad00"
  },
  {
    "url": "/_nuxt/dc1d8bac34713e0aa501.css",
    "revision": "cb9628eb9ad342a8be223b4ad437b7fe"
  },
  {
    "url": "/_nuxt/f862115fc6b372eeee96.js",
    "revision": "15e405e9ed6d1c89ab3b6ba0315d18e8"
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
