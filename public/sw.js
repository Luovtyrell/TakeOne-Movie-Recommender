const CACHE_NAME = 'take-one-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/svg/clapperboard.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
}); 