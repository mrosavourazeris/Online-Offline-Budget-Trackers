console.log("Service worker works!")
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/index.js",
    "/manifest.json",
    "/styles.css",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
]

const CACHE_NAME = "static-cache-v2"
const DATA_CACHE_NAME = "data-cache-v1"