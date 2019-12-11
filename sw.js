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
    "url": "/_nuxt/2005c446be54fa9c4175.js",
    "revision": "70c7a9589f3c1e387a7b943fd5a7ef2f"
  },
  {
    "url": "/_nuxt/29059e573105440e5bed.js",
    "revision": "82113c1cf4da33fbd348b800efc43634"
  },
  {
    "url": "/_nuxt/3997196d6ebd8aac3171.css",
    "revision": "fc9193480c929d4b0808e0210347e4df"
  },
  {
    "url": "/_nuxt/54b118ddeade0c7d8d0a.js",
    "revision": "dc3441bb77648600cb1ae55be2118e2e"
  },
  {
    "url": "/_nuxt/54d9b6faebf91c037ba9.js",
    "revision": "05c6715d20be864f7635c54fc3b9fb43"
  },
  {
    "url": "/_nuxt/6ef1409cd1b91a5a60d0.js",
    "revision": "69844f7b4205f344b2d1aca7160ea528"
  },
  {
    "url": "/_nuxt/7cf93c6a70fef5a2e87d.js",
    "revision": "77ab56c5f0a2455dc55d94226df7481c"
  },
  {
    "url": "/_nuxt/903e8454aa542f294d34.js",
    "revision": "c4e01b5a3a5f1bb734dc287c0797bb97"
  },
  {
    "url": "/_nuxt/a1c9bfd0da00dcd8577b.js",
    "revision": "1be2d206eac264f0a5b74c851cf88a29"
  },
  {
    "url": "/_nuxt/a8e98d2bcae7675e51b2.js",
    "revision": "418f4b215b86635c6269f78b09f0c3aa"
  },
  {
    "url": "/_nuxt/acc3b8ba1550c5a968a7.css",
    "revision": "e4d51be615c59b49968a6e1443ff40e6"
  },
  {
    "url": "/_nuxt/c23f2f61a3256b003f12.js",
    "revision": "f6666a7a769d92edcee58dd5d658edfc"
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
