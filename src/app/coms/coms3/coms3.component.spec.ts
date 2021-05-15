/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Coms3Component } from './coms3.component';

describe('Coms3Component', () => {
  let component: Coms3Component;
  let fixture: ComponentFixture<Coms3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coms3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coms3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
