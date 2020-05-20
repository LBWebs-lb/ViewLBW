import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesUpdateComponent } from './acces-update.component';

describe('AccesUpdateComponent', () => {
  let component: AccesUpdateComponent;
  let fixture: ComponentFixture<AccesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
