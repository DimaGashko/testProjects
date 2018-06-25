import { Injectable } from '@angular/core';

import { Product } from './product';
import { products } from './products-db';

@Injectable()
export class ProductsService {
  private products: Product[] = products;

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  add(config): void {
    this.products.push({
      id: this.products[this.products.length - 1].id + 1,
      name: config.name,
      price: config.price,
      group: config.group,
    });
  }

  removeById(id: number): void { 
    this.products = this.products.filter(item => item.id !== id);
  }
}
