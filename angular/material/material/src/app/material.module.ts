import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule } from '@angular/material';

const elements = [
   MatButtonModule,
   MatToolbarModule,
]

@NgModule({
   imports: [
      CommonModule,
   ].concat(elements),
   
   exports: [
      MatButtonModule,
   ].concat(elements),
})
export class MaterialModule {}