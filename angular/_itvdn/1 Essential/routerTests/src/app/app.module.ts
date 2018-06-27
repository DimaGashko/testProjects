import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'info/:val',
        component: InfoComponent, 
      },
      { 
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
