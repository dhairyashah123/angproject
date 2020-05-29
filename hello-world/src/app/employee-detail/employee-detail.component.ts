import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template:`<h2>
  </h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}</li>
  <li>{{employee.name}}</li>
  <li>{{employee.age}}</li>
  </ul>` ,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees=[{
    "name":"dhairya"
  }]

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
                        .subscribe(data=>this.employees=data)
  }
}
