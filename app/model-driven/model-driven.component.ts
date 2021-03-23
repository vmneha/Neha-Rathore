import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {
  //constructor(private formBuilder: FormBuilder) { }

  //userForm = this.formBuilder.group({
  //  name: ['', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]],
  //  email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
  //  mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
  // 

  //  address: this.formBuilder.group({
  //    city: ['', [Validators.required, Validators.pattern('^[a-z\\s]{15,25}$')]],
  //    state: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
  //    postal: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
  //  }),
  //})
  //  submitData() {
  //    console.log(this.userForm.value)
  //  }
  myAData = [];

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-z\\s]{5,15}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    gender: new FormControl('', [Validators.required]),

    address: new FormGroup({
      //city: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
      city: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
      state: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6,6}$')])
     
    }),
    isAccept: new FormControl('', [Validators.required])
  })
  

  submitData() {
   console.log(this.userForm.value)
    this.myAData.push(this.userForm.value)
  }
  }


