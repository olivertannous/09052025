self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('live-prices-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/live.html',
                '/live-price.html',
                '/manifest.json',
                '/icons/icon-192x192.png',
                '/icons/icon-512x512.png',
                'https://goldbroker.com/widget/live/XAU?currency=USD',
                'https://goldbroker.com/widget/live/XAG?currency=USD',
                'https://goldbroker.com/widget/live/XPT?currency=USD',
                'https://goldbroker.com/widget/live/XPD?currency=USD'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
