import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclassComponent } from './addclass.component';

describe('AddclassComponent', () => {
  let component: AddclassComponent;
  let fixture: ComponentFixture<AddclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
