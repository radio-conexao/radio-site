self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Necessário para o PWA ser instalável
  e.respondWith(fetch(e.request));
});
