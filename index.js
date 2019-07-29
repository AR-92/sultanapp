// const {
//     BrowserWindow
// } = require('electron').remote


// function appClose() {
//     BrowserWindow.getFocusedWindow().close();
// }

// function appMinimize() {
//     BrowserWindow.getFocusedWindow().minimize();
// }

// function appMaximize() {
//     if (BrowserWindow.getFocusedWindow().isMaximized()) {
//         BrowserWindow.getFocusedWindow().unmaximize();
//     } else {
//         BrowserWindow.getFocusedWindow().maximize();
//     }
// }
// function toggleDeveloperConsole(){
//     BrowserWindow.getFocusedWindow().webContents.openDevTools()
// }

document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        appRest();
        mainRouter({
            page: 'loginPage',
            html: loginPageHTML
        })
        titleBarInit('titleBarRoot');
    }
};

// {
//     "name": "Sultan",
//     "short_name": "SP",
//     "start_url": ".",
//     "display": "standalone",
//     "background_color": "#007bff",
//     "description": "A demo app for a fictional conference",
//     "theme_color": "#007bff",
//     "icons": [
//       {
//         "src": "./img/PWAlogo.png",
//         "sizes": "512x512",
//         "type": "image/png"
//       }
//     ]
//   }

// console.log('Hello from service-worker.js');

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }

// workbox.skipWaiting();
// workbox.clientsClaim();

// // cache name
// workbox.core.setCacheNameDetails({
//   prefix: 'My-awesome-cache',
//   precache: 'precache',
//   runtime: 'runtime',
// });

// // runtime cache
// // 1. stylesheet
// workbox.routing.registerRoute(
//   new RegExp('\.css$'),
//   workbox.strategies.cacheFirst({
//       cacheName: 'My-awesome-cache-Stylesheets',
//       plugins: [
//           new workbox.expiration.Plugin({
//               maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
//               maxEntries: 20, // only cache 20 request
//               purgeOnQuotaError: true
//           })
//       ]
//   })
// );
// // 2. images
// workbox.routing.registerRoute(
//   new RegExp('\.(png|svg|jpg|jpeg)$'),
//   workbox.strategies.cacheFirst({
//       cacheName: 'My-awesome-cache-Images',
//       plugins: [
//           new workbox.expiration.Plugin({
//               maxAgeSeconds: 60 * 60 * 24 * 7,
//               maxEntries: 50,
//               purgeOnQuotaError: true
//           })
//       ]
//   })
// );
// workbox.precaching.precacheAndRoute([]);



// var wb = new WorkboxSW();
// wb.precache(assets);
//  wb.router.registerRoute('https://unpkg.com/ionicons@4.5.5/dist/ionicons.js',wb.strategies.NetworkFirst())
// workbox.routing.registerRoute(
//   /\.js$/,
//   new workbox.strategies.NetworkFirst()
// );
// workbox.routing.registerRoute(
//   /\.css$/,
//   new workbox.strategies.NetworkFirst()
// );
// self.addEventListener('fetch', event => {
//   const req = event.request;
//   event.respondWith(cacheFirst(req));
// });
// async function cacheFirst(req) {
//   const cache = await caches.open(cacheName); 
//   const cachedResponse = await cache.match(req); 
//   return cachedResponse || fetch(req); 
// }


// importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
// const assets = [
//   './libs/jq.min.js',
//   './libs/popper.min.js',
//   './libs/bs.min.js',
//   './libs/pouchdb.min.js',
//   './libs/pouchdbFind.js',
//   './libs/moment.js',
//   './utils/router.js',
//   './utils/gards.js',
//   './services/alert.js',
//   './services/activityFeed.js',
//   './services/notifications.js',
//   './services/permissions.js',
//   './services/accounts.js',
//   './services/grid.js',
//   './services/appData.js',
//   './components/gridForm.js',
//   './components/alert.js',
//   './components/titlebar.js',
//   './pages/signup.js',
//   './pages/login.js',
//   './pages/settings.js',
//   './pages/activityFeed.js',
//   './pages/notifications.js',
//   './pages/report.js',
//   './admin/index.js',
//   './admin/permission.js',
//   './admin/adminNotifications.js',
//   './admin/adminactivity.js',
//   './admin/adminSettings.js',
//   './admin/adminpermissions.js',
//   './index.js',
//   './css/bundle.css',
//   './favicon.ico',
//   // '',  
// ]
// workbox.precaching.precacheAndRoute(assets);
// workbox.routing.registerRoute('https://unpkg.com/ionicons@4.5.5/dist/ionicons.js', new workbox.strategies.NetworkFirst())


// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);

//   workbox.precaching.precacheAndRoute([]);

// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }