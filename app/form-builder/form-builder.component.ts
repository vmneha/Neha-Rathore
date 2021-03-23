import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent  {

  constructor(private formBuilder: FormBuilder) {

  }

  myBData = [];

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]],
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    //gender: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
      state: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6,6}$')])
    })
  })



  submitData() {
    console.log(this.userForm.value)
    this.myBData.push(this.userForm.value)
  }
  }

