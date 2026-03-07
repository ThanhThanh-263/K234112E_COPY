import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: false,
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {
regForm: FormGroup = new FormGroup({
    name: new FormControl('Nam Anh'),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPass: new FormControl('')
  });

  setDefaultValues() {
    this.regForm.setValue({
      name: 'Huỳnh Giao',
      email: 'test@gmail.com',
      password: '',
      confirmPass: ''
    });
  }
}
