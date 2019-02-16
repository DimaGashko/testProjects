import CustomElement from "../../../../components/CustomElement/CustomElement";

@CustomElement({
   selector: 'x-menu',
   template: require('./menu-component.pug'),
   style: require('./menu-component.string.sass'),
   useShadow: true,
})
export default class MenuComponent extends HTMLElement {
   constructor() { 
      super();

      this.addEventListener('click', () => {
         console.log('menu-component');
      });
   }
}