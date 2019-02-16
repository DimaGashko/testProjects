interface CustomElementConfig {
   selector: string;
   template: string;
   style?: string;
   useShadow?: boolean;
}

export default function CustomElement(config: CustomElementConfig) {
   return function (cls: ClassDecorator) {
      const template = document.createElement('template');

      if (config.style) {
         config.template = `<style>${config.style}</style> ${config.template}`;
      }

      template.innerHTML = config.template;

      const connectedCallback = cls.prototype
         .connectedCallback || function () { };

      cls.prototype.connectedCallback = function () {
         const cloneTmpl = template.content.cloneNode(true);

         if (config.useShadow) {
            this.attachShadow({ mode: 'open' }).appendChild(cloneTmpl);
            
         } else {
            this.appendChild(cloneTmpl);
         }

         connectedCallback.call(this);
      }
      
      window.customElements.define(config.selector, cls);
   }
}