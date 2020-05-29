import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {TableComponent} from './table/table.component';
 import { LoginComponent } from './login/login.component';
 import {EmployeeDetailComponent} from './employee-detail/employee-detail.component'
 import {EmployeeListComponent} from './employee-list/employee-list.component'
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
     LoginComponent,
     TableComponent,
     EmployeeDetailComponent,
     EmployeeListComponent
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
