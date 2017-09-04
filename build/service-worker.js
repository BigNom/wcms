"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0d2e965acc88b737f82e9924ae14d678"],["/static/css/main.f0344e0f.css","bdb10994f837b8ef011eaf7b812b6f57"],["/static/js/main.2835a4ec.js","12f3a43eee4b30a3e36e0f79be33c4bb"],["/static/media/beef-is-the-greatest.2e6de6a8.jpg","2e6de6a8e3baa43391202b51536c460f"],["/static/media/bgSmall.3e06edcb.jpg","3e06edcba42fda77a7ea1f9b37db6b21"],["/static/media/goats-350.c2c49b70.jpg","c2c49b705c079ec8c9fe11e6a099cf9f"],["/static/media/haccp-96x96.ec3700e5.jpg","ec3700e5cef66f543c2adf542e678a5e"],["/static/media/halal.8e0b15bf.jpg","8e0b15bf4900c253c51c6b6d916cf37e"],["/static/media/icons-16.0148ec9e.ttf","0148ec9e0eca2f004d96763a53cefc28"],["/static/media/icons-16.0fdda991.woff","0fdda991a56922059fe815c03180e4d5"],["/static/media/icons-16.21641a11.eot","21641a11858547e863d132ca9bf4f7a4"],["/static/media/icons-20.05b51a6b.eot","05b51a6b50b3ea1fe0c380207f164a53"],["/static/media/icons-20.3a5e388e.woff","3a5e388e938cbbbbb4acb90b5cfc2d73"],["/static/media/icons-20.afe1cf81.ttf","afe1cf813c6c55312fcca733bd9d234d"],["/static/media/msa-66.3e47c034.jpg","3e47c034d09825360a930fabecd128f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});