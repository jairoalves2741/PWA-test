if ("serviceWorker" in navigator) {
    navigator.
    serviceWorker
    .register("sw.js")
    .then(()=> {console.log("Service WOorker Registrado")});
}

