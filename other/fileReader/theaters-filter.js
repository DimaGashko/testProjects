/**
*  TheatersFilter - интерфейс фильтрации кинотеатров
*  7/2018 Dima Gashko (dimagashko@gmail.com)
*/

(function (global) {
   /**
    * TheatersFilter - Класс, реализующий интерфейс фильтрации кинотеатров
    * 
    * use:
    * 1) Инициализация необходимых фильтров
    * var filter = new TheatersFilter.filters.FavouritesFilter()
    * 
    * Все стандартные фильтры находятся в new TheatersFilter.filters
    * Также здесь находится BaseFilter, 
    * который используется для создания своих фильтров
    * 
    * Пример создания своего фильтра в описании BaseFilter
    * 
    * 2) Инициализация
    * var theatersFilter = new TheatersFilter();
    * 
    * 3) Добавление фильтров
    * theatersFilter.pushFilter(filter);
    * 
    * 4) Применение фильтров
    * theatersFilter.useFilters();
    * 
    * Данный метод нужно вызывать каждый раз, 
    * когда нужно применить фильтр
    * 
    * При этом каждый раз применяются все фильтры
    * 
    * Если какой-то фильтр в данный момент не нужен его можно отключить:
    * filter.on = false (true, что бы включить)
    * 
    * @class
    */
   function TheatersFilter() {
      //TheatersFilter создается только 1 раз
      //Все остальные инизиализации возвращают первый
      if (_theatersFilter) { 
         return _theatersFilter;
      }

      _theatersFilter = this;

      this._createParametrs();
      this._getElements();
      this._init();

      global.elements = this._theaterElements;
   }
    
   var _theatersFilter = null; //TheatersFilter создается только 1 раз
      //Все остальные инизиализации возвращают первый

   var fn = TheatersFilter.prototype;

   /**
    * Добалвяет переданный фильтр в Конец очереди обработки фильтров
    * @param {TheatersFilter.Filter} filter - фильтр
    */
   fn.pushFilter = function (filter) { 
      if (!this._isFilter(filter)) { 
         console.error('Filter должен быть экземпляром BaseFilter');
         return;
      }

      this._filters.push(filter);
   }

   /**
    * Добалвяет переданный фильтр в Начало очереди обработки фильтров
    * @param {TheatersFilter.Filter} filter - фильтр
    */
   fn.unshiftFilter = function (filter) { 
      if (!this._isFilter(filter)) { 
         console.error('Filter должен быть экземпляром BaseFilter');
         return;
      }

      this._filters.unshift(filter);
   }
   
   /**
    * Удаляет переданный фильтр
    * @param {function} filter 
    */
   fn.removeFilter = function (filter) { 
      this._filters = this._filters.filter(function (item) { 
         return item !== filter;
      });
   }

   /**
    * Применяет добавленные фильтры
    */
   fn.useFilters = function () {
      requestAnimationFrame(function () { 

         this.resetFields();
         this.hideElements(this._theaterElements);

         //Хранит уже отфильтрованные элементы
         var filteredElements = this._theaterElements.slice(); 

         this._filters.forEach(function (filter) {
            if (!filter.on) return;
            
            //В фильтр передается массив, отсортированный предыдущим фильтром
            var filterResult = filter.use(filteredElements);

            if (filterResult) {
               filteredElements = filterResult;
            } else {
               console.warn('Фильтр', filter, 'Не вернул результат');
            }
         }.bind(this));

         if (filteredElements.length) { 
            this.hideNotFound();

            //В конце элементы сортируются на странице 
            //В порядке, в каком указанны в filteredElements
            this._sortInDom(filteredElements);
            this.showElements(filteredElements);   
         } else {
            this.showNotFound();
         }

      }.bind(this));
   }

   /**
    * Сортирует элементы в DOM в последовательности,
    * в которой они идут в element
    * 
    * Перемещает элементы в DOM
    * Перемещает только те, которые находятся в elements
    * Остальные - игнорируются (предполагается, что они будут скрыты)
    * 
    * @param {TheaterElement[]} elements элементы, которые нужно сортировать
    */
   fn._sortInDom = function (elements) {
      elements.forEach(function (el) {
         el.els.container.parentElement.appendChild(el.els.container);
      });
   }

   /**
    * Возвращает значение полей всем элементам
    */
   fn.resetFields = function () { 
      this._theaterElements.forEach(function (element) { 
         element.resetFields();
      });
   }

   fn.showElements = function (elements) {
      elements.forEach(function (elem) { 
         elem.show();
      });
   }

   fn.hideElements = function (elements) {
      elements.forEach(function (elem) { 
         elem.hide();
      });
   }

   fn.showNotFound = function () { 
      this.els.notFound.style.display = 'block';
   }

   fn.hideNotFound = function () { 
      this.els.notFound.style.display = 'none';
   }

   fn._init = function () {
      this._initTheaterElements();
   }

   /**
    * Получает DOM-элементы кинотеатра и создает из них TheaterElement-ы 
    */
   fn._initTheaterElements = function () {
      var elements = this.els.container.querySelectorAll('.theater-block');

      for (var i = 0; i < elements.length; i++) {
         var el = new TheatersFilter._TheaterElement(elements[i]);
         this._theaterElements.push(el);
      }
   }

   fn._createParametrs = function () {
      this.els = {};
      this._filters = []; //Массив примененных фильтров
      this._theaterElements = []; //Фильтруемые элементы (TheaterElement[])
   }

   fn._getElements = function () { 
      this.els.container = document.querySelector('.theaters-container');
      this.els.notFound = document.querySelector('.theater-nothing');
   }

   fn._isFilter = function (filter) { 
      return filter instanceof TheatersFilter.filters.BaseFilter;
   }

   global.TheatersFilter = TheatersFilter;
   TheatersFilter.filters = {}; //Массив с встроенными фильтрами
}(window));

