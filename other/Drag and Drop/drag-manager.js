(function ($) { 

   function DropManager(draggableSel, droppableSel) {
      this.draggableSel = draggableSel || 'draggable';
      this.droppableSel = droppableSel || 'droppable';
     
      this._createParametrs();
      this._initEvents();
   }

   var fn = DropManager.prototype;

   fn._initEvents = function () {     
      document.addEventListener('mousedown', function (event) { 
         if (event.which !== 1) return; //если клик правой кнопкой мыши

         var elem = event.target.closest(this.draggableSel);
         if (!elem) return;

         clearSelection();

         this.dragObj.elem = elem;
         this.dragObj.downX = event.pageX;
         this.dragObj.downY = event.pageY;
      }.bind(this));

      document.addEventListener('mousemove', function (event) {
         if (!this.dragObj.elem) return;

         if (!this.dragObj.avatar) {
            var x = event.pageX - this.dragObj.downX;
            var y = event.pageY - this.dragObj.downY;
            if (x * x + y * y < 25 * 25) return;

            this._createAvatar();

            var coords = getCoords(this.dragObj.avatar);
            this.dragObj.shiftX = this.dragObj.downX - coords.left;
            this.dragObj.shiftY = this.dragObj.downY - coords.top;      

            this._startDrag();
         }
         
         clearSelection();
         this._move(event);
         this._updateDroppable();
      }.bind(this));

      document.addEventListener('mouseup', function (event) {
         if (this.dragObj.avatar) {
            this._finishDrag(event);
         } 

         this.dragObj = new DragObj();
      }.bind(this));
   }

   fn._move = function (event) { 
      this.dragObj.avatar.style.cssText += 'left: '
            + (event.pageX - this.dragObj.shiftX) + 'px;' + 
         'top: ' + (event.pageY - this.dragObj.shiftY) + 'px';
   }

   fn._startDrag = function () {
      document.body.appendChild(this.dragObj.avatar);
     
      this.dragObj.avatar.style.cssText += 'z-index: 9999; position: absolute';
      $(document.body).addClass('no-select');

      this.events.trigger('drag_start', this.dragObj.elem);

      this.dragObj.elem.ondragstart_prev = this.dragObj.elem.ondragstart
      this.dragObj.elem.ondragstart = function() {
         return false;
      };
   }

   fn._resetStyles = function () {
      $(document.body).removeClass('no-select');

      this.dragObj.avatar.style.zIndex = '';
      this.dragObj.avatar.style.position = '';

      this.dragObj.elem.ondragstart = this.dragObj.elem.ondragstart_prev;
      delete this.dragObj.elem.ondragstart_prev;
   }

   fn._finishDrag = function (event) {
      this._resetStyles();

      if (this.dragObj.dropElem) { 
         this.events.trigger('finish', this.dragObj);
      
      } else {
         this.events.trigger('cancel', this.dragObj);
      }
   }

   fn._updateDroppable = function () { 
      var prev = this.dragObj.dropElem
      var dropElem = this._findDroppable(event);
      this.dragObj.dropElem = dropElem;

      if (dropElem === prev) {
         return;
      };

      if (prev) this.events.trigger('unset_drop_elem', prev);
      if (dropElem) this.events.trigger('set_drop_elem', dropElem);
   }

   fn._findDroppable = function () {
      this.dragObj.elem.style.display = 'none';
      var elem = document.elementFromPoint(event.clientX, event.clientY);
      this.dragObj.elem.style.display = '';

      if (!elem) return null;
      
      var dropElem = elem.closest(this.droppableSel);
      return (dropElem) ? dropElem : null;
   }

   fn._createAvatar = function () {
      this.dragObj.avatar = this.dragObj.elem;
      if (!this.dragObj.avatar) {
         console.error('No Avatar in Init:', this.dragObj);
         
      }
   }

   fn._createParametrs = function () {
      this.dragObj = new DragObj();
      this.events = new Events();
   }
   
   function DragObj() {
      this.elem = null;
      this.avatar = null;
      this.dropElem = null;
      this.downX = 0;
      this.downY = 0;
      this.shiftX = 0;
      this.shiftY = 0;
   }

   function getCoords(elem) {
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
   }

   function clearSelection() {
      if(document.selection && document.selection.empty) {
          document.selection.empty();
      } else if(window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
      }
  }
  


   window.DropManager = DropManager;

}(jQuery));