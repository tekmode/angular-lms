import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclassesComponent } from './viewclasses.component';

describe('ViewclassesComponent', () => {
  let component: ViewclassesComponent;
  let fixture: ComponentFixture<ViewclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
