import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output()
  onAdd = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  submitTrigger(event: Event) {
    event.preventDefault();

    const form = event.target as any;

    this.add({
      name: form.name.value,
      price: form.price.value,
      group: form.group.value,
    });

    form.reset();
  }

  add(config: Object): void {
    this.onAdd.emit(config);
  }

}
