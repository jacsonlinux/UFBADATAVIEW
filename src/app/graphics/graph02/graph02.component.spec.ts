import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph02Component } from './graph02.component';

describe('Graph02Component', () => {
  let component: Graph02Component;
  let fixture: ComponentFixture<Graph02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
