'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "05154cffedc19f79c6ed83793b6e1058",
".git/config": "adcdc541111dca02df3ffddbde9e59fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ded16d3ae3d35a6388782cdabb851e8b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74885e4d1c2e3d3dffa4c58070c2261c",
".git/logs/refs/heads/main": "23031c8a8afca46df3fe75986a7fe02e",
".git/logs/refs/remotes/origin/main": "0b434286a79115f35dddfe42f63a1aba",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/1f783b449827467d3741467ebb6910b4698d64": "8f0b4b9081632faa2d3e060c9bab4641",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/13/69cbaa7bccb592bed420ac008ed64b238946b1": "43e12782c91657d78e0baae35e19311a",
".git/objects/1c/6e46b937dfe2651280624c124a0f0f803709a1": "55ff49aa38fa6f4b436c529631dcd617",
".git/objects/1e/c1a1b1a68ba9f5a6f59e3f9436e37767123998": "563531dcffe2b9778182b8e14a964221",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/b621a612843187415c3787c2a8897010d7f496": "ce424710d2152dff970baba2d2966361",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/1f2a5bc9115932c07754a7294b8e9f9d9d10ed": "5a1118598ec69863deacb41072e27cb4",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/20295cb532aa79051b482a245137ce7684a997": "27b3ca6a386325a51ab556c462d5fc9c",
".git/objects/2d/d24b579432709a00c4a7d656e138fdf70d9a1d": "5bd911ac0981344a6508b06fb93dc523",
".git/objects/30/a18ad9e9cc780a129e409e16e2056abfe8e4a9": "646168da613266998067d249c09c76c0",
".git/objects/32/62ea0ace1199c58eca59a543e4a9074c9be0c6": "371f43c62803c78f59f4b85ca1158b18",
".git/objects/34/9f6cfd77d25bc5c90465c40b7c123e2d965542": "0e2fd461bc4d426efc3c51129bd4d6c6",
".git/objects/38/dc445c243adc11db03c0fe46cf6d097033273e": "61a52d9804ae51e766da1ff2c8aa9018",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/ee88ec685ff0c927019a6e3a75af2e1b69956d": "f384131f2d25637e50e7aaa81f07e71c",
".git/objects/40/192da43bf841e53eee677d07fa863d719c95e9": "0e94ed609dc941410ae95e0f4fb2b0c4",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/31157071e206b4558e5c4f3dc60416fbd9fb17": "82a31491ab92d852ea324ffede58ac43",
".git/objects/4a/52620024e0e824f11ac6cf76544d0d224d624f": "f7fec3c7b33929b2494f7947d432268b",
".git/objects/4b/cc4b5d5cf8c395376ca7ecc20c6caaa21c5f42": "d6fc72eb017e151dad29fccc7d40fb3a",
".git/objects/4e/d85ba008640357cbdbce3fa31f5e26b39aebd1": "6cabf0c01e205376a16f9029430db6eb",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/5a/15362f31c76c6664e7e382a1288f50c91c4e81": "a7653d8f14e26ba9acc34513aae6600d",
".git/objects/5d/cd87b2fc92fde303e1896b74d18b94fe6d13e2": "2869c08210b720545b3fc1e96516784b",
".git/objects/5e/323f3367ae6ee9ab234db228bbb5a1b2173256": "0984bb065a07b36f4d151313fd7a449e",
".git/objects/67/a03221aacbb957d16b9da62b74fab69b14b353": "b0932b9f8dfd4371d04eb6259f76a08f",
".git/objects/68/70514dfe050ef915c12f937d705c87a1d2bae0": "c32fa415589aad80a6ee35d0af7261ad",
".git/objects/69/8c67c9a4adc5a3cb8c3845db1a04f83a70434d": "1adc9ac36e54c266d4a2dbf36e77d0d6",
".git/objects/6e/cf2446c6d3316d572cd3bf2837269354e256ee": "3f2fb4ca92b4fa51c1b699bcd4a9623b",
".git/objects/76/b65d9b8b1194e12e2862612173a646aeb8f606": "ed3a3e379196caf6fc6240b473844507",
".git/objects/78/3b1cc1eb6a25c7277dd7f7bfeafb39c662c144": "a3fc5fed77088aeb14eaac467fd92d28",
".git/objects/78/82d61fc71bdeedf0e9007094f2c1bbef814fda": "b2a41f1971ad22797db1162dec97b6c3",
".git/objects/7c/7d3f4c649620b4db7169807b0a44fc7466567c": "9678c202a684d7019502c5376f281f06",
".git/objects/7d/4436320fdd3192886b68df9508c2fc07fd7b6a": "b9d58dd713cb26bb058520d86df7ba43",
".git/objects/81/5171cea8c2a6d34a2fc84d00a28717bd740bf7": "3ffd5394cb3ecf48b1688080784cb3f2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/c5e6bf8569667140f0d80bd96018cdb3b9a55b": "0b01109eaa47ecc4e6304aca808d710c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/0c93105ff47d5235e117d5e6be313c2f5aeb4c": "348554d503ec6f1bc8e109ffbd9c9ed4",
".git/objects/99/5590834a4eb4dbb351764c520beeab5b7f7a8a": "806207dcdf002e899896970cf5b35688",
".git/objects/9d/daa8c908bd5978ce814d5e1c7fff5e222ce146": "bb05779010640370016180e1b74cf84d",
".git/objects/a0/055faf7120a96b505c2814a1e65420bd3fe6df": "cfb8c851625d810a7c5e110a47cf1fc5",
".git/objects/a2/426a9a985793a116ee53d8427eb1ae4cd341e5": "7e4c0a573f91032cdd71a904866c4e7d",
".git/objects/a2/c2686a02a2b1fb145fe36ec2091efa22ae960c": "9e9fc5d9f20987fc30db0340cd1a9399",
".git/objects/ac/168df93de16954efedba9f215bbe1e2647d8fa": "9a24e8258776359319a8ae8073625f02",
".git/objects/b0/9b931e29e3ca13d00025daeecb7de00c6386ac": "5f18a74701b4cc596d20b0f34a4cacf8",
".git/objects/b0/ac6a7df0d219615e93f2573e84ee0e61fbba6d": "fb199f7001cc50e37ccb3bae68027ccd",
".git/objects/b1/95931b860ce1fa18ae47e0457a7eb9a7b389ee": "1c885f33944dead3d24af1cb19cf5f8b",
".git/objects/b3/ce0b0a23eaaa21b93fc289552aebaf151537bf": "ee55d22173d1c923ab0970bfa6355146",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/2395b5dc91420e9203ee13a96a13cab690e746": "8dddfb89c6e41f070a0cee90862dc781",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/4e2c1cf04a5f90b69e05a5df9f9e09fef9169a": "057c53b8d33299972f9e89fa9eb9db5a",
".git/objects/c4/8d0d5f8d8ecdcd831624a9d7dc6490111697f3": "cdc7b0f83628cbfb93091a121e3f34c6",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/a27b6a778488de6bec6c340081ed2b0723cc35": "c8ff394277f865285fe7981d7a623a8c",
".git/objects/e4/1fc52fe36bb88cb36511266a702845b9e5ca61": "13eaf765919230472b776024f4892594",
".git/objects/eb/25e926fc75f9f8ebe93f79f776d0e7fa54c385": "8e57e6b5dba23279ae076dbe304527d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/6e3c00b7ae1b48c9d2cca2d7e5d4bd4d45be51": "cc5045cd1d9ae1c32e6f1d8f95e6667b",
".git/objects/fe/437d3627e392f79b06d37ecb7404775b8b2189": "a9861cebd4bed0717f17a54a084f55f9",
".git/refs/heads/main": "cfa96fb9dc938454b0caa7be8d3dd1bd",
".git/refs/remotes/origin/main": "cfa96fb9dc938454b0caa7be8d3dd1bd",
"assets/AssetManifest.bin": "e910c3809430b72aacb5a8ba72c2a845",
"assets/AssetManifest.bin.json": "cd64895c4f5b1dc562de41709a298f75",
"assets/AssetManifest.json": "e063a3b223aba9c579f8d0a49691369f",
"assets/assets/icons/about.png": "416ee5258a7b3fe00a3773cec4f71f58",
"assets/assets/icons/Ahun-shopping.png": "b5ab8ea9eacaaaf127d6cd2a50266485",
"assets/assets/icons/Awsugn.png": "fb369242ce209891932cce08cb28c5f8",
"assets/assets/icons/clock.svg": "b9ff6dd2862543c3b9743a455bbffd82",
"assets/assets/icons/education.png": "25182fdf6924706b3e7b6179aae30e0c",
"assets/assets/icons/expiriance.png": "a210350c60e4fa53fedc91918b1d158f",
"assets/assets/icons/flutter.svg": "356b8423fb4c37e3babe292a9e03c975",
"assets/assets/icons/github.svg": "76d344f08412543c74ccd1fb2493d607",
"assets/assets/icons/instagram.png": "0cd3be8e81a8ec2e80122532342fadce",
"assets/assets/icons/linkedin.png": "b67f2af5134598e42156c24a11ef4858",
"assets/assets/icons/linkedin.svg": "3332e5306c890dfe6c9549c849124e19",
"assets/assets/icons/matrix.png": "9127a90a234090cbf8815bb0502fd873",
"assets/assets/icons/playstore.png": "b22787d3b4fe477301eac16b50ceadab",
"assets/assets/icons/playstore.svg": "dafbbd5f4a256bb2bcf37f16f3ceff1b",
"assets/assets/icons/semah.png": "1d3c1a646695f8f7a950c6c8c4cbb69c",
"assets/assets/icons/skills.png": "915b0d533d489025f1e9db8ffefd9064",
"assets/assets/icons/star.png": "5af5b3c12693fbe3a227fc96501696a4",
"assets/assets/icons/topMate.png": "8f85d44acfac5e1e6f6e43f1ae2f88aa",
"assets/assets/icons/twitter.svg": "8f662cde3e6a9aca24b77c1639d9423e",
"assets/assets/icons/whatsapp.png": "62835e76c126a56a796d6a5da4b430fa",
"assets/assets/icons/youtube.svg": "3eb182663fd1181f048705dedec45580",
"assets/assets/images/about.jpg": "7c95f715777471d863dc27ffedc70b30",
"assets/assets/images/cloudRed.svg": "bda20cdd4888404719f432377a3665f9",
"assets/assets/images/cloudyBlue.svg": "e9d5e246793cd42bc01f6809d826583d",
"assets/assets/images/QRcode.JPG": "1dfa5c1e3351d86e50496c822e8a44db",
"assets/assets/images/Robel.png": "24b8b92a513e985eeffe744818f8179d",
"assets/assets/rive/rain.riv": "91a917f7343f7ac4523955e4ac8ca7f6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b50688148a931404a6b358791c1a7b97",
"assets/NOTICES": "6fe95d5fe7686a24f7127af6338da435",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "889b2d2e74f1cccbbaa6eba75c333156",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Robel.png": "24b8b92a513e985eeffe744818f8179d",
"index.html": "fd279447f095949923655a8c03a55b2b",
"/": "fd279447f095949923655a8c03a55b2b",
"main.dart.js": "15bfc84adf2ccd4b23a26332ef01acd7",
"manifest.json": "f134a0d9a1f451a99a37f7597fd1cf9f",
"Robel.png": "24b8b92a513e985eeffe744818f8179d",
"version.json": "cbfe3cec8d2c7272aeb7dab665a3cdcb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
