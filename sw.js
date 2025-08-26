self.addEventListener("install",()=>{
    caches.open("tasks").then((cache) =>{
        return cache.addAll([
            "index.html",
            "manifest.json",
            "script.js",
            "sw.js"]); 
    })
})

self.addEventListener("fetch", (e)=>{
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
