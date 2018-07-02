import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule , MatFormFieldModule} from '@angular/material';

const elements: any[] = [
   MatButtonModule,
   MatToolbarModule,
   MatInputModule,
   MatProgressSpinnerModule,
   MatCardModule,
   MatFormFieldModule
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