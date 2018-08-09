if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('./sw.js?2')
      .then(() => navigator.serviceWorker.ready.then((worker) => {
         worker.sync.register('syncdata');
      }))
      .catch((err) => console.log(err));
}