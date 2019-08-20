import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph06Component } from './graph06.component';

describe('Graph06Component', () => {
  let component: Graph06Component;
  let fixture: ComponentFixture<Graph06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
