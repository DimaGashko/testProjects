import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpikerModule } from './spiker/spiker.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SpikerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
