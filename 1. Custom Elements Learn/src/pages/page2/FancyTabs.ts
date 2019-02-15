export default class FancyTabs extends HTMLElement {
   private shadow: ShadowRoot = null;

   constructor() {
      super();

      this.initShadow();

      this.onclick = () => console.log('ASDF'); 
      
   }

   private initShadow() {
      this.shadow = this.attachShadow({ mode: 'open' });

      this.shadow.innerHTML = `
         <style>#tabs { }</style> <!-- styles are scoped to fancy-tabs! -->
         <div id="tabs">...</div>
         <div id="panels">...</div>
         <slot></slot>
      `;
   }
}

customElements.define('fancy-tabs', FancyTabs);