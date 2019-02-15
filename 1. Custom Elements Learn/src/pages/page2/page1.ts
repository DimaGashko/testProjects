import '../_templates/basePage/basePage';
import './page1.sass';

const tmpl = <HTMLTemplateElement>document.querySelector('#x-foo-from-template');

customElements.define('x-foo-shadow-dom', class extends HTMLElement {
   constructor() {
      super();

      let shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
   }

});



class AppDrawer extends HTMLElement {
   public get disabled(): boolean {
      return this.hasAttribute('disabled');
   }

   public set disabled(val: boolean) {
      if (val) {
         this.setAttribute('disabled', '');

      } else {
         this.removeAttribute('disabled');

      }

   }

   constructor() {
      super();

      this.init();
   }

   private init() {
      this.initEvent();
   }

   private initEvent() {
      this.addEventListener('click', () => {
         this.sayHello();
      });
   }

   private sayHello() {
      if (this.disabled) return;

      console.log("Hello, I'm a AppDrawer");

   }

}



window.customElements.define('app-drawer', AppDrawer);