import { Component, OnInit } from '@angular/core';
import {TableService} from '../../shared/table.service'
import {Table} from '../../table'
import {Router} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public tables:Table[];

  constructor(private _tableService:TableService,private router:Router) { }

  ngOnInit(): void {
    this.readTables();
  }
  readTables()
  {
    this._tableService.readTables().subscribe(
      data=>
      {
        console.log(data);
        this.tables=data['msg']
      },
      error=>
      {
        console.log(error)
      }
      
    )
  }
  doUpdate(table)
  {
this._tableService.setter(table);
this.router.navigate(['/createUpdate'])
  }
  doDelete(table)
  {
    if(confirm("Are you sure to delete ")) {
        this._tableService.deleteTable(table._id).subscribe(data=>{
      this.tables.splice(this.tables.indexOf(table),1)
    })}
  }

 }
// this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
//     .then((confirmed) => console.log('User confirmed:', confirmed))
//     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));