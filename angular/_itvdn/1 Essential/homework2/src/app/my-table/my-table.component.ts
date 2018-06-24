import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';
import { Products } from '../products-db';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  products: Product[] = Products;

  @Input("rows")
  rowsString: string = '';

  get rows(): number {
    const rows = +this.rowsString;
    
    return (isNaN(rows) || rows === 0) ?
        0 : Math.abs(rows);
  }

  isEmpty() {
    console.log(typeof this.rows);
    return this.rows === 0 && this.products.length;
  }

  constructor() { }

  ngOnInit() {
  }

}
