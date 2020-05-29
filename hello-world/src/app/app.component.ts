import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style='text-align: center;'>
  <h1>
    welcome to {{ message }}!
  </h1>
  <app-employee-detail></app-employee-detail>
  <app-employee-list></app-employee-list>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hello-world';
  public name="Dhairya";
  public message='';
}


// <app-test></app-test> 
//    <app-login></app-login> 
   
//   <app-tablearray (childEvent)="message=$event" [parentData]="name"></app-tablearray>
