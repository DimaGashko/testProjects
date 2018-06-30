import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class FormErrorMes {
  constructor(
    public name: string = '',
    public mes: string = ''
  ) { }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data = {
    text: 'text',
    age: 3,
  }

  form: FormGroup;

  formErrors: FormErrorMes[] = [
    new FormErrorMes('text', ''),
    new FormErrorMes('age', ''),
  ];

  errMes = {
    text: {
      required: 'Field is required',
      minlength: 'Minlength: 3',
      maxlength: 'Maxlength: 30',
    },
    age: {
      required: 'Field is required',
      min: 'Min: 3',
      max: 'Max: 120',
    }
  }

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      text: new FormControl(this.data.text, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      age: new FormControl(this.data.age, [
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
    this.formErrors.forEach((error: FormErrorMes) => {
      error.mes = '';

      const control = this.form.get(error.name);

      if (!control || control.pristine || control.valid) {
        return;
      }

      console.log(control.errors);

    });
  }

  submit() {
    console.log('sumbit');
  }

}
