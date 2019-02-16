import CustomElement from "../../../../components/CustomElement/CustomElement";

@CustomElement({
   selector: 'x-menu',
   template: require('./menu-component.pug'),
   style: require('./menu-component.string.sass'),
   useShadow: true,
})
export default class AppComponent extends HTMLElement {
   constructor() { 
      super();

   }
}