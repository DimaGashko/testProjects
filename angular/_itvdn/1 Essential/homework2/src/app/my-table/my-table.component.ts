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

  removeById(id: number) { 
    this.products = this.products.filter(item => item.id !== id);
  }

  get rows(): number {
    const rows = +this.rowsString;

    return (isNaN(rows) || rows === 0) ?
      0 : Math.abs(rows);
  }

  getVisibleProducts(): Product[] {
    return this.products.slice(0, this.rows);
  }

  isEmpty(): boolean {
    return !!(this.rows === 0 && this.products.length);
  }

  constructor() { }

  ngOnInit() {
  }

}
