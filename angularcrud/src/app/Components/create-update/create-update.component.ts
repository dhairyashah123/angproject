import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TableService} from '../../shared/table.service'
import {Table} from '../../table'

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  public table:Table

  constructor(private router:Router,private tableService:TableService) { }

  ngOnInit(): void {
    this.table=this.tableService.getter();
  }
  createUpdate()
  {
    if(this.table._id===undefined)
    {
    this.tableService.createTable(this.table).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/'])

    },
    error=>{
      console.log(error);
      
    })
  }
  else{
    this.tableService.updateTable(this.table).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/'])

    },
    error=>{
      console.log(error);
      
    })

  }

  }

}
