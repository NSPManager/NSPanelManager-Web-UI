// public/sw.js
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

// A fetch handler is required by Chrome for PWA installability
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
