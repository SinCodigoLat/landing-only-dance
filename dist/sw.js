const CACHE_VERSION = 'v3'; // Incrementar esto cuando haya cambios importantes
const CACHE_NAME = `dsb-cache-${CACHE_VERSION}`;
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/DSBIcon.png',
  // No cachear rutas SPA directamente para evitar servir HTML antiguo en recargas
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  // Tomar control inmediatamente
  self.skipWaiting();
});

// Evento de activación para limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('dsb-cache-')) {
            console.log('Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Para navegaciones de SPA, devolver siempre index.html (network first)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch('/index.html').catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Para solicitudes de módulos JavaScript, no usar caché y asegurar respuesta fresca
  if (event.request.url.endsWith('.js') && event.request.destination === 'script') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Verificar que no es una URL de extension de Chrome antes de cachear
            if (!event.request.url.startsWith('chrome-extension://')) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }
            
            return response;
          });
      })
  );
}); 