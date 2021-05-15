import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeobservableComponent } from './customeobservable.component';

describe('CustomeobservableComponent', () => {
  let component: CustomeobservableComponent;
  let fixture: ComponentFixture<CustomeobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeobservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
