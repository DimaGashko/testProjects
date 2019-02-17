interface CustomElementConfig {
   selector: string;
   template?: string;
   style?: string;
   useShadow?: boolean;
}

export default function CustomElement(config: CustomElementConfig) {
   config.useShadow = config.useShadow || true;
   config.template = config.template || '';

   if (config.style) {
      config.template = `<style>${config.style}</style> ${config.template}`;
   }

   const template = document.createElement('template');
   template.innerHTML = config.template;

   return function (cls: any) {
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