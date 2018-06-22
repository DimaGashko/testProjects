import { Component } from "@angular/core";

import { Phrase } from '../phrase';

const PHRASES: Phrase[] = [
   { value: 'Hello World', language: 'English' },
   { value: 'Привет Мир', language: 'Russian' },
   { value: 'Привіт Світ', language: 'Ukrainian' },
   { value: 'Hola Mundo', language: 'Spanish' },
]

@Component({
   selector: 'app-hello-list',
   templateUrl: './hello-list.component.html',
   styleUrls: ['.//hello-list.component.css'],
})
export class HelloListComponent { 
   phrases: Phrase[] = PHRASES;
   selectedLang: string = '';

   onSelect(selected: Phrase) {
      this.selectedLang = selected.language;
   }
}