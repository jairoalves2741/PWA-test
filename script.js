if ("serviceWorker" in navigator) {
    navigator.
    serviceWorker
    .register("/PWA-test/sw.js")
    .then(()=> {console.log("Service WOorker Registrado")});
}

