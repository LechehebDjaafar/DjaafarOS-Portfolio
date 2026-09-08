// DjaafarOS — minimal service worker.
// Caches the app shell so the portfolio still opens (mostly) offline after a first visit.
// Not a full offline framework — just enough to make the "Install" prompt meaningful.
const CACHE_NAME = 'djaafaros-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network-first for live-data API calls (weather, github, etc.) — never serve stale data from cache.
  if (event.request.url.includes('api.') || event.request.url.includes('githubusercontent') || event.request.method !== 'GET') {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => cached))
  );
});
