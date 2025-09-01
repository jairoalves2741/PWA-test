self.addEventListener("install",()=>{
    caches.open("tasks").then((cache) =>{
        return cache.addAll([
            "/PWA-test/index.html",
            "/PWA-test/manifest.json",
            "/PWA-test/script.js",
            "/PWA-test/sw.js",
            "/PWA-test/icons/"
        ]); 
    })
})

self.addEventListener("fetch", (e)=>{
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
