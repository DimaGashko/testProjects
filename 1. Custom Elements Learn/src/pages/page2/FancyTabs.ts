export default class FancyTabs extends HTMLElement {
   private shadow: ShadowRoot = null;

   constructor() {
      super();

      this.initShadow();

      this.onclick = () => console.log('FancyTabs');
      
   }

   selectTab() {
      const tabs = this.shadowRoot.querySelector('#tabs');
      tabs.dispatchEvent(new Event('tab-select', {bubbles: true, composed: true}));
    }

   private initShadow() {
      this.shadow = this.attachShadow({ mode: 'open' });

      this.shadow.innerHTML = `
      <style>
        #panels {
          box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
          background: white;
          border-radius: 3px;
          padding: 16px;
          height: 250px;
          overflow: auto;
        }
        #tabs {
          display: inline-flex;
          -webkit-user-select: none;
          user-select: none;
        }
        #tabsSlot::slotted(*) {
          font: 400 16px/22px 'Roboto';
          padding: 16px 8px;
          ...
        }
        #tabsSlot::slotted([aria-selected="true"]) {
          font-weight: 600;
          background: white;
          box-shadow: none;
        }
        #panelsSlot::slotted([aria-hidden="true"]) {
          display: none;
        }
      </style>
      <div id="tabs">
        <slot id="tabsSlot" name="title"></slot>
      </div>
      <div id="panels">
        <slot id="panelsSlot"></slot>
      </div>
    `;
   }
}

customElements.define('fancy-tabs', FancyTabs);