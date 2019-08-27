import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphicsComponent } from './graphics.component';
import { Graph01Component } from './graph01/graph01.component';
// import { Graph02Component } from './graph02/graph02.component';
// import { Graph03Component } from './graph03/graph03.component';
// import { Graph04Component } from './graph04/graph04.component';
// import {Graph05Component} from './graph05/graph05.component';
// import {Graph06Component} from './graph06/graph06.component';

const GRAPHICS_ROUTES: Routes = [
  {
    path: '', component: GraphicsComponent,
    children : [
      { path: 'graph01',
        data: { title: 'GRAPH 01' },
        component: Graph01Component,
      }/*,
      { path: 'graph02',
        data: { title: 'GRAPH 02' },
        component: Graph02Component,
      },
      { path: 'graph03',
        data: { title: 'GRAPH 03' },
        component: Graph03Component,
      },
      { path: 'graph04',
        data: { title: 'GRAPH 04' },
        component: Graph04Component,
      },
      { path: 'graph05',
        data: { title: 'GRAPH 05' },
        component: Graph05Component,
      },
      { path: 'graph06',
        data: { title: 'GRAPH 06' },
        component: Graph06Component,
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(GRAPHICS_ROUTES)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
