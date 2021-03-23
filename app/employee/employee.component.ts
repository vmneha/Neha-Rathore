import { Component } from '@angular/core';
import { EmployeeService } from '../empService/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  //searchText: string = '';
  employees = [];
  empErrorMsg: any = '';
  //SortbyParam: string = '';



  constructor(private employeeService: EmployeeService) { }



  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      success => this.employees = success,
      error => this.empErrorMsg = error
    )
  } 

}
