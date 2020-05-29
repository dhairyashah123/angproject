import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablearrayComponent } from './tablearray.component';

describe('TablearrayComponent', () => {
  let component: TablearrayComponent;
  let fixture: ComponentFixture<TablearrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablearrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablearrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
