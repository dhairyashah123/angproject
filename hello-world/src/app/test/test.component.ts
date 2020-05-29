import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>


                Welcome {{name}}
              </h2>
              <div>
              <label for="uname">Username</label>
              <input [(ngModel)]="username" #uname type="text" id="uname" >
              <label for="pass">Password</label>
              <input [(ngModel)]="password" #pass type="password" id="pass" >
              <button (click)="login(uname.value,pass.value)" type="submit">Login</button>
            </div>
              <h2>{{2+2}}</h2>
              <h2>{{name.length}}
              <h2>{{greetUser()}}
              <h2>{{bind}}</h2>
              <h2 [class]=isclass>shah</h2>
              <h2 [class.text-danger]=hasError>shah</h2>
              <h2 [ngClass]="messageClasses">virkunj</h2>
              <input [id]=myid bind-disabled=isdisabled type="text" value="Dhairya">
              <button (click)=click()>submit </button>
              {{isclick}}
              <input #myInput type="text">
              <button (click)="logMessage(myInput.value)">log</button> 
              <input [(ngModel)]="firstname" type="text">
              {{firstname}}
              
              `,
  styles: [`
              .text-success
              {
                color:green
              }`]
})
export class TestComponent implements OnInit {
  public username='';
  public password='';
  public name="Dhairya"
  public bind=window.location.href;
  public myid="testid";
  public isdisabled=true;
  public isclass="text-success"
  public hasError=false;
  public isclick='';
  public uname='Dhairya'
  public pass='Shah'
  public styleClass=''
  public message;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError
  }
  
  login(uname,pass) {
    console.log(uname,pass)
    if(uname===this.uname && pass===this.pass)
    {
      this.styleClass="text-success"
      this.message = "Successfully Logged in"
    console.log("Login successfull");

    }
    else if(uname!==this.uname && pass==this.pass)
    {
      this.styleClass="text-danger"
      this.message = "Incorrect Username"
    console.log("Unsuccessful Login");

    }
    else if(uname==this.uname && pass!==this.pass)
    {
      this.styleClass="text-danger"
      this.message = "Incorrect Password"
    console.log("Unsuccessful Login");

    }
    else if(uname==this.uname && pass!==this.pass)
    {
      this.styleClass="text-danger"
      this.message = "Incorrect Password"
    console.log("Unsuccessful Login");

    }
   
  
    }
  
  // formSubmit()
  // {
  //   console.log(this.username);
  //   console.log(this.password);
  //   console.log('dhairya')
  // }
public firstname='';
  constructor() { }

  ngOnInit(): void {
  }
  greetUser()
  {
    return 'Hello ' + this.name;
  }
  click()
  {
    console.log('clicked')
    this.isclick="Welcome"
  }
  logMessage(value)
  {
    console.log(value)
  }
  loginDetails(value)
  {
    console.log(value)
  }

}
