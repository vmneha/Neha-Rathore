import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.css']
})
export class TempDrivenFormComponent {

 
  submitData(formData: any) {
    console.log(formData)
  }

}
