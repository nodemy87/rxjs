/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Coms1Component } from './coms1.component';

describe('Coms1Component', () => {
  let component: Coms1Component;
  let fixture: ComponentFixture<Coms1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coms1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
