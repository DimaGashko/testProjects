import * as templateStr from './template.pug';
import * as style from './style.tmplsass';
console.log(style[0][1]); 
const template = document.createElement('template');
template.innerHTML = `<style>${style[0][1]}</style>${templateStr}`;

export default class HowtoCheckbox extends HTMLElement {
   private template = template;

   private KEYCODE = {
      space: 32,
   }

   constructor() {
      super();

      this.init();
   }

   public connectedCallback() {
      this.initAttrs();

   }

   public disconnectedCallback() {
      this.removeEventListener('keyup', this._onKeyUp);
      this.removeEventListener('click', this._onClick);
   }

   public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      const hasValue = (newValue !== null);

      switch (name) {
         case 'checked':
            this.setAttribute('aria-checked', hasValue + '');
            break;

         case 'disabled':
            this.setAttribute('aria-disabled', hasValue + '');
            if (hasValue) {
               this.removeAttribute('tabindex');
               this.blur();

            } else {
               this.setAttribute('tabindex', '0');
            }

            break;
      }
   }

   private _onKeyUp(event: KeyboardEvent) {
      if (event.altKey) return;

      switch (event.keyCode) {
         case this.KEYCODE.space:
            event.preventDefault();
            this._toggleChecked();
            break;

         default: return;
      }
   }

   private _onClick(event: MouseEvent) {
      this._toggleChecked();
   }

   private _toggleChecked() {
      if (this.disabled) return;

      this.checked = !this.checked;

      this.dispatchEvent(new CustomEvent('change', {
         detail: {
            checked: this.checked,
         },
         bubbles: true,
      }));
   }

   private init() {
      this.initShadow();
   }

   private initShadow() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
   }

   private initAttrs() {
      if (!this.hasAttribute('role')) {
         this.setAttribute('role', 'checkbox');
      }

      if (!this.hasAttribute('tabindex')) {
         this.setAttribute('tabindex', '0');
      }
   }

   private upgradeProperty(prop: string) {
      if (!this.hasOwnProperty(prop)) return;

      let value = (<any>this)[prop];
      delete (<any>this)[prop];
      (<any>this)[prop] = value;
   }

   set checked(value: boolean) {
      (value) ?
         this.setAttribute('checked', '') :
         this.removeAttribute('checked');
   }

   get checked() {
      return this.hasAttribute('checked');
   }

   set disabled(value: boolean) {
      (value) ?
         this.setAttribute('disabled', '') :
         this.removeAttribute('disabled');
   }

   get disabled() {
      return this.hasAttribute('disabled');
   }

   static get observedAttributes() {
      return ['checked', 'disabled'];
   }
}

customElements.define('howto-checkbox', HowtoCheckbox); 