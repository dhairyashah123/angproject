import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tablearray',
  template:`<h2>
  {{name}}
  </h2>
  <h2>
  {{name |lowercase }}
  <h2>
  {{name |uppercase }}
  <h2>
  {{name |slice:3 }}
  </h2>
  <h2>
  {{name |slice:3:5}}
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <button (click)="fireEvent()">Click

  </button>
  ` ,
  styleUrls: ['./tablearray.component.css']
})
export class TablearrayComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent()
  {
    this.childEvent.emit('Hey child to parent')
  }

}
