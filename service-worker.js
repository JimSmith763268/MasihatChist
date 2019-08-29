console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "0-safe-asli.html",
    "revision": "09d927980203cd4f58670dffeb649a1d"
  },
  {
    "url": "1-muqadama.html",
    "revision": "13f19393fe6ec335c8e9db51358fce7c"
  },
  {
    "url": "10-ruhulqudus-kist-emtehan.html",
    "revision": "a2ee1bb7f46c2835bf8ee4d27fbad200"
  },
  {
    "url": "10-ruhulqudus-kist.html",
    "revision": "2da8d7d89fa42b103c270518c35964c9"
  },
  {
    "url": "11-mana-taslis-chist-emtehan.html",
    "revision": "8891b13a5be5b8dc6b7ad449e66f76b1"
  },
  {
    "url": "11-mana-taslis-chist.html",
    "revision": "ca0b1a99e53c0053d3f35f71d51b1b47"
  },
  {
    "url": "2-khuda-kist-emtehan.html",
    "revision": "cc1bc08d7a4de250723a53eff6a445cc"
  },
  {
    "url": "2-khuda-kist.html",
    "revision": "79643cade412fbc414b5e7b381c36e0e"
  },
  {
    "url": "3-ensan-kist-emtehan.html",
    "revision": "acd24c2860b100ede94dbb03045e9169"
  },
  {
    "url": "3-ensan-kist.html",
    "revision": "c143ac4102d898418cf8c6d0b9a8d9d1"
  },
  {
    "url": "4-gunah-chist-emtehan.html",
    "revision": "c7c99ee168ec456c3576ac0ad2f50789"
  },
  {
    "url": "4-gunah-chist.html",
    "revision": "b3109177e42f362e369558d3e84cdf76"
  },
  {
    "url": "5-anbja-emtehan.html",
    "revision": "a3db322645902a55357ad8d5dc767fd9"
  },
  {
    "url": "5-anbja.html",
    "revision": "5e446038b866e74de6ab26f9f61c251b"
  },
  {
    "url": "6-ketabha-emtehan.html",
    "revision": "c2bc0e72800f349c4a7b4b91cb5f1a3a"
  },
  {
    "url": "6-ketabha.html",
    "revision": "986a7bfced5d8473f26d9fc3e35dffe4"
  },
  {
    "url": "7-tawalud-emtehan.html",
    "revision": "f09cfde55ed425fcb39d3931dad363f7"
  },
  {
    "url": "7-tawalud.html",
    "revision": "c450734119355fec2e9200782cf25051"
  },
  {
    "url": "8-isa-kist-emtehan.html",
    "revision": "f5d5f50d6f5d629fa7628543a005f36b"
  },
  {
    "url": "8-isa-kist.html",
    "revision": "f95eabe616e34c4fb1dfda5bc1f1473a"
  },
  {
    "url": "9-kare-masih-emtehan.html",
    "revision": "b3b207a8210429bfc168ae08a5ca05e8"
  },
  {
    "url": "9-kare-masih.html",
    "revision": "f645ac47d092bdd95dbc6d9663b06e76"
  },
  {
    "url": "favicon.ico",
    "revision": "a116e69a265f93ccbc3bbdb6658a32aa"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "6c3064bff49637767235f14175a154eb"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "5c7f0a6ce501f7bd6ae6e6094deec0e2"
  },
  {
    "url": "images/icons/icon-310x310.png",
    "revision": "bec153428109cf9f80d48328bed7c123"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "62be20f0009610a74b37f3364260f35b"
  },
  {
    "url": "images/splash.svg",
    "revision": "af7c60de010f04c40e4a95397b40977b"
  },
  {
    "url": "index.html",
    "revision": "a53703b08e13c238d85876796c4a2143"
  },
  {
    "url": "install.js",
    "revision": "01c1238f17934ebd509afb5439432e16"
  },
  {
    "url": "manifest.json",
    "revision": "a34f085e0be179c7b58c3cacb8f8b916"
  },
  {
    "url": "masihat-chist.min.css",
    "revision": "fc593d18a59202565f3f40ce02ac1c70"
  },
  {
    "url": "masihat-chist.min.js",
    "revision": "b4ad25c15a449b14bfae17563613b198"
  },
  {
    "url": "offline.html",
    "revision": "cec4505888d2e961d927370dafc8eff4"
  },
  {
    "url": "tamas.html",
    "revision": "4ce82aacd78531b48b6c65f4148aa0d8"
  }
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