// - - - Вспомогательные классы - - - 

// - - - TheaterElement - - - 
(function (global) {
   /**
    * Интерфейс dom-элемента кинотеатра. 
    * (внутренний класс)
    * 
    * Используется как вспомогательная обертка для dom-элемента
    * Хранит начальные значения полей, а также имеет 
    * методы для работы с элементом (isFavourite, show, hide...)
    * 
    * Испльзуется основным элементом в TheatersFilter
    * (все фильтры получают массив TheaterElement[], 
    * и должны возвращать массив TheaterElement[])
    * 
    * @param {HTMLElement} rootEl dom-элемент кинотеатра
    * @param {object} options объект параметров фильтра
    * 
    * Поля options:
    *  
    * @class
    * 
    */
   function TheaterElement(rootEl, options) { 
      if (!options) options = {};

      this._getElements(rootEl);
      this._create();
   }

   var fn = TheaterElement.prototype;

   /**
    * @returns {boolean} отмечен ли элемент как Избранный 
    */
   fn.isFavourite = function () {
      return hasClass(this.els.root, 'favourites');
   }

   /**
    * Показать элемент
    */
   fn.show = function () {
      this.els.container.style.display = '';
   }

   /**
    * Спрятать элемент
    */
   fn.hide = function () { 
      this.els.container.style.display = 'none';
   }

   /**
    * Возвращает элемент в первоначальное состояние
    * (восстанавливает поля, делает видимым)
    */
   fn.reset = function() {
      this.resetFields();
      this.show();
   }
   
   /**
    * Восстанавливает начальное содержимое в полях элемента кинотеатра
    */
   fn.resetFields = function () {
      this.els.name.innerText = this.name;
      this.els.address.innerText = this.address;
   }

   fn._create = function() {
      this.name = this.els.name.innerText;
      this.address = this.els.address.innerText;
   }

   fn._getElements = function (rootEl) {
      this.els = {};
      this.els.root = rootEl; 

      this.els.container = rootEl.parentElement;
      this.els.name = rootEl.querySelector('.theater-name');
      this.els.address = rootEl.querySelector('address');
   }

   function hasClass(targ, className) {
      return new RegExp('(\\s|^)' + className + '(\\s|$)').test(targ.className);
   }

   TheatersFilter._TheaterElement = TheaterElement;
}(window));

