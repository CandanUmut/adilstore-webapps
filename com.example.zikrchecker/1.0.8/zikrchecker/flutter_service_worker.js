'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c78f684d1db7c55068cd587ed75e9d6d",
"assets/AssetManifest.bin.json": "50eb6301c500b0aa2139cf4a7dab8fc4",
"assets/AssetManifest.json": "045e87963b474c91adbf2f673fa799c3",
"assets/assets/cole_inen_nur.pdf": "e0387a0b9d34bfc250dba12c12cbe1fb",
"assets/assets/cole_inen_nur_chapters.json": "c604a4ff649edc46dc7811ecefda3cd8",
"assets/assets/declination.json": "cad933af704864203ac4e9f3aac52ae6",
"assets/assets/hadith/ahmed.json": "f13a3af824ced6e2b35280ecf1055510",
"assets/assets/hadith/bukhari.json": "739af8580eae732fc19807ac1b065e11",
"assets/assets/hadith/muslim.json": "227a354859308e122e21ac54f369adfb",
"assets/assets/hadith/turkish_hadith.json": "0ebb52902bfdf93b5532629face45196",
"assets/assets/images/quranbg.png": "ca58d3936a5ca533f139fed68495a701",
"assets/assets/quran/ar_uthmani.json": "40ada5774a6bd8ea40eac3641b5020f1",
"assets/assets/quran/ar_uthmani.txt": "3b178917295278445ef51c77b216b54e",
"assets/assets/quran/de.bubenheim.json": "8747f31fbed42be6bbee5513877fa07b",
"assets/assets/quran/de.bubenheim.txt": "019e95f44b1c28c18cb502a20b063453",
"assets/assets/quran/en.sahih.json": "5a90eac3cdfc48aca971f568f386fe62",
"assets/assets/quran/en.sahih.txt": "f04b8e73a9e32c15803b3721ea47896f",
"assets/assets/quran/en.transliteration.json": "f763d598988f7d45d7b1b4d885a2e5bc",
"assets/assets/quran/en.transliteration.txt": "1af10c137a1a3cfd2b81ef7a3cb2eb0e",
"assets/assets/quran/en_sahih.json": "f763d598988f7d45d7b1b4d885a2e5bc",
"assets/assets/quran/es.cortes.json": "7477985a98799241b5928714b92a9b88",
"assets/assets/quran/es.cortes.txt": "11f65433f3828dc62838368570970c23",
"assets/assets/quran/fa.ghomshei.json": "3c6e7fc1159baee5b16cc09821740f8d",
"assets/assets/quran/fa.ghomshei.txt": "fabfb62d52bb69af060212b5168277ad",
"assets/assets/quran/hi.farooq.json": "2d55de73969a9d95de9a5eba998349fd",
"assets/assets/quran/hi.farooq.txt": "b5b4b98b6dae7ea01f20db6920ca8252",
"assets/assets/quran/it.piccardo.json": "e4a18f1f730d408f46d5f81603f56cdf",
"assets/assets/quran/it.piccardo.txt": "0643012db1e46d65cdbf30219598fcca",
"assets/assets/quran/ja.japanese.json": "3b8ebc0a319e96a4b053503c879902eb",
"assets/assets/quran/ja.japanese.txt": "90e8cf1e8820a24db2053270429b1c9d",
"assets/assets/quran/ko.korean.json": "5fef8969b92c817ac028afed01e0980d",
"assets/assets/quran/ko.korean.txt": "96d1f6092314bf9c093a124cc5e28521",
"assets/assets/quran/quran-simple.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/quran/quran-simple.txt": "415f883706efcbb6684ecb45ce777f56",
"assets/assets/quran/ru.kuliev.json": "9cda1077e66619cfdc3f30ebdf01ae95",
"assets/assets/quran/ru.kuliev.txt": "8e1c94808cc710736fb4db4a5cdddb2a",
"assets/assets/quran/tr.diyanet.txt": "4837f562c4ba1666cd0cd314674cf46a",
"assets/assets/quran/translit_tanzil.json": "f763d598988f7d45d7b1b4d885a2e5bc",
"assets/assets/quran/tr_diyanet.json": "4e24e30132714ff9bdd7fd97a029e201",
"assets/assets/quran/ur.jalandhry.json": "f81463d6e6cf91bfeb4c07242fa08b6f",
"assets/assets/quran/ur.jalandhry.txt": "c6687be5d9ca6218e0a58fb66ce2b4ac",
"assets/assets/quran_timelessness_en.json": "caaeb9416c12df061df7876fc405f5bc",
"assets/assets/quran_timelessness_tr.json": "3e4bd7f88029515b4a35cb9c6f916727",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "28942407e01371d3155ed3b83c83d4df",
"assets/NOTICES": "147326e0e5d58460e0d27402752dd230",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8b70165fc3d0964efb4535738c05d533",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c131e51d60b5ade18dd8eda6ab4e0db",
"/": "2c131e51d60b5ade18dd8eda6ab4e0db",
"main.dart.js": "c13ef0759dd6e670d880a078b10c7f03",
"manifest.json": "196910d64b9cd02cf73db1d29857bda7",
"version.json": "3217c26a73e6701acecdc9a1711a75b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
