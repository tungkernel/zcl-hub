// ZCL Hub Service Worker - Offline Ready & Background Refresh
const CACHE_NAME = 'zcl-hub-v46';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './404.html',
  './src/styles.css',
  './src/app.js',
  './manifest.json',
  './assets/logo.svg',
  './assets/logos/zcl-hub.svg',
  './assets/logos/zcl-teleport.svg',
  './assets/logos/zcl-remote.svg',
  './assets/logos/zcl-mind.svg',
  './assets/logos/zcl-study.svg',
  './assets/pwa/icon-192.png',
  './assets/pwa/icon-512.png',
  './assets/pwa/icon-maskable-512.png',
  './assets/pwa/apple-touch-icon.png',
  './assets/screenshots/tim-may-moi.png',
  './assets/screenshots/hoi-nhan-file.png',
  './assets/screenshots/web-qr-khach.png',
  './assets/screenshots/tu-dong-hoa-cai-dat.png',
  './assets/screenshots/en-device-discovery.png',
  './assets/screenshots/en-receive-prompt.png',
  './assets/screenshots/en-web-guest.png',
  './assets/screenshots/en-transfer-settings.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (!event.data || !event.data.type) return;

  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data.type === 'FORCE_REFRESH_CACHE') {
    event.waitUntil(
      caches.open(CACHE_NAME).then(async (cache) => {
        await Promise.allSettled(
          ASSETS_TO_CACHE.map(async (assetUrl) => {
            const response = await fetch(assetUrl, { cache: 'no-cache' });
            if (response && response.ok) {
              await cache.put(assetUrl, response.clone());
            }
          })
        );
        const clients = await self.clients.matchAll({ type: 'window' });
        clients.forEach((client) => {
          client.postMessage({ type: 'ZCL_CACHE_REFRESHED', timestamp: Date.now() });
        });
      })
    );
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cachedResponse) => {
        const networkFetch = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return cachedResponse;
          });

        return cachedResponse || networkFetch;
      })
    )
  );
});
