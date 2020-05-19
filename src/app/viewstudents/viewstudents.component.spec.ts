import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentsComponent } from './viewstudents.component';

describe('ViewstudentsComponent', () => {
  let component: ViewstudentsComponent;
  let fixture: ComponentFixture<ViewstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
