import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpikerComponent } from './spiker.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpikerComponent, HelloComponent],
  exports: [SpikerComponent]
})
export class SpikerModule { }
