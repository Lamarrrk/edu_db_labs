/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "73b39d68993d7e5f49946ceb7b03ac34"
  },
  {
    "url": "assets/css/0.styles.11887572.css",
    "revision": "cd73cf496d28676e9c3ee097de8a0cd7"
  },
  {
    "url": "assets/img/3table.98bb1ea3.jpg",
    "revision": "98bb1ea3eb55d48dc6391a174bfb4d3d"
  },
  {
    "url": "assets/img/photo_5240500889221978983_w.f1d32a73.jpg",
    "revision": "f1d32a734f54b8becba886e4da59c798"
  },
  {
    "url": "assets/img/photo_5240500889221978985_w.67d1e911.jpg",
    "revision": "67d1e911ba87aca8c6236f61764bf298"
  },
  {
    "url": "assets/img/photo_5240500889221978986_w.e473da8d.jpg",
    "revision": "e473da8d0ff945737ec8337081fc702a"
  },
  {
    "url": "assets/img/photo_5240500889221978987_w.bcf02645.jpg",
    "revision": "bcf026456cac9ea4dde9ce324d0b655e"
  },
  {
    "url": "assets/img/photo_5240500889221978988_w.c6997d0c.jpg",
    "revision": "c6997d0c33e5a0c870b6fc2ea25732b9"
  },
  {
    "url": "assets/img/photo_5240500889221978989_w.2019da07.jpg",
    "revision": "2019da0742d3e0540e4b48a8f9aca099"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Снимок экрана 2024-01-05 в 1.58.16 PM.5e42fe35.png",
    "revision": "5e42fe3562584587487ab5a38f24a2f9"
  },
  {
    "url": "assets/js/1.47f49d84.js",
    "revision": "23ed303f91c486b6d6e045dd6c490662"
  },
  {
    "url": "assets/js/10.1f8e435c.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.fa8a2cc2.js",
    "revision": "17d7fa398a1e669a23870145beac85fb"
  },
  {
    "url": "assets/js/14.fdb031ee.js",
    "revision": "11f98910966b665869bd4ddd84acd4de"
  },
  {
    "url": "assets/js/15.fc603962.js",
    "revision": "7dce03155b77520d80218dfb4dc28183"
  },
  {
    "url": "assets/js/16.d542fb6e.js",
    "revision": "91453dffac73ef2404ddba6da098351d"
  },
  {
    "url": "assets/js/17.a49c2b6f.js",
    "revision": "e1e1c4989e3555fcba1f1d2cd520bb4b"
  },
  {
    "url": "assets/js/18.bf39df0e.js",
    "revision": "98ed1128f41fef1b0b14da6c3ade084f"
  },
  {
    "url": "assets/js/19.c045ba10.js",
    "revision": "a533ff7eee1fb4577c2ae9eb6ed2359a"
  },
  {
    "url": "assets/js/2.12a165ab.js",
    "revision": "a8038ac1f110845a5301e3198d8bc1e5"
  },
  {
    "url": "assets/js/20.a9fe2e17.js",
    "revision": "f76f75eb72dad72e72260b5fce92378e"
  },
  {
    "url": "assets/js/21.25520ba2.js",
    "revision": "5051edacfd19d3f1d4dc116f1d14a6fd"
  },
  {
    "url": "assets/js/22.4364dfe0.js",
    "revision": "ad86a51272401b639103c8f988d515c4"
  },
  {
    "url": "assets/js/23.34e4d295.js",
    "revision": "a7f6a3ed4f9f2dd311771ed5a678f35c"
  },
  {
    "url": "assets/js/24.9745a7b0.js",
    "revision": "6091e03f1f592722b2635890d3a9ffaa"
  },
  {
    "url": "assets/js/25.106c4929.js",
    "revision": "8535f926ecfd4a0f08d8317a2d8bf578"
  },
  {
    "url": "assets/js/26.38fa490d.js",
    "revision": "91a920ccf30039bc31fe7789556bd5db"
  },
  {
    "url": "assets/js/27.93b70bd3.js",
    "revision": "526528bfb6d50b0a53531d609a477bed"
  },
  {
    "url": "assets/js/28.f879fb2e.js",
    "revision": "2e53b2daae36d621384a2424babdf65d"
  },
  {
    "url": "assets/js/29.3ed15248.js",
    "revision": "7b07b88a6c4b7483ebcee6f1d7759e2e"
  },
  {
    "url": "assets/js/3.f94d4d6d.js",
    "revision": "c3ca928fb0625cfbb0df863e85a1c7c5"
  },
  {
    "url": "assets/js/30.ad29881b.js",
    "revision": "197840a894f79f38feccd2f41e1eb14a"
  },
  {
    "url": "assets/js/31.529e9731.js",
    "revision": "8973e5d9c618a0da48aef00914d0fc55"
  },
  {
    "url": "assets/js/32.89c5b72f.js",
    "revision": "0bf86c6a6fff1f6203c7d309390ba7a5"
  },
  {
    "url": "assets/js/33.6a67eaeb.js",
    "revision": "a63e1010901fbe4830bd0e150105bcbf"
  },
  {
    "url": "assets/js/34.ab31fd50.js",
    "revision": "ae946a31032f3e6a01ac9cdb4475cca6"
  },
  {
    "url": "assets/js/35.76fd9de1.js",
    "revision": "b6d21218fb1b60cf4c792e0478d97c30"
  },
  {
    "url": "assets/js/36.27ec43db.js",
    "revision": "47dc878154db676665413c0051a9b598"
  },
  {
    "url": "assets/js/37.708dcfc0.js",
    "revision": "903c08905fc89e5f1c3d251078ca26e6"
  },
  {
    "url": "assets/js/38.3364e726.js",
    "revision": "b0458474de7ef7be321fbea6d769cfff"
  },
  {
    "url": "assets/js/39.297c4fcc.js",
    "revision": "b51634ce1ba7d6c4988b17fbdd7f0f6d"
  },
  {
    "url": "assets/js/4.3bcc4080.js",
    "revision": "7a84258ca85a7363a97957e549516e04"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.437c2fe8.js",
    "revision": "e6866376c3bb2f60cda1cebe1de67175"
  },
  {
    "url": "assets/js/6.014ac67b.js",
    "revision": "9cb9c8f35d1770632908b7e5f1b79a5e"
  },
  {
    "url": "assets/js/7.58d31e51.js",
    "revision": "f50dd02655301bd5cf35bb92ae40e7df"
  },
  {
    "url": "assets/js/8.cac270c3.js",
    "revision": "714463267c30b319d4ca863af386e733"
  },
  {
    "url": "assets/js/9.1a9c7768.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.c8a41b15.js",
    "revision": "20a2c6f3663a0290741e52dd8c02d751"
  },
  {
    "url": "assets/js/vendors~docsearch.2d737b4b.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4dd547d9016441ab5745a187b334afad"
  },
  {
    "url": "design/index.html",
    "revision": "c07396dfede7afba247f339f1f369b55"
  },
  {
    "url": "index.html",
    "revision": "03145ca7fa6e87bee994df062c952773"
  },
  {
    "url": "intro/index.html",
    "revision": "bce6cded78b76390d445b5598e497f8f"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f81ae3e71f7b289e3b932775123ef81c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "967a26d4c372ba8ddd64077791ed7053"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4d071455e2d9c2a5005697b4e364070c"
  },
  {
    "url": "software/index.html",
    "revision": "33e4960c3fd9945d9428d3bad0bb1ba4"
  },
  {
    "url": "test/index.html",
    "revision": "1d5e60268fbf389e7a606ec89bf27502"
  },
  {
    "url": "use cases/index.html",
    "revision": "125a38bcde1abb4beed080751d81bff2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
