import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteachersComponent } from './viewteachers.component';

describe('ViewteachersComponent', () => {
  let component: ViewteachersComponent;
  let fixture: ComponentFixture<ViewteachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
