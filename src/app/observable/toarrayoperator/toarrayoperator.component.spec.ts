import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToarrayoperatorComponent } from './toarrayoperator.component';

describe('ToarrayoperatorComponent', () => {
  let component: ToarrayoperatorComponent;
  let fixture: ComponentFixture<ToarrayoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToarrayoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToarrayoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
