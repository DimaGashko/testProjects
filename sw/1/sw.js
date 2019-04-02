self.addEventListener('install', (event) => {
   console.log('Установлен', event);
});

self.addEventListener('activate', (event) => {
   console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
   //console.log('Происходит запрос на сервер', event);
   console.log('event');
   
});