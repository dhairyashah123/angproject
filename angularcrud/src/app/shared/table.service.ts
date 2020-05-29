import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Table} from '../table'

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private table:Table;
  private baseUri:string="http://localhost:5000";
  private headers=new HttpHeaders().set('Content-Type','application/json')

  constructor(private http:HttpClient) { }
  createTable(table:Table)
  {
    return this.http.post(this.baseUri +'/create',table,{headers:this.headers})
  }
  readTables()
  {
    return this.http.get(this.baseUri +'/read',{headers:this.headers})
  }
  updateTable(table:Table)
  {
    return this.http.put(this.baseUri +'/update',table,{headers:this.headers})
  }
  deleteTable(id:string)
  {
    return this.http.delete(this.baseUri +'/delete/'+id,{headers:this.headers})
  }
  setter(table:Table)
  {
this.table=table;
  }
  getter()
  {
    return this.table;
  }
  

}
