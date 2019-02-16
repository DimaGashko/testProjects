import * as templateStr from './template.pug';

const template = document.createElement('template');
template.innerHTML = templateStr;
 
export default class HowtoCheckbox extends HTMLElement {
   private template = template;

   private KEYCODE = {
      space: 32,
   }

   constructor() {
      super();

      console.log(this.template);
      
   }

   static get observedAttributes() {
      return ['checked', 'disabled'];
   }
}

customElements.define('howto-checkbox', HowtoCheckbox); 