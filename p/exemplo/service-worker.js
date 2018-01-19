let cacheName = 'Conhecendo service-workers';
let filesToCache = [
    '/',
    'style.css',
    'index.html'
]

self.addEventListener('install',function(e){
    console.log('[ServiceWorker] Installer');
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('[ServiceWorker] Caching app Shell');

            return cache.addAll(filesToCache);
        })
    );
})
self.addEventListener('activate',function(e){
    console.log('[ServiceWorker] Activate');
})
self.addEventListener('fetch',function(e){
    console.log('[ServiceWorker] Fetch', e.request.url);
})