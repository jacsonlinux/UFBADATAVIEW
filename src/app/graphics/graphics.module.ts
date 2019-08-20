import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { GraphicsComponent } from './graphics.component';
import { Graph01Component } from './graph01/graph01.component';
import { Graph02Component } from './graph02/graph02.component';
import { Graph03Component } from './graph03/graph03.component';
import { Graph04Component } from './graph04/graph04.component';
import {MzButtonModule, MzNavbarModule} from 'ngx-materialize';
import { Graph05Component } from './graph05/graph05.component';
import { Graph06Component } from './graph06/graph06.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    GraphicsComponent,
    Graph01Component,
    Graph02Component,
    Graph03Component,
    Graph04Component,
    Graph05Component,
    Graph06Component
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    MzButtonModule,
    MzNavbarModule,
    HttpClientModule
  ]
})
export class GraphicsModule { }
