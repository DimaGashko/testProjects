import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   providers: [], 
   imports: [BrowserModule],
   bootstrap: [AppComponent]
})
export class AppModule { }