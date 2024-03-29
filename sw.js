importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "admin/adminactivity.js",
    "revision": "ac0d5d2c6438d6024d6e235ffbcfab3c"
  },
  {
    "url": "admin/adminNotifications.js",
    "revision": "f17a21a677d15fec4b5c0acd8fa72811"
  },
  {
    "url": "admin/adminpermissions.js",
    "revision": "f6afd0d6ab6128c9217add9d44400e6e"
  },
  {
    "url": "admin/adminSettings.js",
    "revision": "f2347dedfd61accf9d2a7f4a7d91d180"
  },
  {
    "url": "admin/index.js",
    "revision": "3d7b5de0e4ea4dda1bbf24b45259f9a8"
  },
  {
    "url": "admin/permission.js",
    "revision": "82a42e8dfdcf045c91123faa7340ab5f"
  },
  {
    "url": "components/alert.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "components/gridForm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "components/titlebar.js",
    "revision": "7abb0bd8a03504d09b50fa0322e33dd5"
  },
  {
    "url": "css/bundle.css",
    "revision": "993fc336b496f126081d5bd51a29a547"
  },
  {
    "url": "favicon.ico",
    "revision": "1f4cfc73d4766f09bbf25deb1e39132c"
  },
  {
    "url": "img/login.png",
    "revision": "2e16b69cb2c45155b44b0760a3442fe6"
  },
  {
    "url": "img/logo.png",
    "revision": "5eaeb6703ce066afb957a1ab4cf70a9a"
  },
  {
    "url": "img/PWAlogo.png",
    "revision": "90485ea5c59decb322bf06b89cd474b2"
  },
  {
    "url": "img/settings.png",
    "revision": "761067ba0b4d345d8615448335d0db83"
  },
  {
    "url": "img/signup.png",
    "revision": "f6b5a1c210a66a2449d8226e394519f4"
  },
  {
    "url": "img/working.png",
    "revision": "c1d916d9c7ed9b41042b5bfb1a20e0c3"
  },
  {
    "url": "index.html",
    "revision": "481ad7b74b367c3e8237a3fe7c14939c"
  },
  {
    "url": "index.js",
    "revision": "b97c9f0f090134ffebf6db5dd2a4443d"
  },
  {
    "url": "libs/bs.min.js",
    "revision": "3a4912f4311c63d3af01bcd3441959ce"
  },
  {
    "url": "libs/jq.min.js",
    "revision": "24f2e59beae1680f19632d9c1b89d730"
  },
  {
    "url": "libs/moment.js",
    "revision": "761502841c035afcf6a9bdc5d0a20d11"
  },
  {
    "url": "libs/popper.min.js",
    "revision": "a22f3f7e61af6a069aa6b422537c3f49"
  },
  {
    "url": "libs/pouchdb.min.js",
    "revision": "12d23e3295590b71657939cdb7aba451"
  },
  {
    "url": "libs/pouchdbFind.js",
    "revision": "f5ff66e57e958b9bb4100d40ccdd81d4"
  },
  {
    "url": "pages/activityFeed.js",
    "revision": "f81e84263a9c6eb16a545f83e743c9d1"
  },
  {
    "url": "pages/generateGrig.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "pages/login.js",
    "revision": "e6610f3cc015395a584746f796e5d9ce"
  },
  {
    "url": "pages/notifications.js",
    "revision": "b7d71f9a1f7909a6476f78505142cac1"
  },
  {
    "url": "pages/purchase.js",
    "revision": "7c6cb5f6fb594d5911e92f2d86f22dac"
  },
  {
    "url": "pages/report.js",
    "revision": "624f43d6046e0e6f98496321b26e6c22"
  },
  {
    "url": "pages/settings.js",
    "revision": "463064b9fa40741219abfd2a5d29e47a"
  },
  {
    "url": "pages/signup.js",
    "revision": "1f37897f101cfe9297a9041b3b19290c"
  },
  {
    "url": "services/accounts.js",
    "revision": "250818ec8004cda916bf296a08d6e794"
  },
  {
    "url": "services/activityFeed.js",
    "revision": "33f6ccde5ac0e770a7ab626b919710ff"
  },
  {
    "url": "services/alert.js",
    "revision": "d7c08292e6aa84c88dab77c30999fb39"
  },
  {
    "url": "services/appData.js",
    "revision": "bdb77744221dc9cb019d6d4cf6ddf8f0"
  },
  {
    "url": "services/grid.js",
    "revision": "6b5ee20a1220ca7d529e11e607a0cd1c"
  },
  {
    "url": "services/notifications.js",
    "revision": "3976641a04fbb31c981fed5433e5ae1b"
  },
  {
    "url": "services/permissions.js",
    "revision": "ce4bc547b6472eb16ec82af3ecdfc002"
  },
  {
    "url": "utils/router.js",
    "revision": "82a07be5fcca51c972bd2c7f263b0557"
  }
]);
  workbox.routing.registerRoute(
    /(.*)articles(.*)\.(?:png|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );
  const articleHandler = workbox.strategies.networkFirst({
    cacheName: 'articles-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
      })
    ]
  });
  
  workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
    return articleHandler.handle(args);
  });
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}