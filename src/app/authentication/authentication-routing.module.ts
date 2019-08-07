import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';

const AUTHENTICATION_ROUTES: Routes = [
  {path: '', component: AuthenticationComponent,
    children : [
      {path: '',
        component: LoginComponent,
        data: {title: 'LOGIN'},
      }
    ] }
];
@NgModule({
  imports: [ RouterModule.forChild(AUTHENTICATION_ROUTES) ],
  exports: [ RouterModule ]
})
export class AuthenticationRoutingModule { }
