self.addEventListener("isntall",()=>{
    caches.open("tasks").then((cace) =>{
        caches.addAll([
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