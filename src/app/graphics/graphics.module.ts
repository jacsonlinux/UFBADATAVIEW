import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { GraphicsComponent } from './graphics.component';
import { TestComponent } from './test/test.component';
import {MzInputModule, MzProgressModule} from 'ngx-materialize';

@NgModule({
  declarations: [GraphicsComponent, TestComponent],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    MzInputModule,
    MzProgressModule
  ]
})
export class GraphicsModule { }
