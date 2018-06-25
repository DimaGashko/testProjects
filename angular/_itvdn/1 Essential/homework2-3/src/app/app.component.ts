import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  max: number = 5;
  rows: number = this.max;
  selectGroup: string = 'group1';

  setMax(max: number): void {
    this.max = max;
    this.correctRows();
  }

  correctRows(): void {
    if (this.rows > this.max) {
      this.rows = this.max;
    }
  
  }
  
}
