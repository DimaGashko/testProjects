import CustomElement from "../../../../components/CustomElement/CustomElement";

@CustomElement({
   selector: 'x-app',
   template: require('./app-component.pug'),
   style: require('./app-component.string.sass'),
   useShadow: true,
})
export default class AppComponent extends HTMLElement {
   constructor() { 
      super();

   }
}