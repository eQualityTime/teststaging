importScripts('workbox-3.6.3/workbox-sw.js');
workbox.setConfig({
  debug: false,
  modulePathPrefix: 'workbox-3.6.3/'
});
workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([
  {
    "url": "manifest.json",
    "revision": "20c9d0301740029ecb0ed6a9ce4201a6"
  },
  {
    "url": "index.html",
    "revision": "0c69cb3efc59092cc5d4e661df9acbfb"
  },
  {
    "url": "polyfills.8beab544b88ea4601165.js"
  },
  {
    "url": "runtime.8c26f1fab6959b00a997.js"
  },
  {
    "url": "styles.3eff4f0b560565aa3ccb.css"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "35020c224cde694adb78ec64979acbb7"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "1091013ec68d4cc2f10eebaf3f9acece"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "d1977969dc98cdd1905d7424bd28a9ba"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "3cbae9931a5addc76e92249dff52e4e5"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "dc751a410ece14a500db358607e1d417"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "23fd4e59e3e9eed6a0f0c7fea022c99a"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "e6743668139c79d78aecd0731930b257"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "a44ffae342b2b6b30ad53c08c9f1cb39"
  },
  {
    "url": "assets/images/erase.png",
    "revision": "ead60c5c28425e279bbcae6a0989d15d"
  },
  {
    "url": "assets/images/home.png",
    "revision": "1c54b8407a4d16356cb93e68f2a54e9a"
  },
  {
    "url": "assets/images/left.png",
    "revision": "c9bf8640f23693ec1060dddc424cf5b4"
  },
  {
    "url": "assets/images/speechbubble.png",
    "revision": "cdb493a1f0fae3e9e51debd026edcd22"
  },
  {
    "url": "assets/images/undo.png",
    "revision": "810bdff06a59376e5897abcd358ea434"
  }
]);
