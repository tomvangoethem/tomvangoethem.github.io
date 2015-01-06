// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");

self.addEventListener('install', function(e) {
  console.log("SW installed");
  console.log(e);
});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
});

self.addEventListener('fetch', function(e) {
  console.log("Caught a fetch!");
  console.log(e);
  //e.respondWith(new Response("Hello world!"));
});
