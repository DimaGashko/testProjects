import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  remove: EventEmitter<number> = new EventEmitter();

  constructor() { }

  emitRemove() { 
    this.remove.emit(this.product.id);
  }

  ngOnInit() {
  }

}
