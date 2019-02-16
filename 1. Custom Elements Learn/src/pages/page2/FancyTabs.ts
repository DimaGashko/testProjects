export default class FancyTabs extends HTMLElement {
   private shadow: ShadowRoot = null;

   constructor() {
      super();

      this.initShadow();

      this.onclick = () => console.log('FancyTabs'); 
      
   }

   private initShadow() {
      this.shadow = this.attachShadow({ mode: 'open' });

      this.shadow.innerHTML = `
         <style>#tabs { }</style> 
         <div id="tabs">
            <slot id="tabsSlot" name="title"></slot> <!-- named slot -->
         </div>
         <div id="panels">
            <slot id="panelsSlot"></slot>
         </div>
      `;
   }
}

customElements.define('fancy-tabs', FancyTabs);