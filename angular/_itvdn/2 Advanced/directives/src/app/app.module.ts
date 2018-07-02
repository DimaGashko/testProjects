import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { EventDirective } from './event.directive';
import { PrefixDirective } from './prefix.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    EventDirective,
    PrefixDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
