import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';

import { routs } from './lists.routs';

 
@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
