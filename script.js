if ("serviceWorker" in navgator) {
    navigator.
    serviceWorker
    .register("sw.js")
    .then(()=> {console.log("Service WOorker Registrado")});
}