import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph03Component } from './graph03.component';

describe('Graph03Component', () => {
  let component: Graph03Component;
  let fixture: ComponentFixture<Graph03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
