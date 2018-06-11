import { Component } from "@angular/core";

@Component({
   selector: 'app-root',
   template: 'ff'//'<h1>{{appName}} - {{appDescription}}</h1>'
   //templateUrl: './app.component.html',
   //styleUrls: ['./app.component.css']
})
export class AppComponent {
   appName: string = 'NgTodo';
   appDescription: string = 'Todo List On Angular';
}