// - - - BaseFilter - - -
(function (global) {
   /**
    * Создает экземпляр базового фильтра
    * 
    * @param {object} options объект параметров фильтра
    * Поля options:
    * @param {boolean} options.on будет ли включен фильтр после создания
    * 
    * Используется для создания других (а также кастомных) фильтров
    * 
    * В реализации фильтров обязат быть метод use, который должен получать
    * массив элементов, и возвращать новый отсортированный массив
    * 
    * Пример создания кастомного фильтра (FavouritesFilter в es6 формате):
    * 
    *  class FavouritesFilter extends TheatersFilter.filters.BaseFilter {
    *     constructor(options) { 
    *        super(options);
    *     }
    *
    *     use(elements) { 
    *        return elements.filter(el => el.isFavourite());
    *     }
    *  }
    * 
    * После применения фильтров, элементы кинотеатров на странице 
    * будут отсортированы в последовательности, в которой будут указанны
    * (после применения всех фильтров) в elements (результаты работы 
    * фильтров передаются каждому последующему в виде параметра elements)
    *  
    * @class
    * 
    */
   function BaseFilter(options) { 
      if (!options) options = {};

      this.on = (options.on !== undefined) ? options.on : true;
   }

   var fn = BaseFilter.prototype;

   /**
    * Выполняет фильтрацию переданных элементов
    * 
    * @param {TheaterElement[]} elements массив элементов для сортировки
    * 
    * @returns {TheaterElement[]} отсортированный массив
    * 
    * Все другие фильтры обязаны получать массив элементов 
    * и возвращать результат сортировки в виде 
    * отсортированного массива таких же элементов
    */
   fn.use = function (elements) {
      return elements.slice();
   }

   TheatersFilter.filters.BaseFilter = BaseFilter;
}(window));

// - - - Встроенные фильтры - - -

