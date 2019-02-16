import CustomElement from "../../../../components/CustomElement/CustomElement";

@CustomElement({
   selector: 'x-app',
   template: require('./app-component.pug'),
   style: require('./app-component.sass'),
   useShadow: true,
})
class AppComponent extends HTMLElement {
   constructor() { 
      super();

   }
}