(function () {
   var targ = null;

   var shiftX = 0;
   var shiftY = 0;

   var animId = 0;

   document.addEventListener('mousedown', (e) => {
      targ = event.target;
      
      if (!targ.classList.contains('el')) return;

      var coords = getCoords(targ);
      shiftX = e.pageX - coords.left;
      shiftY = e.pageY - coords.top;

      targ.style.position = 'absolute';
      targ.style.zIndex = 1000;
      document.body.appendChild(targ);
      moveAt(targ, e);

      targ.ondragstart = function(event) {
         event.preventDefault();
      };
   });

   document.addEventListener('mousemove', (e) => {
      if (!targ) return;
      moveAt(targ, e);
   });

   document.addEventListener('mouseup', (e) => {
      targ = null;
   });

   function moveAt(elem, e) {
      animId = requestAnimationFrame(() => {
         elem.style.left = e.pageX - shiftX + 'px';
         elem.style.top = e.pageY - shiftY + 'px';
      });
   }
   
   function getCoords(elem) { 
      var box = elem.getBoundingClientRect();
      return {
         top: box.top + pageYOffset,
         left: box.left + pageXOffset
      };
    }

}());