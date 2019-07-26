"use strict";


// Listen to fetch events
self.addEventListener('fetch', function(event) {

  // Check if the image is a jpeg
  if (/\.jpg$|.png$/.test(event.request.url)) {
    console.log('拦截请求')
    // Inspect the accept header for WebP support
    var supportsWebp = false;
    if (event.request.headers.has('accept')) {
      supportsWebp = event.request.headers
        .get('accept')
        .includes('webp');
    }

    // If we support WebP
    if (supportsWebp) {
      // Clone the request
      var req = event.request.clone();
      console.log('支持 webP')
      // Build the return URL
      
      var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp";
      console.log(returnUrl)
      event.respondWith(
        fetch(returnUrl, {
          mode: 'no-cors'
        })
      );
    }
  }
});
