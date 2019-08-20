import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph04Component } from './graph04.component';

describe('Graph04Component', () => {
  let component: Graph04Component;
  let fixture: ComponentFixture<Graph04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
