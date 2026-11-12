const CACHE_NAME = "lo-de-juan-v2";
const APP_SHELL = [
    "./",
    "./index.html",
    "./css/estilos.css",
    "./js/script.js",
    "./manifest.webmanifest",
    "./img/logo-lo-de-juan.jpeg",
    "./img/app-icon.svg"
];
const CACHEABLE_DESTINATIONS = new Set(["image", "style", "script", "font"]);

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName.startsWith("lo-de-juan-") && cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const requestUrl = new URL(request.url);

    if (request.method !== "GET" || requestUrl.origin !== self.location.origin) return;

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request).catch(() => caches.match("./index.html"))
        );
        return;
    }

    if (request.destination === "style" || request.destination === "script") {
        const networkResponse = fetch(request, { cache: "no-cache" });
        event.respondWith(
            networkResponse.then((response) => {
                if (response.ok) {
                    const responseToCache = response.clone();
                    event.waitUntil(
                        caches.open(CACHE_NAME)
                            .then((cache) => cache.put(request, responseToCache))
                    );
                }
                return response;
            }, () => caches.match(request))
        );
        return;
    }

    if (!CACHEABLE_DESTINATIONS.has(request.destination)) return;

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            return fetch(request).then((response) => {
                if (!response.ok) return response;
                const responseToCache = response.clone();
                return caches.open(CACHE_NAME)
                    .then((cache) => cache.put(request, responseToCache))
                    .then(() => response);
            });
        })
    );
});
