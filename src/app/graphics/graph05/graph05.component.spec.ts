import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph05Component } from './graph05.component';

describe('Graph05Component', () => {
  let component: Graph05Component;
  let fixture: ComponentFixture<Graph05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
