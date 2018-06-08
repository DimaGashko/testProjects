import { Component } from '@angular/core';

export class Hero {
  id: number = 0;
  name: string = "Hidden";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'WindStorm',
  }
}
