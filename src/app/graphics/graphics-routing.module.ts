import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServerGuard} from '../guard/server.guard';
import {GraphicsComponent} from './graphics.component';
import {TestComponent} from './test/test.component';

const GRAPHICS_ROUTES: Routes = [
  {
    path: '', component: GraphicsComponent,
    children : [
      { path: '',
        data: {title: 'TEST' },
        component: TestComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(GRAPHICS_ROUTES)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
