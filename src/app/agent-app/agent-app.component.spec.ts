/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgentAppComponent } from './agent-app.component';

describe('AgentAppComponent', () => {
  let component: AgentAppComponent;
  let fixture: ComponentFixture<AgentAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
