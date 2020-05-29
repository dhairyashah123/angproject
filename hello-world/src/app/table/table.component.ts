import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `<h1>Welcome</h1>
  <table class="table">
      <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Contact</th>
      </tr>
      <tr *ngFor="let table of colors; let i = index">
          <td>{{i + 1}}</td>
          <td>{{table.name}}</td>
          <td>{{table.age}}</td>
          <td>{{table.contact}}</td>
      </tr>
  </table>
  `,
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public colors=[{
    name : "Dhairya",
    age: " 21",
    contact : "9429020011"
},
{
    name : "Meet",
    age: " 21",
    contact : "1234567890"
},
{
    name : "Brijesh",
    age: "21",
    contact : "2112345678"
},
{
    name : "Mayur",
    age: "22",
    contact : "9087654321"
}]




  constructor() { }

  ngOnInit(): void {
  }

}
