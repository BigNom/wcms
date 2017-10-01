"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9790a2d2815e3b6ed2afecddc9711f87"],["/static/css/main.d073538c.css","44a9bf94b052c737de02f343d1eba33a"],["/static/js/0.13bb4901.chunk.js","3b0a764654fee67582581ed633d4c828"],["/static/js/1.9c606308.chunk.js","2217abb9b191e75c3ee4880e6d18bf27"],["/static/js/2.0e3cfe58.chunk.js","4fa98d8d44157fcfb0b93d0e465f9ec7"],["/static/js/3.57eb5907.chunk.js","4f32a99f065c8a9a73c5439a4456708b"],["/static/js/4.cd430a16.chunk.js","15a6c699e5e8a1dc61a71934417d3b70"],["/static/js/5.ce15e873.chunk.js","36520650a1d0dfbb540c51aca07c1665"],["/static/js/6.a06a6bf8.chunk.js","f4257f749578e9ac0d0a2ccde3e426ba"],["/static/js/7.0b9704a6.chunk.js","f99cebe9fb4ea0d552a32e9e0e220945"],["/static/js/8.2a463440.chunk.js","44de254188cfcd017619c8746ed6dcd2"],["/static/js/9.bdab6448.chunk.js","af9cc1755d6f33fbd6803f63b4876ff5"],["/static/js/main.654e8fa1.js","2ec13fc99e3bf0fa917ebde6a1f6c41e"],["/static/media/beefIcon.c32b8cb8.svg","c32b8cb81a0ca38c09912664ef052c78"],["/static/media/haccp-96x96.ec3700e5.jpg","ec3700e5cef66f543c2adf542e678a5e"],["/static/media/halal.8e0b15bf.jpg","8e0b15bf4900c253c51c6b6d916cf37e"],["/static/media/logoSm.890fae0b.svg","890fae0bb6a65f56026a761be281dd27"],["/static/media/msa-66.3e47c034.jpg","3e47c034d09825360a930fabecd128f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});