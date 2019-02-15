import '../_templates/basePage/basePage';
import './page1.sass';

// See https://html.spec.whatwg.org/multipage/indices.html#element-interfaces
// for the list of other DOM interfaces.
class FancyButton extends HTMLButtonElement {
   constructor() {
      super(); // always call super() first in the constructor.
      this.addEventListener('click', e => this.drawRipple(e.offsetX, e.offsetY));
   }

   // Material design ripple animation.
   drawRipple(x: number, y: number) {
      let div = document.createElement('div');
      div.classList.add('ripple');
      this.appendChild(div);
      div.style.top = `${y - div.clientHeight / 2}px`;
      div.style.left = `${x - div.clientWidth / 2}px`;
      div.style.backgroundColor = 'currentColor';
      div.classList.add('run');
      div.addEventListener('transitionend', e => div.remove());
      
   }
}

customElements.define('fancy-button', FancyButton, { extends: 'button' });


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