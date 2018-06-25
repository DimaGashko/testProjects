import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';
import { Products } from '../products-db';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  products: Product[] = Products;
  filterProducts: Product[] = [];

  @Input('rows')
  rowsString: string = '';

  @Input()
  selectGroup: string = '';

  @Output()
  changeMax = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.updateMax();
  }

  removeById(id: number) { 
    this.products = this.products.filter(item => item.id !== id);
    this.updateMax();
  }

  updateMax(): void {
    this.changeMax.emit(this.products.length);
  }

  get rows(): number {
    const rows = +this.rowsString;

    return (isNaN(rows) || rows === 0) ?
      0 : Math.abs(rows);
  }
  
  getVisibleProducts(): Product[] {
    return this.getProductsByGroup(this.selectGroup)
      .slice(0, this.rows);
  }

  getProductsByGroup(group: string): Product[] {
    if (this.selectGroup === 'all') {
      return this.products.slice();
    }

    return this.products
      .filter(item => item.group === group);
  }

  isEmpty(): boolean {
    return !!(this.rows === 0 && this.products.length);
  }

}
