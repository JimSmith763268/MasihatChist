console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "0-safe-asli.html",
    "revision": "c627d92bc3fc653467e0f85fb3f9eb00"
  },
  {
    "url": "1-muqadama.html",
    "revision": "13f19393fe6ec335c8e9db51358fce7c"
  },
  {
    "url": "10-kare-masih-emtehan.html",
    "revision": "abf9e63f36e83080a27101ce0dcf88f6"
  },
  {
    "url": "10-kare-masih.html",
    "revision": "fafd70e7fffd0a04482b7bc7776daf71"
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
    "url": "11-ruhulqudus-kist-emtehan.html",
    "revision": "fc758e4099a50e046bfbec844d4f0149"
  },
  {
    "url": "11-ruhulqudus-kist.html",
    "revision": "55406600176d7ab8b901b135001d4527"
  },
  {
    "url": "12-mana-taslis-chist-emtehan.html",
    "revision": "ecd7a2d68df76441d6a4ad2f200f594f"
  },
  {
    "url": "12-mana-taslis-chist.html",
    "revision": "70a9de8ac85d526f851128432a5e5914"
  },
  {
    "url": "13-kelisa-chist-emtehan.html",
    "revision": "04ecf8507107be334f20718f60bc33f8"
  },
  {
    "url": "13-kelisa-chist.html",
    "revision": "da0642ab5b429dfbc806eadeaf6269e7"
  },
  {
    "url": "14-takalif-marasem-emtehan.html",
    "revision": "8fa206d1894d85f866d30339e2f972db"
  },
  {
    "url": "14-takalif-marasem.html",
    "revision": "3f7d9d36c09be16bbb21baba58cd9d18"
  },
  {
    "url": "15-talim-akhlaqi-emtehan.html",
    "revision": "87afc9b354ccb7e509ee6908c061f90c"
  },
  {
    "url": "15-talim-akhlaqi.html",
    "revision": "e5e3f41ab6719b3666485b49feb7eee6"
  },
  {
    "url": "16-aqide-masihian-emtehan.html",
    "revision": "c0edb511d71c5b1f873c569fa460e4b9"
  },
  {
    "url": "16-aqide-masihian.html",
    "revision": "a442b5c9e0ba8d97402c302279f61178"
  },
  {
    "url": "17-khatema.html",
    "revision": "bfb0ec6d507b1c1fd2b87debd605b6dc"
  },
  {
    "url": "2-khuda-kist-emtehan.html",
    "revision": "9df50126499a38d94cc94a5b2ea16529"
  },
  {
    "url": "2-khuda-kist.html",
    "revision": "79643cade412fbc414b5e7b381c36e0e"
  },
  {
    "url": "3-ensan-kist-emtehan.html",
    "revision": "22d5fa0177f5efb64144cd9d6da9f6a2"
  },
  {
    "url": "3-ensan-kist.html",
    "revision": "c143ac4102d898418cf8c6d0b9a8d9d1"
  },
  {
    "url": "4-gunah-chist-emtehan.html",
    "revision": "52a1948694e4d2417165d8c885576451"
  },
  {
    "url": "4-gunah-chist.html",
    "revision": "b3109177e42f362e369558d3e84cdf76"
  },
  {
    "url": "5-anbja-emtehan.html",
    "revision": "7bf339cd5c999027a9a6aeaabedea620"
  },
  {
    "url": "5-anbja.html",
    "revision": "5e446038b866e74de6ab26f9f61c251b"
  },
  {
    "url": "6-ketabha-emtehan.html",
    "revision": "d5847c79eb020ca260293c13bf826caf"
  },
  {
    "url": "6-ketabha.html",
    "revision": "986a7bfced5d8473f26d9fc3e35dffe4"
  },
  {
    "url": "7-tawalud-emtehan.html",
    "revision": "6f0ad925da1ed150ede8cdd1902fafd0"
  },
  {
    "url": "7-tawalud.html",
    "revision": "c450734119355fec2e9200782cf25051"
  },
  {
    "url": "8-isa-kist-emtehan.html",
    "revision": "0185653663f1a61d7b644d9fe21f90ee"
  },
  {
    "url": "8-isa-kist.html",
    "revision": "f95eabe616e34c4fb1dfda5bc1f1473a"
  },
  {
    "url": "9-ensan-chi-bayad-bukunad-emtehan.html",
    "revision": "e87e9b07c927880029a88e5788ce2849"
  },
  {
    "url": "9-ensan-chi-bayad-bukunad.html",
    "revision": "958e5a7f3e437b2328ec23672ba27a02"
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
    "url": "images/scripture-border.png/icon-192x192.png",
    "revision": "6c3064bff49637767235f14175a154eb"
  },
  {
    "url": "images/scripture-border.png/icon-256x256.png",
    "revision": "5c7f0a6ce501f7bd6ae6e6094deec0e2"
  },
  {
    "url": "images/scripture-border.png/icon-310x310.png",
    "revision": "bec153428109cf9f80d48328bed7c123"
  },
  {
    "url": "images/scripture-border.png/icon-512x512.png",
    "revision": "62be20f0009610a74b37f3364260f35b"
  },
  {
    "url": "images/splash.svg",
    "revision": "af7c60de010f04c40e4a95397b40977b"
  },
  {
    "url": "index.html",
    "revision": "0abc8118e7413c350766869fa067841c"
  },
  {
    "url": "install.js",
    "revision": "9cdf74389cce80cbb291b8b9b108cefa"
  },
  {
    "url": "masihat-chist.min.css",
    "revision": "d55d52d5ac7690a5d85b66fd237b0afe"
  },
  {
    "url": "masihat-chist.min.js",
    "revision": "3811747b3a6f09478a8118be351a683c"
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
