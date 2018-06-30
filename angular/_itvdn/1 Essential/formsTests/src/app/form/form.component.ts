import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  text: '';
  age: 18;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      text: new FormControl(this.text, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      age: new FormControl(this.age, [
        Validators.required,
        Validators.min(3),
        Validators.max(120)
      ]),
    });

    this.form.valueChanges
      .subscribe(data => this.onValueChange(data));
    
    this.onValueChange(  );
  }

  onValueChange(data?: object): void {
    
  }

  submit() {
    console.log('sumbit');
  }

}
