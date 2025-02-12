const CACHE_NAME = 'cms-cache-v1';
const urlsToCache = [
  '/',
  '/offline.html',
  '/images/logo1.png',
  '/images/cmstoilethire.jpg',
  '/images/portable-toilet.svg',
  '/images/luxury-toilet.svg',
  '/images/event-toilets.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cache what we can, but don't fail if some assets are missing
        return cache.addAll(urlsToCache.map(url => {
          return new Request(url, { mode: 'no-cors' });
        })).catch(err => console.log('Cache addAll error:', err));
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