// - - - QueryFilter - - -
(function (global) {
   var BaseFilter = TheatersFilter.filters.BaseFilter;

   /**
    * Создает экземпляр фильтра по запросу
    * Фильтрует по названию кинотеатра и адрессу
    * 
    * Форматирует вхождения в элементах -
    * обрамляет вхождения элементом:
    * <span class="theater-filter-suggestion">
    * 
    * Сортирует отфильтрофанные элементы по весу вхождения 
    * (подробнее в методе fn._sort())
    * 
    * @param {object} options - объект параметров фильтра
    * Поля options (кроме тех, которые наследуются от BaseFilter):
    * 
    * @param {string} options.query - строка запроса для поиска
    * 
    * @class
    * 
    */
   function QueryFilter(options) {
      if (!options) options = {};

      BaseFilter.apply(this, arguments);

      this.query = options.query || '';
      this._results = [];
   }

   QueryFilter.prototype = Object.create(BaseFilter.prototype);
   QueryFilter.prototype.constructor = QueryFilter;

   var fn = QueryFilter.prototype;

   fn.use = function (elements) {
      if (!this.query) {
         return elements.slice();
      }

      this.query = this._correctString(this.query);
      this._results.length = 0;

      this._process(elements);      

      if (this._results.length === 0 && this._checkQueryIsTlanslit()) {
         this.query = this._correctString(convertTranslit(this.query));
         this._process(elements);
      }

      this._formatSuggestions();
      this._sort();
     
      return this._results.map(function (res) { 
         return res.el;
      });
   }

   fn._process = function (elements) { 
      elements.forEach(function (element) { 
         this._processElement(element);
      }.bind(this));
   }

   /**
    * Обрабатывает элемент
    * Если в нем найденны совпадения - добавлеет их в this._results
    * 
    * @param {TheaterElement} el обрабатываемый элемент
    */
   fn._processElement = function (el) { 
      var inName = this._getFirstSuggestion(el.name);
      var inAddress = this._getFirstSuggestion(el.address);

      if (inName === -1 && inAddress === -1) return;
      
      this._results.push({
         el: el,
         inName: inName,
         inAddress: inAddress,
         
         //Наперед вычесляем значение isFavourite, так как во время фильтрации
         //оно поменяться не может, но функция isFavourite работает 
         //через DOM, и количество ее вызовов должно быть минимальным
         _favourite: el.isFavourite(),
      });    
   }

   /**
    * Сортирует массив элементов, в которых найденны 
    * совпадения (this._results) по весу полей
    * 
    * Принцып сортировки:
    * 
    * 1) Приоритет полей: Избранные -> Имя -> Адрес.
    * 
    * Более подходящим считается поле, в котором 
    * первое вхождение находится ближе к началу
    */
   fn._sort = function () { 
      this._results.sort(function (a, b) { 

         //Если одинаковые, то ни на что не влияют
         if (a._favourite !== b._favourite) {
            if (a._favourite) return -1;
            else return 1;
         }

         var weightA = 0, weightB = 0; //Вес элементов

         //Если одинаковые, то ни на что не влияют
         if (a.inName !== b.inName) {
            if (this._isHeavier(a.inName, b.inName)) weightA += 100;
            else weightB += 100;
         }

         //Если одинаковые, то ни на что не влияют
         if (a.inAddress !== b.inAddress) {
            if (this._isHeavier(a.inAddress, b.inAddress)) weightA += 10;
            else weightB += 10;
         }

         return weightB - weightA;
      }.bind(this));
   }

   /**
    * (внутреняя функция - испльзуется при сортировки)
    * Проверяет, тяжелее ли число, a чем b
    * 
    * Меньшее число - всегда тяжелее. Если оно -1 - всегда легче
    * 
    * @param {number} a first number
    * @param {number} b second number
    */
   fn._isHeavier = function (a, b) {
      return (a !== -1) && (a < b || b === -1);
   }

   /**
    * Возвращает индекс первого вхождения запроса
    * 
    * @param {string} str провермяемая строка
    * @returns {number} 
    */
   fn._getFirstSuggestion = function (str) {
      return this._correctString(str).indexOf(this.query);
   }

   /**
    * Применяет формат к сопадениям
    */
   fn._formatSuggestions = function () { 
      this._results.forEach(function (res) { 
         var el = res.el;

         if (res.inName !== -1) {
            el.els.name.innerHTML = this._formatStr(el.name);
         }

         if (res.inAddress !== -1) {
            el.els.address.innerHTML = this._formatStr(el.address);
         }
      }.bind(this));
   }

   /**
    * Форматирует строку (обрамляет вхождения query span-ами)
    * 
    * @param {string} str форматируемая строка
    * 
    * @returns {string} форматированая строка
    */
   fn._formatStr = function (str) {
      return str.replace(
         new RegExp(escapeRegExp(this.query), 'ig'),
         '<span class="theater-filter-suggestion">$&</span>'
      );
   }

   /**
    * Корректирует запрос для правильной обработки
    */
   fn._correctString = function (str) { 
      return str.toLocaleLowerCase().trim();
   }

   fn._checkQueryIsTlanslit = function () {
      if (this.query.length > 50) return;

      var mathes = this.query.match(/[a-z\d\s\._\-@,()\/'\[\]:;%?!=+"*]+/i);
      return mathes && mathes[0] === this.query;
   }

   function escapeRegExp(string){
      return string.replace(/[.*@+?^${}()|[\]\\]/g, "\\$&");
   }

   var convertTranslit = (function () {
      function convertTranslit(str) { 
         return str.split('').map(function (char) { 
            return (char in map) ? map[char] : char;
         }).join('');
      }

      var map = {
         'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е', 'y': 'н',
         'u': 'г', 'i': 'ш', 'o': 'щ', 'p': 'з', '[': 'х', ']': 'ъ',
         'a': 'ф', 's': 'ы', 'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р',
         'j': 'о', 'k': 'л', 'l': 'д', ';': 'ж', '\'': 'э', 'z': 'я',
         'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и', 'n': 'т', 'm': 'ь',
         ',': 'б', '.': 'ю', 'Q': 'Й', 'W': 'Ц', 'E': 'У', 'R': 'К',
         'T': 'Е', 'Y': 'Н', 'U': 'Г', 'I': 'Ш', 'O': 'Щ', 'P': 'З',
         '[': 'Х', ']': 'Ъ', 'A': 'Ф', 'S': 'Ы', 'D': 'В', 'F': 'А',
         'G': 'П', 'H': 'Р', 'J': 'О', 'K': 'Л', 'L': 'Д', '\'': 'Э',
         'Z': '?', 'X': 'ч', 'C': 'С', 'V': 'М', 'B': 'И', 'N': 'Т',
         'M': 'Ь', ',': 'Б', '.': 'Ю', '?': ',', '/': '.', '@': '"',
     };

      return convertTranslit;
   }());

   TheatersFilter.filters.QueryFilter = QueryFilter;
}(window));

// - - - FavouritesFilter - - -
(function (global) {
   var BaseFilter = TheatersFilter.filters.BaseFilter;

   /**
    * Фильтрует кинотеатры по избранным
    * 
    * @param {object} options - объект параметров фильтра
    * Поля options (кроме тех, которые наследуются от BaseFilter):
    * 
    * @class
    * 
    */
   function FavouritesFilter(options) {
      if (!options) options = {};

      BaseFilter.apply(this, arguments);
   }

   FavouritesFilter.prototype = Object.create(BaseFilter.prototype);
   FavouritesFilter.prototype.constructor = FavouritesFilter;

   var fn = FavouritesFilter.prototype;

   fn.use = function (elements) { 
      return elements.filter(function (elem) { 
         return elem.isFavourite();
      });
   }

   TheatersFilter.filters.FavouritesFilter = FavouritesFilter;
}(window));