console.log('registered')


var CACHE_NAME = 'expense-tracker'
var urlsToCache = [            
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',        
    '/static/js/main.chunk.js',

    //'/static/js/2.0beda9f7.chunk.js', // for build
    //'/static/js/main.dbce4115.chunk.js', // for build
    //'/static/css/main.8df5b9e0.chunk.css', // for build    
    '/icons/android-icon-36x36.png',
    '/icons/android-icon-48x48.png',
    '/icons/android-icon-72x72.png',
    '/icons/android-icon-96x96.png',
    '/icons/android-icon-144x144.png',
    '/icons/android-icon-192x192.png',
    '/icons/favicon.ico',
    '/icons/favicon-32x32.png',
    '/icons/favicon-96x96.png',
    '/icons/favicon-16x16.png',    
    
    '/manifest.json',    
    '/logo192.png',    
    '/',
    '/sw.js',
]

this.addEventListener('install', (event) => {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache')
                return (
                    cache.addAll(urlsToCache)
                    
                )

            })
    )

})


this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        console.log(response)
                        return (response)
                    } 
                    // else {
                    //     return fetch(event.request).then((response) => {
                    //         if (!response || response.status !== 200 || response.type !== 'basic') {
                    //             console.log(response)
                    //             return response;
                    //         }
                    //         var responseToCache = response.clone();

                    //         caches.open(CACHE_NAME).then((cache) => {
                    //             cache.put(event.request, responseToCache)
                    //         })
                    //         console.log(response)
                    //         return response;

                    //     }).catch((err) => {
                    //         console.log('err', err)
                    //     })

                    // }

                }).catch((err) => {
                    console.log('err', err)

                })
        )
    }

})

