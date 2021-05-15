/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Coms2Component } from './coms2.component';

describe('Coms2Component', () => {
  let component: Coms2Component;
  let fixture: ComponentFixture<Coms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
