const CACHE="ehs-auditoria-v24";
const ASSETS=["./","index.html","manifest.webmanifest","ehs-icon-192-v12.png","ehs-icon-512-v12.png"];

self.addEventListener("install",event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    for(const asset of ASSETS){
      try{
        const response=await fetch(asset,{cache:"reload"});
        if(response && response.ok) await cache.put(asset,response.clone());
      }catch(e){}
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  const req=event.request;
  const isDocument=req.mode==="navigate" || req.destination==="document";
  if(isDocument){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(req,{cache:"no-store"});
        const cache=await caches.open(CACHE);
        await cache.put("index.html",fresh.clone());
        return fresh;
      }catch(e){
        return (await caches.match("index.html")) || Response.error();
      }
    })());
    return;
  }
  event.respondWith((async()=>{
    const cached=await caches.match(req);
    const networkPromise=fetch(req,{cache:"no-cache"}).then(async resp=>{
      if(resp && resp.ok){
        const cache=await caches.open(CACHE);
        cache.put(req,resp.clone());
      }
      return resp;
    }).catch(()=>null);
    return cached || (await networkPromise) || Response.error();
  })());
});
