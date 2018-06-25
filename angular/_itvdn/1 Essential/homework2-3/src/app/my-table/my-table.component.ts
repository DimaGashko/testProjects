import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  get products(): Product[] {
    return this.productsService.getProducts();
  }

  @Input('rows') rowsString: string = '';
  @Input() selectGroup: string = ''; 

  @Output() changeMax = new EventEmitter<number>();

  constructor(private productsService: ProductsService) { 

  }

  ngOnInit() {
    this.updateMax();
  }

  add(config): void {
    this.productsService.add(config);
    this.updateMax();
  }

  removeById(id: number): void { 
    this.productsService.removeById(id);
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
