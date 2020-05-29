import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TableService} from '../../shared/table.service'
import {Table} from '../../table'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private tableService:TableService) { }

  ngOnInit(): void {
  }
newTable(event:any)
{
  event.preventDefault();
  this.tableService.setter(new Table());
  this.router.navigate(['/createUpdate'])
}
}
