import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
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
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
